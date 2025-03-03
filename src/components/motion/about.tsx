"use client";

import { motion } from "framer-motion";
import { Plane } from "lucide-react";

function About() {
  return (
    <section>
      <div className="h-[150vh] w-full bg-zprimary text-white px-8 py-10">
        <div className="sticky top-40 flex flex-col items-center">
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
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ amount: 0.9 }}
            transition={{ ease: "easeInOut" }}
            className="text-justify flex flex-col items-start gap-2"
          >
            <p className="text-4xl font-chonburi">ABOUT ME</p>
            <p className="mt-6">
              I'm Mochammad Fernanda — a passionate frontend developer who loves
              building sleek, interactive, and high-performance web
              applications. With a strong focus on{" "}
              <span className="text-zsecondary">React.js</span> and{" "}
              <span className="text-zsecondary">Next.js</span>
            </p>
            <p>
              Whether it's designing intuitive dashboards, creating seamless
              user experiences, or optimizing web performance, I'm always up for{" "}
              <span className="text-yellow-400">the challenge</span>. Let's
              build something amazing together!
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default About;
