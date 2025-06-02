import React from "react";
import { Card, CardContent } from "../ui/card";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

const EarlyAccess = () => {
  return (
    <section
      id="early-access"
      className="relative w-full max-w-3xl mx-auto my-10 scroll-mt-[130px] sm:scroll-mt-[160px]"
    >
      <Card
        className="w-full h-auto rounded-[20px] py-10 px-4 md:px-0"
        style={{
          background:
            "linear-gradient(256.8deg, #FFFFFF 3.24%, #EBBA82 9.54%, #F68E44 19.14%, #FB5A1B 32.14%, #B08CB0 44.23%, #8F5FAF 72.69%, #BA9DD5 90.77%, #7850A7 101.35%)",
        }}
      >
        <CardContent className="p-0 flex flex-col items-center justify-center h-full">
          <h2 className="w-full h-auto mb-8 md:mb-12 [font-family:'FONTSPRING_DEMO_-_Breul_Grotesk_A_ExtraLight-Regular',Helvetica] font-normal text-white text-4xl md:text-5xl text-center">
            Early access
          </h2>

          <div className="flex flex-col sm:flex-row items-center justify-between w-full max-w-2xl h-auto sm:h-[71px] bg-white rounded-[10px] p-2 sm:p-0 ">
            <Input
              className="h-[46px] sm:h-[54px] w-[98%] sm:w-full sm:mx-2 border-none pl-4 sm:pl-6 [font-family:'Inter',Helvetica] font-normal text-[#00000063] text-sm sm:text-base"
              placeholder="Email"
            />
            <Button className="w-full sm:w-[193px] h-[50px] sm:h-[58px] mt-2 sm:mt-0 sm:mr-1.5 bg-black rounded-[10px] [font-family:'Inter',Helvetica] font-bold text-white text-lg sm:text-xl">
              APPLY
            </Button>
          </div>

          <p className="w-full max-w-md mt-6 [font-family:'Inter',Helvetica] font-normal text-white text-xs text-center px-4 sm:px-0">
            By hitting &quot;APPLY&quot; you agree to be contacted via email
          </p>
        </CardContent>
      </Card>
    </section>
  );
};

export default EarlyAccess;
