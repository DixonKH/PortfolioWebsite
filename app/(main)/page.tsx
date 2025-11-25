import About from "./about/page";
import Contact from "./contact/page";
import Experiance from "./experiance/page";
import Projects from "./projects/page";
import Skills from "./skills/page";

export default function Home() {
    return (
        <div>
            <div>Home Page</div>
            <About />
            <Skills />
            <Projects />
            <Experiance />
            <Contact />
        </div>
    );
}