import { motion } from "framer-motion";
import { Search, Wrench, Brain, DollarSign, ShoppingCart, Target } from "lucide-react";

const solutions = [
  { icon: Search, title: "Encontre importadoras", desc: "Mais de 260 fornecedores organizados em 15 nichos diferentes" },
  { icon: Wrench, title: "Estruture seu negócio", desc: "MEI, logo, marca e tudo que você precisa para começar certo" },
  { icon: Brain, title: "Orientação da Soph", desc: "Inteligência artificial treinada para guiar suas decisões" },
  { icon: DollarSign, title: "Economize de verdade", desc: "Ferramentas gratuitas e estratégias para reduzir custos" },
  { icon: ShoppingCart, title: "Venda nos marketplaces", desc: "Aprenda a vender nas maiores plataformas do Brasil" },
  { icon: Target, title: "Precifique com lógica", desc: "Calcule seus preços com estratégia e margem real" },
];

const SolutionSection = () => (
  <section className="relative py-24 overflow-hidden">
    <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-cyan-500/3 rounded-full blur-[150px]" />
    <div className="container relative z-10 mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16 max-w-3xl mx-auto"
      >
        <span className="inline-block px-4 py-1.5 rounded-full bg-cyan-500/10 text-cyan-400 text-sm font-semibold mb-6">
          A SOLUÇÃO
        </span>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight mb-6 gradient-text">
          Não é apenas uma lista. É o ecossistema completo.
        </h2>
        <p className="text-lg text-muted-foreground">
          Você não compra apenas contatos. Você entra em um ambiente estruturado para transformar sua forma de empreender.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {solutions.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="card-premium p-6 group cursor-default"
          >
            <div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center mb-4 group-hover:bg-cyan-500/20 transition-colors">
              <item.icon className="w-6 h-6 text-cyan-400" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-2">{item.title}</h3>
            <p className="text-muted-foreground">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default SolutionSection;
