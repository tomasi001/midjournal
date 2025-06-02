"use client";

import React, { useEffect, useRef, useState } from "react";
import { journalCards } from "@/constants";
import { Card, CardContent } from "../ui/card";

const MAX_WIDTH = 791; // The maximum design width of the component
const MAX_HEIGHT = 458; // The maximum design height of the component

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
          {/* The original content wrapper, now takes full width/height of its scaled parent */}
          {/* All internal positioning and sizing of cards are relative to this 791x458 box */}
          <div className="relative w-full h-full">
            {journalCards.map((card) => {
              // Initialize variables to store CSS classes for different parts of the card.
              // These classes will be determined conditionally based on the card's properties (size and position).
              let cardClasses = ""; // Stores classes for the main <Card> container, including its dimensions, absolute positioning, and visual effects like blur.
              let imageClasses = ""; // Stores classes for the card's main image, primarily its dimensions.
              let scoreCircleClasses = ""; // Stores classes for the circle element that displays the score, including dimensions and absolute positioning.
              let scoreFontClasses = ""; // Stores classes for the text of the score, including dimensions, absolute positioning, and font size.
              let titleFontClasses = ""; // Stores classes for the card's title text, including dimensions and font size.
              let dateFontClasses = ""; // Stores classes for the card's date text, including dimensions and font size.
              let tapTextClasses = ""; // Stores classes for the "TAP CARD FOR INSIGHTS" text, including dimensions and font size.

              // This large conditional block (if/else if/else) determines the styling
              // for each card based on its `size` property (e.g., "large", "medium", or by default, "small").
              // Within each size category, there can be further differentiation based on `position` (e.g., "left", "far-left").
              // All styling uses Tailwind CSS utility classes, with many precise pixel values for dimensions and positioning (e.g., w-[302px], top-0, left-[246px]).

              // Conditional styling for "large" cards.
              if (card.size === "large") {
                cardClasses =
                  "w-[302px] h-[458px] absolute top-0 left-[246px] z-30"; // Fixed dimensions and centered absolute positioning. Added z-30 for stacking.
                imageClasses = "w-[302px] h-[340px]"; // Image takes up a significant portion of the card height.
                scoreCircleClasses =
                  "w-[68px] h-16 absolute top-[299px] left-[117px]"; // Specific size and placement for the score circle.
                scoreFontClasses =
                  "w-[52px] h-[42px] absolute top-[315px] left-[124px] text-[29.6px]"; // Specific size, placement, and font size for the score text.
                titleFontClasses = "w-[289px] h-[57px] text-[24.6px]"; // Title text dimensions and font size.
                dateFontClasses = "w-[170px] h-[25px] text-[12.3px]"; // Date text dimensions and font size.
                tapTextClasses = "w-[170px] h-[25px] text-[9.9px]"; // "Tap" text dimensions and font size.
              } else if (card.size === "medium") {
                // Conditional styling for "medium" sized cards.
                // These cards also have a `blur-[3px]` effect applied.
                // Added z-20 for stacking.
                if (card.position === "left") {
                  // Styles for medium cards positioned on the left.
                  cardClasses =
                    "w-[228px] h-[334px] absolute top-[50px] left-[88px] blur-[3px] z-20";
                } else {
                  // Assumes any other position for "medium" cards (e.g., "right") uses these styles.
                  cardClasses =
                    "w-[228px] h-[334px] absolute top-[53px] left-[478px] blur-[3px] z-20";
                }
                // Common styles for all medium cards, regardless of position.
                imageClasses = "w-[220px] h-[247px]";
                scoreCircleClasses =
                  "w-[49px] h-[47px] absolute top-[218px] left-[85px]";
                scoreFontClasses =
                  "w-[35px] h-[30px] absolute top-[230px] left-[91px] text-[21.5px]";
                titleFontClasses = "w-[211px] h-[41px] text-[17.9px]";
                dateFontClasses = "w-[124px] h-[18px] text-[9px]";
                tapTextClasses = "w-[124px] h-[18px] text-[7.2px]";
              } else {
                // Default styling, presumably for "small" cards (any size not "large" or "medium").
                // These cards have a stronger `blur-[4px]` effect.
                // Added z-10 for stacking.
                if (card.position === "far-left") {
                  // Styles for small cards positioned on the far-left.
                  cardClasses =
                    "w-[161px] h-[232px] absolute top-24 left-0 blur-[4px] z-10";
                } else {
                  // Assumes any other position for "small" cards (e.g., "far-right") uses these styles.
                  cardClasses =
                    "w-[161px] h-[232px] absolute top-24 left-[630px] blur-[4px] z-10";
                }
                // Common styles for all small cards, regardless of position.
                imageClasses = "w-[153px] h-[172px]";
                scoreCircleClasses =
                  "w-[34px] h-8 absolute top-[151px] left-[59px]";
                scoreFontClasses =
                  "w-6 h-[21px] absolute top-[159px] left-16 text-[15px]";
                // Note: h-3.5 and h-3 are very small heights in Tailwind (0.875rem and 0.75rem respectively).
                // This might be intentional for very compact text display or could be a point of review if text appears clipped.
                titleFontClasses = "w-[147px] h-3.5 text-[12.5px]";
                dateFontClasses = "w-[86px] h-3 text-[6.2px]";
                tapTextClasses = "w-[86px] h-3 text-[5px]";
              }

              // Return the JSX for a single card component.
              // The `key` prop is crucial for React when rendering lists of elements.
              // It helps React identify which items have changed, are added, or are removed.
              // `card.id` is used here, assuming it's a unique identifier for each card.
              // The `className` for the <Card> is set to `cardClasses`, which was determined by the conditional logic above.
              // This `cardClasses` string includes absolute positioning, dimensions, and blur effects based on card size/position.
              return (
                <Card key={card.id} className={`p-0 ${cardClasses}`}>
                  {/* CardContent component is used to wrap the inner content of the card. */}
                  {/* Tailwind CSS classes are applied conditionally to CardContent based on `card.size`:
                      - "p-0": Removes any default padding from CardContent.
                      - "bg-white": Sets a white background for the content area.
                      - "rounded-[value]": Applies specific border-radius values. The radius changes with card size.
                      - "shadow-[value]": Applies specific box-shadow values. The shadow also changes with card size,
                                          using custom shadow definitions with horizontal offset, vertical offset, blur, and color (#00000040 which is black with 25% opacity).
                  */}
                  <CardContent
                    className={`p-0 ${
                      card.size === "large"
                        ? "bg-white rounded-[12.32px] shadow-[-4.93px_9.85px_4.93px_#00000040]"
                        : card.size === "medium"
                        ? "bg-white rounded-[8.97px] shadow-[-3.59px_7.17px_3.59px_#00000040]"
                        : "bg-white rounded-[6.24px] shadow-[-2.5px_4.99px_2.5px_#00000040]"
                    }`}
                  >
                    {/* This div acts as a container for all visual elements within the CardContent. */}
                    {/* "relative" is set here to establish a new positioning context for its children.
                        This means `absolute` positioning for child elements (like images and text overlays)
                        will be relative to the bounds of this div.
                    */}
                    <div className="relative">
                      {/* Main journal visualization image. */}
                      {/* `imageClasses` (which defines width and height based on card size) is applied.
                          It's also absolutely positioned to the top-left corner of its parent <div className="relative">. */}
                      <img
                        className={`${imageClasses} absolute top-0 left-0`}
                        alt={`Journal visualization - ${card.title}`} // Dynamic alt text including the card's title for accessibility.
                        src={card.image} // Image source is taken from the `card.image` property.
                      />
                      {/* Enlarge icon image (Expand icon). */}
                      {/* This image is absolutely positioned. Its dimensions (w, h) and position (top, left)
                          are determined by `card.size` through conditional Tailwind classes. */}
                      <img
                        className={`absolute ${
                          card.size === "large"
                            ? "w-[21px] h-[21px] top-3 left-[269px]" // Specific style for large cards
                            : card.size === "medium"
                            ? "w-[15px] h-[15px] top-[9px] left-[195px]" // Specific style for medium cards
                            : "w-[11px] h-[11px] top-1.5 left-[136px]" // Default style for small cards
                        }`}
                        alt="Enlarge" // Alt text for the icon.
                        src="/enlarge-4.png" // Static image source for the enlarge icon.
                      />
                      {/* Decorative line image, displayed below the main image and above other content. */}
                      {/* This image is also absolutely positioned to the `left-0` of its parent container.
                          Its width, height, and top position are conditional based on `card.size`.
                          The `src` (source URL of the image) is also conditional, changing based on both
                          `card.size` and `card.position` to display different line graphics. */}
                      <img
                        className={`absolute ${
                          card.size === "large"
                            ? "w-[302px] h-3 top-[328px]"
                            : card.size === "medium"
                            ? "w-[220px] h-[9px] top-[238px]"
                            : "w-[153px] h-1.5 top-[165px]" // Note: h-1.5 is a very small height (0.375rem).
                        } left-0`}
                        alt="Line" // Alt text for the decorative line.
                        src={
                          // The source of the line image is dynamically chosen.
                          card.size === "large"
                            ? "/line-2.svg"
                            : card.position === "left" // For medium and small cards positioned left
                            ? "/line-1-1.svg"
                            : card.position === "right" // For medium and small cards positioned right
                            ? "/line-1.svg"
                            : card.position === "far-left" // Specifically for small cards positioned far-left
                            ? "/line-3.svg"
                            : "/line-1-2.svg" // Default line for other small cards (e.g., far-right)
                        }
                      />
                      {/* Score circle image (visual background for the score text). */}
                      {/* `scoreCircleClasses` (which includes dimensions and absolute positioning based on card size) is applied.
                          The `src` of the circle image also changes based on `card.size` and sometimes `card.position`. */}
                      <img
                        className={scoreCircleClasses}
                        alt="Score circle" // Alt text for the score circle.
                        src={
                          // The source of the ellipse image is dynamically chosen.
                          card.size === "large"
                            ? "/ellipse-1.svg"
                            : card.size === "medium"
                            ? "/ellipse-1-2.svg" // One type of ellipse for all medium cards.
                            : card.position === "far-left" // Specific ellipse for small far-left cards.
                            ? "/ellipse-2.svg"
                            : "/ellipse-1-1.svg" // Default ellipse for other small cards (e.g., far-right).
                        }
                      />
                      {/* Score text display, overlaid on the score circle. */}
                      {/* `scoreFontClasses` (which includes dimensions, absolute positioning, and text size based on card size) is applied.
                          A custom font family 'FONTSPRING_DEMO_-_Breul_Grotesk_A_ExtraLight-Regular' is used, with Helvetica as a fallback.
                          Text is centered and black. */}
                      <div
                        className={`${scoreFontClasses} [font-family:'FONTSPRING_DEMO_-_Breul_Grotesk_A_ExtraLight-Regular',Helvetica] font-normal text-black text-center`}
                      >
                        {card.score}{" "}
                        {/* The actual score value from the `card` object. */}
                      </div>

                      {/* Card title display. */}
                      {/* This text is absolutely positioned. Its top and left positions are conditional based on `card.size` and `card.position`.
                          `titleFontClasses` (which includes dimensions and text size based on card size) is also applied.
                          Uses the same custom font family as the score text. */}
                      <div
                        className={`absolute ${
                          card.size === "large"
                            ? "top-[358px] left-1.5"
                            : card.size === "medium"
                            ? "top-[261px] left-1"
                            : card.position === "far-left" // Specific positioning for small far-left cards.
                            ? "top-[188px] left-[3px]"
                            : "top-[182px] left-[3px]" // Default positioning for other small cards (e.g., far-right).
                        } ${titleFontClasses} [font-family:'FONTSPRING_DEMO_-_Breul_Grotesk_A_ExtraLight-Regular',Helvetica] font-normal text-black text-center`}
                      >
                        &quot;{card.title}&quot;{" "}
                        {/* The card title from data, wrapped in double quotes. `&quot;` is used for HTML entity. */}
                      </div>

                      {/* Card date display. */}
                      {/* This text is also absolutely positioned. Its top and left positions are conditional based on `card.size` and `card.position`.
                          `dateFontClasses` (which includes dimensions and text size based on card size) is applied.
                          Uses the 'Inter' font family, with Helvetica as a fallback. Text is centered and black. */}
                      <div
                        className={`absolute ${
                          card.size === "large"
                            ? "top-[395px] left-[67px]"
                            : card.size === "medium"
                            ? "top-72 left-12" // Consistent positioning for medium cards.
                            : card.position === "far-left" // Specific positioning for small far-left cards.
                            ? "top-[217px] left-[31px]"
                            : "top-[200px] left-[34px]" // Default positioning for other small cards.
                        } ${dateFontClasses} [font-family:'Inter',Helvetica] font-normal text-black text-center`}
                      >
                        {card.date} {/* The card date from data. */}
                      </div>

                      {/* "TAP CARD FOR INSIGHTS" text. */}
                      {/* This text is absolutely positioned. Its top and left positions are conditional based on `card.size` and `card.position`.
                          `tapTextClasses` (which includes dimensions and text size based on card size) is applied.
                          Uses the 'Inter' font family. Text is centered and colored #a1a1a1 (a light gray). */}
                      <div
                        className={`absolute ${
                          card.size === "large"
                            ? "top-[430px] left-[67px]"
                            : card.size === "medium"
                            ? "top-[313px] left-12" // Consistent positioning for medium cards.
                            : card.position === "far-left" // Specific positioning for small far-left cards. Note: top is `217px`, same as date for this case, but different `left`.
                            ? "top-[217px] left-[34px]"
                            : "top-[218px] left-[34px]" // Default positioning for other small cards.
                        } ${tapTextClasses} [font-family:'Inter',Helvetica] font-normal text-[#a1a1a1] text-center`}
                      >
                        TAP CARD FOR INSIGHTS {/* Static instructional text. */}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

// Export the JournalCards component as the default export of this module,
// making it available for import in other parts of the application.
export default JournalCards;
