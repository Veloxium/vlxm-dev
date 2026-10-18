"use client";
import { useLayoutEffect, useState } from "react";

export function usePageReady() {
  const [isReady, setIsReady] = useState(false);

  useLayoutEffect(() => {
    const raf = requestAnimationFrame(() => {
      // Tunggu layout calculation selesai
      setIsReady(true);
    });

    return () => cancelAnimationFrame(raf);
  }, []);

  return isReady;
}
