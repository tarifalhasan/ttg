import Collaborators from "@/components/pages/home/Collaborators";
import Hero from "@/components/pages/home/Hero";
import OurMission from "@/components/pages/home/OurMission";
import Packages from "@/components/pages/home/Packages";
import Services from "@/components/pages/home/Services";
import { IService, Ipackages } from "@/interfaces";
import { useMessages } from "next-intl";

export default function Index() {
  const messages = useMessages();

  return (
    <>
      <Hero items={messages.heroItems as any} />
      <Collaborators />
      <OurMission />
      <Services data={messages.servicesItems as unknown as IService[]} />
      <Packages data={messages.packagesItems as unknown as Ipackages[]} />
    </>
  );
}
