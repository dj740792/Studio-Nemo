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
    offset: ["start end", "end start"],
  });

  const width = useTransform(
    scrollYProgress,
    [0, 0.5],
    isMobile ? ["60vw", "80vw"] : ["27vw", "90vw"],
  );

  const height = useTransform(
    scrollYProgress,
    [0, 0.5],
    isMobile ? ["48svh", "84svh"] : ["40vh", "90vh"],
  );

  const borderRadius = useTransform(scrollYProgress, [0, 0.4], ["8px", "8px"]);

  return (
    <section ref={ref} className="relative h-[170vh] md:h-[200vh]">
      <div className="sticky top-3 md:top-10 h-[calc(100svh-0.75rem)] md:h-screen flex items-start justify-center overflow-hidden">
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
            className="w-full h-full object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default ScrollSec;
