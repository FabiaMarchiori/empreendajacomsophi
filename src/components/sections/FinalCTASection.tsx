import { motion } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";

const WHATSAPP_LINK = "https://wa.me/5511983348749?text=Pagina%20de%20vendas";

const FinalCTASection = () => (
  <section className="relative py-24 bg-deep overflow-hidden">
    <div className="absolute inset-0">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-[150px]" />
    </div>
    <div className="container relative z-10 mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="max-w-3xl mx-auto text-center space-y-8"
      >
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight">
          <span className="text-white">Chega de improvisar. </span>
          <span className="gradient-text">Seu negócio merece mais direção.</span>
        </h2>
        <p className="text-lg md:text-xl text-white/85 max-w-2xl mx-auto leading-relaxed">
          Você já perdeu tempo demais tentando sozinho. O Ecossistema EmpreendaJá com Soph reúne tudo 
          que você precisa para começar com clareza, economizar e crescer com organização. 
          Os valores de lançamento são por tempo limitado — aproveite agora.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <a href="#planos" className="btn-glow px-10 py-5 rounded-xl text-lg inline-flex items-center gap-2 font-bold">
            Quero entrar agora
            <ArrowRight className="w-5 h-5" />
          </a>
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="px-10 py-5 rounded-xl text-lg inline-flex items-center gap-2 font-bold transition-all duration-300 hover:-translate-y-0.5"
            style={{
              background: 'linear-gradient(135deg, #00FF88 0%, #00CC6A 100%)',
              color: '#0A192F',
              boxShadow: '0 0 30px rgba(0,255,136,0.25), 0 0 60px rgba(0,255,136,0.08)',
            }}
          >
            <MessageCircle className="w-5 h-5" />
            Falar no WhatsApp
          </a>
        </div>

        <p className="text-sm text-white/60">
          7 dias de garantia • Acesso imediato • Valores de lançamento
        </p>
      </motion.div>
    </div>
  </section>
);

export default FinalCTASection;
