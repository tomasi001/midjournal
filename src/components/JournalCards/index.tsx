"use client";

import { journalCards } from "@/constants";
import { motion, useTime, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import JournalCardItem from "./JournalCardItem";

const MAX_WIDTH = 633; // The maximum design width of the component (80% of 791)
const MAX_HEIGHT = 366; // The maximum design height of the component (80% of 458)

const JournalCards = () => {
  const containerRef = useRef<HTMLElement>(null);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const calculateScale = () => {
      if (containerRef.current) {
        const currentWidth = containerRef.current.offsetWidth;
        // Scale factor is current width / max design width, capped at 1 (no upscaling)
        const newScale = Math.min(1, currentWidth / MAX_WIDTH);
        setScale(newScale);
      }
    };

    // Initial calculation
    // Timeout to ensure layout is stable, especially in React 18 strict mode double render
    const timerId = setTimeout(calculateScale, 0);

    const resizeObserver = new ResizeObserver(calculateScale);
    if (containerRef.current) {
      resizeObserver.observe(containerRef.current);
    }

    return () => {
      clearTimeout(timerId);
      if (containerRef.current) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        resizeObserver.unobserve(containerRef.current);
      }
      resizeObserver.disconnect();
    };
  }, []);

  const time = useTime();
  const rotate = useTransform(time, [0, 50000], [0, 360], { clamp: false });

  return (
    <section
      ref={containerRef}
      className="relative w-full mx-auto my-10" // my-10 for vertical spacing
      style={{ maxWidth: `${MAX_WIDTH}px` }} // Constrain width for scaling calculation
    >
      {/* This div reserves space using padding-bottom to maintain aspect ratio */}
      <div style={{ paddingTop: `${(MAX_HEIGHT / MAX_WIDTH) * 100}%` }} />

      {/* This div is absolutely positioned to fill the aspect ratio space.
          It hosts the content that will be scaled. */}
      <div className="absolute top-0 left-0 w-full h-full">
        {/* This is the block that actually gets scaled.
            It's rendered at the full MAX_WIDTH and MAX_HEIGHT, then transformed. */}
        <div
          style={{
            width: `${MAX_WIDTH}px`,
            height: `${MAX_HEIGHT}px`,
            transform: `scale(${scale})`,
            transformOrigin: "top left", // Scale from the top-left
          }}
        >
          <div
            className="relative w-full h-full"
            style={{ perspective: "1000px" }}
          >
            <motion.div
              className="absolute top-0 sm:top-2 md:top-[40px] lg:top-0 left-[192px] w-[241.6px] h-[366px]"
              style={{
                transformStyle: "preserve-3d",
                rotateY: rotate,
              }}
            >
              {" "}
              {/* Adjusted width to 80% */}
              {journalCards.map((card, i) => (
                <JournalCardItem
                  key={card.id}
                  card={card}
                  i={i}
                  rotate={rotate}
                />
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Export the JournalCards component as the default export of this module,
// making it available for import in other parts of the application.
export default JournalCards;
