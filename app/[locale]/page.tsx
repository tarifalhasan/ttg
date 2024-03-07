import Hero from "@/components/pages/home/Hero";
import { useTranslations } from "next-intl";

export default function Index() {
  const t = useTranslations("Index");
  return (
    <h1>
      <Hero />
    </h1>
  );
}
