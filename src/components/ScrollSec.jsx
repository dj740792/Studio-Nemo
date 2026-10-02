
"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const ScrollSec = () => {
  const ref = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreen = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkScreen();
    window.addEventListener("resize", checkScreen);

    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const width = useTransform(
    scrollYProgress,
    [0, 1],
    isMobile ? ["60vw", "100vw"] : ["27vw", "90vw"]
  );

  const height = useTransform(
    scrollYProgress,
    [0, 1],
    isMobile ? ["48svh", "90svh"] : ["40vh", "90vh"]
  );

  const borderRadius = useTransform(
    scrollYProgress,
    [0, 1],
    ["8px", "0px"]
  );

  return (
    <section
      ref={ref}
      className="relative h-[200svh] w-full"
    >
      <div className="sticky top-0 flex h-svh w-full items-center justify-center overflow-hidden">
        <motion.div
          className="relative overflow-hidden"
          style={{
            width,
            height,
            borderRadius,
          }}
        >
          <video
            src="/WorksSrc/HeroVid.mp4"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            className="h-full w-full object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default ScrollSec;