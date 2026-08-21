const Footer = () => (
  <footer className="py-10 border-t" style={{ background: '#041329', borderColor: 'rgba(0,239,255,0.08)' }}>
    <div className="container mx-auto px-4 text-center space-y-5">
      <img
        src="/images/logo.png"
        alt="EmpreendaJá com Soph"
        className="h-auto w-[200px] sm:w-[260px] mx-auto object-contain"
      />
      <p className="text-sm text-white max-w-lg mx-auto leading-relaxed">
        EmpreendaJá com Soph — fornecedores, ferramentas e orientação para quem empreende. © 2026 EmpreendaJá com Soph. Todos os direitos reservados.
      </p>
    </div>
  </footer>
);

export default Footer;
