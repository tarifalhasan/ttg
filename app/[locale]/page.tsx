import Hero from "@/components/pages/home/Hero";
import { useTranslations } from "next-intl";

export default function Index() {
  const translate = useTranslations("Header");

  return (
    <h1>
      <Hero />
    </h1>
  );
}
