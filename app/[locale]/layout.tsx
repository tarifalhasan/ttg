import "@/styles/globals.css";
import { Space_Grotesk as FontSans } from "next/font/google";

import Header from "@/components/layout/Header";
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
    default: "เครื่องคิดเงิน POS l SUNMITH พร้อมโปรแกรมขายหน้าร้าน",
    template: `%s | เครื่องคิดเงิน POS l SUNMITH พร้อมโปรแกรมขายหน้าร้าน`,
  },
  description:
    "SUNMITH เครื่องคิดเงิน POS หลายรุ่นให้เลือกใช้ตามความเหมาะสมของหน้าร้าน เป็นได้ทั้ง เครื่องคิดเงิน ร้านค้า ระบบ POS ร้านอาหาร",
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

  // Show a 404 error if the user requests an unknown locale
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
        <Header />
        <MobileHeader />
        <main>{children}</main>
      </body>
    </html>
  );
}
