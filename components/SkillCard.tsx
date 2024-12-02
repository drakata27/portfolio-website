import Image from "next/image";
import React from "react";
import { Badge } from "./ui/badge";

type SkillProps = {
  title: string;
  imageSrc: string;
};

const SkillCard = ({ title, imageSrc }: SkillProps) => {
  return (
    <Badge
      variant="outline"
      className="m-3 inline-flex flex-col items-center justify-center w-auto p-4 transform transition-all duration-300 ease-in-out hover:scale-110 hover:shadow-lg"
    >
      <Image src={imageSrc} alt="skill" width={40} height={40} />
      <p className="mt-2 text-center">{title}</p>
    </Badge>
  );
};

export default SkillCard;
