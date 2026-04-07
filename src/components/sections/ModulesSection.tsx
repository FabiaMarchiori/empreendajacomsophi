import { motion } from "framer-motion";
import {
  Search, Layers, Brain, FileText, Palette, Shield, ShoppingCart,
  Wrench, DollarSign, BarChart3
} from "lucide-react";

const modules = [
  { icon: Search, title: "Central de Importadoras", desc: "+260 fornecedores verificados e organizados", bonus: false },
  { icon: Layers, title: "Nichos", desc: "15 segmentos para você escolher o seu", bonus: false },
  { icon: Brain, title: "Soph", desc: "IA que orienta suas decisões de negócio", bonus: false },
  { icon: FileText, title: "Criar seu MEI", desc: "Passo a passo para formalizar seu negócio", bonus: false },
  { icon: Palette, title: "Criar sua Logo", desc: "Ferramentas e direcionamento para sua identidade", bonus: false },
  { icon: Shield, title: "Registrar sua Marca", desc: "Proteja sua marca de forma simples", bonus: false },
  { icon: ShoppingCart, title: "Vender nos Marketplaces", desc: "Domine as maiores plataformas de venda", bonus: false },
  { icon: Wrench, title: "Ferramentas Gratuitas", desc: "Economize com recursos selecionados", bonus: false },
  { icon: DollarSign, title: "Precificação", desc: "Calcule seus preços com margem real", bonus: false },
  { icon: BarChart3, title: "ERP Soph Gestão", desc: "Gerencie seu negócio com sistema completo", bonus: true },
];

const ModulesSection = () => (
  <section className="relative py-24 overflow-hidden">
    <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-cyan-500/3 rounded-full blur-[120px] -translate-y-1/2" />
    <div className="container relative z-10 mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <span className="inline-block px-4 py-1.5 rounded-full bg-cyan-500/10 text-cyan-400 text-sm font-semibold mb-6">
          CONTEÚDO COMPLETO
        </span>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight gradient-text">
          O que você acessará
        </h2>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5 max-w-7xl mx-auto">
        {modules.map((mod, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.06 }}
            className="card-premium p-5 text-center relative group"
          >
            {mod.bonus && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-gradient-to-r from-cyan-500 to-cyan-600 text-xs font-bold text-background whitespace-nowrap">
                BÔNUS ANUAL
              </div>
            )}
            <div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center mx-auto mb-3 group-hover:bg-cyan-500/20 transition-colors">
              <mod.icon className="w-6 h-6 text-cyan-400" />
            </div>
            <h3 className="text-base font-bold text-foreground mb-1">{mod.title}</h3>
            <p className="text-sm text-muted-foreground">{mod.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ModulesSection;
