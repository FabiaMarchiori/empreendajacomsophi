import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const WHATSAPP_LINK = "https://wa.me/5511983348749?text=Pagina%20de%20vendas";

const faqs = [
  { q: "O que está incluso no plano mensal?", a: "O plano mensal inclui: Central de Importadoras (+260 fornecedores), 15 Nichos, Soph (IA orientadora), Criar seu MEI, Criar sua Logo, Registrar sua Marca, Vender nos Marketplaces, Ferramentas Gratuitas e Precificação. O ERP Soph Gestão NÃO está incluído no plano mensal." },
  { q: "O que está incluso no plano anual?", a: "O plano anual inclui tudo do mensal mais o bônus exclusivo de lançamento: ERP Soph Gestão, um sistema completo para gerenciar seu negócio." },
  { q: "O ERP Soph Gestão está incluso em qual plano?", a: "O ERP Soph Gestão é um bônus exclusivo de lançamento do plano anual (R$ 97/ano). Ele NÃO está incluído no plano mensal." },
  { q: "O acesso é imediato?", a: "Sim! Após a confirmação do pagamento, você recebe acesso imediato a todo o ecossistema." },
  { q: "Vou ter acesso às importadoras e nichos?", a: "Sim. Ambos os planos incluem acesso completo à Central de Importadoras com mais de 260 fornecedores e aos 15 nichos organizados." },
  { q: "A Soph está incluída?", a: "Sim! A Soph, nossa IA orientadora, está incluída em ambos os planos para guiar suas decisões." },
  { q: "O ecossistema ajuda com MEI, logo, marca e marketplaces?", a: "Sim. Temos módulos dedicados para cada um desses temas, com orientações práticas e diretas." },
  { q: "Os valores são de lançamento por tempo limitado?", a: "Sim! Os valores atuais (R$ 47/mês e R$ 97/ano) são preços especiais de lançamento e podem aumentar a qualquer momento." },
  { q: "Tenho garantia?", a: "Sim! Você tem 7 dias de garantia incondicional. Se não gostar, devolvemos 100% do seu dinheiro." },
  { q: "Como falar com o suporte?", a: "Você pode entrar em contato pelo WhatsApp a qualquer momento. Nossa equipe está pronta para te ajudar." },
  { q: '"É só uma lista?"', a: "Não. O EmpreendaJá é um ecossistema completo com importadoras, ferramentas, IA, precificação, orientações para MEI, logo, marca, marketplaces e muito mais." },
  { q: '"Vou conseguir usar mesmo começando do zero?"', a: "Sim. O ecossistema foi pensado para quem está começando. A Soph te orienta passo a passo e cada módulo é direto ao ponto." },
  { q: '"Isso realmente vale a pena?"', a: "Com +260 importadoras, ferramentas gratuitas e tudo organizado em um só lugar, o retorno vem na primeira decisão certa que você tomar." },
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
