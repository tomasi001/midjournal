import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import { faqItems } from "@/constants";
import { Separator } from "../ui/separator";

const Faq = () => {
  return (
    <section className="relative w-full max-w-2xl mx-auto my-0 md:my-10 px-4 flex flex-col items-center">
      <h2 className="h-auto md:h-28 font-normal text-black text-4xl md:text-5xl text-center mb-8 md:mb-0">
        FAQs
      </h2>

      <Accordion type="single" collapsible className="w-full md:w-[575px]">
        {faqItems.map((item) => (
          <AccordionItem key={item.id} value={item.id} className="border-none">
            <Separator className="mb-4 md:mb-6" />
            <AccordionTrigger className="font-semibold text-black text-lg md:text-xl py-2 hover:no-underline text-left">
              {item.question}
            </AccordionTrigger>
            <AccordionContent className="font-normal text-black text-base md:text-xl pt-2 pb-4 md:pb-6 text-left">
              {item.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
        <Separator className="mt-4 md:mt-6" />
      </Accordion>
    </section>
  );
};

export default Faq;
