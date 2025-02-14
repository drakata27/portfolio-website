import Image from "next/image";
import React from "react";
import { Badge } from "./ui/badge";
import { motion } from "framer-motion";

type SkillProps = {
  title: string;
  imageSrc: string;
  id: number;
};

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

const SkillCard = ({ title, imageSrc, id }: SkillProps) => {
  return (
    <motion.div
      variants={fadeInAnimationVariants}
      initial="initial"
      whileInView="animate"
      viewport={{
        once: true,
      }}
      custom={id}
    >
      <Badge
        variant="outline"
        className="m-3 inline-flex flex-col items-center justify-center w-auto p-4 transform transition-all duration-300 ease-in-out hover:scale-110 hover:shadow-lg"
      >
        <Image src={imageSrc} alt="skill" width={40} height={40} />
        <p className="mt-2 text-center">{title}</p>
      </Badge>
    </motion.div>
  );
};

export default SkillCard;
