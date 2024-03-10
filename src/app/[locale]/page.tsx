import Header from "@/components/layout/Header";
import AboutUs from "@/components/pages/home/AboutUs";
import Collaborators from "@/components/pages/home/Collaborators";
import ContactUs from "@/components/pages/home/ContactUs";
import Hero from "@/components/pages/home/Hero";
import KeyBenefits from "@/components/pages/home/KeyBenefits";
import OurMission from "@/components/pages/home/OurMission";
import Packages from "@/components/pages/home/Packages";
import Services from "@/components/pages/home/Services";
import Team from "@/components/pages/home/Team";
import Testimonial from "@/components/pages/home/Testimonial";
import { IBenefit, IService, ITestimonial, Ipackages } from "@/interfaces";
import { useMessages } from "next-intl";

export default function Index() {
  const messages = useMessages();

  return (
    <>
      <Header />
      {/* <MobileHeader /> */}
      <Hero items={messages.heroItems as any} />
      <Collaborators />
      <OurMission />
      <Services data={messages.servicesItems as unknown as IService[]} />
      <Packages data={messages.packagesItems as unknown as Ipackages[]} />
      <KeyBenefits data={messages.keyBenefitsItems as unknown as IBenefit[]} />
      <AboutUs />
      <Team />
      <Testimonial
        data={messages.testimonialsData as unknown as ITestimonial[]}
      />
      <ContactUs />
    </>
  );
}
