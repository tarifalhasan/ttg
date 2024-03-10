import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ITestimonial } from "@/interfaces";
import { useTranslations } from "next-intl";

const Testimonial = ({ data }: { data: ITestimonial[] }) => {
  const t = useTranslations("testimonialTitle");
  return (
    <section
      id="testimonial"
      className=" py-12 lg:py-[72px] text-white bg-foreground"
    >
      <div className="  container max-w-[1024px] space-y-12">
        <div className=" flex justify-center">
          <div className=" inline-block">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="38"
                height="30"
                viewBox="0 0 38 30"
                fill="none"
              >
                <path
                  d="M-2.62268e-06 -4.92632e-07L-8.67594e-10 29.9901C9.56927 29.9901 17 22.438 17 12.8515L17 -1.97882e-06L-2.62268e-06 -4.92632e-07Z"
                  fill="#7C57FC"
                />
                <path
                  d="M21 29.9901L21 -4.21162e-07L38 -1.90735e-06L38 12.8515C38 22.438 30.5693 29.9901 21 29.9901Z"
                  fill="#7C57FC"
                />
              </svg>
            </div>
            <h2 className=" text-3xl font-bold text-white">{t("title")}</h2>
            <div className=" flex justify-end">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="38"
                height="30"
                viewBox="0 0 38 30"
                fill="none"
              >
                <path
                  d="M-2.62268e-06 -4.92632e-07L-8.67594e-10 29.9901C9.56927 29.9901 17 22.438 17 12.8515L17 -1.97882e-06L-2.62268e-06 -4.92632e-07Z"
                  fill="#7C57FC"
                />
                <path
                  d="M21 29.9901L21 -4.21162e-07L38 -1.90735e-06L38 12.8515C38 22.438 30.5693 29.9901 21 29.9901Z"
                  fill="#7C57FC"
                />
              </svg>
            </div>
          </div>
        </div>
        <Carousel className=" relative overflow-hidden">
          <CarouselContent className="">
            {data?.map((item, index) => (
              <CarouselItem key={index}>
                <div className=" bg-light_purple w-full rounded-es-none rounded-[16px] px-6 py-6 space-y-4">
                  <h4 className=" text-foreground text-lg leading-6">
                    {item.title}
                  </h4>
                  <div className="">
                    <p className=" text-base text-dark-purple font-normal">
                      {item.author.name}
                    </p>
                    <p className=" text-sm text-dark-purple font-normal">
                      {item.author.role}
                    </p>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
};

export default Testimonial;
