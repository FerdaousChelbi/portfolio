import { useState } from "react";
import { Menu, X } from "lucide-react";
import { navItems, site } from "../data/content.js";

export default function Navbar({ active }) {
  const [open, setOpen] = useState(false);

  const link = (item, mobile = false) => {
    const isActive = active === item.id;
    return (
      <a
        key={item.id}
        href={`#${item.id}`}
        onClick={() => setOpen(false)}
        aria-current={isActive ? "true" : undefined}
        className={`transition-colors duration-200 ${
          mobile ? "block border-b border-line py-3 text-base" : "relative py-1 text-sm"
        } ${isActive ? "text-accent" : "text-muted hover:text-fg"}`}
      >
        {item.label}
        {!mobile && (
          <span
            className={`absolute -bottom-0.5 left-0 h-px bg-accent transition-all duration-300 ${
              isActive ? "w-full" : "w-0"
            }`}
          />
        )}
      </a>
    );
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line bg-ink/90 backdrop-blur">
      <nav aria-label="Main" className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
        <a href="#home" className="font-display text-lg font-bold tracking-tight">
          {site.name}
        </a>
        <div className="hidden items-center gap-6 lg:flex">{navItems.map((i) => link(i))}</div>
        <button
          type="button"
          className="rounded-md p-2 text-fg hover:text-accent lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>
      {open && (
        <div id="mobile-menu" className="border-t border-line bg-ink px-5 pb-4 lg:hidden">
          {navItems.map((i) => link(i, true))}
        </div>
      )}
    </header>
  );
}
