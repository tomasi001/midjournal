"use client";

import React, { useEffect, useRef, useState } from "react";
import { journalCards } from "@/constants";
import { Card, CardContent } from "../ui/card";

const MAX_WIDTH = 633; // The maximum design width of the component (80% of 791)
const MAX_HEIGHT = 366; // The maximum design height of the component (80% of 458)

const JournalCards = () => {
  const containerRef = useRef<HTMLElement>(null);
  const [scale, setScale] = useState(1);
  const [rotation, setRotation] = useState(0);
  const animationFrameId = useRef<number | null>(null);

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

  useEffect(() => {
    let startTime: number | null = null;
    const animate = (timestamp: number) => {
      if (!startTime) {
        startTime = timestamp;
      }
      const elapsedTime = timestamp - startTime;
      const rotationSpeed = 360 / 50000; // degrees per millisecond
      setRotation(elapsedTime * rotationSpeed);
      animationFrameId.current = requestAnimationFrame(animate);
    };
    animationFrameId.current = requestAnimationFrame(animate);

    return () => {
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, []);

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
            <div
              className="absolute top-0 sm:top-2 md:top-[40px] left-[192px] w-[241.6px] h-[366px] journal-card-slider"
              style={{
                transformStyle: "preserve-3d",
                transform: `rotateY(${rotation}deg)`,
              }}
            >
              {" "}
              {/* Adjusted width to 80% */}
              {journalCards.map((card, i) => {
                const angle = i * (360 / journalCards.length);
                const effectiveAngle = (rotation + angle) % 360;
                const isAtBack = effectiveAngle > 77 && effectiveAngle < 280;

                return (
                  <div
                    key={card.id}
                    className={`absolute top-0 left-0 w-full h-full transition-all duration-300 ${
                      isAtBack ? "blur-sm" : ""
                    }`}
                    style={{
                      transform: `rotateY(${angle}deg) translateZ(220px)`, // Adjusted translateZ for new size
                    }}
                  >
                    <Card className="p-0 w-[241.6px] h-[366px]">
                      {" "}
                      {/* Adjusted width and height to 80% */}
                      <CardContent
                        className={`p-0 w-full h-full bg-white rounded-[12.32px] shadow-[0px_4px_10px_#00000040]`}
                      >
                        <div className="relative w-full h-full">
                          <img
                            className="w-[241.6px] h-[272px] absolute top-0 left-0" // Adjusted height to 80%
                            alt={`Journal visualization - ${card.title}`}
                            src={card.image}
                          />
                          <img
                            className="absolute w-[21px] h-[21px] top-3 left-[215px]" // Adjusted left position
                            alt="Enlarge"
                            src="/enlarge-4.png"
                          />
                          <img
                            className="absolute w-[241.6px] h-3 top-[262px] left-0" // Adjusted height
                            alt="Line"
                            src="/line-2.svg"
                          />
                          <img
                            className="w-[54.4px] h-12 absolute top-[239.2px] left-[93.6px]" // Adjusted size
                            alt="Score circle"
                            src="/ellipse-1.svg"
                          />
                          <div className="w-[41.6px] h-[33.6px] absolute top-[252px] left-[99.2px] text-[23.68px] [font-family:'FONTSPRING_DEMO_-_Breul_Grotesk_A_ExtraLight-Regular',Helvetica] font-normal text-black text-center">
                            {card.score}{" "}
                          </div>

                          <div className="absolute top-[286px] left-1.5 w-[231.2px] h-[45.6px] text-[19.68px] [font-family:'FONTSPRING_DEMO_-_Breul_Grotesk_A_ExtraLight-Regular',Helvetica] font-normal text-black text-center">
                            &quot;{card.title}&quot;{" "}
                          </div>

                          <div className="absolute top-[316px] left-[53.6px] w-[136px] h-[20px] text-[9.84px] [font-family:'Inter',Helvetica] font-normal text-black text-center">
                            {card.date}{" "}
                          </div>
                          <div className="absolute top-[344px] left-[53.6px] w-[136px] h-[20px] text-[7.92px] [font-family:'Inter',Helvetica] font-normal text-[#a1a1a1] text-center">
                            TAP CARD FOR INSIGHTS{" "}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Export the JournalCards component as the default export of this module,
// making it available for import in other parts of the application.
export default JournalCards;
