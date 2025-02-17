"use client";

import About from "@/components/About";
import AnimationWrapper from "@/components/AnimationWrapper";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <div className="ml-[20px] mr-[20px] sm:ml-[30px] sm:mr-[30px] md:ml-[100px] md:mr-[100px] lg:ml-[200px] lg:mr-[200px] xl:ml-[300px] xl:mr-[300px]">
      <AnimationWrapper>
        <div className="flex flex-col sm:flex-row gap-4" id="hero">
          <div className="flex-1">
            <About />
          </div>
          <div className="flex-1">
            <Education />
          </div>
        </div>
      </AnimationWrapper>

      <div id="content-section" className="mt-[50px]">
        <AnimationWrapper>
          <Experience />
        </AnimationWrapper>

        <AnimationWrapper>
          <Skills />
        </AnimationWrapper>

        <Projects />
      </div>
    </div>
  );
}
