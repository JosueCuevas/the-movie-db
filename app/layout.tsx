import Header from "@/components/header/Header";
import "./globals.css";
import type { Metadata } from "next";
import { Source_Sans_3 } from "next/font/google";

const sourceSans = Source_Sans_3({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "The Movie DB (clone)",
  description: "React Assignment",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={sourceSans.className + "overflow-x-hidden"}>
        <Header />
        {children}
      </body>
    </html>
  );
}
