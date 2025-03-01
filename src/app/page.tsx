import Particles from "@/components/particles/particles";
import RotatingText from "@/components/rotating-text/rotatingText";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <nav className="fixed bg-white z-20 top-0 w-full flex items-center justify-between px-6 pt-2">
        <Link href="/" className="p-4 text-zprimary font-chonburi">
          VLXM.DEV
        </Link>
        <button className="zbutton">Download My CV</button>
      </nav>
      <section>
        <div className="relative flex flex-col items-center justify-center h-screen">
          <div className="absolute top-0 left-0 w-full h-full">
          <Particles
            particleColors={["#141e46", "#5e7eff"]}
            particleCount={200}
            particleSpread={6}
            speed={0.1}
            particleBaseSize={100}
            moveParticlesOnHover={true}
            alphaParticles={false}
            disableRotation={false}
          />
          </div>
          <p className="text-xl font-semibold">Hi There,</p>
          <p className="text-2xl font-bold">
            I'm <span className="text-zprimary">Mochammad Fernanda</span>
          </p>
          <div className="flex items-center justify-center gap-2 mt-1">
            <p className="text-xl font-semibold mb-1">a</p>
            <RotatingText
              texts={[
                "Frontend Developer",
                "React Enthusiast",
                "Tailwind Wizard",
                "Next.js Explorer",
                "Sigma Developer",
              ]}
              mainClassName="px-2 sm:px-2 md:px-3 bg-zsecondary text-white text-black overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-md"
              staggerFrom={"last"}
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-120%" }}
              staggerDuration={0.025}
              splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
              transition={{ type: "spring", damping: 30, stiffness: 400 }}
              rotationInterval={2000}
            />
          </div>
        </div>
      </section>
      <section>
        <div className="h-screen"></div>
      </section>
    </div>
  );
}
