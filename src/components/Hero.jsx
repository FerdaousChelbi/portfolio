import { ArrowDown, Download, Mail } from "lucide-react";
import { site } from "../data/content.js";
import SocialLinks from "./SocialLinks.jsx";

export default function Hero() {
  return (
    <section id="home" aria-labelledby="hero-title" className="flex min-h-screen items-end pt-16">
      <div className="mx-auto grid w-full max-w-6xl items-end gap-10 px-5 sm:px-8 lg:grid-cols-[1.25fr_0.75fr]">
        <div className="pb-14 pt-12 md:pb-20 md:pt-20">
          <p className="hero-fade mb-6 flex items-center gap-2 text-sm text-muted" style={{ animationDelay: ".1s" }}>
            <span className="h-2 w-2 rounded-full bg-accent" aria-hidden="true" />
            {site.status}
          </p>

          <h1 id="hero-title" className="font-display text-5xl font-bold leading-[1.02] tracking-tight sm:text-7xl md:text-8xl">
            {site.name.split(" ").map((word, i) => (
              <span key={word} className="hero-line">
                <span style={{ animationDelay: `${0.15 + i * 0.12}s` }}>{word}</span>
              </span>
            ))}
          </h1>

          <p className="hero-fade mt-6 font-display text-xl text-accent md:text-2xl" style={{ animationDelay: ".55s" }}>
            {site.role}
          </p>
          <p className="hero-fade mt-4 max-w-xl text-lg text-fg/90" style={{ animationDelay: ".7s" }}>
            {site.intro}
          </p>
          <p className="hero-fade mt-3 max-w-xl text-muted" style={{ animationDelay: ".8s" }}>
            {site.description}
          </p>

          <div className="hero-fade mt-8 flex flex-wrap items-center gap-3" style={{ animationDelay: ".95s" }}>
            <a href="#projects" className="btn btn-primary"><ArrowDown size={16} /> View Projects</a>
            <a href={site.cvPath} download className="btn btn-ghost"><Download size={16} /> Download CV</a>
            <a href="#contact" className="btn btn-ghost"><Mail size={16} /> Contact Me</a>
            <span className="mx-1 hidden h-6 w-px bg-line sm:block" aria-hidden="true" />
            <SocialLinks />
          </div>
        </div>

        <div className="hero-fade order-first mx-auto w-full max-w-[18rem] self-end sm:max-w-sm lg:order-none lg:max-w-none" style={{ animationDelay: ".6s" }}>
          <div className="overflow-hidden rounded-t-2xl border border-b-0 border-line bg-panel">
            <img
              src={site.photo}
              alt="Portrait of Ferdaous Chelbi, engineering student in Digitalization and Data Analysis"
              width="800"
              height="903"
              fetchpriority="high"
              className="block h-auto w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
