import "./globals.css";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";

const pop = Poppins({ subsets: ["latin"], display: "swap", weight: "500" });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={pop.className}>{children}</body>
    </html>
  );
}
