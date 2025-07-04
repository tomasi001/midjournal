import type { Metadata } from "next";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Footer, Header } from "@/components";
import { Toaster } from "@/components/ui/sonner";
import { manrope, bespokeSans } from "./fonts";

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
