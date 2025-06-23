"use client";
import React from "react";
import Image from "next/image"; // Import Image from next/image

const Hero = () => {
  return (
    <section className="relative w-[94%] mx-auto h-screen bg-[url('/hero-image-mobile.png')] sm:bg-[url('/hero-image-desktop.png')] bg-cover bg-center flex flex-col items-center justify-center rounded-[20px]">
      <h2 className="w-full max-w-5xl px-4 h-auto font-extrabold text-white text-6xl md:text-8xl lg:text-8xl text-center tracking-[0] leading-[normal]">
        SEE HOW YOU FEEL
      </h2>
      <Image
        className="w-[63px] h-[63px] mt-10"
        alt="Down button"
        src="/down-button.png"
        width={63}
        height={63}
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
