import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";
import Image from "next/image";

const Hero = ({ items }: { items: any[] }) => {
  const t = useTranslations("HomeHero");

  return (
    <div className="hero_bg  bg-clip-border z-20 relative overflow-hidden bg-light-gray h-[calc(100vh)] 2xl:h-[80vh] bg-cover">
      <div className="  relative  overflow-hidden container w-full h-full">
        <div className=" top-[42%] z-40 -translate-y-[42%]  lg:absolute 2xl:left-[10%] container  ">
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
          <div className=" pt-5 z-40 lg:absolute right-0 top-[65%] -translate-y-[65%]  grid grid-cols-2 lg:flex  gap-4">
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
      <Image
        className=" w-[52%] xl:w-[55%] 2xl:w-[auto] hidden lg:block z-10 absolute right-0 top-0"
        src={"/images/5.svg"}
        alt="dfdfd"
        width={700}
        height={702}
      />
    </div>
  );
};

export default Hero;
