import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";
import Experience from "@/components/sections/Experience";
import Hero from "@/components/sections/Hero";
import TechStack from "@/components/sections/TechStack";
import Work from "@/components/sections/Work";
import { site } from "@/config/site";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  description: site.description,
  path: "/",
});

export default function Home() {
  return (
    <>
      <Hero />
      <Work />
      <About />
      <TechStack />
      <Experience />
      <Contact />
    </>
  );
}
