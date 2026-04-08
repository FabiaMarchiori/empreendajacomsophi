import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";

import modEcossistema from "@/assets/mod-ecossistema.png";
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

  // Keep thumbStart in sync so active card is visible
  useEffect(() => {
    if (activeIndex < thumbStart) setThumbStart(activeIndex);
    else if (activeIndex >= thumbStart + visibleCount)
      setThumbStart(activeIndex - visibleCount + 1);
  }, [activeIndex, thumbStart, visibleCount]);

  const scrollPrev = () => {
    const newStart = thumbStart - 1;
    if (newStart >= 0) setThumbStart(newStart);
    else setThumbStart(modules.length - visibleCount); // loop
  };

  const scrollNext = () => {
    const newStart = thumbStart + 1;
    if (newStart + visibleCount <= modules.length) setThumbStart(newStart);
    else setThumbStart(0); // loop
  };

  const handleThumbClick = (realIndex: number) => {
    setActiveIndex(realIndex);
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

        {/* Large Preview */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative h-[220px] md:h-[320px] lg:h-[420px] overflow-hidden"
          style={{
            background: '#0d1f36',
            boxShadow: '0 0 32px rgba(0,255,255,0.10), 0 0 80px rgba(0,255,255,0.04)',
            borderRadius: '12px',
          }}
        >
          {/* Gradient border overlay */}
          <div
            className="absolute inset-0 pointer-events-none z-20"
            style={{
              border: '1px solid transparent',
              background: 'linear-gradient(#0d1f36, #0d1f36) padding-box, linear-gradient(135deg, #FFFFFF, #00FFFF) border-box',
              borderRadius: '12px',
            }}
          />

          {/* Module badge */}
          <div
            className="absolute top-4 left-4 z-10 px-3 py-1.5 rounded-md"
            style={{
              background: 'rgba(0,255,255,0.08)',
              border: '1px solid rgba(0,255,255,0.25)',
            }}
          >
            <AnimatePresence mode="wait">
              <motion.span
                key={activeIndex}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                style={{
                  color: '#00FFFF',
                  fontSize: '11px',
                  letterSpacing: '0.07em',
                  textTransform: 'uppercase',
                  fontWeight: 600,
                }}
              >
                {active.title}
              </motion.span>
            </AnimatePresence>
          </div>

          {/* Screenshot */}
          <AnimatePresence mode="wait">
            <motion.img
              key={activeIndex}
              src={active.image}
              alt={active.title}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.35, ease: 'easeOut' }}
              className="absolute inset-0 w-full h-full object-cover"
              style={{
                borderRadius: '12px',
                border: '1px solid rgba(0,255,255,0.2)',
                filter: 'brightness(1.05) contrast(1.02)',
              }}
            />
          </AnimatePresence>

          {/* Bottom text bar */}
          <div
            className="absolute bottom-0 left-0 right-0 z-10 flex flex-col sm:flex-row sm:justify-between sm:items-end gap-2 sm:gap-4"
            style={{
              background: 'rgba(10, 25, 47, 0.85)',
              backdropFilter: 'blur(4px)',
              borderTop: '1px solid rgba(0,255,255,0.15)',
              borderRadius: '0 0 12px 12px',
              padding: '16px 20px',
            }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="flex-1 min-w-0"
              >
                <h3 style={{ fontSize: '17px', fontWeight: 500, color: '#ffffff', marginBottom: '4px' }}>
                  {active.title}
                </h3>
                <p style={{ fontSize: '13px', color: '#7a9ab8', lineHeight: 1.6 }} className="line-clamp-2">
                  {active.desc}
                </p>
              </motion.div>
            </AnimatePresence>
            <a
              href="#planos"
              className="flex-shrink-0 inline-flex items-center gap-1.5 whitespace-nowrap"
              style={{
                color: '#00FFFF',
                fontSize: '11px',
                textTransform: 'uppercase',
                letterSpacing: '0.06em',
                fontWeight: 600,
              }}
            >
              Explorar módulo <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </motion.div>

        {/* Thumbnail cards row */}
        <div className="flex items-center gap-3 mt-8">
          {/* Left arrow */}
          <button
            onClick={scrollPrev}
            className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300"
            style={{
              background: '#112240',
              border: '1px solid #1e3a5c',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = '#00FFFF';
              (e.currentTarget.querySelector('svg') as SVGElement).style.color = '#00FFFF';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = '#1e3a5c';
              (e.currentTarget.querySelector('svg') as SVGElement).style.color = '#7a9ab8';
            }}
          >
            <ChevronLeft className="w-4 h-4" style={{ color: '#7a9ab8', transition: 'color 0.3s' }} />
          </button>

          {/* Thumbnails */}
          <div className="flex-1 grid gap-3" style={{ gridTemplateColumns: `repeat(${visibleCount}, 1fr)` }}>
            {visibleThumbs.map((mod, vi) => {
              const realIndex = thumbStart + vi;
              const isActive = realIndex === activeIndex;

              return (
                <button
                  key={realIndex}
                  onClick={() => handleThumbClick(realIndex)}
                  className="text-left overflow-hidden transition-all duration-300"
                  style={{
                    background: isActive ? '#112240' : '#0f2540',
                    border: isActive ? '1px solid #00FFFF' : '1px solid #1a3358',
                    opacity: isActive ? 1 : 0.65,
                    boxShadow: isActive ? '0 0 16px rgba(0,255,255,0.12)' : 'none',
                    cursor: 'pointer',
                    borderRadius: '10px',
                  }}
                >
                  {/* Mini screenshot */}
                  <div
                    className="relative overflow-hidden"
                    style={{
                      height: '80px',
                      borderRadius: '8px 8px 0 0',
                    }}
                  >
                    <img
                      src={mod.image}
                      alt={mod.title}
                      className="block w-full h-full object-cover"
                      style={{ filter: 'brightness(1.05)' }}
                    />
                    <div
                      className="absolute inset-0"
                      style={{ background: 'rgba(0,0,0,0.10)' }}
                    />
                    {isActive && (
                      <div
                        className="absolute bottom-0 left-0 right-0"
                        style={{ height: '1px', background: 'rgba(0,255,255,0.2)' }}
                      />
                    )}
                  </div>
                  {/* Body */}
                  <div className="p-2.5">
                    <p
                      className="truncate"
                      style={{
                        fontSize: '11px',
                        fontWeight: 500,
                        color: isActive ? '#ffffff' : '#c8d8ea',
                        marginBottom: '4px',
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

          {/* Right arrow */}
          <button
            onClick={scrollNext}
            className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300"
            style={{
              background: '#112240',
              border: '1px solid #1e3a5c',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = '#00FFFF';
              (e.currentTarget.querySelector('svg') as SVGElement).style.color = '#00FFFF';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = '#1e3a5c';
              (e.currentTarget.querySelector('svg') as SVGElement).style.color = '#7a9ab8';
            }}
          >
            <ChevronRight className="w-4 h-4" style={{ color: '#7a9ab8', transition: 'color 0.3s' }} />
          </button>
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

export default ModulesSection;
