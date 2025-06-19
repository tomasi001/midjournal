import { NextRequest, NextResponse } from "next/server";
import path from "path";
import { MailOptions, sendMail } from "@/mail";
import welcomeTemplate from "@/mail/templates/welcomeTemplate";

export async function POST(req: NextRequest) {
  try {
    const { email } = await req.json();

    if (!email) {
      return NextResponse.json(
        { message: "Email is required" },
        { status: 400 }
      );
    }

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
      return NextResponse.json(
        { message: "Failed to send email" },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error("API Error:", error);
    return NextResponse.json({ message: "An error occurred" }, { status: 500 });
  }
}
