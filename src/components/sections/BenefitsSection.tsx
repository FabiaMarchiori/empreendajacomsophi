import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

const benefits = [
  "Passa a colocar o preço certo para vender com lucro real",
  "Começa a entender taxas, custos e marketplaces",
  "Começa a controlar entradas e saídas para parar de vender no escuro",
  "Aprende a abrir seu CNPJ sem gastar nada",
  "Aprende a criar logo, site e marca com ferramentas gratuitas",
  "Descobre importadoras gigantes que nem imaginava que existiam, com preços baixos para lucrar muito mais",
  "Reduz erros, retrabalho, perda de dinheiro e gastos desnecessários",
  "Começa a enxergar com mais clareza o que dá lucro e o que está te fazendo perder dinheiro",
];

const BenefitsSection = () => (
  <section className="relative py-24 bg-deep overflow-hidden">
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/3 rounded-full blur-[150px]" />
    <div className="container relative z-10 mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16 max-w-4xl mx-auto"
      >
        <span className="inline-block px-4 py-1.5 rounded-full bg-cyan-500/10 text-white text-sm font-bold mb-6 tracking-wide">
          TRANSFORMAÇÃO REAL
        </span>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight">
          <span className="text-white">O que muda na sua vida quando você entra para o </span>
          <span className="gradient-text">Ecossistema da Soph</span>
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-5 max-w-4xl mx-auto">
        {benefits.map((b, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            className="card-premium flex items-start gap-4 p-6"
          >
            <div className="w-10 h-10 rounded-lg bg-cyan-500/10 flex items-center justify-center shrink-0"
              style={{ boxShadow: '0 0 12px rgba(0,239,255,0.08)' }}
            >
              <Sparkles className="w-5 h-5 text-cyan-400" />
            </div>
            <p className="text-white font-semibold text-base leading-relaxed pt-1.5">{b}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default BenefitsSection;
