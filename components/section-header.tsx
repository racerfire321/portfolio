import React from "react";
import { motion, Variants } from "framer-motion";

type SectionHeadingProps = {
  children: React.ReactNode;
};

const headingVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.2, // Adjust the delay between each heading
    },
  },
};

export default function SectionHeading({ children }: SectionHeadingProps) {
  return (
    <motion.h2
      className="text-3xl font-medium capitalize mb-8 text-center"
      initial="hidden"
      animate="visible"
      variants={headingVariants}
    >
      {children}
    </motion.h2>
  );
}
