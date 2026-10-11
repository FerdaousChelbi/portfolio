import { languages } from "../data/content.js";
import Section from "./Section.jsx";
import Reveal from "./Reveal.jsx";

export default function Languages() {
  return (
    <Section id="languages" number="08" title="Languages">
      <Reveal>
        <ul className="flex flex-wrap gap-4">
          {languages.map(({ name, level }) => (
            <li key={name} className="flex items-center gap-3 rounded-lg border border-line bg-panel px-5 py-4">
              <span className="h-2.5 w-2.5 rounded-full bg-accent" aria-hidden="true" />
              <span className="font-display text-lg font-medium">{name}</span>
              {level && <span className="text-sm text-muted">{level}</span>}
            </li>
          ))}
        </ul>
      </Reveal>
    </Section>
  );
}
