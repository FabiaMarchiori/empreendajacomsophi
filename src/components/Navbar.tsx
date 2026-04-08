const WHATSAPP_LINK = "https://wa.me/5511983348749?text=Pagina%20de%20vendas";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/40">
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        {/* Brand */}
        <a
          href="/"
          className="text-2xl font-extrabold tracking-tight"
          style={{
            background: 'linear-gradient(90deg, #FFFFFF 0%, #F2FBFF 45%, #00FFFF 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
        >
          EmpreendaJá com Soph
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
