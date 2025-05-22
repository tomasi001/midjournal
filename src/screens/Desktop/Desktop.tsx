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
    <main className="bg-white flex flex-row justify-center w-full">
      <div className="bg-white w-full max-w-[1920px] relative">
        <Header />
        <Hero />
        <JournalCards />
        <Description />
        <EarlyAccess />
        <Faq />
        <Footer />
      </div>
    </main>
  );
};
