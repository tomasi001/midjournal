import React from "react";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="relative w-full flex flex-col items-center my-0 md:my-16 py-10 px-12">
      <Image
        className="w-[44px] h-[44px] sm:w-[112px] sm:h-[112px] mb-8 sm:mb-16"
        alt="Midjournal logo"
        src="/midjournal-logo-black-bottom.png"
        width={112}
        height={112}
      />

      <p className="w-full max-w-xl mb-4 sm:max-w-2xl h-auto mt-[-20px] sm:mt-[-34px] font-normal text-xl sm:text-6xl text-center">
        Midjournal
      </p>

      <div className="w-full font-normal text-black text-[10px] sm:text-base py-0 sm:py-4">
        <p className="text-center max-w-[280px] sm:max-w-[890px] mx-auto">
          By using the latest technology to provide an enriched set of tools,
          we’re on a mission to illuminate the world of emotion – with the aim
          of enabling radical self-awareness, personal responsibility, and
          ultimately, a richer, more balanced and harmonious existence.
        </p>
      </div>

      <div className="flex gap-2 sm:gap-3 mt-4">
        <Link href="mailto:hello@midjournal.xyz">
          <Image
            className="w-[30px] sm:w-[49px] h-[30px] sm:h-[49px]"
            alt="Email"
            src="/email-black.png"
            width={49}
            height={49}
          />
        </Link>
        <Link
          href="https://www.facebook.com/midjournal.xyzzz"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            className="w-[30px] sm:w-[49px] h-[30px] sm:h-[49px] object-cover"
            alt="Facebook"
            src="/facebook-black.png"
            width={49}
            height={49}
          />
        </Link>
        <Link
          href="https://www.instagram.com/midjournal.xyz"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            className="w-[30px] sm:w-[49px] h-[30px] sm:h-[49px]"
            alt="Instagram"
            src="/instagram-black.png"
            width={49}
            height={49}
          />
        </Link>
        <Link
          href="https://x.com/midjournalxyz"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            className="w-[30px] sm:w-[49px] h-[30px] sm:h-[49px]"
            alt="X (Twitter)"
            src="/x-black.png"
            width={49}
            height={49}
          />
        </Link>
        <Link
          href="https://www.tiktok.com/@midjournal.xyz"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            className="w-[30px] sm:w-[49px] h-[30px] sm:h-[49px] object-cover"
            alt="TikTok"
            src="/tiktok-black.png"
            width={49}
            height={49}
          />
        </Link>
        <Link
          href="https://www.linkedin.com/company/midjournalxyz/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            className="w-[30px] sm:w-[49px] h-[30px] sm:h-[49px]"
            alt="LinkedIn"
            src="/linkedin-black.png"
            width={49}
            height={49}
          />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
