import { IBenefit } from "@/interfaces";
import { useTranslations } from "next-intl";
import Image from "next/image";

const KeyBenefits = ({ data }: { data: IBenefit[] }) => {
  const t = useTranslations("keyBenefits");
  return (
    <section
      id="key_benefits"
      className="bg-[#E4DDFE] py-14 xl:py-20 relative overflow-hidden"
    >
      <div className=" relative z-20 container max-w-[1024px]">
        <div>
          <h2 className=" text-4xl font-bold">{t("title")}</h2>
          <p className=" max-w-2xl text-lg text-dark-purple font-medium pt-5">
            {t("description")}
          </p>
        </div>
        <div className=" pt-7 grid sm:grid-cols-2 gap-6">
          {data?.map((item, index) => (
            <div key={index} className=" bg-white space-y-2 rounded-[16px] p-6">
              <h2 className=" text-4xl font-bold">{item.title}</h2>
              <p className=" text-base font-normal">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
      <Image
        src={"/images/bulp1.png"}
        alt="gradient"
        width={542}
        height={542}
        className=" z-10 max-w-[400px] absolute right-0 top-0"
      />
      <Image
        src={"/images/bulp2.png"}
        alt="gradient"
        width={542}
        height={542}
        className=" z-10 max-w-[400px] absolute left-0 bottom-0"
      />
    </section>
  );
};

export default KeyBenefits;
