import { about } from "../data/content.js";
import Section from "./Section.jsx";
import Reveal from "./Reveal.jsx";

export default function About() {
  return (
    <Section id="about" number="02" title="About">
      <div className="grid gap-12 lg:grid-cols-[1.3fr_1fr]">
        <Reveal className="space-y-5 text-lg leading-relaxed text-fg/90">
          {about.paragraphs.map((p) => <p key={p}>{p}</p>)}
        </Reveal>
        <Reveal delay={120}>
          <dl className="divide-y divide-line border-y border-line">
            {about.profile.map(({ label, value }) => (
              <div key={label} className="grid grid-cols-[7rem_1fr] gap-4 py-4">
                <dt className="text-sm text-muted">{label}</dt>
                <dd className="font-medium">{value}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </Section>
  );
}
