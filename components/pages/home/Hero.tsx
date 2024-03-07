import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <div className="bg-[length:100%_94%]  xl:bg-[length:100%_87%]  2xl:bg-[length:100%_99%]  relative z-10 overflow-hidden  lg:bg-hero  lg:min-h-screen 2xl:min-h-[90vh]  w-full bg-no-repeat ">
      <div className=" flex flex-col md:flex-row justify-between gap-5 container w-full">
        <div className=" pt-[7.5rem]  xl:absolute  xl:top-[17%] xl:-translate-y-[17%]">
          <div className=" max-w-[450px] xl:max-w-[532px]">
            <h2 className=" text-[2.5rem] xl:text-[3rem] font-bold leading-[1.2]">
              your message, <br /> our words
            </h2>
            <p className=" pt-4 text-base xl:text-lg text-dark-purple font-medium">
              agenția noastră se concentrează pe două aspecte esențiale în orice
              proiect: calitatea traducerii și rapiditatea cu care ne achităm de
              responsabilități față de clienții noștri.
            </p>
            <div className=" pt-7 sm:pt-10">
              <Button size={"lg"}>comandă online</Button>
            </div>
          </div>
        </div>
        <div>
          <div className=" pt-12 sm:pt-[10rem] lg:hidden grid grid-cols-2 gap-4">
            <div
              style={{
                backgroundColor: "rgba(12, 8, 25, 0.50)",
              }}
              className=" py-6 px-6 rounded-[16px]"
            >
              <h2 className=" text-4xl text-white font-bold leading-normal">
                1600
              </h2>
              <p className=" text-base leading-6 text-white pt-2">
                comenzi livrate in 35 de limbi{" "}
              </p>
            </div>
            <div
              style={{
                backgroundColor: "rgba(12, 8, 25, 0.50)",
              }}
              className=" py-6 px-6 rounded-[16px]"
            >
              <h2 className=" text-4xl text-white font-bold leading-normal">
                980
              </h2>
              <p className=" text-base leading-6 text-white pt-2">
                parteneri si clienti multumiti
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
