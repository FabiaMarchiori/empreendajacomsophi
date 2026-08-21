import { motion } from "framer-motion";
import guaranteeBadge from "@/assets/guarantee-badge.png";

const GuaranteeSection = () => (
  <section className="relative py-24 bg-deep overflow-hidden">
    <div className="container relative z-10 mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl mx-auto text-center"
      >
        <img
          src={guaranteeBadge}
          alt="Garantia de 7 dias"
          width={120}
          height={120}
          loading="lazy"
          className="mx-auto mb-8"
        />
        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight gradient-text mb-6">
          7 dias para conhecer a plataforma com tranquilidade.
        </h2>
        <p className="text-lg text-white leading-relaxed max-w-2xl mx-auto">
          Acesse o EmpreendaJá, conheça os recursos e veja se a plataforma faz sentido para o seu negócio. Se decidir não continuar dentro do prazo de 7 dias, você poderá solicitar o cancelamento conforme as condições da garantia.
        </p>
      </motion.div>
    </div>
  </section>
);

export default GuaranteeSection;
