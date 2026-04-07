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
          7 dias de garantia incondicional
        </h2>
        <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
          Acesse o ecossistema completo, explore todas as importadoras, use a Soph, navegue pelos módulos. 
          Se dentro de 7 dias você sentir que não é pra você, devolvemos 100% do seu investimento. 
          Sem burocracia, sem perguntas. Sua entrada é segura.
        </p>
      </motion.div>
    </div>
  </section>
);

export default GuaranteeSection;
