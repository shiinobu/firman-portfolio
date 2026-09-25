import type { Metadata, Viewport } from "next";
import { Archivo, JetBrains_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

import Footer from "@/components/layout/Footer";
import Navbar from "@/components/navigation/Navbar";
import { site } from "@/config/site";
import "./globals.css";

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  axes: ["wdth"],
  display: "swap",
});

const jetBrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  display: "swap",
});

// Metadata is merged shallowly across segments, so openGraph, twitter and
// alternates are deliberately NOT set here. Each page sets its own.
export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} | ${site.role}`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  applicationName: site.name,
  authors: [{ name: site.name }],
  creator: site.name,
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#f5f6f2",
};

// Runs before first paint so a saved dark preference never flashes light.
const themeScript = `try{var t=localStorage.getItem("theme");if(t==="dark"||t==="light"){document.documentElement.dataset.theme=t}}catch(e){}`;

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.name,
  jobTitle: site.role,
  url: site.url,
  sameAs: [site.github, site.jobstreet],
  knowsAbout: [
    "Go",
    "TypeScript",
    "React",
    "Next.js",
    "PostgreSQL",
    "MySQL",
    "REST APIs",
    "WebSocket",
    "Docker",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-theme="light"
      suppressHydrationWarning
      className={`${archivo.variable} ${jetBrainsMono.variable}`}
    >
      <body className="bg-paper font-sans text-ink antialiased">
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(personJsonLd).replace(/</g, "\\u003c"),
          }}
        />

        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>

        <Navbar />
        <main id="main-content">{children}</main>
        <Footer />

        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
