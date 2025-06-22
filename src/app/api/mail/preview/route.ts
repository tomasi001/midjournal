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
      logo_black: "midjournal-logo-black.png",
      logo_white: "midjournal-logo-white.png",
      x_black: "x-black.png",
      x_white: "x-white.png",
      tiktok_black: "tiktok-black.png",
      tiktok_white: "tiktok-white.png",
      linkedin_black: "linkedin-black.png",
      linkedin_white: "linkedin-white.png",
      instagram_black: "instagram-black.png",
      instagram_white: "instagram-white.png",
      facebook_black: "facebook-black.png",
      facebook_white: "facebook-white.png",
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
