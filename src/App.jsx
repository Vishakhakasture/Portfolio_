import "./app.scss";
import Contact from "./components/contact/Contact";
import Cursor from "./components/cursor/Cursor";
import Education from "./components/education/Education";
import Parallax2 from "./components/parallax2/Parallax2";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Parallax from "./components/parallax/Parallax";
import Project from "./components/project/Project";
import Experience from "./components/experience/Experience";
import Skills from "./components/skills/Skills";

const App = () => {
  return (
    <div>
      <Cursor />
      <section id="Homepage">
        <Navbar />
        <Hero />
      </section>
      <section>
        <Parallax type="education" />
      </section>
      <section id="Education">
        <Education />
      </section>
      <section id="Projects">
        <Parallax type="projects" />
      </section>
      <Project />
      <section>
        <Parallax2 type="experience" />
      </section>
      <section id="Experience">
        <Experience />
      </section>
      <section>
        <Parallax2 type="skills" />
      </section>
      <section id="Skills">
        <Skills />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </div>
  );
};

export default App;
