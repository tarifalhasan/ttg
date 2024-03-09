"use client";

import { Link } from "@/navigation";
import { ChevronDown } from "lucide-react";
import { useLocale } from "next-intl";
import { useEffect, useRef, useState } from "react";

const LocaleSwitcher = ({ path }: { path: any }) => {
  const locale = useLocale();
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative inline-block text-left" ref={menuRef}>
      <div>
        <span className="rounded-md shadow-sm">
          <button
            type="button"
            aria-label="open_locale"
            onClick={() => setIsOpen(!isOpen)}
            className="inline-flex items-center justify-center w-full rounded-full border-2 border-gray-300 px-4 py-2 bg-transparent text-sm leading-5 font-medium   text-red-400 focus:outline-none focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 transition ease-in-out duration-150"
            aria-haspopup="true"
            aria-expanded="true"
          >
            {locale === "en" ? "🇺🇸 EN" : "🇷🇴 ro"}
            <ChevronDown className=" w-5 h-5" />
          </button>
        </span>
      </div>

      {isOpen && (
        <div className="origin-top-right absolute right-0 mt-2 w-40 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          <div
            className="py-1"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            <Link
              href={path}
              locale="en"
              className="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900"
              role="menuitem"
            >
              🇺🇸 Eng
            </Link>
            <Link
              href={path}
              locale="ro"
              className="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900"
              role="menuitem"
            >
              🇷🇴 ro
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default LocaleSwitcher;
