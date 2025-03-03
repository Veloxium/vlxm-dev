import About from "@/components/motion/about";
import Hero from "@/components/motion/hero";
import ZNavbar from "@/components/navbar/znavbar";

export default function Home() {
  return (
    <div>
      <ZNavbar />
      <section>
        <Hero />
      </section>
      <section>
        <About />        
      </section>
    </div>
  );
}
