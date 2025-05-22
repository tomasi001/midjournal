import React from "react";

const Description = () => {
  return (
    <section className="absolute top-[1369px] left-[1037px] flex flex-col gap-6">
      <h2 className="w-[691px] h-28 [font-family:'FONTSPRING_DEMO_-_Breul_Grotesk_A_ExtraLight-Regular',Helvetica] font-normal text-black text-[50px]">
        We&apos;re building a smart journal that{" "}
        <span className="[font-family:'FONTSPRING_DEMO_-_Breul_Grotesk_A_SemiLight-Italic',Helvetica] italic">
          reflects you
        </span>
      </h2>

      <div className="w-[714px] [font-family:'Inter',Helvetica] font-normal text-black text-xl">
        <p>
          Every journal entry shows you how you feel: not just in words, but as
          a living visual — creating an informative 3D gallery of your emotional
          world — unfolding over time.
        </p>
        <p className="mt-6">
          <span className="font-bold">A journal evolved</span>, offering
          insights rooted in the best of modern psychology and eastern wisdom.
          Drawing from the top academic research and learning with you as you go
          — we&apos;re building a tool that keeps track of the shifts in your
          thoughts, moods, and energy and plots these against the cycles of
          nature&nbsp;&nbsp;— helping you make sense of the the messiness of
          life.
        </p>
        <p className="mt-6">
          <span className="font-bold">See what comes to life </span>— we&apos;re
          guided by raw honesty, grounded in compassion, and driven by the
          belief that technology should nurture what makes us human. We&apos;re
          right at the beginning, but the path is clear and we&apos;d love for
          you to join us on the journey. Apply for{" "}
          <span className="font-bold">early access</span> below and help us
          perfect the first mood-to image model.
        </p>
      </div>
    </section>
  );
};

export default Description;
