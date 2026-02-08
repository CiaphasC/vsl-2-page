import type { Metadata } from "next";
import { Cinzel, Inter } from "next/font/google";

import { landingContent } from "@/lib/content/landing-content";
import { JsonLd } from "@/components/marketing/shared/json-ld";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "911 Medical Marketing | Sistema para Cirujanos Bariatricos",
  description:
    "Sistema de adquisicion de pacientes premium para cirujanos bariatricos.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={`${inter.variable} ${cinzel.variable} font-body antialiased`}>
        <JsonLd content={landingContent} />
        {children}
      </body>
    </html>
  );
}
