import { ExternalLink } from "lucide-react";
import { certifications } from "../data/content.js";
import Section from "./Section.jsx";
import Reveal from "./Reveal.jsx";

export default function Certifications() {
  return (
    <Section id="certifications" number="07" title="Certifications">
      <div className="grid gap-6 md:grid-cols-2">
        {certifications.map((c, i) => (
          <Reveal key={c.title} delay={i * 80} as="article">
            <div className="h-full rounded-lg border border-line bg-panel p-6">
              <p className="font-display text-lg font-bold text-accent">{c.issuer}</p>
              <h3 className="mt-2 text-lg font-medium leading-snug">{c.title}</h3>
              <p className="mt-3 font-mono text-sm text-muted">{c.date}</p>
              {c.url && (
                <a href={c.url} target="_blank" rel="noopener noreferrer" className="btn btn-ghost mt-5">
                  <ExternalLink size={16} /> View certificate
                </a>
              )}
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
