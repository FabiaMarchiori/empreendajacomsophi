import { motion } from "framer-motion";

const steps = [
  { num: "01", title: "Entre no ecossistema", desc: "Escolha seu plano e acesse imediatamente a plataforma completa." },
  { num: "02", title: "Encontre importadoras e nichos", desc: "Navegue por +260 fornecedores organizados em 15 nichos." },
  { num: "03", title: "Receba orientação da Soph", desc: "A IA do ecossistema te guia nas melhores decisões." },
  { num: "04", title: "Estruture sua marca", desc: "Crie seu MEI, logo e registre sua marca com direção." },
  { num: "05", title: "Aprenda a vender", desc: "Domine os marketplaces e comece a faturar." },
  { num: "06", title: "Economize e precifique", desc: "Use ferramentas gratuitas e calcule preços com lógica." },
  { num: "07", title: "Escale com o ERP", desc: "No plano anual, receba o bônus ERP Soph Gestão." },
];

const HowItWorksSection = () => (
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
          COMO FUNCIONA
        </span>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight gradient-text">
          Sua jornada dentro do ecossistema
        </h2>
      </motion.div>

      <div className="max-w-3xl mx-auto relative">
        {/* Vertical line */}
        <div className="absolute left-6 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-500/40 via-cyan-500/20 to-transparent" />

        {steps.map((step, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="relative flex items-start gap-6 mb-8 last:mb-0"
          >
            <div className="relative z-10 w-12 h-12 md:w-16 md:h-16 rounded-full bg-card border border-cyan-500/30 flex items-center justify-center shrink-0 glow-cyan">
              <span className="text-cyan-400 font-bold text-sm md:text-base">{step.num}</span>
            </div>
            <div className="pt-2 md:pt-4">
              <h3 className="text-xl font-bold text-foreground mb-1">{step.title}</h3>
              <p className="text-muted-foreground">{step.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default HowItWorksSection;
