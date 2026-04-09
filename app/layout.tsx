import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import MixpanelInit from "./MixpanelInit";
import FacebookPixel from "./FacebookPixel";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "VendorFind — AI that finds markets & events for vendors",
  description:
    "An AI agent that finds craft fairs, farmers markets, pop-ups, and trade events matched to what you sell. Join the waitlist for early access.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <MixpanelInit />
        <FacebookPixel />
        {children}
      </body>
    </html>
  );
}
