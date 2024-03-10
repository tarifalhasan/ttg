import { Button } from "@/components/ui/button";
import { Ipackages } from "@/interfaces";
import { useTranslations } from "next-intl";
import Image from "next/image";

const Packages = ({ data }: { data: Ipackages[] }) => {
  const t = useTranslations("packagesSection");
  return (
    <section className="bg-[#F4F6F9] py-12" id="packages">
      <div className=" container max-w-[1024px]">
        <div className=" flex flex-col space-y-5 lg:flex-row lg:items-start lg:justify-between">
          <div>
            <h2 className=" text-4xl font-bold">{t("title")}</h2>
            <p className=" text-lg text-dark-purple font-medium pt-5">
              {t("description")}
            </p>
          </div>
          <Button size={"lg"}>{t("btnText")}</Button>
        </div>
        <div className=" pt-9">
          <div className=" grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {data?.map((item, index) => (
              <div
                className=" flex flex-col justify-between relative px-5 py-8 xl:px-6 bg-white space-y-6  rounded-[16px]"
                key={index + 10000000}
              >
                <div className="  space-y-4">
                  <div>
                    <Image
                      src={item.icon}
                      alt={item.title}
                      width={40}
                      className=" w-10"
                      height={40}
                    />
                  </div>
                  <h2 className=" text-4xl font-bold">{item.title}</h2>
                  <ul className=" space-y-2">
                    {item.features.map((feature, index) => (
                      <li
                        className=" text-base space-x-1 font-normal inline-flex items-start"
                        key={index}
                      >
                        <span>{index + 1}.</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <ul className="  ">
                  {item.otherFeatures.map((feature, index) => (
                    <li
                      className=" text-base text-[#6C6377] space-x-1 font-normal inline-flex items-start"
                      key={index}
                    >
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Packages;
