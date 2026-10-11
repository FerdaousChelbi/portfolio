import { projects } from "../data/content.js";
import Section from "./Section.jsx";
import ProjectCard from "./ProjectCard.jsx";

export default function Projects() {
  return (
    <Section id="projects" number="04" title="Projects">
      <div className="grid gap-6 lg:grid-cols-3">
        {projects.map((p, i) => <ProjectCard key={p.number} project={p} index={i} />)}
      </div>
    </Section>
  );
}
