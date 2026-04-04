import { useState, useEffect } from "react";

const navItems = [
  { label: "Início", href: "#" },
  { label: "História", href: "#biografia" },
  { label: "Galeria", href: "#galeria" },
  { label: "Homenagens", href: "#homenagens" },
];

export const MemorialNav = () => {
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
        backgroundColor: `hsla(40, 30%, 98%, ${scrollOpacity})`,
        backdropFilter: hasScrolled ? `blur(${Math.min(scrollOpacity * 12, 10)}px)` : "none",
        boxShadow: hasScrolled ? `0 1px 3px rgba(0,0,0,${scrollOpacity * 0.08})` : "none",
      }}
    >
      <div className="max-w-4xl mx-auto px-4 py-3 flex items-center justify-between">
        <span
          className="font-display text-sm transition-colors duration-300"
          style={{ color: hasScrolled ? "hsl(220, 30%, 15%)" : "hsla(40, 33%, 96%, 0.8)" }}
        >
          Memorial Eterno
        </span>
        <div className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="font-body text-xs tracking-wide transition-colors duration-300 hover:text-primary"
              style={{
                color: hasScrolled ? "hsl(220, 10%, 45%)" : "hsla(40, 33%, 96%, 0.7)",
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
