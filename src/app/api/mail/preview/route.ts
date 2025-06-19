import { NextResponse } from "next/server";
import welcomeTemplate from "@/mail/templates/welcomeTemplate";
import fs from "fs/promises";
import path from "path";

export async function GET() {
  // Ensure this route is only accessible in development
  if (process.env.NODE_ENV !== "development") {
    return new NextResponse("Not found", { status: 404 });
  }

  try {
    const imageDetails = {
      logo: "midjournal-logo-black.png",
      x: "x.png",
      tiktok: "tiktok.png",
      linkedin: "linkedin.png",
      instagram: "instagram.png",
      facebook: "facebook.png",
    };

    const imageSources: { [key: string]: string } = {};

    for (const key in imageDetails) {
      const fileName = imageDetails[key as keyof typeof imageDetails];
      const filePath = path.join(process.cwd(), "public", fileName);
      const file = await fs.readFile(filePath);
      const ext = path.extname(fileName).substring(1);
      imageSources[key] = `data:image/${ext};base64,${file.toString("base64")}`;
    }

    const html = welcomeTemplate({
      name: "User Name",
      confirmationLink: "#",
      images: imageSources,
    });

    return new NextResponse(html, {
      headers: {
        "Content-Type": "text/html; charset=utf-8",
      },
    });
  } catch (error) {
    console.error("Email Preview Error:", error);
    return new NextResponse("Error creating email preview.", { status: 500 });
  }
}
