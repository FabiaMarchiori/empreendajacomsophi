import { motion } from "framer-motion";
import { HelpCircle } from "lucide-react";

const objections = [
  { q: '"É só uma lista?"', a: "Não. O EmpreendaJá é um ecossistema completo com importadoras, ferramentas, IA, precificação, orientações para MEI, logo, marca, marketplaces e muito mais." },
  { q: '"Vou conseguir usar mesmo começando do zero?"', a: "Sim. O ecossistema foi pensado para quem está começando. A Soph te orienta passo a passo e cada módulo é direto ao ponto." },
  { q: '"Isso realmente vale a pena?"', a: "Com +260 importadoras, ferramentas gratuitas e tudo organizado em um só lugar, o retorno vem na primeira decisão certa que você tomar." },
  { q: '"Vou ter acesso ao que preciso?"', a: "Sim. Todos os módulos ficam disponíveis imediatamente após a assinatura. Sem conteúdo travado." },
  { q: '"O ERP está em qual plano?"', a: "O ERP Soph Gestão é um bônus exclusivo de lançamento do plano anual. Não está incluído no plano mensal." },
  { q: '"Vou conseguir começar sem gastar muito?"', a: "O plano mensal custa R$ 47 e já inclui tudo que você precisa. O anual sai por R$ 97 e ainda inclui o ERP como bônus." },
  { q: '"Tenho garantia?"', a: "Sim! Você tem 7 dias de garantia incondicional. Se não gostar, devolvemos seu dinheiro." },
];

const ObjectionsSection = () => (
  <section className="relative py-24 bg-deep overflow-hidden">
    <div className="container relative z-10 mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight gradient-text">
          Ainda tem dúvidas?
        </h2>
      </motion.div>

      <div className="max-w-3xl mx-auto space-y-4">
        {objections.map((o, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            className="card-premium p-6"
          >
            <div className="flex items-start gap-4">
              <HelpCircle className="w-6 h-6 text-cyan-400 shrink-0 mt-1" />
              <div>
                <p className="text-foreground font-bold text-lg mb-2">{o.q}</p>
                <p className="text-muted-foreground leading-relaxed">{o.a}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ObjectionsSection;
