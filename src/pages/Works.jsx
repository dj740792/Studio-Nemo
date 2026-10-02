import { AnimatePresence, motion } from "framer-motion";
import WorksBtn from "../components/WorksBtn";
import { useState } from "react";

const worksData = [
  {
    id: 1,
    img: "/WorksSrc/work1.jpg",
    video: "/WorksSrc/workVid1.mp4",
    title: "Work 01",
    type: "Film",
  },
  {
    id: 2,
    img: "/WorksSrc/Work2.png",
    video: "/WorksSrc/workVid2.mp4",
    title: "Work 02",
    type: "Film",
  },
  {
    id: 3,
    img: "/WorksSrc/work3.png",
    video: "/WorksSrc/workVid3.mp4",
    title: "Work 03",
    type: "Film",
  },
  {
    id: 4,
    img: "/WorksSrc/work4.jpg",
    video: "/WorksSrc/workVid4.mp4",
    title: "Work 04",
    type: "Film",
  },
];

const wordVariants = {
  hidden: { y: "105%", opacity: 0 },
  visible: {
    y: "0%",
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: [0.23, 1, 0.3, 1.2],
    },
  },
};
const infoVariants = {
  hidden: { y: "-105%", opacity: 0 },
  visible: {
    y: "0%",
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: [0.23, 1, 0.3, 1.2],
    },
  },
};

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.2,
    },
  },
};

const WorkCard = ({ work }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const active = isHovered || isOpen;

  return (
    <div
      className="w-full px-4 py-4 flex flex-col rounded-xl"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => setIsOpen((prev) => !prev)}
    >
      <motion.div className="relative w-full rounded-xl overflow-hidden cursor-pointer h-105 md:h-125 lg:h-120 xl:h-175">
        <motion.img
          src={work.img}
          animate={{
            filter: active
              ? "blur(10px) brightness(0.6)"
              : "blur(0px) brightness(1)",
            scale: active ? 1.05 : 1,
          }}
          transition={{ duration: 0.4 }}
          className="w-full h-full object-cover"
        />

        <AnimatePresence>
          {active && (
            <motion.div
              drag
              dragConstraints={{
                top: -10,
                left: -10,
                right: 10,
                bottom: 10,
              }}
              dragTransition={{
                bounceStiffness: 600,
                bounceDamping: 30,
              }}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 0.7 }}
              exit={{ opacity: 0, scale: 0.7 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="absolute inset-0 flex items-center justify-center z-10 p-4"
            >
              <div className="w-full h-full rounded-xl overflow-hidden">
                <video
                  src={work.video}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      <motion.div
        variants={infoVariants}
        initial="hidden"
        animate={active ? "visible" : "hidden"}
        className="flex w-full mt-3 justify-between"
      >
        <h2 className="text-base md:text-lg uppercase flex gap-3">
          <span>✦</span>
          {work.title}
        </h2>

        <p className="font-Clash-light md:text-lg tracking-tight">
          {work.type}
        </p>
      </motion.div>
    </div>
  );
};
const Works = () => {
  return (
    <section className="w-full pt-24 md:pt-32">
      <div className="mb-12 ml-4 md:ml-10 ">
        <motion.h1
          variants={wordVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl"
        >
          Our works
        </motion.h1>
        <p className="uppercase text-xs md:text-sm opacity-70 mt-2 font-Clash-light">
          (Take a look at some of our works)
        </p>
      </div>

      <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-5 px-4 lg:px-5 ">
        {worksData.map((work) => (
          <WorkCard key={work.id} work={work} />
        ))}
      </div>

      <div className="flex justify-center mt-20 lg:mt-15">
        <WorksBtn />
      </div>
    </section>
  );
};

export default Works;
