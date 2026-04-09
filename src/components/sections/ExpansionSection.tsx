import { motion } from "framer-motion";
import { Shirt, Footprints, Gem, Factory, Clock } from "lucide-react";

const categories = [
  {
    title: "Moda Brás",
    icon: Shirt,
    items: ["Moda Feminina", "Moda Masculina", "Moda Infantil", "Moda Íntima", "Moda Fitness"],
  },
  {
    title: "Atacado de Calçados",
    icon: Footprints,
    items: ["Jaú", "Nova Serrana", "Birigui", "Região Sul"],
  },
  {
    title: "Semi-jóias",
    icon: Gem,
    items: ["Semi-joias de Limeira"],
  },
  {
    title: "Fabricantes Nacionais",
    icon: Factory,
    items: ["Brinquedos", "Decoração", "Eletrônicos", "Outros nichos nacionais"],
  },
];

const ExpansionSection = () => (
  <section className="relative py-24 overflow-hidden" style={{ background: '#0A192F' }}>
    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-cyan-500/3 rounded-full blur-[150px]" />
    <div className="container relative z-10 mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-14 max-w-3xl mx-auto"
      >
        <span className="inline-block px-4 py-1.5 rounded-full bg-cyan-500/10 text-white text-sm font-bold mb-6 tracking-wide">
          EXPANSÃO DO ECOSSISTEMA
        </span>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight mb-6">
          <span className="text-white">Mais fornecedores. </span>
          <span className="gradient-text">Mais oportunidades.</span>
        </h2>
        <p className="text-lg text-white leading-relaxed">
          Além das importadoras da 25 de Março, novos acessos e fornecedores serão liberados para ampliar ainda mais suas oportunidades de compra, margem e crescimento.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-10">
        {categories.map((cat, i) => {
          const Icon = cat.icon;
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group rounded-2xl p-7 transition-all duration-300 hover:scale-[1.02]"
              style={{
                background: 'rgba(16,42,67,0.85)',
                border: '1px solid rgba(0,239,255,0.12)',
                boxShadow: '0 0 24px rgba(0,239,255,0.04), 0 2px 12px rgba(0,0,0,0.3)',
              }}
            >
              <div className="flex items-center gap-4 mb-5">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-colors group-hover:bg-cyan-500/20"
                  style={{
                    background: 'rgba(0,239,255,0.08)',
                    boxShadow: '0 0 16px rgba(0,239,255,0.08)',
                  }}
                >
                  <Icon className="w-6 h-6 text-cyan-400" />
                </div>
                <h3 className="text-xl font-extrabold text-white tracking-tight">{cat.title}</h3>
              </div>

              <ul className="space-y-2.5 mb-5">
                {cat.items.map((item, j) => (
                  <li key={j} className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0" />
                    <span className="text-white font-medium text-[15px]">{item}</span>
                  </li>
                ))}
              </ul>

              <span
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold tracking-wider"
                style={{
                  background: 'rgba(0,239,255,0.1)',
                  color: '#00EFFF',
                  border: '1px solid rgba(0,239,255,0.2)',
                }}
              >
                <Clock className="w-3.5 h-3.5" />
                EM BREVE
              </span>
            </motion.div>
          );
        })}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.4 }}
        className="max-w-3xl mx-auto px-6 py-4 rounded-xl text-center"
        style={{
          background: 'rgba(0,239,255,0.06)',
          border: '1px solid rgba(0,239,255,0.15)',
        }}
      >
        <p className="text-white font-semibold text-sm md:text-base">
          ⚠️ Os acessos acima fazem parte da expansão do ecossistema e <span className="text-cyan-400">não estão inclusos na assinatura atual</span>.
        </p>
      </motion.div>
    </div>
  </section>
);

export default ExpansionSection;
