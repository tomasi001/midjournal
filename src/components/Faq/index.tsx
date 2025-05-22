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
    <section className="absolute w-[691px] top-[2424px] left-[614px] flex flex-col items-center">
      <h2 className="h-28 [font-family:'FONTSPRING_DEMO_-_Breul_Grotesk_A_ExtraLight-Regular',Helvetica] font-normal text-black text-[50px] text-center mb-10">
        FAQs
      </h2>

      <Accordion type="single" collapsible className="w-[575px]">
        {faqItems.map((item) => (
          <AccordionItem key={item.id} value={item.id} className="border-none">
            <Separator className="mb-6" />
            <AccordionTrigger className="[font-family:'Inter',Helvetica] font-semibold text-black text-xl py-2 hover:no-underline">
              {item.question}
            </AccordionTrigger>
            <AccordionContent className="[font-family:'Inter',Helvetica] font-normal text-black text-xl pt-2 pb-6">
              {item.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
        <Separator className="mt-6" />
      </Accordion>
    </section>
  );
};

export default Faq;
