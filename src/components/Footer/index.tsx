import React from "react";

const Footer = () => {
  return (
    <footer className="relative w-full py-10 flex flex-col items-center">
      <img
        className="w-[112px] h-[112px] mb-16"
        alt="Midjournal logo"
        src="/midjournal-logo--black-2.png"
      />

      <div className="w-full max-w-xl mb-4 md:max-w-2xl h-auto mt-[-20px] md:mt-[-34px] [font-family:'FONTSPRING_DEMO_-_Breul_Grotesk_A_ExtraLight-Regular',Helvetica] font-normal text-4xl md:text-6xl text-center">
        Midjournal
      </div>

      <div className="flex gap-4 md:gap-6 mt-4">
        <img
          className="w-[35px] md:w-[49px] h-[35px] md:h-[49px]"
          alt="X (Twitter)"
          src="/x.png"
        />
        <img
          className="w-[30px] md:w-[43px] h-[30px] md:h-[43px] object-cover"
          alt="Instagram"
          src="/-citypng-com-black-and-white-outline-instagram-app-logo-icon---8.png"
        />
        <img
          className="w-[35px] md:w-[49px] h-[35px] md:h-[49px]"
          alt="Email"
          src="/email-send.png"
        />
      </div>
    </footer>
  );
};

export default Footer;
