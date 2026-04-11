const WHATSAPP_LINK = "https://wa.me/5511983348749?text=Pagina%20de%20vendas";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/40">
      <div className="mx-auto flex h-24 w-full max-w-[1440px] items-center justify-between gap-6 px-4 md:h-28 md:px-6 lg:px-8">
        <a href="/" className="flex min-w-0 flex-shrink-0 items-center">
          <img
            src="/images/logo.png"
            alt="EmpreendaJá com Soph"
            className="block h-[42px] w-[280px] shrink-0 object-contain object-left sm:h-[46px] sm:w-[320px] md:h-[72px] md:w-[580px]"
          />
        </a>

        <div className="hidden flex-shrink-0 items-center gap-6 lg:gap-8 md:flex">
          <a href="#" className="text-base font-semibold text-white hover:text-primary transition-colors">
            Início
          </a>
          <a href="#ecossistema" className="text-base font-semibold text-white/80 hover:text-white transition-colors">
            Ecossistema
          </a>
          <a href="#planos" className="text-base font-semibold text-white/80 hover:text-white transition-colors">
            Planos
          </a>
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="text-base font-semibold text-white/80 hover:text-white transition-colors"
          >
            Suporte
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
