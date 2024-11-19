"use client";

import About from "@/components/About";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export default function Home() {
  useGSAP(() => {
    gsap.to("#hero", {
      opacity: 1,
      delay: 0.1,
    });
    gsap.to("#content-section", {
      opacity: 1,
      y: -23,
      delay: 0.2,
    });
  }, []);

  return (
    <div className="ml-[20px] mr-[20px] sm:ml-[30px] sm:mr-[30px] md:ml-[100px] md:mr-[100px] lg:ml-[200px] lg:mr-[200px] xl:ml-[300px] xl:mr-[300px]">
      <div className="flex flex-col sm:flex-row gap-4 opacity-0" id="hero">
        <div className="flex-1">
          <About />
        </div>
        <div className="flex-1">
          <Education />
        </div>
      </div>

      <div id="content-section" className="opacity-0 mt-[50px]">
        <Experience />
        <Skills />
        <Projects />
      </div>
    </div>
  );
}
