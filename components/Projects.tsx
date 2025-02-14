import React from "react";
import projects from "../data/projects.json";
import ProjectCard from "./ProjectCard";
import AnimationWrapper from "./AnimationWrapper";

const Projects = () => {
  return (
    <div>
      <h1 className="mt-4 heading" id="projects">
        Projects
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {projects.map((project, id) => (
          <AnimationWrapper key={id}>
            <ProjectCard
              key={id}
              title={project.title}
              imageSrc={project.imageSrc}
              description={project.description}
              skills={project.skills}
              demo={project.demo}
              source={project.source}
            />
          </AnimationWrapper>
        ))}
      </div>
    </div>
  );
};

export default Projects;
