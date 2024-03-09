"use client";
import { AlignJustify } from "lucide-react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Phone, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const MobileHeader = () => {
  const [header, setHeader] = useState(false);
  const [nav, setNav] = useState(false);
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
        "flex lg:hidden z-50 py-2 border-b bg-background   items-center fixed left-0 right-0 top-0"
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
              <Link href={"/"}>
                <Image
                  src={"/images/logo.svg"}
                  alt="ttg"
                  width={166}
                  height={32}
                />
              </Link>
            </div>
          </div>
          <div className="  inline-flex items-center gap-6">
            <Button size={"lg"} className="rounded-full">
              <Phone className=" w-6 h-6" />
            </Button>
          </div>
        </div>
        {nav && (
          <ul className="  flex flex-col items-center gap-1">
            <li onClick={() => setNav(false)}>
              <Link
                href={"/services"}
                className=" hover:text-primary transition-all duration-500 text-sm lg:text-lg font-medium "
              >
                servicii
              </Link>
            </li>
            <li onClick={() => setNav(false)}>
              <Link
                href={"/services"}
                className=" hover:text-primary transition-all duration-500 text-sm lg:text-lg font-medium "
              >
                pachete
              </Link>
            </li>
            <li onClick={() => setNav(false)}>
              <Link
                href={"/services"}
                className=" hover:text-primary transition-all duration-500 text-sm lg:text-lg font-medium "
              >
                despre
              </Link>
            </li>
            <li onClick={() => setNav(false)}>
              <Link
                href={"/services"}
                className=" hover:text-primary transition-all duration-500 text-sm lg:text-lg font-medium "
              >
                contact
              </Link>
            </li>
          </ul>
        )}
      </div>
    </header>
  );
};

export default MobileHeader;
