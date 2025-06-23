import type { Metadata } from "next";
import { Public_Sans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Footer, Header } from "@/components";
import { Toaster } from "@/components/ui/sonner";

const publicSans = Public_Sans({
  subsets: ["latin"],
  variable: "--font-public-sans",
});

export const metadata: Metadata = {
  title: "Midjournal",
  description: "Your journaling companion",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(publicSans.variable, "antialiased")}>
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
