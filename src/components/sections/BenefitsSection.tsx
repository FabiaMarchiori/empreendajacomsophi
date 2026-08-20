import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown, ArrowRight } from "lucide-react";

const transformations = [
  { before: "Pesquisa sem saber onde comprar", after: "Mais opções para comparar" },
  { before: "Preço definido no achismo", after: "Preço calculado com mais clareza" },
  { before: "Informações espalhadas", after: "Negócio mais organizado" },
  { before: "Dúvidas para decidir sozinha", after: "Soph para orientar seus próximos passos" },
];

const BenefitsSection = () => {
  const reduced = useReducedMotion();

  return (
    <section className="relative overflow-hidden bg-deep py-16 md:py-20">
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[480px] w-[720px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/3 blur-[150px]" />
      <div className="container relative z-10 mx-auto px-4">
        <motion.header
          initial={reduced ? { opacity: 0 } : { opacity: 0, y: 20 }}
          whileInView={reduced ? { opacity: 1 } : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.45 }}
          transition={{ duration: reduced ? 0.01 : 0.55, ease: "easeOut" }}
          className="mx-auto mb-10 max-w-3xl text-center md:mb-12"
        >
          <span className="mb-5 inline-block rounded-full bg-cyan-500/10 px-4 py-1.5 text-sm font-bold tracking-wide text-white">
            DO ACESSO À AÇÃO
          </span>
          <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-white md:text-4xl">
            Não é só encontrar fornecedores. É saber o que fazer depois.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-white/70 md:text-lg">
            O EmpreendaJá reúne informações e ferramentas para ajudar você a comparar, calcular, organizar e decidir com mais clareza.
          </p>
        </motion.header>

        <div className="mx-auto grid max-w-5xl gap-4 md:grid-cols-2">
          {transformations.map((item, index) => (
            <motion.article
              key={item.before}
              initial={reduced ? { opacity: 0 } : { opacity: 0, y: 16 }}
              whileInView={reduced ? { opacity: 1 } : { opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: reduced ? 0.01 : 0.42, delay: reduced ? 0 : index * 0.07, ease: "easeOut" }}
              className="group relative overflow-hidden rounded-2xl border border-cyan-300/15 bg-[#0a1e34]/90 p-5 shadow-[0_18px_45px_rgba(0,0,0,0.25),inset_0_1px_0_rgba(103,232,249,0.08)] transition-[transform,border-color] duration-300 [@media(hover:hover)_and_(pointer:fine)]:hover:-translate-y-0.5 [@media(hover:hover)_and_(pointer:fine)]:hover:border-cyan-300/35 sm:p-6"
            >
              <div className="grid gap-3 sm:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] sm:items-center sm:gap-4">
                <div>
                  <span className="mb-1.5 block text-[0.68rem] font-bold uppercase tracking-[0.18em] text-white/45">Antes</span>
                  <p className="text-sm font-medium leading-snug text-white/65 sm:text-base">{item.before}</p>
                </div>

                <motion.div
                  aria-hidden="true"
                  animate={reduced ? undefined : { x: [0, 3, 0] }}
                  transition={{ duration: 3.6, repeat: Infinity, ease: "easeInOut", delay: index * 0.25 }}
                  className="hidden text-cyan-300/80 sm:block"
                >
                  <ArrowRight className="h-5 w-5" strokeWidth={1.8} />
                </motion.div>
                <motion.div
                  aria-hidden="true"
                  animate={reduced ? undefined : { y: [0, 3, 0] }}
                  transition={{ duration: 3.6, repeat: Infinity, ease: "easeInOut", delay: index * 0.25 }}
                  className="text-cyan-300/80 sm:hidden"
                >
                  <ArrowDown className="h-5 w-5" strokeWidth={1.8} />
                </motion.div>

                <div className="rounded-xl border border-cyan-300/20 bg-cyan-400/[0.06] px-4 py-3 transition-[border-color,background-color] duration-300 [@media(hover:hover)_and_(pointer:fine)]:group-hover:border-cyan-300/35 [@media(hover:hover)_and_(pointer:fine)]:group-hover:bg-cyan-400/[0.09]">
                  <span className="mb-1.5 block text-[0.68rem] font-extrabold uppercase tracking-[0.18em] text-cyan-300">Depois</span>
                  <p className="text-sm font-bold leading-snug text-white sm:text-base">{item.after}</p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
