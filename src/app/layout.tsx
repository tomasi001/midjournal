import type { Metadata } from "next";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Footer, Header } from "@/components";
import { Toaster } from "@/components/ui/sonner";
import { manrope, bespokeSans } from "./fonts";

export const metadata: Metadata = {
  metadataBase: new URL("https://midjournal.me"),
  title: "Midjournal - SEE HOW YOU FEEL🪞",
  description:
    "Go deep, understand yourself better, level up how you engage with the world.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Midjournal - SEE HOW YOU FEEL🪞",
    description:
      "Go deep, understand yourself better, level up how you engage with the world.",
    url: "/",
    siteName: "Midjournal",
    images: [
      {
        url: "/hero-image-desktop.png",
        width: 1200,
        height: 630,
        alt: "A preview image for Midjournal",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Midjournal - SEE HOW YOU FEEL🪞",
    description:
      "Go deep, understand yourself better, level up how you engage with the world.",
    images: ["/hero-image-desktop.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn(manrope.variable, bespokeSans.variable, "antialiased")}
    >
      <body>
        <main className="bg-white flex flex-row justify-center w-screen">
          <div className="bg-white w-screen relative">
            <Header />
            {children}
          </div>
        </main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
