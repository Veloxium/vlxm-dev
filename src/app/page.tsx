import About from "@/components/motion/about";
import Hero from "@/components/motion/hero";
import Tech from "@/components/motion/tech";
import ZNavbar from "@/components/navbar/znavbar";

export default function Home() {
  return (
    <main>
      <ZNavbar />
      <Hero />
      <About />
      <Tech />
    </main>
  );
}
