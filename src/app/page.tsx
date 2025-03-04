import ZFooter from "@/components/footer/zfooter";
import About from "@/components/motion/about";
import Hero from "@/components/motion/hero";
import Project from "@/components/motion/project";
import Tech from "@/components/motion/tech";
import ZNavbar from "@/components/navbar/znavbar";

export default function Home() {
  return (
    <main>
      <ZNavbar />
      <Hero />
      <About />
      <Tech />
      <Project />
      <ZFooter />
    </main>
  );
}
