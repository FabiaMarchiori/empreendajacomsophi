import { motion } from "framer-motion";
import { DollarSign, ShieldCheck, BarChart3, AlertTriangle, ShoppingCart, Lightbulb } from "lucide-react";

const solutions = [
  { icon: DollarSign, title: "Ganhe mais calculando o preço certo", desc: "Precifique seus produtos com lógica, margem real e sem perder dinheiro por não saber calcular taxas e custos." },
  { icon: ShieldCheck, title: "Compre das maiores importadoras com mais segurança", desc: "Acesse +260 importadoras diretas organizadas em 15 nichos, verificadas e prontas para você comprar com confiança." },
  { icon: BarChart3, title: "Organize sua operação com o ERP Soph Gestão", desc: "Controle entradas, saídas, estoque e indicadores do seu negócio com um sistema feito para quem está começando." },
  { icon: AlertTriangle, title: "Evite golpes e compre com mais confiança", desc: "Fornecedores organizados e orientações claras para você não cair em armadilhas e proteger seu investimento." },
  { icon: ShoppingCart, title: "Venda com mais estratégia nos marketplaces", desc: "Aprenda a vender nas maiores plataformas do Brasil com orientações práticas, diretas e focadas em resultado." },
  { icon: Lightbulb, title: "Economize com ferramentas e direção", desc: "Ferramentas gratuitas, orientações para MEI, logo, marca e tudo que você precisa para estruturar sem gastar muito." },
];

const SolutionSection = () => (
  <section id="ecossistema" className="relative py-24 overflow-hidden" style={{ background: '#0A192F' }}>
    <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-cyan-500/3 rounded-full blur-[150px]" />
    <div className="absolute top-0 left-0 w-[300px] h-[300px] bg-cyan-500/3 rounded-full blur-[120px]" />
    <div className="container relative z-10 mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16 max-w-3xl mx-auto"
      >
        <span className="inline-block px-4 py-1.5 rounded-full bg-cyan-500/10 text-white text-sm font-bold mb-6 tracking-wide">
          A SOLUÇÃO
        </span>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight mb-6">
          <span className="text-white">Não é apenas uma lista. É o </span>
          <span className="gradient-text">ecossistema completo.</span>
        </h2>
        <p className="text-lg text-white/85">
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
            className="card-premium p-7 group cursor-default"
          >
            <div className="w-14 h-14 rounded-xl bg-cyan-500/10 flex items-center justify-center mb-5 group-hover:bg-cyan-500/20 transition-colors"
              style={{ boxShadow: '0 0 20px rgba(0,239,255,0.08)' }}
            >
              <item.icon className="w-7 h-7 text-cyan-400" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
            <p className="text-white/75 leading-relaxed">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default SolutionSection;
