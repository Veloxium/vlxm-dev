"use client";
import { usePageReady } from "./usepageready";
import LoadingScreen from "./loading";
import { AnimatePresence } from "framer-motion";

export default function PageWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const isReady = usePageReady();

  return (
    <>
      <AnimatePresence>{!isReady && <LoadingScreen />}</AnimatePresence>
      <div
        className={`${
          !isReady ? "opacity-0" : "opacity-100"
        } transition-opacity duration-700`}
      >
        {isReady && children}
      </div>
    </>
  );
}
