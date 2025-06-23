import { NextRequest, NextResponse } from "next/server";
import { GoogleSpreadsheet } from "google-spreadsheet";
import { JWT } from "google-auth-library";
import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";

const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL!,
  token: process.env.UPSTASH_REDIS_REST_TOKEN!,
});

const ratelimit = new Ratelimit({
  redis,
  limiter: Ratelimit.slidingWindow(5, "10 s"),
  analytics: true,
  prefix: "@upstash/ratelimit",
});

const serviceAccountAuth = new JWT({
  email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
  key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
  scopes: ["https://www.googleapis.com/auth/spreadsheets"],
});

const doc = new GoogleSpreadsheet(
  process.env.GOOGLE_SHEET_ID!,
  serviceAccountAuth
);

const addToUnsubscribeSheet = async (
  email: string,
  ip: string,
  userAgent: string
) => {
  try {
    await doc.loadInfo(); // loads document properties and worksheets
    let sheet = doc.sheetsByTitle["Unsubscribed"]; // or use doc.sheetsById[id]

    if (!sheet) {
      sheet = await doc.addSheet({
        title: "Unsubscribed",
        headerValues: ["Email", "Timestamp", "IPAddress", "UserAgent"],
      });
    }

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
  const ip = req.headers.get("x-forwarded-for") ?? "127.0.0.1";
  const { success } = await ratelimit.limit(ip);

  if (!success) {
    return NextResponse.json(
      { message: "Too many requests. Please try again later." },
      { status: 429 }
    );
  }

  try {
    const { email } = await req.json();
    const userAgent = req.headers.get("user-agent") || "Unknown";

    if (!email) {
      return NextResponse.json(
        { message: "Email is required" },
        { status: 400 }
      );
    }

    const sheetResult = await addToUnsubscribeSheet(email, ip, userAgent);

    if (sheetResult === "duplicate") {
      return NextResponse.json(
        { message: "This email has already been unsubscribed." },
        { status: 409 }
      );
    }

    if (sheetResult === "error") {
      return NextResponse.json(
        { message: "Could not unsubscribe email." },
        { status: 500 }
      );
    }

    return NextResponse.json({ message: "Successfully unsubscribed!" });
  } catch (error) {
    console.error("API Error:", error);
    return NextResponse.json({ message: "An error occurred" }, { status: 500 });
  }
}
