import { motion } from "framer-motion";
import { MessageCircle, ArrowRight, Users, Layers, Rocket } from "lucide-react";
import heroMockup from "@/assets/hero-mockup.png";
import { useEffect, useState } from "react";

const WHATSAPP_LINK = "https://wa.me/5511983348749?text=Pagina%20de%20vendas";

const words = ["direção", "clareza", "economia", "estrutura"];

const FloatingParticle = ({ delay, x, y, size }: { delay: number; x: string; y: string; size: number }) => (
  <motion.div
    className="absolute rounded-full bg-cyan-500/20"
    style={{ left: x, top: y, width: size, height: size }}
    animate={{ y: [-20, 20, -20], opacity: [0.2, 0.6, 0.2] }}
    transition={{ duration: 5 + delay, repeat: Infinity, ease: "easeInOut", delay }}
  />
);

const HeroSection = () => {
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % words.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-8 pb-16">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-deep" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-cyan-500/8 rounded-full blur-[100px]" />
      
      <FloatingParticle delay={0} x="10%" y="20%" size={6} />
      <FloatingParticle delay={1} x="80%" y="15%" size={4} />
      <FloatingParticle delay={2} x="60%" y="70%" size={8} />
      <FloatingParticle delay={0.5} x="25%" y="80%" size={5} />
      <FloatingParticle delay={1.5} x="90%" y="50%" size={3} />
      <FloatingParticle delay={3} x="5%" y="55%" size={7} />
      <FloatingParticle delay={2.5} x="45%" y="10%" size={4} />

      {/* Geometric shapes */}
      <motion.div
        className="absolute top-20 right-20 w-32 h-32 border border-cyan-500/10 rotate-45"
        animate={{ rotate: [45, 90, 45] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute bottom-40 left-10 w-24 h-24 border border-cyan-500/5 rounded-full"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="container relative z-10 mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-500/20 bg-cyan-500/5"
            >
              <Rocket className="w-4 h-4 text-cyan-500" />
              <span className="text-sm font-medium text-cyan-400">Valores de lançamento por tempo limitado</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1]"
            >
              <span className="gradient-text">Pare de empreender no escuro.</span>{" "}
              <span className="text-foreground">
                Encontre importadoras, organize seu negócio e cresça com mais{" "}
              </span>
              <motion.span
                key={wordIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="text-cyan-400 inline-block"
              >
                {words[wordIndex]}.
              </motion.span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed"
            >
              Acesse um ecossistema completo com importadoras, nichos, orientação da Soph, 
              precificação e ferramentas para estruturar seu negócio com mais clareza, economia e estratégia.
            </motion.p>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap gap-6"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-cyan-500/10 flex items-center justify-center">
                  <Users className="w-5 h-5 text-cyan-400" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-foreground">+260</p>
                  <p className="text-sm text-muted-foreground">Importadoras</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-cyan-500/10 flex items-center justify-center">
                  <Layers className="w-5 h-5 text-cyan-400" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-foreground">15</p>
                  <p className="text-sm text-muted-foreground">Nichos</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-cyan-500/10 flex items-center justify-center">
                  <Rocket className="w-5 h-5 text-cyan-400" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-foreground">R$ 97</p>
                  <p className="text-sm text-muted-foreground">Plano Anual + Bônus</p>
                </div>
              </div>
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap gap-4"
            >
              <a href="#planos" className="btn-glow px-8 py-4 rounded-xl text-lg inline-flex items-center gap-2 font-bold">
                Quero entrar no Ecossistema
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary-dark px-8 py-4 rounded-xl text-lg inline-flex items-center gap-2"
              >
                <MessageCircle className="w-5 h-5" />
                Falar no WhatsApp
              </a>
            </motion.div>
          </div>

          {/* Right mockup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85, rotateY: 15 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
            className="relative hidden lg:block"
          >
            <div className="absolute inset-0 bg-cyan-500/5 rounded-3xl blur-[60px]" />
            <img
              src={heroMockup}
              alt="Ecossistema EmpreendaJá - Dashboard em notebook, tablet e celular"
              width={1280}
              height={800}
              className="relative z-10 w-full h-auto drop-shadow-2xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
