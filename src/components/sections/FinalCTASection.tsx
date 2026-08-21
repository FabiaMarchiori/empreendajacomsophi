import { motion } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";

const WHATSAPP_LINK = "https://wa.me/5511983348749?text=Pagina%20de%20vendas";

const FinalCTASection = () => (
  <section id="cta-final" className="relative py-16 md:py-24 bg-deep overflow-hidden">
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
          <span className="text-white">Seu negócio não precisa depender de </span>
          <span className="gradient-text">tentativa e erro.</span>
        </h2>
        <p className="text-lg md:text-xl text-white max-w-2xl mx-auto leading-relaxed">
          Tenha fornecedores, ferramentas e orientação reunidos em uma plataforma para ajudar você a comprar, precificar, organizar e tomar decisões com mais clareza.
        </p>

        <div className="flex flex-col items-center justify-center gap-4 pt-4 sm:flex-row">
          <a
            href="#planos"
            className="btn-glow inline-flex w-full items-center justify-center gap-2 rounded-xl px-10 py-5 text-lg font-bold sm:w-auto"
          >
            Quero entrar agora
            <ArrowRight className="w-5 h-5" />
          </a>
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-cyan-300/35 px-8 py-4 text-base font-semibold text-white transition-colors duration-300 hover:border-cyan-300/60 hover:bg-cyan-400/[0.07] sm:w-auto"
          >
            <MessageCircle className="h-5 w-5 text-cyan-300" />
            Tirar dúvidas no WhatsApp
          </a>
        </div>
      </motion.div>
    </div>
  </section>
);

export default FinalCTASection;
