import React from "react";
import { Card, CardContent } from "../ui/card";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

const EarlyAccess = () => {
  return (
    <section className="absolute w-[854px] h-[287px] top-[2030px] left-[537px]">
      <Card className="w-[846px] h-[287px] rounded-[20px] bg-transparent">
        <CardContent className="p-0 flex flex-col items-center justify-center h-full">
          <h2 className="w-[475px] h-16 mb-12 [font-family:'FONTSPRING_DEMO_-_Breul_Grotesk_A_ExtraLight-Regular',Helvetica] font-normal text-white text-[50px] text-center">
            Early access
          </h2>

          <div className="flex items-center w-[661px] h-[71px] bg-white rounded-[10px]">
            <Input
              className="h-[71px] w-full border-none pl-6 [font-family:'Inter',Helvetica] font-normal text-[#00000063] text-base"
              placeholder="Email"
            />
            <Button className="w-[193px] h-[58px] mr-1.5 bg-black rounded-[10px] [font-family:'Inter',Helvetica] font-bold text-white text-xl">
              APPLY
            </Button>
          </div>

          <p className="w-[530px] mt-6 [font-family:'Inter',Helvetica] font-normal text-white text-xs text-center">
            By hitting &quot;APPLY&quot; you agree to be contacted via email
          </p>
        </CardContent>
      </Card>
    </section>
  );
};

export default EarlyAccess;
