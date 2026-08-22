import { motion, MotionValue, useMotionValueEvent, useReducedMotion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import {
  ArrowDown,
  Contact,
  MapPinned,
  Scale,
  Search,
} from "lucide-react";
import bolsasMochilasMalas from "@/assets/categories/bolsas-mochilas-malas.png";
import bijuteriasSemijoias from "@/assets/categories/bijuterias-semijoias.png";
import gamesEletronicos from "@/assets/categories/games-eletronicos.png";
import maquiagem from "@/assets/categories/maquiagem.png";
import papelariaFofa from "@/assets/categories/papelaria-fofa.png";
import presentesPelucias from "@/assets/categories/presentes-pelucias.png";

const categories = [
  { image: bolsasMochilasMalas, name: "Bolsas, Mochilas e Malas", count: 66 },
  { image: bijuteriasSemijoias, name: "Bijuterias e Semijoias", count: 39 },
  { image: presentesPelucias, name: "Presentes e Pelúcias", count: 34 },
  { image: maquiagem, name: "Maquiagem", count: 30 },
  { image: papelariaFofa, name: "Papelaria Fofa", count: 29 },
  { image: gamesEletronicos, name: "Games e Eletrônicos", count: 24 },
];

const benefits = [
  {
    icon: Search,
    title: "Encontre por nicho",
    description: "Explore fornecedores de diferentes segmentos sem começar sua busca do zero.",
  },
  {
    icon: Scale,
    title: "Compare opções",
    description: "Tenha mais alternativas para analisar antes de decidir onde comprar.",
  },
  {
    icon: Contact,
    title: "Acesse os contatos",
    description: "Consulte as informações disponíveis na Central para entrar em contato com os fornecedores.",
  },
  {
    icon: MapPinned,
    title: "Pesquise de onde estiver",
    description: "Acesse a Central mesmo sem estar fisicamente nos grandes polos comerciais.",
  },
];

const panelNiches = [
  { name: "Papelaria Fofa", count: 29 },
  { name: "Semijoias", count: 39 },
  { name: "Moda Feminina", count: 58 },
  { name: "Games e Eletrônicos", count: 24 },
];

const CentralInstrument = ({ scrollProgress, reduced }: { scrollProgress: MotionValue<number>; reduced: boolean }) => {
  const [suppliers, setSuppliers] = useState(reduced ? 320 : 0);
  const [niches, setNiches] = useState(reduced ? 14 : 0);
  const panelY = useTransform(scrollProgress, [0, 0.45, 1], reduced ? [0, 0, 0] : [18, 0, -10]);
  const panelGlow = useTransform(scrollProgress, [0.08, 0.48, 0.9], reduced ? [0.08, 0.08, 0.08] : [0.025, 0.13, 0.06]);

  useMotionValueEvent(scrollProgress, "change", (value) => {
    if (reduced) return;
    const progress = Math.min(1, Math.max(0, (value - 0.08) / 0.16));
    setSuppliers(Math.round(320 * progress));
    setNiches(Math.round(14 * progress));
  });

  return (
    <motion.aside
      style={{ y: panelY }}
      className="relative min-w-0 overflow-hidden rounded-2xl border border-cyan-300/25 bg-[#071b30] p-5 shadow-[0_24px_60px_rgba(0,0,0,0.42),inset_0_1px_0_rgba(165,243,252,0.08)] sm:p-6 min-[900px]:p-4 xl:p-6"
      aria-label="Resumo da Central de Fornecedores"
    >
      <motion.div aria-hidden="true" style={{ opacity: panelGlow }} className="pointer-events-none absolute inset-0 bg-cyan-300" />
      <div aria-hidden="true" className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-cyan-200/70 to-transparent shadow-[0_0_14px_rgba(103,232,249,0.65)]" />

      <div className="relative flex items-center justify-between gap-3 text-[10px] font-extrabold uppercase tracking-[0.16em] text-cyan-300 sm:text-xs">
        <span>PAINEL DA CENTRAL</span>
        <span className="inline-flex items-center gap-2 text-cyan-100/65">
          <motion.span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-cyan-300 shadow-[0_0_10px_rgba(103,232,249,0.9)]" animate={reduced ? undefined : { opacity: [0.45, 1, 0.45] }} transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }} />
          ATUALIZADO
        </span>
      </div>

      <div className="relative mt-5 grid grid-cols-2 gap-3">
        <div className="min-w-0 rounded-xl bg-[#102a43] p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.035)] min-[900px]:p-3 xl:p-4">
          <strong className="block text-3xl font-extrabold tabular-nums text-white min-[900px]:text-2xl xl:text-3xl">{suppliers}</strong>
          <span className="mt-1 block text-[10px] font-extrabold uppercase tracking-[0.12em] text-cyan-300">FORNECEDORES</span>
        </div>
        <div className="min-w-0 rounded-xl bg-[#102a43] p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.035)] min-[900px]:p-3 xl:p-4">
          <strong className="block text-3xl font-extrabold tabular-nums text-white min-[900px]:text-2xl xl:text-3xl">{niches}</strong>
          <span className="mt-1 block text-[10px] font-extrabold uppercase tracking-[0.12em] text-cyan-300">NICHOS ATIVOS</span>
        </div>
      </div>

      <div className="relative my-5 h-px overflow-visible bg-cyan-200/10">
        <motion.div
          aria-hidden="true"
          className="absolute -top-px h-[3px] w-1/3 bg-gradient-to-r from-transparent via-cyan-200 to-transparent shadow-[0_0_14px_rgba(0,239,255,0.85)]"
          animate={reduced ? { left: "33%" } : { left: ["-34%", "100%"] }}
          transition={{ duration: 3.8, repeat: reduced ? 0 : Infinity, ease: "linear" }}
        />
      </div>

      <div className="relative grid gap-2.5">
        {panelNiches.map((niche, index) => (
          <motion.div
            key={niche.name}
            initial={reduced ? false : { opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.7 }}
            transition={{ duration: 0.32, delay: reduced ? 0 : 0.12 + index * 0.06, ease: "easeOut" }}
            className="flex min-h-10 items-center justify-between gap-3 rounded-lg bg-[#102a43] px-3.5 py-2.5 text-xs text-white"
          >
            <span className="inline-flex min-w-0 items-center gap-2.5"><span aria-hidden="true" className="h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-300/75" /><span className="truncate">{niche.name}</span></span>
            <strong className="tabular-nums text-cyan-200">{niche.count}</strong>
          </motion.div>
        ))}
      </div>

      <div className="relative mt-5 flex items-center justify-between border-t border-cyan-200/10 pt-4 text-[10px] font-bold uppercase tracking-[0.12em] text-white/45">
        <span>ATIVIDADE</span>
        <span className="inline-flex items-center gap-1.5 text-cyan-200/75"><span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-cyan-300" /> EM SINCRONIA</span>
      </div>
    </motion.aside>
  );
};

const SolutionSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const reduced = !!useReducedMotion();
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "end start"] });
  const panelProgress = useSpring(scrollYProgress, { stiffness: 105, damping: 24, mass: 0.35 });
  const entrance = (delay = 0, distance = 20) => ({
    initial: reduced ? false : { opacity: 0, y: distance },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.25 },
    transition: { duration: 0.5, delay: reduced ? 0 : delay, ease: "easeOut" as const },
  });

  return (
    <section ref={sectionRef} id="ecossistema" className="relative overflow-hidden bg-[#0A192F] py-16 md:py-24">
      <div className="absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full bg-cyan-500/3 blur-[150px]" />
      <div className="absolute left-0 top-0 h-[300px] w-[300px] rounded-full bg-cyan-500/3 blur-[120px]" />

      <div className="relative z-10 mx-auto w-full max-w-[1280px] px-4">
        <motion.div {...entrance()} className="mx-auto mb-12 max-w-4xl text-center md:mb-14">
          <span className="mb-6 inline-block rounded-full bg-cyan-500/10 px-4 py-1.5 text-sm font-bold tracking-wide text-white">
            CENTRAL DE FORNECEDORES
          </span>
          <h2 className="mb-6 text-3xl font-extrabold tracking-tight text-white md:text-4xl lg:text-5xl">
            Escolha o nicho. Veja as opções. Encontre <span className="gradient-text">seu próximo fornecedor.</span>
          </h2>
          <p className="mx-auto max-w-3xl text-base leading-relaxed text-white sm:text-lg">
            São <strong className="font-extrabold text-cyan-300">mais de 320</strong> fornecedores e importadoras
            organizados em categorias para facilitar sua pesquisa.
          </p>
        </motion.div>

        <motion.div
          {...entrance(0.08)}
          className="card-premium mx-auto max-w-6xl overflow-hidden p-4 sm:p-6 lg:p-7"
        >
          <div className="mb-5 flex items-center justify-between gap-4 border-b border-cyan-300/10 pb-4">
            <div>
              <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-cyan-300">Categorias</p>
              <p className="mt-1 text-sm text-white">Escolha um nicho para explorar as importadoras</p>
            </div>
            <span className="hidden text-xs font-semibold text-cyan-200/70 sm:inline">+ outras categorias disponíveis</span>
          </div>

          <div className="min-[900px]:grid min-[900px]:grid-cols-[minmax(0,1fr)_minmax(260px,0.38fr)] min-[900px]:items-stretch min-[900px]:gap-4 xl:grid-cols-[minmax(0,1fr)_minmax(300px,0.38fr)] xl:gap-6">
            <div className="min-w-0">
              <div className="-mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:-mx-6 sm:px-6 md:mx-0 md:grid md:grid-cols-3 md:overflow-visible md:px-0 md:pb-0 min-[900px]:gap-3 xl:gap-4">
                {categories.map((category, i) => (
                  <motion.div
                    key={category.name}
                    {...entrance(0.12 + i * 0.06, 14)}
                    variants={{
                      hover: {
                        y: reduced ? 0 : -4,
                        borderColor: "rgba(165, 243, 252, 0.58)",
                        backgroundColor: "#0d2944",
                        boxShadow:
                          "0 26px 58px rgba(0,0,0,0.46), 0 0 40px rgba(0,239,255,0.2), inset 0 1px 0 rgba(165,243,252,0.24)",
                        transition: { duration: reduced ? 0 : 0.28, ease: "easeOut" },
                      },
                      tap: {
                        scale: reduced ? 1 : 0.98,
                        borderColor: "rgba(103, 232, 249, 0.5)",
                        boxShadow:
                          "0 18px 42px rgba(0,0,0,0.42), 0 0 38px rgba(0,239,255,0.2), inset 0 1px 0 rgba(103,232,249,0.2)",
                        transition: { duration: reduced ? 0 : 0.12 },
                      },
                    }}
                    whileHover="hover"
                    whileTap="tap"
                    className="relative min-w-[78%] max-w-[290px] snap-center overflow-hidden rounded-2xl border border-cyan-300/30 bg-[#0b2139] p-5 shadow-[0_22px_55px_rgba(0,0,0,0.4),0_0_34px_rgba(0,239,255,0.13),inset_0_1px_0_rgba(103,232,249,0.16)] sm:min-w-[56%] md:min-w-0 md:max-w-none min-[900px]:p-4 xl:p-5"
                  >
                    <motion.div
                      variants={{ hover: { opacity: 1 }, tap: { opacity: 1 } }}
                      className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_8%,rgba(34,211,238,0.16),transparent_42%)] opacity-90"
                    />
                    <div className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-cyan-200/70 to-transparent shadow-[0_0_12px_rgba(103,232,249,0.65)]" />

                    <div className="relative z-10 mb-5 flex h-20 w-20 items-center justify-center min-[900px]:mb-4 min-[900px]:h-16 min-[900px]:w-16 xl:mb-5 xl:h-20 xl:w-20">
                      <motion.div
                        variants={{ hover: { opacity: 1 }, tap: { opacity: 1 } }}
                        className="absolute -inset-1 rounded-full bg-cyan-300/30 blur-2xl"
                        animate={reduced ? undefined : { opacity: [0.58, 0.82, 0.58] }}
                        transition={{ duration: 5.6, repeat: Infinity, ease: "easeInOut", delay: i * 0.35 }}
                      />
                      <motion.img
                        src={category.image}
                        alt=""
                        aria-hidden="true"
                        variants={{
                          hover: { y: reduced ? 0 : -2, scale: reduced ? 1 : 1.03, filter: "brightness(1.08)" },
                          tap: { scale: reduced ? 1 : 0.99, filter: "brightness(1.06)" },
                        }}
                        transition={{ duration: reduced ? 0 : 0.28, ease: "easeOut" }}
                        className="relative h-20 w-20 rounded-full object-cover shadow-[0_10px_28px_rgba(0,0,0,0.35),0_0_24px_rgba(0,239,255,0.22)] min-[900px]:h-16 min-[900px]:w-16 xl:h-20 xl:w-20"
                      />
                    </div>
                    <h3 className="relative z-10 min-h-12 text-[clamp(0.78rem,1.25vw,1rem)] font-bold leading-snug text-white">{category.name}</h3>
                    <p className="relative z-10 mt-2 text-sm font-semibold text-cyan-200">{category.count} importadoras</p>
                  </motion.div>
                ))}
              </div>

              <p className="mt-3 text-center text-xs font-semibold text-cyan-200/65 sm:hidden">
                Deslize para explorar • + outras categorias disponíveis
              </p>
            </div>

            <motion.div
              {...entrance(0.16, 14)}
              className="min-w-0 mx-auto mt-6 w-full max-w-[520px] border-t border-cyan-300/10 pt-6 min-[900px]:mt-0 min-[900px]:max-w-none min-[900px]:border-l min-[900px]:border-t-0 min-[900px]:pl-4 min-[900px]:pt-0 xl:pl-6"
            >
              <CentralInstrument scrollProgress={panelProgress} reduced={reduced} />
            </motion.div>

          </div>
        </motion.div>

        <div className="mx-auto mt-10 grid max-w-6xl gap-x-8 gap-y-6 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit, i) => (
            <motion.div
              key={benefit.title}
              {...entrance(0.1 + i * 0.06, 12)}
              whileHover={reduced ? undefined : { y: -2 }}
              className="group flex items-start gap-3"
            >
              <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-cyan-300/15 bg-cyan-300/[0.06] transition-[border-color,background-color] duration-300 group-hover:border-cyan-300/30 group-hover:bg-cyan-300/[0.09]">
                <benefit.icon className="h-4 w-4 text-cyan-300" />
              </div>
              <div>
                <h3 className="text-xs font-extrabold uppercase tracking-[0.12em] text-white">{benefit.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-white">{benefit.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div {...entrance(0.18, 12)} className="mt-14 text-center">
          <h3 className="text-2xl font-extrabold tracking-tight text-white sm:text-3xl">
            E encontrar fornecedores é <span className="gradient-text">só o começo.</span>
          </h3>
          <ArrowDown className="mx-auto mt-4 h-5 w-5 text-cyan-300/70" aria-hidden />
        </motion.div>
      </div>
    </section>
  );
};

export default SolutionSection;
