"use client";

import { motion } from "framer-motion";
import { FaGitAlt, FaReact } from "react-icons/fa";
import { RiNextjsFill, RiVercelLine } from "react-icons/ri";
import {
  SiMongodb,
  SiNestjs,
  SiPostgresql,
  SiTailwindcss,
  SiVite,
} from "react-icons/si";

const items = [
  { Icon: RiNextjsFill, label: "Next.js" },
  { Icon: FaReact, label: "React.js" },
  { Icon: SiVite, label: "Vite" },
  { Icon: SiNestjs, label: "Nest.js" },
  { Icon: SiPostgresql, label: "PostgreSQL" },
  { Icon: SiMongodb, label: "MongoDB" },
  { Icon: SiTailwindcss, label: "Tailwind" },
  { Icon: RiVercelLine, label: "Vercel" },
  { Icon: FaGitAlt, label: "Git" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  exit: { opacity: 0, y: 20, transition: { duration: 0.5, ease: "easeOut" } },
};

function Tech() {
  return (
    <section>
      <div className="h-[150vh] bg-white py-10 px-8">
        <div className="sticky top-20 flex flex-col">
          <div className="text-zprimary text-justify flex flex-col gap-2 md:max-w-1/2 md:mx-auto w-full">
            <p className="text-4xl font-chonburi">Tech Stack</p>
            <p className="mt-6 md:text-lg">
              Here&apos;s my stack—built for crafting sleek, fast, and dynamic
              web experiences.
            </p>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              exit="exit"
              viewport={{ amount: 0.2 }}
              className="grid grid-cols-3 md:grid-cols-3 text-center gap-6 place-items-center mt-2 md:mt-4"
            >
              {items.map(({ Icon, label }, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="space-y-2"
                >
                  <Icon size={100} />
                  <motion.div
                    variants={itemVariants}
                    className="bg-zprimary text-white p-1"
                  >
                    <motion.p className="font-bold">{label}</motion.p>
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Tech;
