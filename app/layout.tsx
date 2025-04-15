import type React from "react";
import type { Metadata } from "next";
import { Heebo, Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";

const inter = Heebo({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Beyondz - Deep Tech Labs",
  description: "Boutique software firm pushing the boundaries of innovation",
  generator: "v0.dev",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* <LocomotiveScroll></LocomotiveScroll> */}
        <Header />
        {children}
      </body>
    </html>
  );
}

import "./globals.css";
import LocomotiveScroll from "@/components/L";
