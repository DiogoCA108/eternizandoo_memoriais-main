import { useState, useEffect } from "react";
import { useLabels } from "@/lib/memorialLabels";

export const MemorialNav = () => {
  const L = useLabels();
  const navItems = [
    { label: L.nav.inicio, href: "#" },
    { label: L.nav.historia, href: "#biografia" },
    { label: L.nav.galeria, href: "#galeria" },
    { label: L.nav.homenagens, href: "#homenagens" },
  ];
  const [scrollOpacity, setScrollOpacity] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // Gradually increase opacity from 0 to 0.92 over 300px of scroll
      const opacity = Math.min(window.scrollY / 300, 0.92);
      setScrollOpacity(opacity);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const hasScrolled = scrollOpacity > 0.05;

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-40 transition-shadow duration-500"
      style={{
        backgroundColor: `hsl(var(--card) / ${scrollOpacity})`,
        backdropFilter: hasScrolled ? `blur(${Math.min(scrollOpacity * 12, 10)}px)` : "none",
        boxShadow: hasScrolled ? `0 1px 3px rgba(0,0,0,${scrollOpacity * 0.08})` : "none",
      }}
    >
      <div className="max-w-4xl mx-auto px-4 py-3 flex items-center justify-between">
        <span
          className="font-display text-sm transition-colors duration-300"
          style={{ color: hasScrolled ? "hsl(var(--foreground))" : "hsla(40, 33%, 96%, 0.8)" }}
        >
          {L.nav.marca}
        </span>
        <div className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="font-body text-xs tracking-wide transition-colors duration-300 hover:text-primary"
              style={{
                color: hasScrolled ? "hsl(var(--muted-foreground))" : "hsla(40, 33%, 96%, 0.7)",
              }}
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};
