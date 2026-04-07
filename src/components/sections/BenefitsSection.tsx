import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const benefits = [
  "Mais clareza para começar sem medo",
  "Menos erro nas primeiras decisões",
  "Economia real com ferramentas e fornecedores certos",
  "Menos improviso, mais estratégia",
  "Estrutura profissional desde o primeiro dia",
  "Direção clara em cada etapa do negócio",
  "Mais segurança para investir e vender",
  "Crescimento organizado e sustentável",
];

const BenefitsSection = () => (
  <section className="relative py-24 bg-deep overflow-hidden">
    <div className="container relative z-10 mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <span className="inline-block px-4 py-1.5 rounded-full bg-cyan-500/10 text-cyan-400 text-sm font-semibold mb-6">
          BENEFÍCIOS REAIS
        </span>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight gradient-text">
          O que muda na prática
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
        {benefits.map((b, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.07 }}
            className="flex items-center gap-4 p-5 rounded-xl bg-card/50 border border-border/50 hover:border-cyan-500/20 transition-all"
          >
            <CheckCircle2 className="w-6 h-6 text-cyan-400 shrink-0" />
            <p className="text-foreground font-medium">{b}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default BenefitsSection;
