import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";

const Hero = ({ items }: { items: any[] }) => {
  const t = useTranslations("HomeHero");

  return (
    <div
      style={{
        backgroundImage: `url("/images/hero.webp")`,
      }}
      className="bg-[length:100%_94%]   xl:bg-[length:100%_87%]  2xl:bg-[length:100%_99%]  relative z-10 overflow-hidden   max-[1023px]:!bg-none  lg:min-h-[635.932px] xl:min-h-[90vh] 2xl:min-h-[800px]   w-full bg-no-repeat "
    >
      <div className=" h-full  relative  flex flex-col md:flex-row justify-between gap-5 container w-full">
        <div className=" pt-[1.5rem] sm:pt-[7.5rem] h-full  ">
          <div className=" max-w-[450px] xl:max-w-[532px]">
            <h2 className=" text-[2.5rem] xl:text-[3rem] font-bold leading-[1.2]">
              your message, <br /> our words
            </h2>
            <p className=" pt-4 text-base xl:text-lg text-dark-purple font-medium">
              {t("description")}
            </p>
            <div className=" pt-7 sm:pt-10">
              <Button size={"lg"}>{t("buttonText")}</Button>
            </div>
          </div>
        </div>
        <div>
          <div className=" pt-5 lg:absolute lg:right-[12%] 2xl:top-[85%] lg:top-[40%] xl:top-[60%] sm:pt-[10rem] grid grid-cols-2 lg:flex  gap-4">
            {items.map((item, index) => (
              <div
                key={index}
                style={{
                  backgroundColor: "rgba(12, 8, 25, 0.50)",
                }}
                className="  lg:backdrop-blur-[15px] lg:max-w-[180px] py-6 px-6 rounded-[16px]"
              >
                <h2 className=" text-4xl text-white font-bold leading-normal">
                  {item.value}
                </h2>
                <p className=" text-base leading-6 text-white pt-2">
                  {item.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
