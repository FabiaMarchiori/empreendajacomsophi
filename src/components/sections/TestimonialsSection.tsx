import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  { name: "Alik Nunes", text: "O material é excelente! Extremamente organizado e com a relação dos melhores fornecedores. Amei demais! O atendimento também é excelente." },
  { name: "Elen Camargo", text: "Não é golpe. Recebi a lista dos fornecedores e quando fui pessoalmente ao Brás, eles me ajudaram muito. Me deram dicas de compras e me orientaram. Indico o trabalho deles." },
  { name: "Érica Oliveira", text: "Estou enlouquecendo! Muita coisa linda e barata. Essa lista é uma mina de ouro pra quem revende!" },
  { name: "Papelaria Office", text: "Pode confiar. Você compra a lista, arquivo ela, e quando postam algo você pergunta o nome do fornecedor, consulta sua lista e entra em contato. Já comprei com 2 fornecedores e recebi tudo direitinho." },
  { name: "Andréa Lopes", text: "Já consegui minha lista. Obrigada! Dinheiro bem gasto. Demais a lista de vocês!" },
  { name: "Joseane", text: "Gente, pode comprar das lojas que estão na lista, é super confiável. Atenciosos, às vezes demoram para responder devido à demanda, mas vem tudo certinho. Com certeza comprarei mais. Fiz compras de Make e Acessórios." },
];

const TestimonialsSection = () => (
  <section className="relative py-24 overflow-hidden">
    <div className="container relative z-10 mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <span className="inline-block px-4 py-1.5 rounded-full bg-cyan-500/10 text-cyan-400 text-sm font-semibold mb-6">
          PROVA SOCIAL
        </span>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight gradient-text">
          Quem já está dentro, aprova
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {testimonials.map((t, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="card-premium p-6 relative"
          >
            <Quote className="w-8 h-8 text-cyan-500/20 absolute top-4 right-4" />
            <div className="flex gap-1 mb-4">
              {[...Array(5)].map((_, j) => (
                <Star key={j} className="w-4 h-4 fill-cyan-400 text-cyan-400" />
              ))}
            </div>
            <p className="text-muted-foreground mb-4 leading-relaxed">"{t.text}"</p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-cyan-500/20 flex items-center justify-center">
                <span className="text-cyan-400 font-bold text-sm">{t.name.charAt(0)}</span>
              </div>
              <p className="font-semibold text-foreground">{t.name}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
