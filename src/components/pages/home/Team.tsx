import { useTranslations } from "next-intl";

const Team = () => {
  const t = useTranslations("team");

  const teamdata = [
    {
      profileImage: "/images/62.png",
      name: "irina",
      role: "managing partner",
      id: 5153153151,
    },
    {
      profileImage: "/images/62.png",
      name: "elena",
      role: "partner & translator",
      id: 9985984616,
    },
  ];
  return (
    <section className="container max-w-[1024px] pb-14" id="team">
      <div className="flex flex-col lg:flex-row lg:items-center gap-y-6 gap-x-6">
        <div className=" lg:max-w-[588px]">
          <div className=" space-y-2">
            <h4 className=" text-3xl font-bold">{t("title")}</h4>
            <p className=" text-lg text-dark-purple">{t("description")}</p>
          </div>
        </div>
        <div className="grid relative overflow-hidden w-full grid-cols-2 gap-6">
          {teamdata.map((item, index) => (
            <div
              key={item.id}
              style={{
                backgroundImage: `url(${item.profileImage})`,
                padding: "120px 24px 24px 24px",
              }}
              className="flex bg-cover h-[232px] overflow-hidden after:inset-0 relative after:absolute after:w-full after:z-10 after:h-full after:bg-gteam min-h-[232px] rounded-[10px] justify-end  items-start"
            >
              <div className=" relative z-40">
                <h3 className=" text-4xl text-white font-bold">{item.name}</h3>
                <p className=" text-base font-normal text-white">{item.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
