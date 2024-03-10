import { useTranslations } from "next-intl";

const AboutUs = () => {
  const t = useTranslations("aboutUs");
  return (
    <section className="container max-w-[1024px] pt-14" id="about">
      <div className=" space-y-4">
        <h2 className=" text-5xl font-bold">{t("title")}</h2>
        <div className=" grid md:grid-cols-2 gap-4 sm:gap-10">
          <div>
            <p className=" text-lg text-dark-purple">{t("description1")}</p>
          </div>
          <div>
            <p className=" text-lg text-dark-purple">{t("description1")}</p>
          </div>
        </div>
        <div className="flex py-16 justify-center">
          <div className=" inline-flex rounded-full w-[140px] bg-light_purple h-2"></div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
