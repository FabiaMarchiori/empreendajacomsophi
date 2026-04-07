import { motion } from "framer-motion";
import { XCircle } from "lucide-react";

const pains = [
  "Tenta empreender, mas não sabe por onde começar",
  "Pesquisa tudo sozinho e perde horas sem resultado",
  "Não sabe onde encontrar bons fornecedores",
  "Tem medo de investir errado e perder dinheiro",
  "Improvisa marca, preço e operação sem estratégia",
  "Sente que está sempre um passo atrás",
  "Não tem estrutura nem ferramentas adequadas",
];

const PainSection = () => (
  <section className="relative py-24 bg-deep overflow-hidden">
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-cyan-500/3 rounded-full blur-[120px]" />
    <div className="container relative z-10 mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16 max-w-3xl mx-auto"
      >
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight mb-6 gradient-text">
          Você se identifica com alguma dessas situações?
        </h2>
        <p className="text-lg text-muted-foreground">
          Se ao menos uma dessas frases faz sentido pra você, o Ecossistema EmpreendaJá foi criado exatamente para isso.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
        {pains.map((pain, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="flex items-start gap-4 p-5 rounded-xl bg-card/50 border border-border/50 hover:border-cyan-500/20 transition-all duration-300"
          >
            <XCircle className="w-6 h-6 text-red-400 shrink-0 mt-0.5" />
            <p className="text-foreground font-medium">{pain}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default PainSection;
