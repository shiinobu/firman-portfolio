import Navbar from "@/components/navigation/Navbar";
import About from "@/components/sections/About";
import Experience from "@/components/sections/Experience";
import Hero from "@/components/sections/Hero";
import Projects from "@/components/sections/Projects";
import TechStack from "@/components/sections/TechStack";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <About />
        <TechStack />
        <Projects />
        <Experience />
      </main>
    </>
  );
}