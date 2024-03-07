import "@/styles/globals.css";
import { Space_Grotesk as FontSans } from "next/font/google";

import Header from "@/components/layout/Header";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <Header />
        <main className=" pt-[89px]">{children}</main>
      </body>
    </html>
  );
}
