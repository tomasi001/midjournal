import { Button } from "../ui/button";

const Header = () => {
  return (
    <header className="absolute w-[1775px] h-[120px] top-[27px] left-[72px] rounded-[20px] border border-solid border-white flex items-center justify-between px-10">
      <div className="flex items-center gap-3">
        <img
          className="w-[29px] h-[53px]"
          alt="Midjournal Logo"
          src="/vector-2.svg"
        />
        <h1 className="[font-family:'FONTSPRING_DEMO_-_Breul_Grotesk_A_ExtraLight-Regular',Helvetica] font-normal text-black text-[40px]">
          Midjournal
        </h1>
      </div>
      <Button className="w-[198px] h-[57px] bg-black rounded-[10px] [font-family:'Inter',Helvetica] font-bold text-white text-xl">
        EARLY ACCESS
      </Button>
    </header>
  );
};

export default Header;
