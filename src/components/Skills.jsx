import { skills } from "../data/content.js";
import Section from "./Section.jsx";
import Reveal from "./Reveal.jsx";

export default function Skills() {
  return (
    <Section id="skills" number="03" title="Skills">
      <div className="divide-y divide-line border-y border-line">
        {skills.map(({ category, items }, i) => (
          <Reveal key={category} delay={i * 60} className="grid gap-4 py-6 md:grid-cols-[14rem_1fr] md:gap-8">
            <h3 className="font-display text-lg font-medium">{category}</h3>
            <ul className="flex flex-wrap gap-2">
              {items.map((s) => <li key={s} className="chip">{s}</li>)}
            </ul>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
