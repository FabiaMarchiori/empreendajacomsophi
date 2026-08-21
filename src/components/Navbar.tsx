import { useEffect, useState } from "react";

const WHATSAPP_LINK = "https://wa.me/5511983348749?text=Pagina%20de%20vendas";

const links = [
  { href: "#inicio", label: "Início", id: "inicio" },
  { href: "#ecossistema", label: "Plataforma", id: "ecossistema" },
  { href: "#planos", label: "Planos", id: "planos" },
];

const Navbar = () => {
  const [active, setActive] = useState("inicio");

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

  const scrollToTop = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
    window.history.replaceState(null, "", window.location.pathname);
  };

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
      </div>
    </nav>
  );
};

export default Navbar;
