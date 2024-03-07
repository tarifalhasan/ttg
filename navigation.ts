import {
  createLocalizedPathnamesNavigation,
  Pathnames,
} from "next-intl/navigation";

export const locales = ["en", "ro"] as const;
export const localePrefix = "always"; // Default

// The `pathnames` object holds pairs of internal
// and external paths, separated by locale.
export const pathnames = {
  // If all locales use the same pathname, a
  // single external path can be provided.
  "/": "/",
  "/blogs": "/blogs",

  // If locales use different paths, you can
  // specify each external path per locale.
  "/about_us": {
    en: "/about_us",
    ro: "/about_us",
  },
  "/contacts": {
    en: "/contacts",
    ro: "/contacts",
  },
  "/products": {
    en: "/products",
    ro: "/products",
  },
  // Dynamic params are supported via square brackets
  "/products/[productsSlug]-[productsId]": {
    en: "/products/[productsSlug]-[productsId]",
    ro: "/products/[productsSlug]-[productsId]",
  },

  "/blogs/[slug]-[slug]": {
    en: "/blogs/[slug]-[slug]",
    ro: "/blogs/[slug]-[slug]",
  },
  // Also (optional) catch-all segments are supported
  "/categories/[...slug]": {
    en: "/categories/[...slug]",
    ro: "/kategorien/[...slug]",
  },
} satisfies Pathnames<typeof locales>;

export const { Link, redirect, usePathname, useRouter, getPathname } =
  createLocalizedPathnamesNavigation({ locales, localePrefix, pathnames });
