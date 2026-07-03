import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  style: ["normal", "italic"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Floss & Gloss | Custom Press-On Nails for a Cause",
  description:
    "Handmade, fully customizable press-on nails from Floss & Gloss. 100% of proceeds benefit the Texas Dental Association Smiles Foundation, supporting oral health access across Texas.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-cream text-charcoal">
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
