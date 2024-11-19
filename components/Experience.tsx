import React from "react";
import ExperienceCard from "./ExperienceCard";
import history from "../data/history.json";

const Experience = () => {
  return (
    <div className="mt-4">
      <h1 className="heading" id="experience">
        Experience
      </h1>
      {history.map((historyItem, id) => (
        <ExperienceCard
          key={id}
          organisation={historyItem.organisation}
          role={historyItem.role}
          startDate={historyItem.startDate}
          endDate={historyItem.endDate}
          experiences={historyItem.experiences}
          imageSrc={historyItem.imageSrc}
          location={historyItem.location}
          skills={historyItem.skills}
        />
      ))}
    </div>
  );
};

export default Experience;
