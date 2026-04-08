import { motion } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState } from "react";

import modEcossistema from "@/assets/mod-ecossistema.png";
import modEstruture from "@/assets/mod-estruture.png";
import modSoph from "@/assets/mod-soph.png";
import modImportadoras from "@/assets/mod-importadoras.png";
import modPrecificacao from "@/assets/mod-precificacao.png";
import modErp from "@/assets/mod-erp.png";
import modPresenca from "@/assets/mod-presenca.png";

const cards = [
  {
    image: modEcossistema,
    title: "Ecossistema EmpreendaJá",
    desc: "Visão completa do seu ambiente principal, com acesso aos módulos, progresso da jornada e próximos passos para crescer com mais clareza.",
  },
  {
    image: modEstruture,
    title: "Estruture seu Negócio",
    desc: "Formalize sua operação, construa sua identidade e organize os primeiros passos do negócio com trilhas práticas e orientação da Soph.",
  },
  {
    image: modSoph,
    title: "Inteligência Soph",
    desc: "Sua assistente estratégica para tirar dúvidas, orientar decisões e conectar você aos próximos passos mais importantes do ecossistema.",
  },
  {
    image: modImportadoras,
    title: "Central de Importadoras",
    desc: "Explore as categorias e encontre importadoras organizadas para comprar com mais clareza, agilidade e segurança.",
  },
  {
    image: modPrecificacao,
    title: "Central de Precificação",
    desc: "Calcule preços com mais lógica, entendendo margem, taxas, impostos e lucratividade para vender sem comprometer o caixa.",
  },
  {
    image: modErp,
    title: "ERP Soph Gestão",
    desc: "Tenha visão operacional do negócio com indicadores, gráficos e gestão mais estruturada para crescer com controle.",
  },
  {
    image: modPresenca,
    title: "Presença Digital & Vendas",
    desc: "Aprenda a construir presença, gerar confiança e transformar sua comunicação digital em vendas mais consistentes.",
  },
];

const getCardStyle = (i: number, selectedIndex: number) => {
  const diff = Math.abs(i - selectedIndex);
  const isActive = diff === 0;
  const isNear = diff === 1;

  const scale = isActive ? 1.07 : isNear ? 0.93 : 0.85;
  const opacity = isActive ? 1 : isNear ? 0.75 : 0.5;
  const bg = isActive ? '#112240' : isNear ? '#0f2540' : '#0d1f36';
  const border = isActive ? '1px solid #00FFFF' : '1px solid #1a3358';
  const shadow = isActive
    ? '0 0 24px rgba(0,255,255,0.12), 0 0 60px rgba(0,255,255,0.05)'
    : '0 0 10px rgba(0,0,0,0.2)';
  const imgOverlay = isActive ? 'rgba(0,0,0,0.08)' : isNear ? 'rgba(0,0,0,0.25)' : 'rgba(0,0,0,0.4)';
  const imgBorder = isActive ? '1px solid rgba(0,255,255,0.2)' : '1px solid transparent';

  return { scale, opacity, bg, border, shadow, imgOverlay, imgBorder };
};

const NavArrow = ({
  direction,
  onClick,
  disabled,
}: {
  direction: "prev" | "next";
  onClick: () => void;
  disabled: boolean;
}) => (
  <button
    onClick={onClick}
    disabled={disabled}
    className="w-10 h-10 rounded-full flex items-center justify-center disabled:opacity-20"
    style={{
      background: '#112240',
      border: '1px solid #1e3a5c',
      transition: 'all 0.3s ease',
    }}
    onMouseEnter={(e) => {
      if (!disabled) {
        e.currentTarget.style.borderColor = '#00FFFF';
        e.currentTarget.style.color = '#00FFFF';
      }
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.borderColor = '#1e3a5c';
      e.currentTarget.style.color = '';
    }}
  >
    {direction === "prev" ? (
      <ChevronLeft className="w-5 h-5 text-white" />
    ) : (
      <ChevronRight className="w-5 h-5 text-white" />
    )}
  </button>
);

const ModulesSection = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "center",
    loop: false,
    slidesToScroll: 1,
    containScroll: "trimSnaps",
  });
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(true);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => {
      setCanScrollPrev(emblaApi.canScrollPrev());
      setCanScrollNext(emblaApi.canScrollNext());
      setSelectedIndex(emblaApi.selectedScrollSnap());
    };
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

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

        {/* Header row */}
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

        {/* Carousel wrapper with side arrows */}
        <div className="relative">
          {/* Left arrow - desktop */}
          <div className="hidden lg:flex absolute -left-6 top-1/2 -translate-y-1/2 z-10">
            <NavArrow direction="prev" onClick={scrollPrev} disabled={!canScrollPrev} />
          </div>

          {/* Right arrow - desktop */}
          <div className="hidden lg:flex absolute -right-6 top-1/2 -translate-y-1/2 z-10">
            <NavArrow direction="next" onClick={scrollNext} disabled={!canScrollNext} />
          </div>

          {/* Carousel */}
          <div ref={emblaRef} className="overflow-hidden lg:mx-8">
            <div className="flex gap-5">
              {cards.map((card, i) => {
                const s = getCardStyle(i, selectedIndex);

                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.08 }}
                    className="group flex-shrink-0 w-[85%] sm:w-[46%] lg:w-[calc(25%-15px)] rounded-2xl overflow-hidden"
                    style={{
                      background: s.bg,
                      border: s.border,
                      boxShadow: s.shadow,
                      opacity: s.opacity,
                      transform: `scale(${s.scale})`,
                      transition: 'all 0.35s cubic-bezier(0.4, 0, 0.2, 1)',
                    }}
                  >
                    {/* Image area */}
                    <div className="relative h-56 overflow-hidden" style={{ borderBottom: s.imgBorder }}>
                      {/* Cyan glow behind image */}
                      <div
                        className="absolute inset-0 z-0"
                        style={{
                          background: 'radial-gradient(ellipse at center 30%, rgba(0,239,255,0.12) 0%, transparent 70%)',
                        }}
                      />
                      <img
                        src={card.image}
                        alt={card.title}
                        loading="lazy"
                        className="relative z-[1] w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                        style={{
                          filter: 'brightness(1.1) contrast(1.05) saturate(1.1)',
                        }}
                      />
                      {/* Dynamic overlay */}
                      <div
                        className="absolute inset-0 z-[2]"
                        style={{
                          background: s.imgOverlay,
                          transition: 'background 0.35s cubic-bezier(0.4, 0, 0.2, 1)',
                        }}
                      />
                      {/* Bottom fade */}
                      <div
                        className="absolute inset-x-0 bottom-0 h-16 z-[3]"
                        style={{
                          background: `linear-gradient(180deg, transparent 0%, ${s.bg} 100%)`,
                        }}
                      />
                    </div>

                    {/* Body */}
                    <div className="p-6 flex flex-col gap-3">
                      <h3 className="text-lg font-bold text-white">{card.title}</h3>
                      <p className="text-sm leading-relaxed text-white/80">
                        {card.desc}
                      </p>
                      <a
                        href="#planos"
                        className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.1em] uppercase mt-4 text-white/70 transition-colors duration-300 group-hover:text-[#00EFFF]"
                      >
                        EXPLORAR MÓDULO
                        <ArrowRight className="w-4 h-4" />
                      </a>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Dots + mobile arrows */}
        <div className="flex items-center justify-center gap-4 mt-10">
          <div className="flex lg:hidden">
            <NavArrow direction="prev" onClick={scrollPrev} disabled={!canScrollPrev} />
          </div>

          {/* Dots */}
          <div className="flex items-center gap-2">
            {cards.map((_, i) => (
              <button
                key={i}
                onClick={() => emblaApi?.scrollTo(i)}
                className="transition-all duration-300"
                style={{
                  width: i === selectedIndex ? 16 : 8,
                  height: 8,
                  borderRadius: i === selectedIndex ? 3 : 999,
                  background: i === selectedIndex ? '#00FFFF' : '#1e3a5c',
                }}
              />
            ))}
          </div>

          <div className="flex lg:hidden">
            <NavArrow direction="next" onClick={scrollNext} disabled={!canScrollNext} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ModulesSection;
