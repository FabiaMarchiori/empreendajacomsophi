import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import cardDiretorio from "@/assets/card-diretorio.jpg";
import cardSoph from "@/assets/card-soph.jpg";
import cardProfit from "@/assets/card-profit.jpg";
import cardAcademy from "@/assets/card-academy.jpg";

const cards = [
  {
    image: cardDiretorio,
    title: "Diretório de Elite",
    desc: "Contatos diretos de importadoras de eletrônicos, casa e moda.",
  },
  {
    image: cardSoph,
    title: "Inteligência Soph",
    desc: "Chatbot especializado em e-commerce e gestão para tirar dúvidas 24/7.",
  },
  {
    image: cardProfit,
    title: "Profit Engine",
    desc: "Calculadoras de impostos, fretes e taxas de marketplace integradas.",
  },
  {
    image: cardAcademy,
    title: "Academy 360",
    desc: "Treinamentos práticos sobre tráfego, vendas e atendimento.",
  },
];

const ModulesSection = () => (
  <section className="relative py-24 lg:py-32" style={{ background: '#0A192F' }}>
    <div className="container mx-auto px-6">
      {/* Badge */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-8"
      >
        <span
          className="text-xs font-semibold tracking-[0.25em] uppercase"
          style={{ color: 'rgba(255,255,255,0.5)' }}
        >
          EXPLORAÇÃO PROFUNDA
        </span>
      </motion.div>

      {/* Header row: title left, description right */}
      <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl lg:text-[3.5rem] font-extrabold tracking-tight leading-[1.1]"
        >
          <span className="text-foreground">O que você </span>
          <span className="gradient-text">acessará</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="text-sm md:text-base leading-relaxed max-w-sm lg:text-right"
          style={{ color: 'rgba(255,255,255,0.55)' }}
        >
          Cada pilar foi desenhado para remover um gargalo específico na sua operação comercial.
        </motion.p>
      </div>

      {/* Cards grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {cards.map((card, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="group rounded-2xl overflow-hidden transition-all duration-400 hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(0,239,255,0.08)]"
            style={{
              background: '#102A43',
              border: '1px solid rgba(0,239,255,0.08)',
            }}
          >
            {/* Image area */}
            <div className="relative h-48 overflow-hidden">
              <img
                src={card.image}
                alt={card.title}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              {/* Subtle overlay for depth */}
              <div
                className="absolute inset-0"
                style={{
                  background: 'linear-gradient(180deg, transparent 50%, rgba(16,42,67,0.6) 100%)',
                }}
              />
            </div>

            {/* Body */}
            <div className="p-6 flex flex-col gap-3">
              <h3 className="text-lg font-bold text-foreground">{card.title}</h3>
              <p
                className="text-sm leading-relaxed"
                style={{ color: 'rgba(255,255,255,0.55)' }}
              >
                {card.desc}
              </p>

              {/* CTA */}
              <a
                href="#planos"
                className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.1em] uppercase mt-4 transition-colors duration-300 group-hover:text-primary"
                style={{ color: 'rgba(255,255,255,0.7)' }}
              >
                VER MAIS
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ModulesSection;
