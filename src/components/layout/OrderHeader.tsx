"use client";
import { cn } from "@/lib/utils";
import { useLocale, useMessages } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import LocaleSwitcher from "../LanguageSwitcher";
import { Button } from "../ui/button";

interface MenuItem {
  en: string;
  ro: string;
  href: string;
  id: number;
}

export const menuItems: MenuItem[] = [
  {
    en: "servicies",
    ro: "servicii",
    href: "/servicies",
    id: 1,
  },
  {
    en: "packages",
    ro: "pachete",
    href: "/packages",
    id: 2,
  },
  {
    en: "about",
    ro: "despre",
    href: "/about",
    id: 3,
  },
  {
    en: "contact",
    ro: "contact",
    href: "/contacts",
    id: 4,
  },
];

const OrderHeader = () => {
  const messages = useMessages();
  const headerData = messages.header as unknown as any[];
  const [header, setHeader] = useState(false);

  const pathName = usePathname();
  const local = useLocale();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setHeader(true);
      } else {
        setHeader(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={cn(
        " hidden lg:flex py-5 z-50 h-[88px] items-center    sticky left-0 right-0 top-0",
        header ? "backdrop-blur-sm bg-white/[0.8] " : " bg-light-gray"
      )}
    >
      <div
        className={cn(
          "flex py-5 h-[88px] items-center container justify-between"
        )}
      >
        <div className="flex items-center lg:gap-x-20">
          <Link href={"/"}>
            <Image src={"/images/logo.svg"} alt="ttg" width={166} height={32} />
          </Link>
          <ul className="inline-flex items-center gap-8">
            {headerData.map((data, index) => (
              <li key={index}>
                <Link
                  href={data.href as string}
                  className="hover:text-primary transition-all duration-500 text-sm lg:text-lg font-medium"
                >
                  {data.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="inline-flex items-center gap-6">
          <LocaleSwitcher path={`/${pathName.split("/").slice(2).join("/")}`} />
          <Link href={"/en/order"}>
            <Button size={"lg"} className="px-6 rounded-full">
              {local === "en" ? "call now" : "sună acum"}
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default OrderHeader;
