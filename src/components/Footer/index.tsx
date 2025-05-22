import React from "react";

const Footer = () => {
  return (
    <footer className="absolute w-[670px] h-[345px] top-[3211px] left-[625px] flex flex-col items-center">
      <img
        className="w-[104px] h-[188px]"
        alt="Midjournal Logo"
        src="/vector-2-1.svg"
      />

      <div className="w-[670px] h-[173px] mt-[-34px] [background:linear-gradient(90deg,rgba(0,0,0,1)_55%,rgba(179,179,179,1)_74%,rgba(204,204,204,1)_77%,rgba(255,255,255,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] [font-family:'FONTSPRING_DEMO_-_Breul_Grotesk_A_ExtraLight-Regular',Helvetica] font-normal text-transparent text-6xl text-center">
        Midjournal
      </div>

      <div className="flex gap-6 mt-4">
        <img className="w-[49px] h-[49px]" alt="X (Twitter)" src="/x.png" />
        <img
          className="w-[43px] h-[43px] object-cover"
          alt="Instagram"
          src="/-citypng-com-black-and-white-outline-instagram-app-logo-icon---8.png"
        />
        <img className="w-[49px] h-[49px]" alt="Email" src="/email-send.png" />
      </div>
    </footer>
  );
};

export default Footer;
