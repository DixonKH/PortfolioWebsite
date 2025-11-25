import About from "./about/page";
import Contact from "./contact/page";
import Experiance from "./experiance/page";
import Projects from "./projects/page";
import Skills from "./skills/page";
import Hero from "./hero/page";

export default function Home() {
  return (
    <div className="flex flex-col gap-20 justify-center items-center w-full px-20 mt-16">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experiance />
      <Contact />
    </div>
  );
}
