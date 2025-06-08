"use client";
import { motion } from "framer-motion";

const text = "Rüyaların Ne Anlama Geliyor?";

const container = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.06,
    },
  },
};

const child = {
  hidden: { opacity: 0, scale: 0.3, filter: "blur(4px)" },
  visible: {
    opacity: 1,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const AnimatedText = () => {
  return (
    <motion.h1
      className="lg:text-4xl text-xl md:text-2xl font-gruppo text-white flex flex-wrap"
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {text.split("").map((char, index) => (
        <motion.span key={index} variants={child}>
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </motion.h1>
  );
};

export default AnimatedText;
