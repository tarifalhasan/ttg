import { useMessages, useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  const message = useMessages();
  const t = useTranslations("footer");
  const a = useTranslations("AREAS");
  const SDATA = message.footerServices as unknown as any[];
  return (
    <footer className="bg-light-gray ">
      <div className="   px-4 sm:px-4 py-12 lg:px-10 2xl:container 2xl:px-10 flex justify-between flex-col lg:flex-row  lg:items-center">
        <div className=" space-y-6  lg:max-w-72 flex flex-col justify-between">
          <div className=" space-y-6">
            <Link href={"/"}>
              <Image
                src={"/images/logo.svg"}
                alt="ttr"
                width={179}
                height={34}
              />
            </Link>
            <p className=" text-base font-normal text-[#606060]">
              {t("description")}
            </p>
          </div>
          <p className=" text-base font-normal text-[#606060]">
            © 2023 TTG SRL. All rights reserved.
          </p>
        </div>
        <div className=" gap-9 flex  flex-col  md:flex-row md:items-start">
          <div>
            <h3 className=" text-lg font-bold">{t("servicesTitle")}</h3>
            <ul className=" pt-4 space-y-4">
              {SDATA.map((data, index) => (
                <li
                  key={index}
                  className=" text-base font-normal text-[#606060]"
                >
                  {data}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className=" text-lg font-bold">{a("title")}</h3>
            <ul className=" pt-4 space-y-4">
              <li className=" text-base font-normal text-[#606060]">
                {a("1")}
              </li>
              <li className=" text-base font-normal text-[#606060]">
                {a("2")}
              </li>
              <li className=" text-base font-normal text-[#606060]">
                {a("3")}
              </li>
              <li className=" text-base font-normal text-[#606060]">
                {a("4")}
              </li>
              <li className=" text-base font-normal text-[#606060]">
                {a("5")}
              </li>
              <li className=" text-base font-normal text-[#606060]">
                {a("6")}
              </li>
            </ul>
          </div>
          <div className="  h-full">
            <h3 className=" text-lg font-bold">social</h3>
            <div className=" h-full flex flex-col justify-between">
              <ul className=" pt-3 flex items-center  gap-4">
                <li>
                  <Link href={"/"} target="_blank">
                    <FaFacebook className=" w-5 h-5 hover:text-primary  transition-all duration-700" />
                  </Link>
                </li>
                <li>
                  <Link href={"/"} target="_blank">
                    <FaTwitter className=" w-5 h-5 hover:text-primary  transition-all duration-700" />
                  </Link>
                </li>
                <li>
                  <Link href={"/"} target="_blank">
                    <FaInstagram className=" w-5 h-5 hover:text-primary  transition-all duration-700" />
                  </Link>
                </li>
                <li>
                  <Link href={"/"} target="_blank">
                    <FaYoutube className=" w-5 h-5 hover:text-primary  transition-all duration-700" />
                  </Link>
                </li>
              </ul>
              <ul className=" pt-6 space-y-1">
                <li className=" text-base font-normal text-[#606060]">
                  <Link href={"/"}>terms of use</Link>
                </li>
                <li className=" text-base font-normal text-[#606060]">
                  <Link href={"/"}>privacy policy</Link>
                </li>{" "}
                <li className=" text-base font-normal text-[#606060]">
                  <Link href={"/"}>contact</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
