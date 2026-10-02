import { motion } from "framer-motion";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: {
    y: 40,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: [0.23, 1, 0.32, 1],
    },
  },
};

const Hero = () => {
  const heroText = [
    "WE ARE",
    "PHOTOGRAPHY &",
    "FILM",
    "STUDIO CREATING",
    "TIMELESS VISUALS",
    "FOR MODERN",
    "BRANDS",
  ];

  const logo = "NEMO";

  return (
    <section className="min-h-screen px-4 md:px-8 lg:px-12 pt-44 md:pt-60 lg:pt-55 2xl:pt-52 flex flex-col ">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="flex flex-col gap-20  xl:gap-2 2xl:gap-15 md:gap-20 "
      >
        {/* TOP CONTENT */}
        <div className="flex flex-col md:flex-row justify-between lg:justify-around xl:justify-around md:justify-between 2xl:justify-around gap-12  ">
          {/* LEFT */}
          <motion.div variants={containerVariants} className="uppercase">
            {heroText.map((line, index) => (
              <div key={index} className="overflow-hidden">
                <motion.p
                  variants={itemVariants}
                  className="
                    text-3xl
                    md:text-xl
                    lg:text-2xl
                    2xl:text-3xl
                    leading-[1.05]
                  "
                >
                  {line}
                </motion.p>
              </div>
            ))}
          </motion.div>

          {/* RIGHT */}
          <div className="max-w-sm lg:max-w-md overflow-hidden self-start md:self-end">
            <motion.p
              variants={itemVariants}
              className="
                text-lg
                md:text-base
                lg:text-lg
                2xl:text-2xl
                leading-relaxed
                font-Clash-light
              "
            >
              Visual storytelling studio crafting cinematic imagery, creative
              direction, and emotionally driven brand experiences.
            </motion.p>
          </div>
        </div>

        {/* LOGO */}
        <div className="flex-1 flex items-end justify-center">
          <motion.div
            variants={containerVariants}
            className="overflow-hidden w-full"
          >
            <h1
              className="
                flex
                justify-center
                items-end
                font-Satoshi-black
                tracking-tight
                leading-none
                whitespace-nowrap
              "
            >
              {logo.split("").map((letter, index) => (
                <span key={index} className="overflow-hidden inline-block">
                  <motion.span
                    variants={{
                      hidden: {
                        y: "110%",
                      },
                      visible: {
                        y: "0%",
                        transition: {
                          duration: 0.9,
                          ease: [0.23, 1, 0.32, 1],
                        },
                      },
                    }}
                    className="
                      inline-block
                      text-[7rem]
                      sm:text-[8rem]
                      md:text-[13rem]
                      lg:text-[17rem]
                      xl:text-[22rem]
                      2xl:text-[28rem]
                    "
                  >
                    {letter}
                  </motion.span>
                </span>
              ))}

              <motion.span
                variants={itemVariants}
                className="
                  text-lg
                  sm:text-2xl
                  md:text-4xl
                  lg:text-6xl
                  xl:text-7xl
                 self-start
                "
              >
                ®
              </motion.span>
            </h1>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
