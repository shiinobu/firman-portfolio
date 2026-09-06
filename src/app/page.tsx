import Navbar from "@/components/navigation/Navbar";
import About from "@/components/sections/About";
import Hero from "@/components/sections/Hero"
import TechStack from "@/components/sections/TechStack";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <About />
        <TechStack />
      </main>
    </>
  );
}