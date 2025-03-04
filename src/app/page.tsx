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
      <footer>
        <div className="h-40 w-full bg-white flex justify-center items-center text-xl text-center italic pb-10">
          <p>"Stay Hungry, Stay Foolish."</p>
        </div>
        <div className="h-16 bg-zprimary flex justify-center items-center">
          <p className="text-white">© 2025 Veloxium</p>
        </div>
      </footer>
    </main>
  );
}
