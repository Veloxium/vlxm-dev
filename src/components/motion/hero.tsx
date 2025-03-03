"use client";

import Particles from "@/components/particles/particles";
import RotatingText from "@/components/rotating-text/rotatingText";
import { motion, useScroll, useTransform } from "framer-motion";
import { MoveUpLeft } from "lucide-react";

const SECTION_HIGH = 1260;

function Hero() {
  const { scrollY } = useScroll();
  const heroSize = useTransform(scrollY, [0, 1200], [0.14, 2.5]);
  const movetoright = useTransform(scrollY, [0, 1200], [200, 1000]);

  return (
    <section>
      <div style={{ height: SECTION_HIGH }}>
        <motion.div
          style={{
            scale: heroSize,
            top: useTransform(scrollY, [0, 1200], [-80, 0]),
          }}
          className="-z-10 fixed w-full h-screen flex flex-col items-center justify-center text-center"
        >
          <p className="text-xl md:text-4xl font-semibold">Hi There,</p>
          <p className="text-2xl md:text-6xl font-bold">
            I'm <span className="text-zprimary">Mochammad Fernanda</span>
          </p>
          <div className="flex items-center justify-center gap-2 mt-1 md:mt-3 md:gap-4">
            <p className="text-xl md:text-3xl font-semibold mb-1">a</p>
            <RotatingText
              texts={[
                "Frontend Developer",
                "React Enthusiast",
                "Tailwind Wizard",
                "Next.js Explorer",
                "Sigma Developer",
                "Skibidi Bop Bop",
                "Yes Yes Yes",
                "+1000 Aura",
              ]}
              mainClassName="px-2 sm:px-2 md:px-3 md:text-3xl bg-zsecondary text-white text-black overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-md border-2 border-b-4 border-r-4 border-zprimary"
              staggerFrom={"last"}
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-120%" }}
              staggerDuration={0.025}
              splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
              transition={{ type: "spring", damping: 30, stiffness: 400 }}
              rotationInterval={2000}
            />
            <motion.div
              className="absolute flex flex-col items-center justify-center"
              style={{
                x: movetoright,
                y: useTransform(movetoright, (value) => value + 200),
              }}
            >
              <motion.div
                initial={{ y: 0, x: 0 }}
                animate={{ y: [0, -40, 0], x: [0, 40, 0] }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  repeatType: "loop",
                  ease: "easeInOut",
                }}
              >
                <MoveUpLeft
                  className="rotate-15"
                  size={400}
                  strokeWidth={0.5}
                />
              </motion.div>
              <p className="text-[100px] w-[400vw] leading-48">
                The heck is that?😱, scroll to zoom
              </p>
            </motion.div>
          </div>
          <div
            style={{ height: SECTION_HIGH }}
            className="absolute h-screen w-screen"
          >
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
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
