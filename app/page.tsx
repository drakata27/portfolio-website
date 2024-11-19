import About from "@/components/About";
import Education from "@/components/Education";
import Experience from "@/components/Experience";

export default function Home() {
  return (
    <div className="ml-[20px] mr-[20px] sm:ml-[30px] sm:mr-[30px] md:ml-[100px] md:mr-[100px] lg:ml-[200px] lg:mr-[200px] xl:ml-[300px] xl:mr-[300px]">
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="flex-1">
          <About />
        </div>
        <div className="flex-1">
          <Education />
        </div>
      </div>
      <Experience />
    </div>
  );
}
