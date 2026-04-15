import { motion } from "framer-motion";
import { Check, X, MessageCircle, ArrowRight, Sparkles } from "lucide-react";

const WHATSAPP_LINK = "https://wa.me/5511983348749?text=Pagina%20de%20vendas";

const features = [
  "Central de Importadoras (+260)",
  "15 Nichos organizados",
  "Soph — IA orientadora",
  "Criar seu MEI",
  "Criar sua Logo",
  "Registrar sua Marca",
  "Vender nos Marketplaces",
  "Ferramentas Gratuitas",
  "Precificação",
];

const PricingSection = () => (
  <section id="planos" className="relative py-24 overflow-hidden" style={{ background: '#0A192F' }}>
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-cyan-500/5 rounded-full blur-[150px]" />
    <div className="container relative z-10 mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <span className="inline-block px-4 py-1.5 rounded-full bg-cyan-500/10 text-white text-sm font-bold mb-6 tracking-wide">
          VALORES DE LANÇAMENTO • POR TEMPO LIMITADO
        </span>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight gradient-text">
          Escolha o plano ideal para você
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto items-stretch">
        {/* Mensal */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="card-premium p-8 flex flex-col"
        >
          <div className="mb-6">
            <h3 className="text-xl font-bold text-white mb-1">Plano Mensal</h3>
            <p className="text-base text-white">Valor de lançamento</p>
          </div>
          <div className="mb-6">
            <span className="text-5xl font-extrabold text-white">R$ 47</span>
            <span className="text-white">/mês</span>
          </div>
          <ul className="space-y-3 mb-8 flex-1">
            {features.map((f, i) => (
              <li key={i} className="flex items-center gap-3">
                <Check className="w-5 h-5 text-cyan-400 shrink-0" />
                <span className="text-white text-base">{f}</span>
              </li>
            ))}
            <li className="flex items-center gap-3 opacity-50">
              <X className="w-5 h-5 text-white/40 shrink-0" />
              <span className="text-white/40 text-sm line-through">ERP Soph Gestão</span>
            </li>
          </ul>
          <a <a href="https://pay.kiwify.com.br/gNROnVP" target="_blank" rel="noopener noreferrer" className="btn-secondary-dark w-full py-4 rounded-xl text-center font-bold inline-flex items-center justify-center gap-2"> target="_blank" rel="noopener noreferrer" className="btn-secondary-dark w-full py-4 rounded-xl text-center font-bold inline-flex items-center justify-center gap-2">
            Assinar Mensal
            <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>

        {/* Anual */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative card-premium p-8 flex flex-col"
          style={{
            border: '1px solid rgba(0,239,255,0.4)',
            boxShadow: '0 0 30px rgba(0,239,255,0.15), 0 0 80px rgba(0,239,255,0.06)',
          }}
        >
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-5 py-1.5 rounded-full text-sm font-bold flex items-center gap-1.5"
            style={{
              background: 'linear-gradient(135deg, #FFFFFF 0%, #00EFFF 100%)',
              color: '#0A192F',
            }}
          >
            <Sparkles className="w-4 h-4" />
            MELHOR OFERTA
          </div>
          <div className="mb-6 mt-2">
            <h3 className="text-xl font-bold text-white mb-1">Plano Anual</h3>
            <p className="text-base text-white">Valor de lançamento + Bônus exclusivo</p>
          </div>
          <div className="mb-6">
            <span className="text-5xl font-extrabold text-white">R$ 97</span>
            <span className="text-white">/ano</span>
          </div>
          <ul className="space-y-3 mb-8 flex-1">
            {features.map((f, i) => (
              <li key={i} className="flex items-center gap-3">
                <Check className="w-5 h-5 text-cyan-400 shrink-0" />
                <span className="text-white text-base">{f}</span>
              </li>
            ))}
            <li className="flex items-center gap-3">
              <Check className="w-5 h-5 text-cyan-400 shrink-0" />
              <span className="text-cyan-400 text-sm font-semibold">🎁 BÔNUS: ERP Soph Gestão</span>
            </li>
          </ul>
          <a <a href="https://pay.kiwify.com.br/I4VDoSk" target="_blank" rel="noopener noreferrer" className="btn-glow w-full py-4 rounded-xl text-center font-bold text-lg inline-flex items-center justify-center gap-2"> target="_blank" rel="noopener noreferrer" className="btn-glow w-full py-4 rounded-xl text-center font-bold text-lg inline-flex items-center justify-center gap-2">
            Assinar Anual com Bônus
            <ArrowRight className="w-5 h-5" />
          </a>
        </motion.div>
      </div>

      {/* WhatsApp */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-center mt-10"
      >
        <a
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-semibold transition-colors"
        >
          <MessageCircle className="w-5 h-5" />
          Tem dúvidas? Fale no WhatsApp
        </a>
      </motion.div>
    </div>
  </section>
);

export default PricingSection;
