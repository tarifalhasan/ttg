"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Button } from "../ui/button";

const Header = () => {
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
        "flex py-5  h-[88px]  items-center fixed left-0 right-0 top-0",
        header ? "bg-background" : " bg-transparent"
      )}
    >
      <div
        className={cn(
          "flex py-5  h-[88px] items-center container justify-between"
        )}
      >
        <div className="flex items-center lg:gap-x-20">
          <Link href={"/"}>
            <Image src={"/images/logo.svg"} alt="ttg" width={166} height={32} />
          </Link>
          <ul className="  inline-flex items-center gap-8">
            <li>
              <Link
                href={"/services"}
                className=" hover:text-primary transition-all duration-500 text-sm lg:text-lg font-medium "
              >
                servicii
              </Link>
            </li>
            <li>
              <Link
                href={"/services"}
                className=" hover:text-primary transition-all duration-500 text-sm lg:text-lg font-medium "
              >
                pachete
              </Link>
            </li>
            <li>
              <Link
                href={"/services"}
                className=" hover:text-primary transition-all duration-500 text-sm lg:text-lg font-medium "
              >
                despre
              </Link>
            </li>
            <li>
              <Link
                href={"/services"}
                className=" hover:text-primary transition-all duration-500 text-sm lg:text-lg font-medium "
              >
                contact
              </Link>
            </li>
          </ul>
        </div>
        <div className="  inline-flex items-center gap-6">
          <Button size={"lg"} className=" px-6 rounded-full">
            sună acum
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
