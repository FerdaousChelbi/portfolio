import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Skills from "./components/Skills.jsx";
import Projects from "./components/Projects.jsx";
import Experience from "./components/Experience.jsx";
import Education from "./components/Education.jsx";
import Certifications from "./components/Certifications.jsx";
import Languages from "./components/Languages.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import useActiveSection from "./hooks/useActiveSection.js";

const SECTION_IDS = ["home", "about", "skills", "projects", "experience", "education", "certifications", "languages", "contact"];

export default function App() {
  const active = useActiveSection(SECTION_IDS);
  return (
    <>
      <a href="#about" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded focus:bg-accent focus:px-3 focus:py-2 focus:text-ink">
        Skip to content
      </a>
      <Navbar active={active} />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Certifications />
        <Languages />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
