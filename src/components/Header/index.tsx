"use client";

import { Button } from "../ui/button";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image"; // Import Image from next/image

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [spacerHeight, setSpacerHeight] = useState(0);
  const [initialHeaderOffsetTop, setInitialHeaderOffsetTop] = useState(0);
  const headerElementRef = useRef<HTMLElement>(null);
  const staticHeaderRef = useRef<HTMLDivElement>(null); // Ref for the non-sticky header

  useEffect(() => {
    // Use the static header for initial dimension calculations
    if (staticHeaderRef.current) {
      const styles = getComputedStyle(staticHeaderRef.current);
      const marginTop = parseFloat(styles.marginTop);
      const calculatedHeight = staticHeaderRef.current.offsetHeight;
      setSpacerHeight(calculatedHeight);
      // Calculate initial offset top based on the wrapper div of the static header
      // to ensure it's relative to the document flow before any sticky behavior.
      let cumulativeOffsetTop = staticHeaderRef.current.offsetTop;
      let currentElement = staticHeaderRef.current.offsetParent as HTMLElement;
      while (currentElement) {
        cumulativeOffsetTop += currentElement.offsetTop;
        currentElement = currentElement.offsetParent as HTMLElement;
      }
      setInitialHeaderOffsetTop(cumulativeOffsetTop - marginTop); // Adjust for its own margin
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (initialHeaderOffsetTop > 0) {
        setIsScrolled(window.scrollY > initialHeaderOffsetTop);
      } else {
        // Fallback if initialHeaderOffsetTop isn't set, similar to before
        setIsScrolled(window.scrollY > 10);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [initialHeaderOffsetTop]);

  const headerBaseClasses =
    "w-[90%] h-[38px] sm:h-[64px] rounded-[6px] sm:rounded-[20px] border border-solid flex items-center justify-between pl-3 pr-2";

  const headerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3, ease: "easeInOut" },
    },
    exit: {
      opacity: 0,
      y: -20,
      transition: { duration: 0.2, ease: "easeInOut" },
    },
  };

  return (
    <>
      <div
        ref={staticHeaderRef}
        style={{ height: isScrolled ? `${spacerHeight}px` : "auto" }}
        className={`${headerBaseClasses} relative mx-auto my-7 bg-white border-white ${
          isScrolled ? "invisible" : "visible" // Hide static header when sticky is active
        }`}
      >
        {/* Static header content - duplicated for layout calculation, hidden when sticky */}
        <div className="flex items-center gap-1 sm:gap-2">
          <Image
            className="w-[22px] h-[22px] sm:w-[37px] sm:h-[37px]"
            alt="Midjournal logo"
            src="/midjournal-logo-black-header.png"
            width={37}
            height={37}
          />
          <h1 className="[font-family:'FONTSPRING_DEMO_-_Breul_Grotesk_A_ExtraLight-Regular',Helvetica] font-normal text-black text-[15px] sm:text-[24px]">
            Midjournal
          </h1>
        </div>
        <Button
          onClick={() => {
            document.getElementById("early-access")?.scrollIntoView({
              behavior: "smooth",
            });
          }}
          className="w-[102px] h-[26px] sm:w-[198px] sm:h-[48px] bg-black rounded-[5.5px] sm:rounded-[10px] [font-family:'Inter',Helvetica] font-bold text-white text-[11px] sm:text-xl"
        >
          EARLY ACCESS
        </Button>
      </div>

      <AnimatePresence>
        {isScrolled && (
          <motion.header
            key="sticky-header" // Important for AnimatePresence to track the element
            ref={headerElementRef} // Ref for the sticky header if needed, though layout is handled by static
            className={`${headerBaseClasses} fixed top-2 sm:top-7 left-1/2 transform -translate-x-1/2 z-50 bg-white/80 backdrop-blur-[6px] shadow-lg border-gray-200`}
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={headerVariants}
            // layout // Potentially enable if complex layout shifts occur, but can be costly
          >
            <div className="flex items-center gap-1 sm:gap-2">
              <Image
                className="w-[22px] h-[22px] sm:w-[37px] sm:h-[37px]"
                alt="Midjournal logo"
                src="/midjournal-logo-black-header.png"
                width={37}
                height={37}
              />
              <h1 className="[font-family:'FONTSPRING_DEMO_-_Breul_Grotesk_A_ExtraLight-Regular',Helvetica] font-normal text-black text-[15px] sm:text-[24px]">
                Midjournal
              </h1>
            </div>
            <Button
              onClick={() => {
                document.getElementById("early-access")?.scrollIntoView({
                  behavior: "smooth",
                });
              }}
              className="w-[102px] h-[26px] sm:w-[198px] sm:h-[48px] bg-black rounded-[5.5px] sm:rounded-[10px] [font-family:'Inter',Helvetica] font-bold text-white text-[11px] sm:text-xl"
            >
              EARLY ACCESS
            </Button>
          </motion.header>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
