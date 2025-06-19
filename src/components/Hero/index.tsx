"use client";
import React from "react";

const Hero = () => {
  return (
    <section className="relative w-[94%] mx-auto h-screen bg-[url('/gemini-generated-image-2akb7d2akb7d2akb-1.png')] bg-cover bg-center flex flex-col items-center justify-center rounded-[20px]">
      <h2 className="w-full max-w-5xl px-4 h-auto [font-family:'FONTSPRING_DEMO_-_Breul_Grotesk_A_Bold-Regular',Helvetica] font-normal text-white text-6xl md:text-8xl lg:text-8xl text-center tracking-[0] leading-[normal]">
        SEE HOW YOU FEEL
      </h2>
      <img
        className="w-[63px] h-[63px] mt-10"
        alt="Down button"
        src="/down-button.png"
        onClick={() => {
          document.getElementById("early-access")?.scrollIntoView({
            behavior: "smooth",
          });
        }}
      />
    </section>
  );
};

export default Hero;
