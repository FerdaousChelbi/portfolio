import { education } from "../data/content.js";
import Section from "./Section.jsx";
import { Timeline, TimelineItem } from "./Timeline.jsx";

export default function Education() {
  return (
    <Section id="education" number="06" title="Education">
      <Timeline label="Education timeline">
        {education.map((e, i) => (
          <TimelineItem key={e.title} date={e.date} index={i}>
            <h3 className="mt-2 font-display text-xl font-bold">{e.title}</h3>
            <p className="text-accent">{e.subtitle}</p>
            <p className="mt-2 max-w-2xl text-muted">{e.place}</p>
          </TimelineItem>
        ))}
      </Timeline>
    </Section>
  );
}
