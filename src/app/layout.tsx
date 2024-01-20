import React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Josh Spence: Software Engineer",
  description: "Software Engineer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <link rel="icon" href="./favicon.svg" sizes="any" />
      <body
        className={`text-gray-200 from-zinc-800 to-zinc-900 bg-gradient-to-b ${inter.className}`}
      >
        {children}
      </body>
    </html>
  );
}
