import React from "react";
import skills from "../data/skills.json";
import SkillCard from "./SkillCard";

const Skills = () => {
  return (
    <div className="mt-4">
      <h1 className="heading" id="skills">
        Skills
      </h1>
      {skills.map((skill, id) => (
        <SkillCard key={id} title={skill.title} imageSrc={skill.imageSrc} />
      ))}
    </div>
  );
};

export default Skills;
