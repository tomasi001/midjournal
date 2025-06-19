import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="relative w-full flex flex-col items-center my-0 md:my-16 py-10 px-12">
      <img
        className="w-[44px] h-[44px] sm:w-[112px] sm:h-[112px] mb-8 sm:mb-16"
        alt="Midjournal logo"
        src="/midjournal-logo--black-2.png"
      />

      <p className="w-full max-w-xl mb-4 sm:max-w-2xl h-auto mt-[-20px] sm:mt-[-34px] [font-family:'FONTSPRING_DEMO_-_Breul_Grotesk_A_ExtraLight-Regular',Helvetica] font-normal text-xl sm:text-6xl text-center">
        Midjournal
      </p>

      <div className="w-full [font-family:'Inter',Helvetica] font-normal text-black text-[10px] sm:text-base py-0 sm:py-4">
        <p className="text-center max-w-[280px] sm:max-w-[890px] mx-auto">
          By using the latest technology to provide an enriched set of tools,
          we’re on a mission to illuminate the world of emotion – with the aim
          of enabling radical self-awareness, personal responsibility, and
          ultimately, a richer, more balanced and harmonious existence.
        </p>
      </div>

      <div className="flex gap-2 sm:gap-3 mt-4">
        <Link href="mailto:hello@midjournal.xyz">
          <img
            className="w-[30px] sm:w-[49px] h-[30px] sm:h-[49px]"
            alt="Email"
            src="/email.png"
          />
        </Link>
        <Link
          href="https://www.facebook.com/midjournal.xyzzz"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="w-[30px] sm:w-[49px] h-[30px] sm:h-[49px] object-cover"
            alt="Facebook"
            src="/facebook.png"
          />
        </Link>
        <Link
          href="https://www.instagram.com/midjournal.xyz"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="w-[30px] sm:w-[49px] h-[30px] sm:h-[49px]"
            alt="Instagram"
            src="/instagram.png"
          />
        </Link>
        <Link
          href="https://x.com/midjournalxyz"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="w-[30px] sm:w-[49px] h-[30px] sm:h-[49px]"
            alt="X (Twitter)"
            src="/x.png"
          />
        </Link>
        <Link
          href="https://www.tiktok.com/@midjournal.xyz"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="w-[30px] sm:w-[49px] h-[30px] sm:h-[49px] object-cover"
            alt="TikTok"
            src="/tiktok.png"
          />
        </Link>
        <Link
          href="https://www.linkedin.com/company/midjournalxyz/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="w-[30px] sm:w-[49px] h-[30px] sm:h-[49px]"
            alt="LinkedIn"
            src="/linkedin.png"
          />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
