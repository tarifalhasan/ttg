"use client";
import { AlignJustify } from "lucide-react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Phone, X } from "lucide-react";
import { useMessages } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import LocaleSwitcher from "../LanguageSwitcher";

const MobileHeader = () => {
  const [header, setHeader] = useState(false);
  const [nav, setNav] = useState(false);
  const messages = useMessages();
  const headerData = messages.header as unknown as any[];
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
  });
  return (
    <header
      className={cn(
        "flex lg:hidden z-50 py-2 border-b bg-background   items-center  sticky left-0 right-0 top-0"
      )}
    >
      <div className=" w-full">
        <div
          className={cn("flex py-5  items-center container justify-between")}
        >
          <div className="flex items-center gap-x-6">
            <div>
              {nav ? (
                <X
                  onClick={() => setNav((prev) => !prev)}
                  className=" w-6  h-6 block"
                />
              ) : (
                <AlignJustify
                  onClick={() => setNav((prev) => !prev)}
                  className=" w-6  h-6 block"
                />
              )}
            </div>
            <div>
              <a href={"/"}>
                <Image
                  src={"/images/logo.svg"}
                  alt="ttg"
                  width={166}
                  height={32}
                />
              </a>
            </div>
          </div>
          <Link href={"/en/order"} className="  inline-flex items-center gap-6">
            <Button size={"lg"} className="rounded-full">
              <Phone className=" w-6 h-6" />
            </Button>
          </Link>
        </div>
        {nav && (
          <ul className="  flex flex-col justify-center items-center gap-1">
            {headerData?.map((data, index) => (
              <li className=" block" onClick={() => setNav(false)} key={index}>
                <Link
                  href={data.href as string}
                  className="hover:text-primary transition-all duration-500 text-sm lg:text-lg font-medium"
                >
                  {data.label}
                </Link>
              </li>
            ))}
          </ul>
        )}
        {nav && (
          <div className=" py-2 flex justify-center">
            <LocaleSwitcher path={"/order"} />
          </div>
        )}
      </div>
    </header>
  );
};

export default MobileHeader;
