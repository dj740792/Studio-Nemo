import React from "react";
import { Menu } from "lucide-react";
import { motion } from "framer-motion";
import CtaBtn from "./NavbarBtn";

const Navbar = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  const navLinks = [
    { name: "About", id: "intro" },
    { name: "Works", id: "works" },
    { name: "Services", id: "services" },
    { name: "Contact", id: "contact" },
  ];

  return (
    <nav className="absolute top-0 left-0 z-50 w-full px-4 md:px-8 lg:px-10 py-6">
      <div className="flex items-center justify-between  lg:hidden md:hidden">
        <CtaBtn text="Let's Connect" />
      </div>

      <div className="hidden  md:flex lg:flex justify-between items-start">
        <div className="font-Satoshi-black text-2xl md:text-lg 2xl:text-3xl uppercase cursor-pointer">
          NEMO.
        </div>

        <ul className="uppercase text-md 2xl:text-2xl font-Satoshi-black space-y-2">
          {navLinks.map((link) => (
            <li key={link.id} className="cursor-pointer">
              <FlipLink onClick={() => scrollToSection(link.id)}>
                {link.name}
              </FlipLink>
            </li>
          ))}
        </ul>

        <CtaBtn text="Let's Connect" />
      </div>
    </nav>
  );
};

const FlipLink = ({ children, onClick }) => {
  return (
    <motion.div
      initial="initial"
      whileHover="hovered"
      onClick={onClick}
      className="relative block overflow-hidden whitespace-nowrap"
      style={{ lineHeight: 0.9 }}
    >
      <motion.div
        variants={{
          initial: { y: 0 },
          hovered: { y: "-100%" },
        }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
        }}
      >
        {children}
      </motion.div>

      <motion.div
        className="absolute inset-0"
        variants={{
          initial: { y: "100%" },
          hovered: { y: 0 },
        }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
        }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
};

export default Navbar;
