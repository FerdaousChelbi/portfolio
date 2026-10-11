import { ExternalLink, Github } from "lucide-react";
import Reveal from "./Reveal.jsx";

export default function ProjectCard({ project, index }) {
  const { number, period, title, description, work, tech, github, demo } = project;
  return (
    <Reveal delay={index * 80} as="article" className="h-full">
      <div className="group flex h-full flex-col rounded-lg border border-line bg-panel p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent/60">
        <div className="flex items-baseline justify-between">
          <span className="font-mono text-sm text-accent">{number}</span>
          {period && <span className="font-mono text-sm text-muted">{period}</span>}
        </div>
        <h3 className="mt-3 font-display text-xl font-bold leading-snug">{title}</h3>
        <p className="mt-3 text-[15px] text-muted">{description}</p>

        <ul className="mt-5 space-y-1.5 text-[15px] text-fg/90">
          {work.map((w) => (
            <li key={w} className="flex gap-2">
              <span className="mt-2 h-1 w-1 flex-none rounded-full bg-accent" aria-hidden="true" />
              {w}
            </li>
          ))}
        </ul>

        <ul className="mt-6 flex flex-wrap gap-2" aria-label="Technologies">
          {tech.map((t) => <li key={t} className="chip">{t}</li>)}
        </ul>

        {(github || demo) && (
          <div className="mt-6 flex gap-3 pt-2">
            {github && (
              <a href={github} target="_blank" rel="noopener noreferrer" className="btn btn-ghost">
                <Github size={16} /> GitHub
              </a>
            )}
            {demo && (
              <a href={demo} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                <ExternalLink size={16} /> Demo
              </a>
            )}
          </div>
        )}
      </div>
    </Reveal>
  );
}
