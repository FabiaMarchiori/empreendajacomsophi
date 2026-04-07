const WHATSAPP_LINK = "https://wa.me/5511983348749?text=Pagina%20de%20vendas";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/40">
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        {/* Brand */}
        <a href="/" className="text-xl font-extrabold text-foreground tracking-tight">
          EmpreendaJá
        </a>

        {/* Links */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
            Início
          </a>
          <a href="#ecossistema" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            Ecossistema
          </a>
          <a href="#planos" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            Planos
          </a>
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Suporte
          </a>
          <a
            href="#planos"
            className="ml-2 px-5 py-2 rounded-full bg-primary text-primary-foreground text-sm font-semibold hover:bg-primary/90 transition-colors"
          >
            Entrar
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
