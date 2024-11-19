import Image from "next/image";
import React from "react";
import { Badge } from "./ui/badge";

type SkillProps = {
  title: string;
  imageSrc: string;
};

const SkillCard = ({ title, imageSrc }: SkillProps) => {
  return (
    <Badge variant="outline" className="m-3 items-center">
      <div className="space-y-2 p-3 items-center">
        <Image src={imageSrc} alt="skill" width={40} height={40} />
        <p>{title}</p>
      </div>
    </Badge>
  );
};

export default SkillCard;
