"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ReactNode } from "react";

const AnimationWrapper = ({ children }: { children: ReactNode }) => {
  // Use the inView hook with a wrapper div for the ref
  const { ref, inView } = useInView({
    triggerOnce: true, // Animate only once
    threshold: 0.2, // Trigger when 20% is in view
  });

  return (
    <div ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}} // Animate when in view
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="h-full"
      >
        {children}
      </motion.div>
    </div>
  );
};

export default AnimationWrapper;
