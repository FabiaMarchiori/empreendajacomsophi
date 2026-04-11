const WHATSAPP_LINK = "https://wa.me/5511983348749?text=Pagina%20de%20vendas";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/40">
      <div className="container mx-auto px-4 md:px-6 h-20 md:h-24 flex items-center justify-between">
        {/* Brand */}
        <a href="/" className="flex items-center flex-shrink-0 mr-4">
          <img
            src="/images/logo.png"
            alt="EmpreendaJá com Soph"
            className="h-[42px] w-auto md:h-[56px] md:w-[320px] object-contain object-left"
          />
        </a>

        {/* Links */}
        <div className="hidden md:flex items-center gap-10">
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
