import { Github, Linkedin, Mail } from "lucide-react";
import { site } from "../data/content.js";

export default function SocialLinks() {
  const items = [
    { label: "GitHub", href: site.github, Icon: Github, external: true },
    { label: "LinkedIn", href: site.linkedin, Icon: Linkedin, external: true },
    { label: "Email", href: `mailto:${site.email}`, Icon: Mail },
  ];
  return (
    <ul className="flex items-center gap-2">
      {items.map(({ label, href, Icon, external }) => (
        <li key={label}>
          {href ? (
            <a
              href={href}
              aria-label={label}
              title={label}
              {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              className="flex h-10 w-10 items-center justify-center rounded-md border border-line text-muted transition-colors hover:border-accent hover:text-accent"
            >
              <Icon size={18} />
            </a>
          ) : (
            <span
              aria-label={`${label} (link coming soon)`}
              title={`${label} link coming soon`}
              className="flex h-10 w-10 cursor-not-allowed items-center justify-center rounded-md border border-line text-muted/40"
            >
              <Icon size={18} />
            </span>
          )}
        </li>
      ))}
    </ul>
  );
}
