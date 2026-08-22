import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const WHATSAPP_LINK = "https://wa.me/5511983348749?text=Pagina%20de%20vendas";

const links = [
  { href: "#inicio", label: "Início", id: "inicio" },
  { href: "#ecossistema", label: "Plataforma", id: "ecossistema" },
  { href: "#planos", label: "Planos", id: "planos" },
];

const Navbar = () => {
  const [active, setActive] = useState("inicio");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const sections = links
      .map((link) => document.getElementById(link.id))
      .filter((el): el is HTMLElement => el instanceof HTMLElement);
    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { threshold: [0.25, 0.5], rootMargin: "-96px 0px -45% 0px" },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isOpen) return;

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
    };

    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [isOpen]);

  const scrollToTop = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    setIsOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
    window.history.replaceState(null, "", window.location.pathname);
  };

  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/40">
      <div className="mx-auto flex h-24 w-full max-w-[1440px] items-center justify-between gap-6 px-4 md:px-6 lg:px-8">
        <a href="/" onClick={scrollToTop} className="flex flex-shrink-0 items-center">
          <img
            src="/images/logo.png"
            alt="EmpreendaJá com Soph"
            className="block h-14 md:h-16 w-auto max-w-[280px] shrink-0 object-contain object-left"
          />
        </a>

        <div className="hidden flex-shrink-0 items-center gap-5 lg:gap-7 md:flex">
          {links.map((link) => (
            <a
              key={link.id}
              href={link.href}
              aria-current={active === link.id ? "true" : undefined}
              className={
                "border-b-2 pb-0.5 text-base font-semibold transition-colors " +
                (active === link.id
                  ? "border-cyan-400/70 text-cyan-300"
                  : "border-transparent text-white hover:text-cyan-300")
              }
            >
              {link.label}
            </a>
          ))}
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="border-b-2 border-transparent pb-0.5 text-base font-semibold text-white transition-colors hover:text-cyan-300"
          >
            Suporte
          </a>
        </div>

        <button
          type="button"
          aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
          onClick={() => setIsOpen((open) => !open)}
          className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-cyan-300/20 bg-[#0b2139]/90 text-white transition-colors hover:border-cyan-300/40 hover:text-cyan-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 focus-visible:ring-offset-2 focus-visible:ring-offset-background md:hidden"
        >
          {isOpen ? <X aria-hidden="true" className="h-5 w-5" /> : <Menu aria-hidden="true" className="h-5 w-5" />}
        </button>
      </div>

      {isOpen && (
        <div
          id="mobile-navigation"
          className="absolute inset-x-0 top-full border-b border-cyan-300/10 bg-background/95 px-4 pb-4 pt-3 shadow-[0_18px_36px_rgba(0,0,0,0.32)] backdrop-blur-md md:hidden"
        >
          <div className="mx-auto grid max-w-[1440px] gap-1">
            <a
              href="#inicio"
              onClick={scrollToTop}
              aria-current={active === "inicio" ? "true" : undefined}
              className="flex min-h-11 items-center rounded-lg px-3 font-semibold text-white transition-colors hover:bg-cyan-400/10 hover:text-cyan-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
            >
              Início
            </a>
            {links.slice(1).map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={closeMenu}
                aria-current={active === link.id ? "true" : undefined}
                className="flex min-h-11 items-center rounded-lg px-3 font-semibold text-white transition-colors hover:bg-cyan-400/10 hover:text-cyan-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
              >
                {link.label}
              </a>
            ))}
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMenu}
              className="flex min-h-11 items-center rounded-lg px-3 font-semibold text-white transition-colors hover:bg-cyan-400/10 hover:text-cyan-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
            >
              Suporte
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
