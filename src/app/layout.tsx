import { ReactNode } from "react";
import type { Metadata } from "next";
import { GoBackButton } from "@/app/ui";
import "./globals.css";

type RootLayoutProps = {
  children: ReactNode;
};

export const metadata: Metadata = {
  title: "Redis Test App",
  description: "Testing Redis with Next.js",
};

const RootLayout = ({ children }: RootLayoutProps) => (
  <html lang="en">
    <body className="bg-cyan-200 h-screen">
      <GoBackButton />
      {children}
    </body>
  </html>
);

export default RootLayout;
