import { motion, useReducedMotion } from "framer-motion";
import { ShieldCheck } from "lucide-react";

const GuaranteeSection = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="relative overflow-hidden bg-deep py-14 md:py-20">
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/[0.055] blur-[90px] md:left-[28%]" />
      </div>

      <div className="container relative z-10 mx-auto px-4">
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          className="relative mx-auto grid max-w-5xl items-center gap-8 overflow-hidden rounded-2xl border border-cyan-300/20 bg-navy-light/55 px-6 py-8 shadow-[0_24px_70px_-34px_rgba(0,229,255,0.28)] md:grid-cols-[260px_1fr] md:gap-10 md:px-10 md:py-10 lg:grid-cols-[290px_1fr] lg:px-14"
        >
          <div className="pointer-events-none absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/60 to-transparent" aria-hidden="true" />

          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.92 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="relative mx-auto flex h-44 w-44 items-center justify-center md:h-48 md:w-48"
            aria-label="Garantia de 7 dias"
          >
            <motion.div
              initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.72 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
              className="absolute inset-0 rounded-full bg-cyan-400/10 blur-2xl"
              aria-hidden="true"
            />
            <div className="absolute inset-3 rounded-full border border-cyan-300/15 bg-deep/65 shadow-[inset_0_0_35px_rgba(0,229,255,0.08),0_18px_45px_-22px_rgba(0,229,255,0.55)]" aria-hidden="true" />
            <ShieldCheck className="absolute h-32 w-32 stroke-[1.05] text-cyan-300/35 md:h-36 md:w-36" aria-hidden="true" />
            <div className="relative flex flex-col items-center pt-1 text-white">
              <span className="text-7xl font-extrabold leading-none tracking-[-0.035em] text-cyan-100">7</span>
              <span className="mt-1 text-[0.65rem] font-bold uppercase tracking-[0.2em] text-cyan-300">dias</span>
            </div>
          </motion.div>

          <div className="text-center md:text-left">
            <h2 className="mb-4 text-3xl font-extrabold leading-tight tracking-tight text-white md:text-4xl">
              7 dias para conhecer a <span className="gradient-text">plataforma com tranquilidade.</span>
            </h2>
            <p className="mx-auto max-w-2xl text-base leading-relaxed text-white md:mx-0 md:text-lg">
              Acesse o EmpreendaJá, conheça os recursos e veja se a plataforma faz sentido para o seu negócio. Se decidir não continuar dentro do prazo de 7 dias, você poderá solicitar o cancelamento conforme as condições da garantia.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default GuaranteeSection;
