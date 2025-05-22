import { journalCards } from "@/constants";
import { Card, CardContent } from "../ui/card";

const JournalCards = () => {
  return (
    <section className="absolute w-[783px] h-[458px] top-[1394px] left-40">
      <div className="relative w-[791px] h-[458px]">
        {journalCards.map((card) => {
          // Determine card styling based on position and size
          let cardClasses = "";
          let imageClasses = "";
          let scoreCircleClasses = "";
          let scoreFontClasses = "";
          let titleFontClasses = "";
          let dateFontClasses = "";
          let tapTextClasses = "";

          if (card.size === "large") {
            cardClasses = "w-[302px] h-[458px] absolute top-0 left-[246px]";
            imageClasses = "w-[302px] h-[340px]";
            scoreCircleClasses =
              "w-[68px] h-16 absolute top-[299px] left-[117px]";
            scoreFontClasses =
              "w-[52px] h-[42px] absolute top-[315px] left-[124px] text-[29.6px]";
            titleFontClasses = "w-[289px] h-[57px] text-[24.6px]";
            dateFontClasses = "w-[170px] h-[25px] text-[12.3px]";
            tapTextClasses = "w-[170px] h-[25px] text-[9.9px]";
          } else if (card.size === "medium") {
            if (card.position === "left") {
              cardClasses =
                "w-[228px] h-[334px] absolute top-[50px] left-[88px] blur-[3px]";
            } else {
              cardClasses =
                "w-[228px] h-[334px] absolute top-[53px] left-[478px] blur-[3px]";
            }
            imageClasses = "w-[220px] h-[247px]";
            scoreCircleClasses =
              "w-[49px] h-[47px] absolute top-[218px] left-[85px]";
            scoreFontClasses =
              "w-[35px] h-[30px] absolute top-[230px] left-[91px] text-[21.5px]";
            titleFontClasses = "w-[211px] h-[41px] text-[17.9px]";
            dateFontClasses = "w-[124px] h-[18px] text-[9px]";
            tapTextClasses = "w-[124px] h-[18px] text-[7.2px]";
          } else {
            if (card.position === "far-left") {
              cardClasses =
                "w-[161px] h-[232px] absolute top-24 left-0 blur-[5px]";
            } else {
              cardClasses =
                "w-[161px] h-[232px] absolute top-24 left-[630px] blur-[5px]";
            }
            imageClasses = "w-[153px] h-[172px]";
            scoreCircleClasses =
              "w-[34px] h-8 absolute top-[151px] left-[59px]";
            scoreFontClasses =
              "w-6 h-[21px] absolute top-[159px] left-16 text-[15px]";
            titleFontClasses = "w-[147px] h-3.5 text-[12.5px]";
            dateFontClasses = "w-[86px] h-3 text-[6.2px]";
            tapTextClasses = "w-[86px] h-3 text-[5px]";
          }

          return (
            <Card key={card.id} className={cardClasses}>
              <CardContent
                className={`p-0 ${
                  card.size === "large"
                    ? "bg-white rounded-[12.32px] shadow-[-4.93px_9.85px_4.93px_#00000040]"
                    : card.size === "medium"
                    ? "bg-white rounded-[8.97px] shadow-[-3.59px_7.17px_3.59px_#00000040]"
                    : "bg-white rounded-[6.24px] shadow-[-2.5px_4.99px_2.5px_#00000040]"
                }`}
              >
                <div className="relative">
                  <img
                    className={`${imageClasses} absolute top-0 left-0`}
                    alt={`Journal visualization - ${card.title}`}
                    src={card.image}
                  />
                  <img
                    className={`absolute ${
                      card.size === "large"
                        ? "w-[21px] h-[21px] top-3 left-[269px]"
                        : card.size === "medium"
                        ? "w-[15px] h-[15px] top-[9px] left-[195px]"
                        : "w-[11px] h-[11px] top-1.5 left-[136px]"
                    }`}
                    alt="Enlarge"
                    src="/enlarge-4.png"
                  />
                  <img
                    className={`absolute ${
                      card.size === "large"
                        ? "w-[302px] h-3 top-[328px]"
                        : card.size === "medium"
                        ? "w-[220px] h-[9px] top-[238px]"
                        : "w-[153px] h-1.5 top-[165px]"
                    } left-0`}
                    alt="Line"
                    src={
                      card.size === "large"
                        ? "/line-2.svg"
                        : card.position === "left"
                        ? "/line-1-1.svg"
                        : card.position === "right"
                        ? "/line-1.svg"
                        : card.position === "far-left"
                        ? "/line-3.svg"
                        : "/line-1-2.svg"
                    }
                  />
                  <img
                    className={scoreCircleClasses}
                    alt="Score circle"
                    src={
                      card.size === "large"
                        ? "/ellipse-1.svg"
                        : card.size === "medium"
                        ? "/ellipse-1-2.svg"
                        : card.position === "far-left"
                        ? "/ellipse-2.svg"
                        : "/ellipse-1-1.svg"
                    }
                  />
                  <div
                    className={`${scoreFontClasses} [font-family:'FONTSPRING_DEMO_-_Breul_Grotesk_A_ExtraLight-Regular',Helvetica] font-normal text-black text-center`}
                  >
                    {card.score}
                  </div>

                  <div
                    className={`absolute ${
                      card.size === "large"
                        ? "top-[358px] left-1.5"
                        : card.size === "medium"
                        ? "top-[261px] left-1"
                        : card.position === "far-left"
                        ? "top-[188px] left-[3px]"
                        : "top-[182px] left-[3px]"
                    } ${titleFontClasses} [font-family:'FONTSPRING_DEMO_-_Breul_Grotesk_A_ExtraLight-Regular',Helvetica] font-normal text-black text-center`}
                  >
                    &quot;{card.title}&quot;
                  </div>

                  <div
                    className={`absolute ${
                      card.size === "large"
                        ? "top-[395px] left-[67px]"
                        : card.size === "medium"
                        ? "top-72 left-12"
                        : card.position === "far-left"
                        ? "top-[217px] left-[31px]"
                        : "top-[200px] left-[34px]"
                    } ${dateFontClasses} [font-family:'Inter',Helvetica] font-normal text-black text-center`}
                  >
                    {card.date}
                  </div>

                  <div
                    className={`absolute ${
                      card.size === "large"
                        ? "top-[430px] left-[67px]"
                        : card.size === "medium"
                        ? "top-[313px] left-12"
                        : card.position === "far-left"
                        ? "top-[217px] left-[34px]"
                        : "top-[218px] left-[34px]"
                    } ${tapTextClasses} [font-family:'Inter',Helvetica] font-normal text-[#a1a1a1] text-center`}
                  >
                    TAP CARD FOR INSIGHTS
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </section>
  );
};

export default JournalCards;
