import { motion } from "framer-motion";
import { Clock } from "lucide-react";

const expansions = [
  "Moda Feminina",
  "Moda Masculina",
  "Moda Infantil",
  "Moda Íntima",
  "Moda Fitness",
  "Jaú",
  "Nova Serrana",
  "Birigui",
  "Região Sul",
  "Semi-joias de Limeira",
  "Fabricantes Nacionais",
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
        className="text-center mb-8 max-w-3xl mx-auto"
      >
        <span className="inline-block px-4 py-1.5 rounded-full bg-cyan-500/10 text-white text-sm font-bold mb-6 tracking-wide">
          EXPANSÃO DO ECOSSISTEMA
        </span>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight mb-6">
          <span className="text-white">Mais fornecedores. </span>
          <span className="gradient-text">Mais oportunidades.</span>
        </h2>
        <p className="text-lg text-white leading-relaxed mb-6">
          Além das importadoras da 25 de Março, novos acessos e fornecedores serão liberados para ampliar ainda mais suas oportunidades de compra, margem e crescimento.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="max-w-3xl mx-auto mb-12 px-6 py-4 rounded-xl text-center"
        style={{
          background: 'rgba(0,239,255,0.06)',
          border: '1px solid rgba(0,239,255,0.15)',
        }}
      >
        <p className="text-white font-semibold text-sm md:text-base">
          ⚠️ Os acessos abaixo fazem parte da expansão do ecossistema e <span className="text-cyan-400">não estão inclusos na assinatura atual</span>.
        </p>
      </motion.div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
        {expansions.map((name, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
            className="card-premium p-5 text-center group cursor-default"
          >
            <div className="w-10 h-10 rounded-lg bg-cyan-500/10 flex items-center justify-center mx-auto mb-3 group-hover:bg-cyan-500/20 transition-colors"
              style={{ boxShadow: '0 0 12px rgba(0,239,255,0.06)' }}
            >
              <Clock className="w-5 h-5 text-cyan-400" />
            </div>
            <p className="text-white font-bold text-sm mb-2">{name}</p>
            <span className="inline-block px-3 py-1 rounded-full text-[11px] font-bold tracking-wider"
              style={{
                background: 'rgba(0,239,255,0.1)',
                color: '#00EFFF',
                border: '1px solid rgba(0,239,255,0.2)',
              }}
            >
              EM BREVE
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ExpansionSection;
