import { motion } from "framer-motion";
import { ArrowRight, Package, Calculator, LayoutDashboard, Bot, Play } from "lucide-react";
import { useState } from "react";
import capaVideo from "@/assets/capa_video.png";

const benefits = [
  {
    icon: Package,
    title: "Central de Importadoras",
    desc: "Acesse a 'mina de ouro' com mais de 260 importadoras diretas, organizadas por nichos lucrativos.",
  },
  {
    icon: Calculator,
    title: "Precificação Inteligente",
    desc: "Pare de perder dinheiro. Calcule preços, taxas e lucros de forma automática e segura.",
  },
  {
    icon: LayoutDashboard,
    title: "ERP Soph Gestão",
    desc: "Organize sua casa. Controle vendas, estoque e financeiro em um sistema simples e intuitivo.",
  },
  {
    icon: Bot,
    title: "Soph IA",
    desc: "Tenha uma sócia digital 24h por dia para tirar dúvidas e orientar o crescimento do seu negócio.",
  },
];

const ModulesSection = () => {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden" style={{ background: "#0a192f" }}>
      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full blur-[160px] pointer-events-none"
        style={{ background: "rgba(0,255,255,0.06)" }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* ── LEFT: iPhone Mockup with Video ── */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="flex justify-center lg:justify-start"
          >
            <div className="relative">
              {/* Outer glow */}
              <div
                className="absolute inset-0 rounded-[3rem] blur-3xl opacity-60 pointer-events-none"
                style={{
                  background: "radial-gradient(circle, #00FFFF 0%, transparent 70%)",
                  transform: "scale(1.15)",
                }}
              />

              {/* iPhone Frame */}
              <div
                className="relative mx-auto"
                style={{
                  width: "300px",
                  height: "620px",
                  background: "linear-gradient(145deg, #1a1a1a 0%, #2a2a2a 50%, #0f0f0f 100%)",
                  borderRadius: "3rem",
                  padding: "14px",
                  boxShadow:
                    "0 0 60px rgba(0,255,255,0.35), 0 0 120px rgba(0,255,255,0.15), inset 0 0 2px rgba(255,255,255,0.1), 0 25px 50px rgba(0,0,0,0.6)",
                  border: "1px solid rgba(0,255,255,0.25)",
                }}
              >
                {/* Side buttons */}
                <div className="absolute left-[-3px] top-[110px] w-[3px] h-[32px] rounded-l-sm bg-[#1a1a1a]" />
                <div className="absolute left-[-3px] top-[160px] w-[3px] h-[55px] rounded-l-sm bg-[#1a1a1a]" />
                <div className="absolute left-[-3px] top-[225px] w-[3px] h-[55px] rounded-l-sm bg-[#1a1a1a]" />
                <div className="absolute right-[-3px] top-[140px] w-[3px] h-[80px] rounded-r-sm bg-[#1a1a1a]" />

                {/* Screen */}
                <div
                  className="relative w-full h-full overflow-hidden bg-black"
                  style={{ borderRadius: "2.3rem" }}
                >
                  {/* Dynamic Island */}
                  <div
                    className="absolute top-2 left-1/2 -translate-x-1/2 z-20"
                    style={{
                      width: "100px",
                      height: "28px",
                      background: "#000",
                      borderRadius: "999px",
                    }}
                  />

                  {/* YouTube Short Embed */}
                  <iframe
                    src="https://www.youtube.com/embed/K_ZQ1pTcNNs?autoplay=0&controls=1&rel=0&modestbranding=1&playsinline=1"
                    title="EmpreendaJá com Soph"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="absolute inset-0 w-full h-full"
                    style={{ border: "none" }}
                  />
                </div>
              </div>
            </div>
          </motion.div>

          {/* ── RIGHT: Content ── */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            {/* Badge */}
            <span
              className="inline-block text-xs font-semibold tracking-[0.25em] uppercase mb-5"
              style={{ color: "rgba(255,255,255,0.5)" }}
            >
              EXPLORAÇÃO PROFUNDA
            </span>

            {/* Title */}
            <h2 className="text-4xl md:text-5xl lg:text-[3.25rem] font-extrabold tracking-tight leading-[1.1] mb-5">
              <span className="text-white">O que você </span>
              <span className="gradient-text">acessará</span>
            </h2>

            {/* Subtitle */}
            <p
              className="text-base md:text-lg leading-relaxed mb-10"
              style={{ color: "rgba(255,255,255,0.7)" }}
            >
              Veja por dentro como o Ecossistema EmpreendaJá com Soph funciona e como ele vai transformar sua operação comercial.
            </p>

            {/* Benefits list */}
            <div className="flex flex-col gap-5 mb-10">
              {benefits.map((b, i) => {
                const Icon = b.icon;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.1 + i * 0.1 }}
                    className="flex items-start gap-4"
                  >
                    <div
                      className="shrink-0 w-12 h-12 rounded-xl flex items-center justify-center"
                      style={{
                        background: "rgba(0,255,255,0.1)",
                        border: "1px solid rgba(0,255,255,0.3)",
                        boxShadow: "0 0 16px rgba(0,255,255,0.12)",
                      }}
                    >
                      <Icon className="w-5 h-5" style={{ color: "#00FFFF" }} />
                    </div>
                    <div className="flex-1 pt-0.5">
                      <h3 className="text-white font-bold text-lg mb-1">{b.title}</h3>
                      <p
                        className="text-sm leading-relaxed"
                        style={{ color: "rgba(255,255,255,0.65)" }}
                      >
                        {b.desc}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* CTA */}
            <motion.a
              href="#planos"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="group relative inline-flex items-center justify-center gap-3 px-8 py-5 rounded-xl font-extrabold text-base md:text-lg tracking-wide uppercase overflow-hidden transition-transform duration-300 hover:scale-[1.03] w-full sm:w-auto"
              style={{
                background: "linear-gradient(135deg, #00FFFF 0%, #00c4d6 100%)",
                color: "#0a192f",
                boxShadow:
                  "0 0 30px rgba(0,255,255,0.4), 0 0 60px rgba(0,255,255,0.2), 0 8px 24px rgba(0,0,0,0.3)",
                animation: "ctaPulse 2.5s ease-in-out infinite",
              }}
            >
              <span className="relative z-10">QUERO ESSE ACESSO AGORA</span>
              <ArrowRight className="w-5 h-5 relative z-10 transition-transform duration-300 group-hover:translate-x-1" />
            </motion.a>
          </motion.div>
        </div>
      </div>

      {/* Pulse keyframes */}
      <style>{`
        @keyframes ctaPulse {
          0%, 100% {
            box-shadow: 0 0 30px rgba(0,255,255,0.4), 0 0 60px rgba(0,255,255,0.2), 0 8px 24px rgba(0,0,0,0.3);
          }
          50% {
            box-shadow: 0 0 45px rgba(0,255,255,0.6), 0 0 90px rgba(0,255,255,0.35), 0 8px 24px rgba(0,0,0,0.3);
          }
        }
      `}</style>
    </section>
  );
};

export default ModulesSection;
