import React from "react";
import ExperienceCard from "./ExperienceCard";
import history from "../data/history.json";
import AnimationWrapper from "./AnimationWrapper";

const Experience = () => {
  return (
    <div className="mt-4">
      <h1 className="heading" id="experience">
        Experience
      </h1>
      {history.map((historyItem, id) => (
        <AnimationWrapper key={id}>
          <ExperienceCard
            organisation={historyItem.organisation}
            role={historyItem.role}
            startDate={historyItem.startDate}
            endDate={historyItem.endDate}
            experiences={historyItem.experiences}
            imageSrc={historyItem.imageSrc}
            location={historyItem.location}
            skills={historyItem.skills}
          />
        </AnimationWrapper>
      ))}
    </div>
  );
};

export default Experience;
