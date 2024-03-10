import { IService } from "@/interfaces";
import { useTranslations } from "next-intl";
import Image from "next/image";

const Services = ({ data }: { data: IService[] }) => {
  const t = useTranslations("services");
  return (
    <section id="services" className=" container max-w-[1024px] py-8 lg:py-10">
      <div>
        <div className=" pb-14">
          <h2 className=" text-4xl font-bold">{t("title")}</h2>
        </div>
        <div className="  grid grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-12">
          {data.map((item, index) => (
            <div key={item.id} className=" space-y-2">
              <div>
                <div className=" w-[72px] h-[72px] rounded-[24px] flex items-center justify-center bg-[#E4DDFE]">
                  <Image
                    src={item.icon}
                    alt={item.title}
                    width={26}
                    className=" w-[26px] "
                    height={26}
                  />
                </div>
              </div>
              <h2 className=" text-2xl font-bold">{item.title}</h2>
              <p className=" text-base font-normal text-dark-purple">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
