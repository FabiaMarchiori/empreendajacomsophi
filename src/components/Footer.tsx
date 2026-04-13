const Footer = () => (
  <footer className="py-10 border-t" style={{ background: '#041329', borderColor: 'rgba(0,239,255,0.08)' }}>
    <div className="container mx-auto px-4 text-center space-y-5">
      <img
        src="/images/logo.png"
        alt="EmpreendaJá com Soph"
        className="h-auto w-[200px] sm:w-[260px] mx-auto object-contain"
      />
      <p className="text-sm text-white/70 max-w-lg mx-auto leading-relaxed">
        © 2024 EmpreendaJá. Todos os direitos reservados. O ecossistema mais completo para o empreendedor digital.
      </p>
    </div>
  </footer>
);

export default Footer;
