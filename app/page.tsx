import Intro from "@/components/Intro";
import About from "@/components/about";
import Projects from "@/components/projects";
import SectionDivider from "@/components/section-divider";
import Skills from "@/components/skills";
import experience from "@/components/Experience";
import Experience from "@/components/Experience";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <Intro />
      <SectionDivider />
      <About />
      <Projects/>
      <Skills/> 
      <Experience/>
    </main>
  );
}