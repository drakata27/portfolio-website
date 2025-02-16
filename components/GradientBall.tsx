"use client";

import { motion } from "framer-motion";
import React from "react";

interface GradientBallProps {
  top?: string;
  bottom?: string;
  left?: string;
  right?: string;
  width?: string;
  height?: string;
  color?: string;
  opacity?: string;
  direction?: "left" | "right";
}

const GradientBall: React.FC<GradientBallProps> = ({
  top,
  bottom,
  left,
  right,
  width = "w-[600px]",
  height = "h-[600px]",
  color = "bg-blue-300 dark:bg-blue-500",
  opacity = "opacity-60",
  direction = "left",
}) => {
  const variants = {
    hidden: {
      x: direction === "left" ? -300 : 300,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 1, ease: "easeOut" },
    },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={variants}
      className={`absolute ${top} ${bottom} ${left} ${right} ${width} ${height} ${color} 
                  rounded-full blur-3xl ${opacity} -z-10`}
      aria-hidden="true"
    />
  );
};

export default GradientBall;
