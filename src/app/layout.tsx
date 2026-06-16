import type { Metadata } from "next";
import { Space_Grotesk, JetBrains_Mono } from "next/font/google";

import "./globals.css";

const sans = Space_Grotesk({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

const description =
  "Software developer from İstanbul. .NET / Java backend with 5+ years across financial-compliance systems, operational intelligence and modern SaaS architectures.";

export const metadata: Metadata = {
  title: "Poyraz İnan — Backend Developer (.NET / Java)",
  description,
  metadataBase: new URL("https://poyrazinan.com.tr"),
  openGraph: {
    title: "Poyraz İnan — Backend Developer (.NET / Java)",
    description,
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr" className={`${sans.variable} ${mono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
