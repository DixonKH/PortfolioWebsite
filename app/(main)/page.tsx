import About from "./about/page";
import Contact from "./contact/page";
import Experiance from "./experiance/page";
import Projects from "./projects/page";
import Skills from "./skills/page";
import Hero from "./hero/page";

export default function Home() {
  return (
    <div className="flex flex-col gap-20 items-center w-full px-20">
      <section id="hero">
        <Hero />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="experiance">
        <Experiance />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </div>
  );
}
