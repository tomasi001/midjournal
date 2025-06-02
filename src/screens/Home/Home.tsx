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
      <div className="flex flex-col 2xl:flex-row justify-center items-center 2xl:items-start w-[92%] mx-auto py-12 md:py-16 gap-x-8">
        <div className="w-full">
          <JournalCards />
        </div>

        <div className="w-full">
          <Description />
        </div>
      </div>
      <div className="flex flex-col justify-center items-center w-[92%] mx-auto">
        <EarlyAccess />
        <Faq />
      </div>
    </div>
  );
};
