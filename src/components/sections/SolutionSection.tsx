import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowDown,
  Contact,
  Gamepad2,
  Gem,
  Gift,
  MapPinned,
  Notebook,
  Paintbrush,
  Scale,
  Search,
  ShoppingBag,
} from "lucide-react";

const categories = [
  { icon: ShoppingBag, name: "Bolsas, Mochilas e Malas", count: 66 },
  { icon: Gem, name: "Bijuterias e Semijoias", count: 39 },
  { icon: Gift, name: "Presentes e Pelúcias", count: 34 },
  { icon: Paintbrush, name: "Maquiagem", count: 30 },
  { icon: Notebook, name: "Papelaria Fofa", count: 29 },
  { icon: Gamepad2, name: "Games e Eletrônicos", count: 24 },
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
          <p className="mx-auto max-w-3xl text-base leading-relaxed text-white/85 sm:text-lg">
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
              <p className="mt-1 text-sm text-white/65">Escolha um nicho para explorar as importadoras</p>
            </div>
            <span className="hidden text-xs font-semibold text-cyan-200/70 sm:inline">+ outras categorias disponíveis</span>
          </div>

          <div className="-mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:-mx-6 sm:px-6 md:mx-0 md:grid md:grid-cols-3 md:overflow-visible md:px-0 md:pb-0">
            {categories.map((category, i) => (
              <motion.div
                key={category.name}
                {...entrance(0.12 + i * 0.06, 14)}
                whileHover={reduced ? undefined : { y: -4 }}
                whileTap={reduced ? undefined : { scale: 0.985 }}
                className="group min-w-[78%] max-w-[290px] snap-center rounded-2xl border border-cyan-300/15 bg-gradient-to-br from-white/[0.055] via-white/[0.025] to-cyan-300/[0.025] p-5 shadow-[0_18px_45px_rgba(0,0,0,0.22),0_0_24px_rgba(0,239,255,0.035)] transition-[border-color,background-color,box-shadow] duration-300 hover:border-cyan-300/35 hover:shadow-[0_24px_55px_rgba(0,0,0,0.32),0_0_34px_rgba(0,239,255,0.1)] focus-within:border-cyan-300/35 sm:min-w-[56%] md:min-w-0 md:max-w-none"
              >
                <div className="relative mb-4 flex h-14 w-14 items-center justify-center">
                  <div className="absolute inset-1 rounded-full bg-cyan-300/10 blur-xl transition-[transform,opacity] duration-300 group-hover:scale-125 group-hover:bg-cyan-300/20 group-focus-within:scale-125 group-focus-within:bg-cyan-300/20" />
                  <div className="relative flex h-14 w-14 items-center justify-center rounded-full border border-cyan-200/25 bg-gradient-to-br from-white/10 via-cyan-300/10 to-slate-400/5 shadow-[0_0_24px_rgba(0,239,255,0.08)] transition-[transform,border-color,box-shadow] duration-300 group-hover:scale-[1.04] group-hover:border-cyan-200/50 group-hover:shadow-[0_0_30px_rgba(0,239,255,0.16)] group-focus-within:scale-[1.04]">
                    <category.icon className="h-6 w-6 text-cyan-200" strokeWidth={1.7} />
                  </div>
                </div>
                <h3 className="min-h-12 text-base font-bold leading-snug text-white">{category.name}</h3>
                <p className="mt-2 text-sm font-semibold text-cyan-300/85">{category.count} importadoras</p>
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
                <p className="mt-1.5 text-sm leading-relaxed text-white/65">{benefit.description}</p>
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
