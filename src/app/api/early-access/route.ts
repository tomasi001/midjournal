import { NextRequest, NextResponse } from "next/server";
import path from "path";
import { GoogleSpreadsheet } from "google-spreadsheet";
import { JWT } from "google-auth-library";
import { MailOptions, sendMail } from "@/mail";
import welcomeTemplate from "@/mail/templates/welcomeTemplate";

const serviceAccountAuth = new JWT({
  email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
  key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
  scopes: ["https://www.googleapis.com/auth/spreadsheets"],
});

const doc = new GoogleSpreadsheet(
  process.env.GOOGLE_SHEET_ID!,
  serviceAccountAuth
);

const appendToSheet = async (email: string, ip: string, userAgent: string) => {
  try {
    await doc.loadInfo(); // loads document properties and worksheets
    const sheet = doc.sheetsByTitle["Sheet1"]; // or use doc.sheetsById[id]

    if (!sheet) {
      // Throw a specific error if the sheet is not found
      throw new Error(
        'Failed to find a sheet with the title "Sheet1". Please check the sheet name and permissions.'
      );
    }

    await sheet.setHeaderRow(["Email", "Timestamp", "IPAddress", "UserAgent"]);

    // Check for duplicates
    const rows = await sheet.getRows();
    const emailExists = rows.some((row) => row.get("Email") === email);
    if (emailExists) {
      return "duplicate";
    }

    await sheet.addRow({
      Email: email,
      Timestamp: new Date().toISOString(),
      IPAddress: ip,
      UserAgent: userAgent,
    });
    return "success";
  } catch (error) {
    console.error("Error appending to Google Sheet:", error);
    return "error";
  }
};

export async function POST(req: NextRequest) {
  try {
    const { email } = await req.json();
    const ip = req.headers.get("x-forwarded-for") ?? "Unknown";
    const userAgent = req.headers.get("user-agent") || "Unknown";

    if (!email) {
      return NextResponse.json(
        { message: "Email is required" },
        { status: 400 }
      );
    }

    const sheetResult = await appendToSheet(email, ip, userAgent);

    if (sheetResult === "duplicate") {
      return NextResponse.json(
        { message: "This email has already been registered." },
        { status: 409 }
      );
    }

    if (sheetResult === "error") {
      return NextResponse.json(
        { message: "Could not save email to waitlist." },
        { status: 500 }
      );
    }

    // Then, send the welcome email
    const imageDetails = {
      logo: "midjournal-logo-black.png",
      x: "x.png",
      tiktok: "tiktok.png",
      linkedin: "linkedin.png",
      instagram: "instagram.png",
      facebook: "facebook.png",
    };

    const attachments = Object.entries(imageDetails).map(([key, fileName]) => ({
      filename: fileName,
      path: path.join(process.cwd(), "public", fileName),
      cid: key,
    }));

    const html = welcomeTemplate({
      name: email,
      confirmationLink:
        process.env.NEXT_PUBLIC_APP_URL || "https://midjournal.com",
      images: {},
    });

    const mailOptions: MailOptions = {
      to: email,
      subject: "Welcome to Midjournal!",
      html,
      attachments,
      successMessage: `Successfully sent welcome email to ${email}`,
      errorMessage: "Failed to send welcome email",
    };

    const emailSent = await sendMail(mailOptions);

    if (emailSent) {
      return NextResponse.json({ message: "Successfully joined waitlist!" });
    } else {
      // If the email fails, we might want to log this but not necessarily fail the whole request,
      // since their email was already captured.
      return NextResponse.json({
        message:
          "Successfully joined waitlist, but failed to send welcome email.",
      });
    }
  } catch (error) {
    console.error("API Error:", error);
    return NextResponse.json({ message: "An error occurred" }, { status: 500 });
  }
}
