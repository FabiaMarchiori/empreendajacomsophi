import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowLeft, ArrowRight, Bot, Calculator, LayoutDashboard, Package } from "lucide-react";
import { useState } from "react";

import managementScreen from "@/assets/mod-erp.png";
import importersScreen from "@/assets/mod-importadoras.png";
import pricingScreen from "@/assets/mod-precificacao.png";
import sophScreen from "@/assets/mod-soph.png";
import thankYouScreen from "@/assets/tela-obrigado-original.png";

const pillars = [
  {
    number: "01",
    icon: Package,
    title: "CENTRAL DE FORNECEDORES",
    description: "Mais de 320 fornecedores e importadoras organizados por categorias para facilitar sua pesquisa.",
    surface: "bg-[radial-gradient(circle_at_10%_0%,rgba(34,211,238,0.12),transparent_42%),linear-gradient(145deg,rgba(16,48,76,0.98),rgba(9,29,50,0.98))]",
    accent: "left-6 right-[38%]",
  },
  {
    number: "02",
    icon: Calculator,
    title: "PRECIFICAÇÃO",
    description: "Organize custos, margem e outros dados importantes para chegar a um preço de venda mais consciente.",
    surface: "bg-[radial-gradient(circle_at_90%_8%,rgba(56,189,248,0.08),transparent_40%),linear-gradient(155deg,rgba(10,33,57,0.98),rgba(14,43,68,0.96))]",
    accent: "left-[44%] right-6",
  },
  {
    number: "03",
    icon: LayoutDashboard,
    title: "GESTÃO DO NEGÓCIO",
    description: "Recursos para acompanhar áreas como produtos, vendas, estoque, clientes, caixa e operação.",
    surface: "bg-[radial-gradient(circle_at_8%_92%,rgba(6,182,212,0.09),transparent_42%),linear-gradient(135deg,rgba(11,36,60,0.98),rgba(13,42,67,0.96))]",
    accent: "left-10 right-[34%]",
  },
  {
    number: "04",
    icon: Bot,
    title: "SOPH — SUA SÓCIA DIGITAL",
    description: "Uma camada de assistência criada para apoiar você ao longo da sua jornada dentro da plataforma.",
    surface: "bg-[radial-gradient(circle_at_92%_88%,rgba(34,211,238,0.08),transparent_40%),linear-gradient(145deg,rgba(14,43,68,0.96),rgba(8,29,50,0.98))]",
    accent: "left-[38%] right-10",
  },
];

const slides = [
  {
    label: "Fornecedores",
    eyebrow: "CENTRAL DE FORNECEDORES",
    title: "Explore opções organizadas por nichos.",
    description: "Encontre fornecedores e importadoras de diferentes categorias para comparar possibilidades de compra.",
    image: importersScreen,
    alt: "Interface real da Central de Fornecedores organizada por categorias",
  },
  {
    label: "Precificação",
    eyebrow: "PRECIFICAÇÃO",
    title: "Calcule preços com mais clareza.",
    description: "Organize custos, taxas, impostos e margem para entender melhor a formação do seu preço de venda.",
    image: pricingScreen,
    alt: "Interface real da Central de Precificação",
  },
  {
    label: "Gestão",
    eyebrow: "GESTÃO DO NEGÓCIO",
    title: "Acompanhe e organize seu negócio.",
    description: "Visualize informações importantes da operação em uma área criada para apoiar sua organização.",
    image: managementScreen,
    alt: "Interface real da Gestão do Negócio",
  },
  {
    label: "Soph",
    eyebrow: "SOPH — SUA SÓCIA DIGITAL",
    title: "Tenha orientação dentro da plataforma.",
    description: "Conte com a Soph como apoio ao longo da sua jornada e das decisões do dia a dia.",
    image: sophScreen,
    alt: "Interface real da Soph, sua sócia digital",
  },
  {
    label: "Após a compra",
    eyebrow: "APÓS A COMPRA",
    title: "Seu acesso começa aqui.",
    description: "Assim que o pagamento for confirmado, você verá a tela com as informações para acessar a plataforma. Leia as orientações com atenção antes de fechar a página.",
    image: thankYouScreen,
    alt: "Captura original da Tela de Obrigado exibida após a confirmação do pagamento",
  },
];

const ModulesSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const reduced = !!useReducedMotion();
  const activeSlide = slides[activeIndex];
  const reveal = (delay = 0, distance = 18) => ({
    initial: reduced ? false : { opacity: 0, y: distance },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.25 },
    transition: { duration: 0.5, delay: reduced ? 0 : delay, ease: "easeOut" as const },
  });

  const selectSlide = (nextIndex: number) => {
    const normalizedIndex = (nextIndex + slides.length) % slides.length;
    setDirection(normalizedIndex > activeIndex || (activeIndex === slides.length - 1 && normalizedIndex === 0) ? 1 : -1);
    setActiveIndex(normalizedIndex);
  };

  const paginate = (step: number) => {
    setDirection(step);
    setActiveIndex((current) => (current + step + slides.length) % slides.length);
  };

  const slideVariants = {
    enter: (travelDirection: number) => reduced ? { opacity: 0 } : { opacity: 0, x: travelDirection > 0 ? 34 : -34, scale: 0.992 },
    center: { opacity: 1, x: 0, scale: 1 },
    exit: (travelDirection: number) => reduced ? { opacity: 0 } : { opacity: 0, x: travelDirection > 0 ? -26 : 26, scale: 0.994 },
  };

  return (
    <>
      <section className="relative overflow-hidden bg-deep py-16 md:py-24">
        <div aria-hidden="true" className="pointer-events-none absolute left-1/2 top-0 h-[420px] w-[min(700px,92vw)] -translate-x-1/2 rounded-full bg-cyan-500/[0.035] blur-[150px]" />

        <div className="container relative z-10 mx-auto px-4">
          <motion.div {...reveal()} className="mx-auto mb-12 max-w-4xl text-center md:mb-14">
            <span className="mb-6 inline-block rounded-full bg-cyan-500/10 px-4 py-1.5 text-sm font-bold tracking-wide text-white">MUITO ALÉM DOS FORNECEDORES</span>
            <h2 className="mb-6 text-3xl font-extrabold tracking-tight text-white md:text-4xl lg:text-5xl">Você entra pelos fornecedores. E encontra <span className="gradient-text">muito mais.</span></h2>
            <p className="mx-auto max-w-3xl text-base leading-relaxed text-white sm:text-lg">Além da Central de Fornecedores, o EmpreendaJá reúne ferramentas para ajudar você a precificar, organizar e administrar seu negócio — com a Soph como camada de assistência dentro da plataforma.</p>
          </motion.div>

          <div className="mx-auto grid max-w-5xl gap-4 md:grid-cols-2">
            {pillars.map((pillar, index) => (
              <motion.article
                key={pillar.title}
                {...reveal(0.08 + index * 0.07)}
                variants={{ hover: { y: -3, borderColor: "rgba(103,232,249,0.34)", boxShadow: "0 22px 52px rgba(0,0,0,0.34), 0 0 26px rgba(0,239,255,0.08)" }, tap: { scale: 0.992 } }}
                whileHover={reduced ? undefined : "hover"}
                whileTap={reduced ? undefined : "tap"}
                className={`group relative flex min-h-[144px] items-start gap-4 overflow-hidden rounded-2xl border p-5 shadow-[0_14px_38px_rgba(0,0,0,0.25),inset_0_1px_0_rgba(255,255,255,0.04)] sm:gap-5 sm:p-6 ${index === 0 ? "border-cyan-200/[0.24]" : "border-cyan-200/[0.13]"} ${pillar.surface}`}
              >
                <div aria-hidden="true" className={`pointer-events-none absolute top-0 h-px bg-gradient-to-r from-transparent via-cyan-200/65 to-transparent opacity-70 ${pillar.accent}`} />
                <div className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-cyan-200/[0.18] bg-[#071b30]/90 shadow-[inset_0_1px_0_rgba(255,255,255,0.055),0_8px_20px_rgba(0,0,0,0.24)]">
                  <motion.div variants={{ hover: { scale: 1.04, rotate: index % 2 === 0 ? -2 : 2 } }}><pillar.icon className="h-5 w-5 text-cyan-300" strokeWidth={1.8} aria-hidden="true" /></motion.div>
                </div>
                <div className="min-w-0 pt-0.5">
                  <div className="mb-2 flex items-center gap-2"><span className="text-[10px] font-extrabold tracking-[0.18em] text-cyan-300/75">{pillar.number}</span><span aria-hidden="true" className="h-px w-6 bg-cyan-300/20" /></div>
                  <h3 className="text-sm font-extrabold uppercase tracking-[0.1em] text-white sm:text-base">{pillar.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white sm:text-base">{pillar.description}</p>
                </div>
              </motion.article>
            ))}
          </div>

          <motion.p {...reveal(0.22, 12)} className="mx-auto mt-12 max-w-3xl text-center text-base font-bold leading-relaxed text-white sm:text-lg"><span className="text-cyan-300">Fornecedores</span> para encontrar. Ferramentas para administrar. Soph para acompanhar.</motion.p>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#0A192F] py-16 md:py-24">
        <div aria-hidden="true" className="pointer-events-none absolute left-1/2 top-[48%] h-[620px] w-[min(980px,94vw)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/[0.045] blur-[170px]" />

        <div className="container relative z-10 mx-auto px-4">
          <motion.header {...reveal()} className="mx-auto mb-10 max-w-4xl text-center md:mb-12">
            <span className="mb-5 inline-block text-xs font-extrabold uppercase tracking-[0.22em] text-cyan-300">VEJA O EMPREENDAJÁ POR DENTRO</span>
            <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-white md:text-4xl lg:text-5xl">Veja o EmpreendaJá <span className="gradient-text">por dentro.</span></h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-white sm:text-lg">Conheça alguns dos principais recursos da plataforma e veja o que acontece depois da compra.</p>
          </motion.header>

          <motion.div
            {...reveal(0.08, 20)}
            role="region"
            aria-roledescription="carrossel"
            aria-label="Tour da plataforma EmpreendaJá"
            tabIndex={0}
            onKeyDown={(event) => { if (event.key === "ArrowLeft") paginate(-1); if (event.key === "ArrowRight") paginate(1); }}
            className="mx-auto max-w-7xl rounded-[1.5rem] border border-cyan-200/[0.16] bg-[#071c32]/95 p-3 shadow-[0_30px_80px_rgba(0,0,0,0.42),0_0_54px_rgba(0,239,255,0.07),inset_0_1px_0_rgba(255,255,255,0.045)] outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/70 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A192F] sm:p-5 lg:p-6"
          >
            <div className="mb-4 flex snap-x snap-mandatory gap-2 overflow-x-auto pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden lg:grid lg:grid-cols-5 lg:overflow-visible lg:pb-0">
              {slides.map((slide, index) => (
                <button key={slide.label} type="button" onClick={() => selectSlide(index)} aria-current={activeIndex === index ? "true" : undefined} className={`min-h-11 min-w-[132px] snap-start rounded-lg border px-3 py-2 text-[10px] font-extrabold uppercase tracking-[0.07em] transition-[border-color,background-color,color,box-shadow] duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/70 motion-reduce:transition-none lg:min-w-0 lg:text-xs ${activeIndex === index ? "border-cyan-300/45 bg-cyan-300/[0.1] text-cyan-100 shadow-[inset_0_1px_0_rgba(165,243,252,0.08),0_0_18px_rgba(0,239,255,0.06)]" : "border-white/[0.06] bg-[#0d2944]/70 text-white/55 hover:border-cyan-300/20 hover:text-white/85"}`}>{String(index + 1).padStart(2, "0")} · {slide.label}</button>
              ))}
            </div>

            <div className="relative overflow-hidden rounded-2xl border border-cyan-200/[0.12] bg-[#06172b] px-11 sm:px-14 lg:px-16">
              <AnimatePresence initial={false} custom={direction} mode="wait">
                <motion.article
                  key={activeIndex}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: reduced ? 0.08 : 0.42, ease: [0.22, 1, 0.36, 1] }}
                  drag={reduced ? false : "x"}
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={0.12}
                  onDragEnd={(_, info) => { const swipe = Math.abs(info.offset.x) > 65 || Math.abs(info.velocity.x) > 520; if (swipe) paginate(info.offset.x < 0 ? 1 : -1); }}
                  className="grid cursor-grab select-none lg:grid-cols-[minmax(0,1.55fr)_minmax(280px,0.72fr)] lg:items-center lg:gap-8 active:cursor-grabbing"
                >
                  <div className="relative flex min-h-[250px] items-center justify-center overflow-hidden border-b border-cyan-200/[0.1] bg-[radial-gradient(circle_at_50%_45%,rgba(0,239,255,0.075),transparent_58%)] py-7 sm:min-h-[410px] sm:py-9 lg:min-h-[520px] lg:border-b-0 lg:py-10">
                    <div aria-hidden="true" className="absolute inset-x-[12%] top-0 h-px bg-gradient-to-r from-transparent via-cyan-200/55 to-transparent" />
                    <div className="relative aspect-[16/10] w-full max-w-[760px] rounded-[1.15rem] border border-cyan-200/30 bg-[linear-gradient(145deg,#152b3d,#030911)] p-[7px] shadow-[0_24px_60px_rgba(0,0,0,0.52),0_0_34px_rgba(0,239,255,0.1),inset_0_1px_0_rgba(255,255,255,0.12)] sm:rounded-[1.35rem] sm:p-[9px]">
                      <span aria-hidden="true" className="absolute left-1/2 top-[3px] z-10 h-1 w-1 -translate-x-1/2 rounded-full bg-white/25 sm:top-1 sm:h-1.5 sm:w-1.5" />
                      <div className="h-full w-full overflow-hidden rounded-[0.85rem] border border-cyan-300/15 bg-[#031324] sm:rounded-2xl">
                        <img src={activeSlide.image} alt={activeSlide.alt} draggable={false} className="h-full w-full object-contain" />
                      </div>
                    </div>
                  </div>

                  <div className="flex min-h-[250px] flex-col justify-center py-7 sm:min-h-[280px] sm:py-9 lg:min-h-0 lg:py-10 lg:pr-5">
                    <div>
                      <div className="flex items-center justify-between gap-4"><span className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-cyan-300/85 sm:text-xs">{activeSlide.eyebrow}</span><span className="shrink-0 text-sm font-bold tabular-nums text-white/50"><span className="text-cyan-300">{String(activeIndex + 1).padStart(2, "0")}</span> / 05</span></div>
                      <h3 className="mt-5 text-2xl font-extrabold leading-tight tracking-tight text-white sm:text-3xl">{activeSlide.title}</h3>
                      <p className="mt-4 text-sm leading-relaxed text-white/75 sm:text-base">{activeSlide.description}</p>
                    </div>
                  </div>
                </motion.article>
              </AnimatePresence>

              <button type="button" onClick={() => paginate(-1)} aria-label="Slide anterior" className="absolute left-1 top-[29%] z-20 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-cyan-300/35 bg-[#071c32]/95 text-cyan-100 shadow-[0_10px_24px_rgba(0,0,0,0.35)] transition-[border-color,background-color,transform] duration-300 hover:border-cyan-200/65 hover:bg-[#0d2944] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/80 motion-reduce:transition-none sm:left-2 sm:top-[36%] lg:top-1/2"><ArrowLeft className="h-5 w-5" aria-hidden="true" /></button>
              <button type="button" onClick={() => paginate(1)} aria-label="Próximo slide" className="absolute right-1 top-[29%] z-20 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-cyan-300/35 bg-[#071c32]/95 text-cyan-100 shadow-[0_10px_24px_rgba(0,0,0,0.35)] transition-[border-color,background-color,transform] duration-300 hover:border-cyan-200/65 hover:bg-[#0d2944] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/80 motion-reduce:transition-none sm:right-2 sm:top-[36%] lg:top-1/2"><ArrowRight className="h-5 w-5" aria-hidden="true" /></button>

              <div className="flex items-center gap-2 border-t border-cyan-200/[0.09] py-3 sm:py-4" aria-label={`Slide ${activeIndex + 1} de 5`}>
                {slides.map((slide, index) => (
                  <button key={slide.label} type="button" onClick={() => selectSlide(index)} aria-label={`Ir para ${slide.label}`} aria-current={activeIndex === index ? "true" : undefined} className="flex h-11 flex-1 items-center justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/70"><span className={`h-1.5 w-full rounded-full transition-[background-color,box-shadow] duration-300 motion-reduce:transition-none ${activeIndex === index ? "bg-cyan-300 shadow-[0_0_10px_rgba(0,239,255,0.55)]" : "bg-white/15"}`} /></button>
                ))}
              </div>
            </div>

            <p className="sr-only" aria-live="polite">Slide {activeIndex + 1} de 5: {activeSlide.label}</p>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default ModulesSection;
