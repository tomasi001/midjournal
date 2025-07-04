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
      <h3 className="h-auto md:h-28 font-medium text-black text-4xl md:text-5xl text-center mb-8 md:mb-0">
        FAQs
      </h3>

      <Accordion type="single" collapsible className="w-full md:w-[575px]">
        {faqItems.map((item) => (
          <AccordionItem key={item.id} value={item.id} className="border-none">
            <Separator className="mb-4 md:mb-6" />
            <AccordionTrigger className="font-sans py-2 text-left font-semibold text-lg text-black hover:no-underline md:text-xl">
              {item.question}
            </AccordionTrigger>
            <AccordionContent className="font-sans pt-2 pb-4 text-left font-normal text-base text-black md:pb-6 md:text-xl">
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
