"use client";

import { journalCards } from "@/constants";
import type { MotionValue } from "framer-motion";
import { motion, useTransform } from "framer-motion";
import Image from "next/image";
import { Card, CardContent } from "../../ui/card";

export interface JournalCardItemProps {
  card: (typeof journalCards)[0];
  i: number;
  rotate: MotionValue<number>;
}

const JournalCardItem = ({ card, i, rotate }: JournalCardItemProps) => {
  const angle = i * (360 / journalCards.length);
  const blur = useTransform(rotate, (latest) => {
    const effectiveAngle = (latest + angle) % 360;
    return effectiveAngle > 77 && effectiveAngle < 280 ? 4 : 0;
  });

  return (
    <motion.div
      key={card.id}
      className="absolute top-0 left-0 w-full h-full"
      style={{
        transform: `rotateY(${angle}deg) translateZ(220px)`, // Adjusted translateZ for new size
        filter: useTransform(blur, (v) => `blur(${v}px)`),
      }}
    >
      <Card className="p-0 w-[241.6px] h-[366px]">
        {" "}
        {/* Adjusted width and height to 80% */}
        <CardContent
          className={`p-0 w-full h-full bg-white rounded-[12.32px] shadow-[0px_4px_10px_#00000040]`}
        >
          <div className="relative w-full h-full">
            <Image
              className="absolute top-0 left-0" // Adjusted height to 80%
              alt={`Journal visualization - ${card.title}`}
              src={card.image}
              width={242}
              height={272}
            />
            {/* <Image
              className="absolute top-1 left-[215px]" // Adjusted left position
              alt="Enlarge"
              src="/enlarge-4.png"
              width={21}
              height={21}
            /> */}
            <Image
              className="absolute top-[262px] left-0" // Adjusted height
              alt="Line"
              src={card.lineSrc}
              width={242}
              height={12}
            />
            <Image
              className="absolute top-[243px] left-[93.6px]" // Adjusted size
              alt="Score circle"
              src={card.ellipseSrc}
              width={54}
              height={48}
            />
            <div className="w-[41.6px] h-[33.6px] absolute top-[252px] left-[99.2px] text-[23.68px] [font-family:'FONTSPRING_DEMO_-_Breul_Grotesk_A_ExtraLight-Regular',Helvetica] font-normal text-black text-center">
              {card.score}{" "}
            </div>

            <div className="absolute top-[295px] left-1.5 w-[231.2px] h-[45.6px] text-[19.68px] [font-family:'FONTSPRING_DEMO_-_Breul_Grotesk_A_ExtraLight-Regular',Helvetica] font-normal text-black text-center">
              &quot;{card.title}&quot;{" "}
            </div>

            <div className="absolute top-[320px] left-[53.6px] w-[136px] h-[20px] text-[9.84px] [font-family:'Inter',Helvetica] font-normal text-black text-center">
              {card.date}{" "}
            </div>
            <div className="absolute top-[344px] left-[53.6px] w-[136px] h-[20px] text-[7.92px] [font-family:'Inter',Helvetica] font-normal text-[#a1a1a1] text-center">
              TAP CARD FOR INSIGHTS{" "}
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default JournalCardItem;
