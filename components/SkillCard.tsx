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
      className="m-3 items-center transform transition-all duration-300 ease-in-out hover:scale-110 hover:shadow-lg"
    >
      <div className="space-y-2 p-3 items-center">
        <Image src={imageSrc} alt="skill" width={40} height={40} />
        <p>{title}</p>
      </div>
    </Badge>
  );
};

export default SkillCard;
