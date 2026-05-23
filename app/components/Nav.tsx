"use client";
import { useEffect, useState } from "react";

const LINKS = [
  { label: "Menu", href: "#menu" },
  { label: "Bar", href: "#bar" },
  { label: "Hours", href: "#hours" },
  { label: "Reserve", href: "#reserve" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const f = () => setScrolled(window.scrollY > 24);
    f(); window.addEventListener("scroll", f, { passive: true });
    return () => window.removeEventListener("scroll", f);
  }, []);
  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled ? "bg-kraft/95 backdrop-blur-xl border-b-4 border-deep" : "bg-transparent"}`}>
      <div className="mx-auto flex h-16 max-w-[1380px] items-center justify-between px-5 md:px-10">
        <a href="#top" className="flex items-baseline gap-2">
          <span className="font-display text-3xl text-deep tracking-tight">Castaway</span>
          <span className="font-script text-xl text-lobster">— bar & grill</span>
        </a>
        <nav className="hidden items-center gap-7 md:flex">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href} className="font-display text-base text-deep hover:text-lobster transition-colors">{l.label}</a>
          ))}
        </nav>
        <a href="tel:+19736770052" className="bg-lobster text-kraft px-5 py-2.5 font-script text-lg hover:bg-deep transition-colors">
          (973) 677-0052
        </a>
      </div>
    </header>
  );
}
