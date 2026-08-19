import { motion, useInView, useReducedMotion, animate } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const NICHES = [
  { name: "Papelaria Fofa", count: 29 },
  { name: "Bolsas, Mochilas e Malas", count: 66 },
  { name: "Semijoias", count: 39 },
  { name: "Games e Eletrônicos", count: 24 },
  { name: "Moda Feminina", count: 58 },
  { name: "E muito mais", count: "+" },
];

/* Animated supplier counter: 0 -> 320 */
const Counter = ({ start, reduced }: { start: boolean; reduced: boolean }) => {
  const [value, setValue] = useState(reduced ? 320 : 0);

  useEffect(() => {
    if (!start) return;
    if (reduced) {
      setValue(320);
      return;
    }
    const controls = animate(0, 320, {
      duration: 1.4,
      ease: "easeOut",
      onUpdate: (v) => setValue(Math.round(v)),
    });
    return () => controls.stop();
  }, [start, reduced]);

  return <>{value}</>;
};

const ImportersCard = () => {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = !!useReducedMotion();
  const inView = useInView(ref, { once: true, amount: 0.35 });
  const [highlight, setHighlight] = useState(-1);

  useEffect(() => {
    if (!inView || reduced) return;
    // brief simulated navigation through categories, then rest
    const timers: number[] = [];
    [0, 1, 2].forEach((step, i) => {
      timers.push(
        window.setTimeout(() => setHighlight(step), 2000 + i * 900),
        window.setTimeout(() => setHighlight(-1), 2000 + i * 900 + 700),
      );
    });
    return () => timers.forEach(clearTimeout);
  }, [inView, reduced]);

  return (
    <motion.div
      ref={ref}
      initial={reduced ? false : { opacity: 0, y: 24 }}
      animate={inView || reduced ? { opacity: 1, y: 0 } : undefined}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="relative w-full will-change-transform"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -inset-6 rounded-[2rem]"
        style={{
          background: "radial-gradient(ellipse at center, rgba(0,239,255,0.13) 0%, transparent 70%)",
          filter: "blur(50px)",
        }}
      />

      <div
        className="relative w-full overflow-hidden rounded-2xl"
        style={{
          background: "linear-gradient(145deg, #0f2744 0%, #091b30 100%)",
          border: "1px solid rgba(0,239,255,0.2)",
          boxShadow: "0 0 60px rgba(0,239,255,0.08), 0 30px 60px rgba(0,0,0,0.45)",
        }}
      >
        {/* Top bar */}
        <div
          className="flex items-center justify-between gap-3 border-b px-4 py-3 sm:px-5"
          style={{ borderColor: "rgba(0,239,255,0.12)" }}
        >
          <div className="flex items-center gap-2">
            <div className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
            <div className="h-2.5 w-2.5 rounded-full bg-yellow-400/70" />
            <div className="h-2.5 w-2.5 rounded-full bg-green-400/70" />
          </div>
          <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-cyan-300/90 sm:text-[11px]">
            Central de Importadoras
          </span>
          <span className="w-10" />
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-3 px-4 pt-5 sm:px-5">
          <div
            className="rounded-xl px-4 py-3"
            style={{ background: "rgba(0,239,255,0.06)", border: "1px solid rgba(0,239,255,0.18)" }}
          >
            <div className="text-2xl font-extrabold leading-none text-white tabular-nums">
              <Counter start={inView} reduced={reduced} />
            </div>
            <div className="mt-1 text-[11px] font-semibold uppercase tracking-wide text-cyan-300/90">
              Fornecedores
            </div>
          </div>
          <div
            className="rounded-xl px-4 py-3"
            style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)" }}
          >
            <div className="text-2xl font-extrabold leading-none text-white">14</div>
            <div className="mt-1 text-[11px] font-semibold uppercase tracking-wide text-white/70">
              Nichos ativos
            </div>
          </div>
        </div>

        {/* Niches */}
        <div className="grid grid-cols-2 gap-3 p-4 sm:p-5">
          {NICHES.map((n, i) => (
            <motion.div
              key={n.name}
              initial={reduced ? false : { opacity: 0, y: 10 }}
              animate={inView || reduced ? { opacity: 1, y: 0 } : undefined}
              transition={{ duration: 0.35, delay: reduced ? 0 : 0.5 + i * 0.08 }}
              className="flex items-center justify-between rounded-lg px-3 py-2.5 transition-colors duration-500"
              style={{
                background: highlight === i ? "rgba(0,239,255,0.09)" : "rgba(255,255,255,0.03)",
                border: `1px solid ${highlight === i ? "rgba(0,239,255,0.4)" : "rgba(0,239,255,0.1)"}`,
              }}
            >
              <span className="text-[13px] font-semibold leading-tight text-white sm:text-sm">{n.name}</span>
              <span
                className="shrink-0 rounded-md px-2 py-0.5 text-[11px] font-bold"
                style={{
                  background: "rgba(0,239,255,0.12)",
                  color: "#00EFFF",
                  border: "1px solid rgba(0,239,255,0.25)",
                }}
              >
                {n.count}
              </span>
            </motion.div>
          ))}
        </div>

        <div className="px-4 pb-5 sm:px-5">
          <div className="flex items-center justify-between text-[11px] text-white/60">
            <span className="inline-flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-green-400" />
              Atualizado hoje
            </span>
            <span className="font-semibold text-cyan-300/80">+ novos nichos em breve</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const HeroSection = () => {
  const reduced = !!useReducedMotion();
  const fade = (delay: number) =>
    reduced
      ? {}
      : {
          initial: { opacity: 0, y: 18 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.55, delay, ease: "easeOut" as const },
        };

  return (
    <section
      className="relative flex items-center overflow-hidden pt-24 lg:min-h-[calc(100svh-2rem)]"
      style={{ background: "#0A192F" }}
    >
      {/* Soft ambient glows */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-[10%] top-1/4 h-[520px] w-[520px] rounded-full opacity-40"
        style={{ background: "radial-gradient(circle, rgba(0,239,255,0.07) 0%, transparent 70%)" }}
      />

      <div className="relative z-10 mx-auto w-full max-w-[1440px] px-5 py-12 sm:px-6 lg:px-8 lg:py-20">
        <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(340px,440px)] lg:gap-14">
          {/* Content */}
          <div className="min-w-0 space-y-6">
            <motion.p
              {...fade(0)}
              className="text-[10px] font-bold uppercase tracking-[0.18em] text-cyan-300/80 sm:text-[11px]"
            >
              EmpreendaJá com Soph • Plataforma para quem empreende
            </motion.p>

            <motion.h1
              {...fade(0.08)}
              className="max-w-[16ch] text-[2.1rem] font-extrabold leading-[1.1] tracking-tight text-white sm:text-[2.6rem] lg:text-[3.35rem]"
            >
              Seu próximo fornecedor pode estar aqui.
            </motion.h1>

            <motion.p {...fade(0.16)} className="max-w-xl text-base leading-relaxed text-white/90 sm:text-lg">
              <span
                className="mr-1 text-2xl font-extrabold sm:text-3xl"
                style={{
                  background: "linear-gradient(90deg, #FFFFFF 0%, #00FFFF 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                320
              </span>
              fornecedores e importadoras para descobrir novas oportunidades de compra, margem e revenda.
            </motion.p>

            <motion.p {...fade(0.24)} className="max-w-xl text-sm leading-relaxed text-white/70 sm:text-base">
              Encontre fornecedores de diferentes nichos e tenha acesso a uma plataforma com ferramentas para ajudar
              você a precificar, organizar e administrar seu negócio.
            </motion.p>

            <motion.div {...fade(0.32)} className="pt-1">
              <a
                href="#planos"
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl px-7 py-4 text-sm font-extrabold uppercase tracking-wide transition-all duration-300 hover:-translate-y-0.5 hover:brightness-105 active:translate-y-0 active:scale-[0.98] sm:w-auto sm:text-base"
                style={{
                  background: "linear-gradient(135deg, #FFFFFF 0%, #F2FBFF 30%, #00EFFF 100%)",
                  color: "#0A192F",
                  boxShadow: "0 0 28px rgba(0,239,255,0.28)",
                }}
              >
                Quero acessar os fornecedores
                <ArrowRight className="h-5 w-5" />
              </a>
            </motion.div>

            <motion.div
              {...fade(0.4)}
              className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-white/70"
            >
              <span className="inline-flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />7 dias de garantia
              </span>
              <span className="inline-flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
                Acesso imediato
              </span>
            </motion.div>
          </div>

          {/* Card */}
          <div className="min-w-0">
            <ImportersCard />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
