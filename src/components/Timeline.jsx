import Reveal from "./Reveal.jsx";

// Generic vertical timeline. Pass <TimelineItem> children.
export function Timeline({ children, label }) {
  return <ol aria-label={label} className="relative ml-2 border-l border-line">{children}</ol>;
}

export function TimelineItem({ date, index = 0, muted = false, children }) {
  return (
    <li className="relative pb-12 pl-8 last:pb-0">
      <span
        aria-hidden="true"
        className={`absolute -left-[5px] top-2 h-2.5 w-2.5 rounded-full ${muted ? "border border-muted bg-ink" : "bg-accent"}`}
      />
      <Reveal delay={index * 80}>
        <p className="font-mono text-sm text-muted">{date}</p>
        {children}
      </Reveal>
    </li>
  );
}
