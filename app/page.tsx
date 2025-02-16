"use client";

import About from "@/components/About";
import AnimationWrapper from "@/components/AnimationWrapper";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import GradientBall from "@/components/GradientBall";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <div className="ml-[20px] mr-[20px] sm:ml-[30px] sm:mr-[30px] md:ml-[100px] md:mr-[100px] lg:ml-[200px] lg:mr-[200px] xl:ml-[300px] xl:mr-[300px]">
      <GradientBall
        top="top-[150px]"
        left="left-[300px]"
        width="w-[600px]"
        height="h-[600px]"
        direction="left"
      />

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

      <GradientBall
        top="top-[1000px]"
        left="left-[-100px]"
        width="w-[600px]"
        height="h-[600px]"
        direction="right"
      />

      <div id="content-section" className="mt-[50px]">
        <AnimationWrapper>
          <Experience />
        </AnimationWrapper>

        <AnimationWrapper>
          <Skills />
        </AnimationWrapper>

        <Projects />
      </div>

      <GradientBall
        top="top-[2000px]"
        left="left-[500px]"
        width="w-[600px]"
        height="h-[600px]"
        direction="left"
      />
    </div>
  );
}
