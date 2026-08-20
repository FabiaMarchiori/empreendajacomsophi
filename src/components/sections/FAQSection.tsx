import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const WHATSAPP_LINK = "https://wa.me/5511983348749?text=Pagina%20de%20vendas";

const faqs = [
  { q: "O que está incluso no plano mensal?", a: "O plano mensal dá acesso à Central de Fornecedores com mais de 320 opções, categorias organizadas, Precificação, Soph — sua sócia digital, além de guias e ferramentas para ajudar na organização e nas decisões do seu negócio." },
  { q: "O que está incluso no plano anual?", a: "O plano anual inclui todos os recursos do plano mensal e também o Soph Gestão, além de oferecer melhor custo para quem deseja permanecer na plataforma por mais tempo." },
  { q: "O Soph Gestão está incluso em qual plano?", a: "O Soph Gestão está incluído no Plano Anual. No Plano Mensal, esse recurso não faz parte da assinatura." },
  { q: "O acesso é imediato?", a: "Sim. Após a confirmação do pagamento, você recebe acesso aos recursos incluídos no plano contratado." },
  { q: "Vou ter acesso aos fornecedores da plataforma?", a: "Sim. Os dois planos incluem acesso à Central de Fornecedores, com mais de 320 opções organizadas por diferentes categorias para facilitar sua pesquisa e comparação." },
  { q: "Os fornecedores são atualizados?", a: "Sim. Novos fornecedores são adicionados periodicamente, e os fornecedores já cadastrados também passam por revisões para manter as informações da Central atualizadas." },
  { q: "A Soph está incluída?", a: "Sim. A Soph está disponível nos dois planos para orientar você dentro da plataforma e ajudar com dúvidas e próximos passos relacionados ao seu negócio." },
  { q: "A plataforma também ajuda com MEI, marca e marketplaces?", a: "Sim. O EmpreendaJá reúne guias e orientações práticas sobre temas importantes para quem está começando ou estruturando um negócio, incluindo MEI, marca, identidade e vendas em marketplaces." },
  { q: "Tenho garantia?", a: "Sim. Você tem 7 dias para conhecer a plataforma. Se decidir não continuar dentro desse prazo, poderá solicitar o cancelamento conforme as condições da garantia." },
  { q: "Posso cancelar o plano mensal quando quiser?", a: "Sim. O plano mensal pode ser cancelado sem fidelidade, conforme as condições da assinatura." },
  { q: "Como falar com o suporte?", a: "Se precisar de ajuda, você pode entrar em contato com nossa equipe pelo WhatsApp." },
  { q: "É só uma lista de fornecedores?", a: "Não. A Central de Fornecedores é uma das áreas do EmpreendaJá. A plataforma também reúne recursos de precificação, organização, orientação com a Soph, guias e ferramentas para apoiar diferentes etapas do seu negócio." },
  { q: "Consigo usar mesmo se estiver começando do zero?", a: "Sim. O EmpreendaJá foi pensado também para quem está começando. Os recursos são organizados para facilitar os próximos passos, e a Soph pode ajudar você a encontrar orientações dentro da plataforma." },
];

const FAQSection = () => (
  <section className="relative py-24 overflow-hidden" style={{ background: '#0A192F' }}>
    <div className="container relative z-10 mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight gradient-text">
          Perguntas Frequentes
        </h2>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl mx-auto"
      >
        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              value={`faq-${i}`}
              className="card-premium px-6 border-none"
            >
              <AccordionTrigger className="text-white font-semibold text-left hover:no-underline hover:text-cyan-400 transition-colors py-5">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-white/75 pb-5 leading-relaxed">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

      </motion.div>
    </div>
  </section>
);

export default FAQSection;
