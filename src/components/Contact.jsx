import { Download, Github, Linkedin, Mail } from "lucide-react";
import { contact, site } from "../data/content.js";
import Section from "./Section.jsx";
import Reveal from "./Reveal.jsx";

function Action({ href, Icon, children, primary, external, download }) {
  const cls = `btn ${primary ? "btn-primary" : "btn-ghost"}`;
  if (!href) {
    return (
      <span role="link" aria-disabled="true" title="Link coming soon" className={cls}>
        <Icon size={16} /> {children}
      </span>
    );
  }
  return (
    <a href={href} className={cls} {...(download ? { download: true } : {})} {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}>
      <Icon size={16} /> {children}
    </a>
  );
}

export default function Contact() {
  return (
    <Section id="contact" number="09" title="Contact">
      <Reveal>
        <h3 className="max-w-3xl font-display text-4xl font-bold leading-tight tracking-tight md:text-6xl">
          {contact.title}
        </h3>
        <p className="mt-6 max-w-2xl text-lg text-muted">{contact.text}</p>
        <p className="mt-6">
          <a href={`mailto:${site.email}`} className="text-lg text-accent underline decoration-accent/40 underline-offset-4 hover:decoration-accent">
            {site.email}
          </a>
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Action href={`mailto:${site.email}`} Icon={Mail} primary>Send Email</Action>
          <Action href={site.linkedin} Icon={Linkedin} external>LinkedIn</Action>
          <Action href={site.github} Icon={Github} external>GitHub</Action>
          <Action href={site.cvPath} Icon={Download} download>Download CV</Action>
        </div>
      </Reveal>
    </Section>
  );
}
