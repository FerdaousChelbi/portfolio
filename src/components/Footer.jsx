import { site } from "../data/content.js";

export default function Footer() {
  return (
    <footer className="border-t border-line py-8">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-5 text-sm text-muted sm:px-8">
        <p>© {new Date().getFullYear()} {site.name}</p>
        <a href="#home" className="hover:text-accent">Back to top</a>
      </div>
    </footer>
  );
}
