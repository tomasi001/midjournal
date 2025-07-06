"use client";
import React from "react";

const Hero = () => {
  return (
    <section className="relative w-[94%] mx-auto h-screen bg-[url('/hero-image-mobile.png')] sm:bg-[url('/hero-image-desktop.png')] bg-cover bg-center flex flex-col items-center justify-center rounded-[20px]">
      <h1 className="w-full max-w-5xl px-4 h-auto font-bold text-white text-4xl md:text-6xl text-center tracking-[0] leading-[normal]">
        See how you feel
      </h1>
    </section>
  );
};

export default Hero;
