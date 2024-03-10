import { useTranslations } from "next-intl";

const OurMission = () => {
  const t = useTranslations("ourMission");
  return (
    <section className=" py-10 xl:py-14 container max-w-[1024px]">
      <div className=" flex flex-col lg:flex-row lg:items-center justify-between gap-8">
        <div className=" inline-flex items-center gap-4">
          <div className=" bg-[#E4DDFE] w-2  h-[102px] lg:h-[140px] rounded-full"></div>
          <div className=" max-w-44">
            <h2 className=" text-5xl font-bold">{t("title")}</h2>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <div className="">
            <p className=" text-2xl leading-[30px]  text-dark-purple font-bold">
              {t("description1")}
            </p>
            <p className=" text-2xl leading-[30px] text-purple font-bold">
              {t("description2")}
            </p>
          </div>
          <div className=" bg-[#E4DDFE] w-2  h-[200px] lg:h-[140px] rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default OurMission;
