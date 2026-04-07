import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import heroDashboard from "@/assets/hero-dashboard.jpg";

const WHATSAPP_LINK = "https://wa.me/5511983348749?text=Pagina%20de%20vendas";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden" style={{ background: '#0A192F' }}>
      {/* Subtle radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full opacity-20"
        style={{ background: 'radial-gradient(circle, rgba(0,239,255,0.08) 0%, transparent 70%)' }}
      />

      <div className="container mx-auto px-6 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left column */}
          <div className="space-y-8">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary/15 text-primary text-xs font-semibold tracking-[0.15em] uppercase">
                Ecossistema Exclusivo
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-[2.75rem] md:text-[3.25rem] lg:text-[3.75rem] font-extrabold tracking-tight leading-[1.08]"
            >
              <span className="text-foreground">Não é uma lista. É{"\n"}o seu ecossistema{"\n"}completo </span>
              <span className="gradient-text">para{"\n"}empreender.</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-lg"
              style={{ color: 'rgba(255,255,255,0.65)' }}
            >
              Mais de 260+ Importadoras diretas com 15 nichos lucrativos,
              sua sócia digital Soph, gestão ERP e estruturação profissional
              em um só lugar. Pare de buscar, comece a lucrar.
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap gap-4 pt-2"
            >
              <a
                href="#planos"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-base font-bold transition-all duration-300 hover:-translate-y-0.5"
                style={{
                  background: 'linear-gradient(135deg, #00EFFF 0%, #00c4d6 100%)',
                  color: '#0A192F',
                  boxShadow: '0 0 24px rgba(0,239,255,0.25)',
                }}
              >
                Começar Agora
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="#como-funciona"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-base font-semibold transition-all duration-300 hover:bg-white/5"
                style={{
                  border: '1px solid rgba(255,255,255,0.2)',
                  color: 'rgba(255,255,255,0.9)',
                }}
              >
                Ver como funciona
              </a>
            </motion.div>
          </div>

          {/* Right column - Mockup card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="relative hidden lg:flex items-center justify-center"
          >
            {/* Glow behind card */}
            <div
              className="absolute inset-0 rounded-3xl"
              style={{
                background: 'radial-gradient(ellipse at center, rgba(0,239,255,0.12) 0%, transparent 70%)',
                filter: 'blur(40px)',
              }}
            />
            {/* Card container */}
            <div
              className="relative w-full rounded-2xl p-6 overflow-hidden"
              style={{
                background: 'linear-gradient(145deg, #0f2744 0%, #091b30 50%, #071526 100%)',
                border: '1px solid rgba(0,239,255,0.1)',
                boxShadow: '0 0 60px rgba(0,239,255,0.06), 0 25px 50px rgba(0,0,0,0.4)',
              }}
            >
              {/* Top edge glow line */}
              <div
                className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px"
                style={{ background: 'linear-gradient(90deg, transparent, rgba(0,239,255,0.4), transparent)' }}
              />
              {/* Bottom edge glow line */}
              <div
                className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-px"
                style={{ background: 'linear-gradient(90deg, transparent, rgba(0,239,255,0.3), transparent)' }}
              />
              <img
                src={heroMockup}
                alt="Ecossistema EmpreendaJá - Dashboard profissional"
                className="w-full h-auto rounded-lg"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
