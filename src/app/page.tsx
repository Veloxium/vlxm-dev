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
        <div className="h-screen w-full bg-zprimary"></div>
      </section>
    </div>
  );
}
