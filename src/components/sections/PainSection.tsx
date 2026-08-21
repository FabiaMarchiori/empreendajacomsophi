import { motion, useReducedMotion } from "framer-motion";
import { XCircle } from "lucide-react";

const pains = [
  {
    label: "Poucas opções",
    text: "Compra sempre dos mesmos fornecedores e encontra poucas opções para comparar.",
  },
  {
    label: "Segurança",
    text: "Tem receio de cair em golpes ao comprar de fornecedores que ainda não conhece.",
  },
  {
    label: "Decisão",
    text: "Encontra fornecedores, mas tem dificuldade para comparar opções e decidir onde comprar.",
  },
  {
    label: "Tempo",
    text: "Passa horas pesquisando fornecedores e ainda termina sem saber por onde comprar.",
  },
];

const PainSection = () => {
  const reduced = !!useReducedMotion();

  return (
    <section className="relative overflow-hidden bg-deep py-16 md:py-24">
      <div className="absolute left-1/2 top-0 h-[300px] w-[600px] -translate-x-1/2 rounded-full bg-cyan-500/3 blur-[120px]" />
      <div className="container relative z-10 mx-auto px-4">
        <motion.div
          initial={reduced ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mx-auto mb-14 max-w-4xl text-center md:mb-16"
        >
          <h2 className="mb-6 text-3xl font-extrabold tracking-tight text-white md:text-4xl lg:text-5xl">
            Encontrar <span className="gradient-text">fornecedores</span> não deveria ser a parte mais difícil do seu
            negócio.
          </h2>
          <p className="mx-auto max-w-3xl text-base leading-relaxed text-white sm:text-lg">
            Para quem vende ou quer começar a vender, encontrar boas opções, comparar fornecedores e decidir onde
            comprar nem sempre é tão simples quanto deveria.
          </p>
        </motion.div>

        <div className="mx-auto grid max-w-5xl gap-4 md:grid-cols-2">
          {pains.map((pain, i) => (
            <motion.div
              key={pain.label}
              initial={reduced ? false : { opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.45, delay: reduced ? 0 : i * 0.09, ease: "easeOut" }}
              className="card-premium flex items-start gap-4 p-5 sm:p-6"
            >
              <XCircle className="mt-0.5 h-7 w-7 shrink-0 text-red-400" />
              <div className="min-w-0">
                <p className="mb-1.5 text-[10px] font-extrabold uppercase leading-none tracking-[0.16em] text-cyan-300/85 sm:text-[11px]">
                  {pain.label}
                </p>
                <p className="text-base font-semibold leading-relaxed text-white">{pain.text}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={reduced ? false : { opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.5, delay: reduced ? 0 : 0.28, ease: "easeOut" }}
          className="mx-auto mt-12 max-w-2xl text-center text-sm font-semibold leading-relaxed text-cyan-200/80 sm:text-base"
        >
          Foi para simplificar esse caminho que o EmpreendaJá começou pelos fornecedores.
        </motion.p>
      </div>
    </section>
  );
};

export default PainSection;
