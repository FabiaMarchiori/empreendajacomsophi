import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";

import modEcossistema from "@/assets/mod-ecossistema-2.png";
import modErp from "@/assets/mod-erp.png";
import modImportadoras from "@/assets/mod-importadoras.png";
import modSoph from "@/assets/mod-soph.png";
import modEstruture from "@/assets/mod-estruture.png";
import modPrecificacao from "@/assets/mod-precificacao.png";
import modPresenca from "@/assets/mod-presenca.png";

const modules = [
  {
    image: modEcossistema,
    title: "Ecossistema EmpreendaJá",
    desc: "Conheça todos os pilares do ecossistema e entenda como cada módulo se conecta para transformar sua operação comercial.",
  },
  {
    image: modErp,
    title: "ERP Soph Gestão",
    desc: "Tenha visão operacional do negócio com indicadores, gráficos e gestão mais estruturada para crescer com controle.",
  },
  {
    image: modImportadoras,
    title: "Central de Importadoras",
    desc: "Explore as categorias e encontre importadoras organizadas para comprar com mais clareza, agilidade e segurança.",
  },
  {
    image: modSoph,
    title: "Inteligência Soph",
    desc: "Use inteligência artificial para tomar decisões mais rápidas, identificar oportunidades e automatizar processos do seu negócio.",
  },
  {
    image: modEstruture,
    title: "Estruture seu Negócio",
    desc: "Organize a base da sua operação com ferramentas e orientações para estruturar processos, metas e crescimento sustentável.",
  },
  {
    image: modPrecificacao,
    title: "Central de Precificação",
    desc: "Calcule preços com mais lógica, entendendo margem, taxas, impostos e lucratividade para vender sem comprometer o caixa.",
  },
  {
    image: modPresenca,
    title: "Presença Digital & Vendas",
    desc: "Aprenda a construir presença, gerar confiança e transformar sua comunicação digital em vendas mais consistentes.",
  },
];

const useVisibleCount = () => {
  const [count, setCount] = useState(4);
  useEffect(() => {
    const update = () => {
      setCount(window.innerWidth < 640 ? 2 : window.innerWidth < 1024 ? 3 : 4);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);
  return count;
};

const ModulesSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [thumbStart, setThumbStart] = useState(0);
  const visibleCount = useVisibleCount();

  const active = modules[activeIndex];

  const goPrev = () => setActiveIndex((p) => (p - 1 + modules.length) % modules.length);
  const goNext = () => setActiveIndex((p) => (p + 1) % modules.length);

  useEffect(() => {
    if (activeIndex < thumbStart) setThumbStart(activeIndex);
    else if (activeIndex >= thumbStart + visibleCount)
      setThumbStart(activeIndex - visibleCount + 1);
  }, [activeIndex, thumbStart, visibleCount]);

  const scrollThumbPrev = () => {
    const ns = thumbStart - 1;
    setThumbStart(ns >= 0 ? ns : modules.length - visibleCount);
  };
  const scrollThumbNext = () => {
    const ns = thumbStart + 1;
    setThumbStart(ns + visibleCount <= modules.length ? ns : 0);
  };

  const visibleThumbs = modules.slice(thumbStart, thumbStart + visibleCount);

  return (
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

        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl lg:text-[3.5rem] font-extrabold tracking-tight leading-[1.1]"
          >
            <span className="text-white">O que você </span>
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

        {/* ── Featured Card with arrows ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          {/* Left Arrow - centered on panel */}
          <button
            onClick={goPrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 z-20 w-11 h-11 rounded-full flex items-center justify-center transition-all duration-300 group hover:scale-105"
            style={{
              background: 'rgba(13,31,54,0.95)',
              border: '1px solid rgba(0,255,255,0.3)',
              boxShadow: '0 0 20px rgba(0,255,255,0.08)',
              backdropFilter: 'blur(8px)',
            }}
          >
            <ChevronLeft className="w-5 h-5 transition-colors duration-300 text-[#7a9ab8] group-hover:text-[#00FFFF]" />
          </button>

          {/* Right Arrow - centered on panel */}
          <button
            onClick={goNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 z-20 w-11 h-11 rounded-full flex items-center justify-center transition-all duration-300 group hover:scale-105"
            style={{
              background: 'rgba(13,31,54,0.95)',
              border: '1px solid rgba(0,255,255,0.3)',
              boxShadow: '0 0 20px rgba(0,255,255,0.08)',
              backdropFilter: 'blur(8px)',
            }}
          >
            <ChevronRight className="w-5 h-5 transition-colors duration-300 text-[#7a9ab8] group-hover:text-[#00FFFF]" />
          </button>

          {/* Card */}
          <div
            className="rounded-2xl overflow-hidden"
            style={{
              background: '#0d1f36',
              border: '1px solid rgba(0,255,255,0.15)',
              boxShadow: '0 0 40px rgba(0,255,255,0.06)',
            }}
          >
            <div className="flex flex-col lg:flex-row" style={{ minHeight: '420px' }}>
              {/* ─ Left: Image ─ */}
              <div className="relative lg:w-[55%] overflow-hidden">
                <div
                  className="absolute top-4 left-4 z-10 px-3 py-1.5 rounded-md"
                  style={{
                    background: 'rgba(10,25,47,0.8)',
                    border: '1px solid rgba(0,255,255,0.25)',
                    backdropFilter: 'blur(8px)',
                  }}
                >
                  <span
                    style={{
                      color: '#00FFFF',
                      fontSize: '11px',
                      letterSpacing: '0.08em',
                      textTransform: 'uppercase',
                      fontWeight: 600,
                    }}
                  >
                    Módulo {String(activeIndex + 1).padStart(2, '0')}
                  </span>
                </div>

                <AnimatePresence mode="wait">
                  <motion.img
                    key={activeIndex}
                    src={active.image}
                    alt={active.title}
                    initial={{ opacity: 0, scale: 1.03 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.4, ease: 'easeOut' }}
                    className="block w-full h-full object-cover object-top"
                    style={{ minHeight: '300px', maxHeight: '420px' }}
                  />
                </AnimatePresence>

                {/* Fade to content on desktop */}
                <div
                  className="hidden lg:block absolute inset-y-0 right-0 w-24 pointer-events-none"
                  style={{ background: 'linear-gradient(to right, transparent, #0d1f36)' }}
                />
                {/* Fade to content on mobile */}
                <div
                  className="lg:hidden absolute inset-x-0 bottom-0 h-16 pointer-events-none"
                  style={{ background: 'linear-gradient(to bottom, transparent, #0d1f36)' }}
                />
              </div>

              {/* ─ Right: Content ─ */}
              <div className="relative lg:w-[45%] flex flex-col justify-center px-6 py-8 md:px-10 lg:pl-4 lg:pr-12 lg:py-12">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeIndex}
                    initial={{ opacity: 0, x: 16 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -12 }}
                    transition={{ duration: 0.35, ease: 'easeOut' }}
                    className="flex flex-col"
                  >
                    {/* Module label */}
                    <span
                      className="mb-6"
                      style={{
                        color: '#00FFFF',
                        fontSize: '11px',
                        fontWeight: 600,
                        letterSpacing: '0.15em',
                        textTransform: 'uppercase',
                      }}
                    >
                      Módulo {String(activeIndex + 1).padStart(2, '0')} / {String(modules.length).padStart(2, '0')}
                    </span>

                    {/* Title with gradient */}
                    <h3
                      className="mb-4 text-2xl md:text-3xl lg:text-[2rem] font-extrabold leading-tight"
                      style={{
                        background: 'linear-gradient(135deg, #FFFFFF 30%, #00FFFF 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                      }}
                    >
                      {active.title}
                    </h3>

                    {/* Accent line */}
                    <div
                      className="mb-6"
                      style={{
                        width: '48px',
                        height: '2px',
                        background: 'linear-gradient(90deg, #00FFFF, transparent)',
                      }}
                    />

                    {/* Description */}
                    <p
                      className="mb-10 leading-relaxed"
                      style={{
                        fontSize: '15px',
                        color: '#c8d8ea',
                        lineHeight: 1.8,
                      }}
                    >
                      {active.desc}
                    </p>

                    {/* CTA */}
                    <a
                      href="#planos"
                      className="inline-flex items-center gap-2.5 group w-fit px-5 py-2.5 rounded-lg transition-all duration-300"
                      style={{
                        background: 'rgba(0,255,255,0.08)',
                        border: '1px solid rgba(0,255,255,0.25)',
                        color: '#00FFFF',
                        fontSize: '13px',
                        textTransform: 'uppercase',
                        letterSpacing: '0.08em',
                        fontWeight: 600,
                      }}
                    >
                      Explorar módulo
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </a>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </motion.div>

        {/* ── Thumbnail Navigation ── */}
        <div className="flex items-center gap-3 mt-8">
          <NavArrow direction="left" onClick={scrollThumbPrev} />

          <div className="flex-1 grid gap-3" style={{ gridTemplateColumns: `repeat(${visibleCount}, 1fr)` }}>
            {visibleThumbs.map((mod, vi) => {
              const idx = thumbStart + vi;
              const isActive = idx === activeIndex;
              return (
                <button
                  key={idx}
                  onClick={() => setActiveIndex(idx)}
                  className="text-left overflow-hidden rounded-lg transition-all duration-300"
                  style={{
                    background: isActive ? '#112240' : '#0f2540',
                    border: isActive ? '1px solid #00FFFF' : '1px solid #1a3358',
                    opacity: isActive ? 1 : 0.6,
                    boxShadow: isActive ? '0 0 16px rgba(0,255,255,0.1)' : 'none',
                  }}
                >
                  <div className="overflow-hidden" style={{ height: '72px', borderRadius: '7px 7px 0 0' }}>
                    <img
                      src={mod.image}
                      alt={mod.title}
                      className="block w-full h-full object-cover object-top"
                    />
                  </div>
                  <div className="px-2.5 py-2">
                    <p
                      className="truncate"
                      style={{
                        fontSize: '11px',
                        fontWeight: 500,
                        color: isActive ? '#fff' : '#c8d8ea',
                        marginBottom: '2px',
                      }}
                    >
                      {mod.title}
                    </p>
                    <span
                      className="inline-flex items-center gap-1"
                      style={{
                        color: '#00FFFF',
                        fontSize: '9px',
                        textTransform: 'uppercase',
                        letterSpacing: '0.05em',
                        fontWeight: 600,
                      }}
                    >
                      Explorar <ArrowRight className="w-2.5 h-2.5" />
                    </span>
                  </div>
                </button>
              );
            })}
          </div>

          <NavArrow direction="right" onClick={scrollThumbNext} />
        </div>

        {/* Dots */}
        <div className="flex items-center justify-center gap-2 mt-6">
          {modules.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveIndex(i)}
              className="transition-all duration-300"
              style={{
                width: i === activeIndex ? 14 : 8,
                height: 8,
                borderRadius: i === activeIndex ? 3 : 999,
                background: i === activeIndex ? '#00FFFF' : '#1e3a5c',
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

/* ── Arrow button for thumbnails ── */
const NavArrow = ({ direction, onClick }: { direction: 'left' | 'right'; onClick: () => void }) => {
  const Icon = direction === 'left' ? ChevronLeft : ChevronRight;
  return (
    <button
      onClick={onClick}
      className="flex-shrink-0 w-9 h-9 rounded-full flex items-center justify-center transition-colors duration-300 hover:border-[#00FFFF] group"
      style={{
        background: '#112240',
        border: '1px solid #1e3a5c',
      }}
    >
      <Icon className="w-4 h-4 transition-colors duration-300 text-[#7a9ab8] group-hover:text-[#00FFFF]" />
    </button>
  );
};

export default ModulesSection;
