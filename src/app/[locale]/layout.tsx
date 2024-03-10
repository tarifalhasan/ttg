import { Toaster } from "@/components/ui/toaster";
import "@/styles/globals.css";
import { NextIntlClientProvider, useMessages } from "next-intl";
import { Space_Grotesk as FontSans } from "next/font/google";

import Footer from "@/components/layout/Footer";
import MobileHeader from "@/components/layout/MobileHeader";
import { cn } from "@/lib/utils";
import { Metadata } from "next";
import { useLocale } from "next-intl";
import { notFound } from "next/navigation";
import NextTopLoader from "nextjs-toploader";
const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: {
    default: "translate to go",
    template: `%s | translate to go`,
  },
  description: "translate to go",
  verification: {
    google:
      "google-site-verification=gfhLH8SIZqE4f0eVC8AX_IrSG2uL4UNK6YroEVIQ5rk",
  },
};

export default function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const l = useLocale();
  const messages = useMessages();

  if (locale !== l) {
    notFound();
  }

  return (
    <html lang={locale} suppressHydrationWarning>
      <head />
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <>
          <NextIntlClientProvider messages={messages}>
            <NextTopLoader
              initialPosition={0.08}
              crawlSpeed={200}
              height={4}
              crawl={true}
              showSpinner={true}
              easing="ease"
              speed={50}
              zIndex={1600}
              showAtBottom={false}
              color="hsl(25, 100%, 50%)"
            />
            <Toaster />

            <>
              <MobileHeader />
              {children}
              <Footer />
            </>
          </NextIntlClientProvider>
        </>
      </body>
    </html>
  );
}
