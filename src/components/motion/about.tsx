"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpFromDotIcon, Plane } from "lucide-react";
import { useRef } from "react";

function About() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "start 20vh"],
  });
  const opacity = useTransform(scrollYProgress, [0, 0.1], [1, 0]);

  return (
    <div
      ref={ref}
      className="h-[250vh] w-full bg-zprimary text-white px-8 py-10"
    >
      <div className="sticky top-20 flex flex-col items-center">
        <motion.div
          initial={{ y: 0 }}
          animate={{ y: [0, -40, 0] }}
          transition={{
            duration: 1,
            repeat: Infinity,
            repeatType: "loop",
            ease: "easeInOut",
          }}
        >
          <Plane
            size={28}
            className="-rotate-45 -mt-30 text-zprimary"
            fill="#fff"
          />
          <div className="flex justify-center  gap-1.5 mt-1">
            <div className="h-4 w-0.5 bg-zprimary" />
            <div className="h-6 w-0.5 bg-zprimary mt-1" />
            <div className="h-4 w-0.5 bg-zprimary" />
          </div>
        </motion.div>
        <motion.div
          style={{ opacity }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2"
        >
          <p className="text-xl font-chonburi">ABOUT ME</p>
          <p></p>
        </motion.div>
      </div>
    </div>
  );
}

export default About;
