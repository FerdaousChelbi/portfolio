import Reveal from "./Reveal.jsx";

export default function Section({ id, number, title, children }) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className="border-t border-line py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal className="mb-10 flex items-baseline gap-4 md:mb-14">
          <span className="font-mono text-sm text-accent">{number}</span>
          <h2 id={`${id}-title`} className="font-display text-3xl font-bold tracking-tight md:text-4xl">
            {title}
          </h2>
        </Reveal>
        {children}
      </div>
    </section>
  );
}
