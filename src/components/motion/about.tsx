"use client";

import { motion } from "framer-motion";
import { Plane } from "lucide-react";
import { CiLinkedin } from "react-icons/ci";
import { FiGithub, FiInstagram } from "react-icons/fi";
import { MdOutlineAttachEmail } from "react-icons/md";

function About() {
  return (
    <section>
      <div className="h-[150vh] w-full bg-zprimary text-white px-8 py-10 md:py-40">
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
              className="-rotate-45 -mt-30 md:-mt-56 text-zprimary"
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
            className="text-justify flex flex-col items-start gap-2 md:max-w-1/2"
          >
            <p className="text-4xl font-chonburi">ABOUT ME</p>
            <p className="mt-6 md:text-lg">
              I&apos;m Mochammad Fernanda — a passionate frontend developer who loves
              building sleek, interactive, and high-performance web
              applications. With a strong focus on{" "}
              <span className="text-zsecondary">React.js</span> and{" "}
              <span className="text-zsecondary">Next.js</span>
            </p>
            <p className="md:text-lg">
              Whether it&apos;s designing intuitive dashboards, creating seamless
              user experiences, or optimizing web performance, I&apos;m always up for{" "}
              <span className="text-yellow-400">the challenge</span>. Let&apos;s
              build something amazing together!
            </p>
            <p className="text-xl font-chonburi mt-4 underline">
              Let&apos;s Connect
            </p>
            <div className="mt-4 flex gap-x-10 gap-y-6 w-full flex-wrap ">
              <a
                href="https://github.com/Veloxium"
                rel="noreferrer"
                target="_blank"
                className="flex items-center gap-2 hover:underline"
              >
                <FiGithub size={26} />
                Veloxium
              </a>
              <a
                href="https://www.linkedin.com/in/mochammad-fernanda/"
                rel="noreferrer"
                target="_blank"
                className="flex items-center gap-2 hover:underline"
              >
                <CiLinkedin size={26} />
                Mochammad Fernanda
              </a>
              <a
                href="mailto:veloxium.dev@gmail.com"
                rel="noreferrer"
                target="_blank"
                className="flex items-center gap-2 hover:underline"
              >
                <MdOutlineAttachEmail size={26} />
                veloxium.dev@gmail.com
              </a>
              <a
                href="https://www.instagram.com/mchfrnnda_/"
                rel="noreferrer"
                target="_blank"
                className="flex items-center gap-2 hover:underline"
              >
                <FiInstagram size={26} />
                mchfrnnda_
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default About;
