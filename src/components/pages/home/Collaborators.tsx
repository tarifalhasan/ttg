import Image from "next/image";

interface Logos {
  color?: string;
  name: string;
}

const Collaborators = () => {
  const logos: Logos[] = [
    {
      name: "/images/collaborate/1.png",
    },
    {
      name: "/images/collaborate/2.png",
    },
    {
      name: "/images/collaborate/3.png",
    },
    {
      name: "/images/collaborate/4.png",
    },
    {
      name: "/images/collaborate/5.png",
    },
  ];

  return (
    <div className="  py-8 max-w-[1024px] space-y-4 container">
      <h2 className=" text-4xl font-bold">collaborators</h2>
      <div className=" grid grid-cols-2 gap-3 justify-between sm:grid-cols-3 xl:grid-cols-5">
        <>
          {logos.map((logo, index) => (
            <div key={index}>
              <Image
                className=" w-36"
                width={169}
                height={54}
                src={logo.name}
                alt="dfdfdf"
              />
            </div>
          ))}
        </>
      </div>
    </div>
  );
};

export default Collaborators;
