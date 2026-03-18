import { useEffect, useState } from "react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [dark, setDark] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleTheme = () => {
    setDark(!dark);
    document.documentElement.classList.toggle("dark");
  };

  const links = [
    { label: "Accueil", href: "#accueil" },
    { label: "À Propos", href: "#propos" },
    { label: "Spécialités", href: "#services" },
    { label: "Galerie", href: "#galerie" },
    { label: "Tarifs", href: "#tarifs" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "py-4 bg-white/90 dark:bg-background/90 backdrop-blur-lg border-b border-primary/5 shadow-sm"
          : "py-6 bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#accueil" className="font-display text-4xl text-primary hover:opacity-90 transition-opacity">
          Négo's Food
        </a>

        {/* Desktop links */}
        <ul className="hidden lg:flex gap-10 items-center">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-[15px] font-semibold text-foreground/70 hover:text-primary transition-all relative group"
              >
                {l.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>

        <div className="flex gap-4 items-center">
          <button
            onClick={toggleTheme}
            className="w-10 h-10 rounded-xl flex items-center justify-center text-foreground/60 hover:bg-primary/5 hover:text-primary transition-all"
            aria-label="Changer de thème"
          >
            <i className={`fas ${dark ? "fa-sun" : "fa-moon"} text-lg`} />
          </button>
          <a
            href="#contact"
            className="hidden sm:inline-flex items-center gap-2 px-8 py-2.5 rounded-xl bg-primary text-primary-foreground font-bold text-sm shadow-xl shadow-primary/30 hover:shadow-primary/40 hover:-translate-y-0.5 transition-all active:scale-95"
          >
            Commander
          </a>
          <button
            className="lg:hidden w-10 h-10 rounded-xl flex items-center justify-center text-foreground hover:bg-primary/5 transition-all"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            <i className={`fas ${menuOpen ? "fa-times" : "fa-bars"} text-lg`} />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-full bg-white dark:bg-background border-b border-primary/5 shadow-xl animate-in fade-in slide-in-from-top-4 duration-300">
          <ul className="container mx-auto px-6 py-8 flex flex-col gap-5">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="block text-lg font-medium text-foreground/70 hover:text-primary transition-colors"
                  onClick={() => setMenuOpen(false)}
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li className="pt-4">
              <a
                href="#contact"
                className="block py-4 px-6 rounded-xl bg-primary text-primary-foreground font-semibold text-center shadow-lg shadow-primary/20"
                onClick={() => setMenuOpen(false)}
              >
                Commander maintenant
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
