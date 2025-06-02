import {
  Description,
  EarlyAccess,
  Faq,
  Footer,
  Header,
  Hero,
  JournalCards,
} from "@/components";

export const Desktop = () => {
  return (
    <main className="bg-white flex flex-row justify-center w-screen">
      <div className="bg-white w-screen relative">
        <Header />
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
        <Footer />
      </div>
    </main>
  );
};
