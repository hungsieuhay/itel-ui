import clsx from "clsx";
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { MainLayout } from "@/layout";
import { siteConfig } from "@/config/config";

export const metadata: Metadata = {
  title: {
    default: `${siteConfig.name}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: `${siteConfig.description}`,
  icons: [
    {
      url: "/logo.svg",
      href: "/logo.svg",
    },
  ],
};

export const DMSansVN = localFont({
  src: [
    {
      path: "../public/fonts/DMSansVN-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/DMSansVN-Italic.otf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../public/fonts/DMSansVN-Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/DMSansVN-MediumItalic.otf",
      weight: "500",
      style: "italic",
    },
    {
      path: "../public/fonts/DMSansVN-Bold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/fonts/DMSansVN-BoldItalic.otf",
      weight: "700",
      style: "italic",
    },
  ],
  display: "swap",
  variable: "--font-sans",
});

export const Itel = localFont({
  src: [
    {
      path: "../public/fonts/iTel-Regular.woff",
      weight: "500",
      style: "normal",
    },
    { path: "../public/fonts/iTel-Bold.woff", weight: "700", style: "normal" },
  ],
  display: "swap",
  variable: "--font-itel",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={clsx("bg-white", DMSansVN.className, Itel.variable)}>
        <MainLayout>{children}</MainLayout>
      </body>
    </html>
  );
}
