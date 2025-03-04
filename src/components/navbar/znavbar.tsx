"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";

function ZNavbar() {
  const { scrollY } = useScroll();
  const changeColor = useTransform(
    scrollY,
    [0, 1199, 1200, 2369, 2370],
    ["#FFFFFF", "#FFFFFF", "#141e46", "#141e46", "#FFFFFF"]
  );
  const changeColorText = useTransform(
    scrollY,
    [0, 1199, 1200, 2369, 2370],
    ["#141e46", "#141e46", "#FFFFFF", "#FFFFFF", "#141e46"]
  );
  

  return (
    <motion.nav
      style={{
        backgroundColor: changeColor,
        color: changeColorText,
        transition: "background-color 0.5s ease",
      }}
      className="fixed z-20 top-0 w-full flex items-center justify-between px-6 pt-2 md:px-20"
    >
      <Link href="/" className="py-4 font-chonburi">
        VLXM.DEV
      </Link>
      <a href={"/api/download"} className="zbutton">
        Download My CV
      </a>
    </motion.nav>
  );
}

export default ZNavbar;
