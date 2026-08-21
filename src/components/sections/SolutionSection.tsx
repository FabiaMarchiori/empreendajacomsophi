import { motion, useReducedMotion } from "framer-motion";
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

const SolutionSection = () => {
  const reduced = !!useReducedMotion();
  const entrance = (delay = 0, distance = 20) => ({
    initial: reduced ? false : { opacity: 0, y: distance },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.25 },
    transition: { duration: 0.5, delay: reduced ? 0 : delay, ease: "easeOut" as const },
  });

  return (
    <section id="ecossistema" className="relative overflow-hidden bg-[#0A192F] py-24">
      <div className="absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full bg-cyan-500/3 blur-[150px]" />
      <div className="absolute left-0 top-0 h-[300px] w-[300px] rounded-full bg-cyan-500/3 blur-[120px]" />

      <div className="container relative z-10 mx-auto px-4">
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

          <div className="-mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:-mx-6 sm:px-6 md:mx-0 md:grid md:grid-cols-3 md:overflow-visible md:px-0 md:pb-0">
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
                className="relative min-w-[78%] max-w-[290px] snap-center overflow-hidden rounded-2xl border border-cyan-300/30 bg-[#0b2139] p-5 shadow-[0_22px_55px_rgba(0,0,0,0.4),0_0_34px_rgba(0,239,255,0.13),inset_0_1px_0_rgba(103,232,249,0.16)] sm:min-w-[56%] md:min-w-0 md:max-w-none"
              >
                <motion.div
                  variants={{ hover: { opacity: 1 }, tap: { opacity: 1 } }}
                  className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_8%,rgba(34,211,238,0.16),transparent_42%)] opacity-90"
                />
                <div className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-cyan-200/70 to-transparent shadow-[0_0_12px_rgba(103,232,249,0.65)]" />

                <div className="relative z-10 mb-5 flex h-20 w-20 items-center justify-center">
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
                    className="relative h-20 w-20 rounded-full object-cover shadow-[0_10px_28px_rgba(0,0,0,0.35),0_0_24px_rgba(0,239,255,0.22)]"
                  />
                </div>
                <h3 className="relative z-10 min-h-12 text-base font-bold leading-snug text-white">{category.name}</h3>
                <p className="relative z-10 mt-2 text-sm font-semibold text-cyan-200">{category.count} importadoras</p>
              </motion.div>
            ))}
          </div>

          <p className="mt-3 text-center text-xs font-semibold text-cyan-200/65 sm:hidden">
            Deslize para explorar • + outras categorias disponíveis
          </p>
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
