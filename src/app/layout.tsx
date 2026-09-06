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

const siteUrl = "https://firman-aprilian-sugiharto.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Firman Aprilian Sugiharto — Fullstack Developer",
    template: "%s — Firman Aprilian Sugiharto",
  },
  description:
    "Portfolio of Firman Aprilian Sugiharto, a Fullstack Developer building web applications, APIs, and reliable backend systems.",
  applicationName: "Firman Aprilian Sugiharto Portfolio",
  authors: [{ name: "Firman Aprilian Sugiharto" }],
  creator: "Firman Aprilian Sugiharto",
  keywords: [
    "Firman Aprilian Sugiharto",
    "Fullstack Developer",
    "Backend Developer",
    "Go Developer",
    "PHP Developer",
    "REST API",
    "PostgreSQL",
    "MySQL",
    "Docker",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    title: "Firman Aprilian Sugiharto — Fullstack Developer",
    description:
      "Portfolio of Firman Aprilian Sugiharto, a Fullstack Developer building web applications, APIs, and reliable backend systems.",
    siteName: "Firman Aprilian Sugiharto Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Firman Aprilian Sugiharto — Fullstack Developer",
    description:
      "Portfolio of Firman Aprilian Sugiharto, a Fullstack Developer building web applications, APIs, and reliable backend systems.",
  },
  robots: {
    index: true,
    follow: true,
  },
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
