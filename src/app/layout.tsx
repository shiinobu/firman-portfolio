import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";

import Navbar from "@/components/navigation/Navbar";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetBrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Firman Aprilian Sugiharto — Backend Developer",
  description:
    "Backend Developer building reliable APIs and backend systems with Go.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${jetBrainsMono.variable} antialiased`}
      >
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-5 focus:top-5 focus:z-[100] focus:rounded-lg focus:bg-primary focus:px-4 focus:py-3 focus:text-sm focus:font-semibold focus:text-white focus:outline-2 focus:outline-offset-2 focus:outline-primary"
        >
          Skip to main content
        </a>

        <Navbar />
        <div id="main-content">{children}</div>
      </body>
    </html>
  );
}
