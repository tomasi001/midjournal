import React from "react";

const Description = () => {
  return (
    <section className="relative w-full max-w-3xl mx-auto my-10 px-4 flex flex-col gap-6">
      <p className="w-full h-auto font-normal text-black text-4xl md:text-5xl leading-snug">
        <span className="font-heading italic font-bold">Level up</span> how you
        engage with the world
      </p>

      <div className="max-w-[673px] font-normal text-black text-lg md:text-xl">
        <p>
          By being more self-aware, you can begin to deepen your understanding
          of the true, cyclical and impermanent nature of emotion – leading to a
          synchronised, less reactionary and more connected state of being.
        </p>
        <p className="mt-6">
          <span className="italic font-bold font-heading">Go deep.</span> For
          centuries journaling has served as a powerful way to increase
          self-awareness. Now imagine an enriching set of tools that enable you
          to <br />
          go deeper, understand yourself better, and take greater responsibility
          for how you engage with the world.
        </p>
        <p className="mt-6">
          <span className="italic font-bold font-heading">
            A journal evolved.{" "}
          </span>{" "}
          Guided by the best in modern psychology and eastern wisdom; we&apos;re
          building a journal that draws from top academic research
          <br />
          and learns with you as you go. Keeping track of your thoughts and
          <br />
          emotions to reveal patterns and insights – in a way that helps make
          sense of the messiness of life.
        </p>
        <p className="mt-6">
          <span className="italic font-bold font-heading">
            See how you feel:{" "}
          </span>
          in words, insights, patterns, and living visuals – all working
          together to paint an informative and empowering landscape of your
          inner world –unfolding over time.
        </p>
      </div>
    </section>
  );
};

export default Description;
