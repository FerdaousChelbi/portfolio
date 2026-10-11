import { experiences } from "../data/content.js";
import Section from "./Section.jsx";
import { Timeline, TimelineItem } from "./Timeline.jsx";

export default function Experience() {
  return (
    <Section id="experience" number="05" title="Experience">
      <Timeline label="Experience timeline">
        {experiences.map((e, i) => (
          <TimelineItem key={e.company} date={`${e.date} · ${e.location}`} index={i} muted={e.placeholder}>
            <h3 className="mt-2 font-display text-xl font-bold">{e.company}</h3>
            <p className="text-accent">{e.title}</p>
            <p className="mt-3 max-w-2xl text-muted">{e.description}</p>
            <ul className="mt-4 max-w-2xl space-y-1.5 text-[15px] text-fg/90">
              {e.responsibilities.map((r) => (
                <li key={r} className="flex gap-2">
                  <span className="mt-2 h-1 w-1 flex-none rounded-full bg-accent" aria-hidden="true" />
                  {r}
                </li>
              ))}
            </ul>
            <ul className="mt-5 flex flex-wrap gap-2" aria-label="Technologies">
              {e.tech.map((t) => <li key={t} className="chip">{t}</li>)}
            </ul>
          </TimelineItem>
        ))}
      </Timeline>
    </Section>
  );
}
