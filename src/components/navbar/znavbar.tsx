"use client";
import Link from "next/link";
import { motion, useScroll, useTransform, useMotionValue } from "framer-motion";

function ZNavbar() {
  const { scrollY } = useScroll();
  const changeColor = useTransform(
    scrollY,
    [0, 1199, 1200],
    ["#FFFFFF", "#FFFFFF", "#141e46"]
  );
  const changeColorText = useTransform(
    scrollY,
    [0, 1199, 1200],
    ["#141e46", "#141e46", "#FFFFFF"]
  );

  return (
    <motion.nav
      style={{
        backgroundColor: changeColor,
        color: changeColorText,
        transition: "background-color 0.5s ease",
      }}
      className="fixed z-20 top-0 w-full flex items-center justify-between px-6 pt-2"
    >
      <Link href="/" className="p-4 font-chonburi">
        VLXM.DEV
      </Link>
      <button className="zbutton">Download My CV</button>
    </motion.nav>
  );
}

export default ZNavbar;
