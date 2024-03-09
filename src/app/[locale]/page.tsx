import Hero from "@/components/pages/home/Hero";
import { useMessages, useTranslations } from "next-intl";

export default function Index() {
  const t = useTranslations("CompanyStats");
  const messages = useMessages();

  return (
    <>
      <Hero />
    </>
  );
}
