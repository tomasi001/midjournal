import {
  Description,
  EarlyAccess,
  Faq,
  Hero,
  JournalCards,
} from "@/components";

export const Home = () => {
  return (
    <div>
      <Hero />
      {/* reverse columns on smaller screens */}
      <div className="flex flex-col xl:flex-row justify-center items-center xl:items-stretch w-[92%] mx-auto py-0 md:py-16 gap-x-8">
        <div className="w-full flex items-center justify-center order-2 xl:order-1">
          <JournalCards />
        </div>

        <div className="w-full flex items-center justify-center order-1 xl:order-2">
          <Description />
        </div>
      </div>
      <div className="flex flex-col justify-center items-center w-[92%] mx-auto py-8 sm:py-16">
        <p className="max-w-[300px] sm:max-w-2xl text-center h-auto font-normal text-black text-4xl md:text-5xl leading-tight">
          We&apos;re building a smart journal that{" "}
          <span className="font-heading italic font-bold">reflects you.</span>
        </p>
      </div>
      <div className="flex flex-col justify-center items-center w-[92%] mx-auto py-0 sm:py-8">
        <EarlyAccess />
        <Faq />
      </div>
    </div>
  );
};
