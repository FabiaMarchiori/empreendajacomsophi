import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useEffect, useRef } from "react";


const WHATSAPP_LINK = "https://wa.me/5511983348749?text=Pagina%20de%20vendas";

/* Floating particles background */
const ParticlesBg = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    const particles: { x: number; y: number; vx: number; vy: number; r: number; o: number }[] = [];

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    for (let i = 0; i < 50; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        r: Math.random() * 2 + 0.5,
        o: Math.random() * 0.4 + 0.1,
      });
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0, 239, 255, ${p.o})`;
        ctx.fill();
      });
      animId = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none" />;
};

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden" style={{ background: '#0A192F' }}>
      <ParticlesBg />

      {/* Radial glows */}
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full opacity-30"
        style={{ background: 'radial-gradient(circle, rgba(0,239,255,0.08) 0%, transparent 70%)' }}
      />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full opacity-20"
        style={{ background: 'radial-gradient(circle, rgba(0,239,255,0.06) 0%, transparent 70%)' }}
      />

      <div className="container relative z-10 mx-auto px-6 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left column */}
          <div className="space-y-8">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary/15 text-white text-xs font-bold tracking-[0.2em] uppercase">
                260+ Importadoras já mapeadas
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-[2.75rem] md:text-[3.25rem] lg:text-[3.75rem] font-extrabold tracking-tight leading-[1.08]"
            >
              <span className="text-white">Não é uma lista. É o seu{" "}</span>
              <span
                style={{
                  background: 'linear-gradient(90deg, #FFFFFF 0%, #F2FBFF 40%, #00FFFF 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                ecossistema completo
              </span>
              <span className="text-white">{" "}para empreender.</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base md:text-lg leading-relaxed max-w-lg text-white/90"
            >
              Acesso direto às maiores importadoras da 25 de Março, organizadas por nicho — com a Soph, sua sócia digital, ao seu lado em cada decisão.
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
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-base font-bold transition-all duration-300 hover:-translate-y-0.5"
                style={{
                  background: 'linear-gradient(135deg, #FFFFFF 0%, #F2FBFF 30%, #00EFFF 100%)',
                  color: '#0A192F',
                  boxShadow: '0 0 30px rgba(0,239,255,0.3)',
                }}
              >
                Começar Agora
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="#como-funciona"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-base font-semibold transition-all duration-300 hover:bg-white/5"
                style={{
                  border: '1px solid rgba(0,239,255,0.4)',
                  color: '#00EFFF',
                }}
              >
                Ver por dentro
              </a>
            </motion.div>

            {/* Trust row */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.45 }}
              className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-white/70"
            >
              <span className="inline-flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                7 dias de garantia
              </span>
              <span className="inline-flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                Acesso imediato
              </span>
            </motion.div>
          </div>

          {/* Right column - Central de Importadoras panel */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
            className="relative flex items-center justify-center"
          >
            <div
              className="absolute inset-0 rounded-3xl"
              style={{
                background: 'radial-gradient(ellipse at center, rgba(0,239,255,0.15) 0%, transparent 70%)',
                filter: 'blur(60px)',
              }}
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
              className="relative w-full rounded-2xl overflow-hidden"
              style={{
                background: 'linear-gradient(145deg, #0f2744 0%, #091b30 100%)',
                border: '1px solid rgba(0,239,255,0.2)',
                boxShadow: '0 0 60px rgba(0,239,255,0.1), 0 30px 60px rgba(0,0,0,0.5)',
              }}
            >
              {/* Top bar */}
              <div className="flex items-center justify-between gap-3 px-5 py-3 border-b" style={{ borderColor: 'rgba(0,239,255,0.12)' }}>
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-400/70" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/70" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-400/70" />
                </div>
                <span className="text-[11px] font-bold tracking-[0.18em] uppercase text-cyan-300/90">
                  Central de Importadoras
                </span>
                <span className="w-12" />
              </div>

              {/* Header stats */}
              <div className="grid grid-cols-2 gap-3 px-5 pt-5">
                <div className="rounded-xl px-4 py-3" style={{ background: 'rgba(0,239,255,0.06)', border: '1px solid rgba(0,239,255,0.18)' }}>
                  <div className="text-2xl font-extrabold text-white leading-none">260+</div>
                  <div className="text-[11px] mt-1 text-cyan-300/90 font-semibold tracking-wide uppercase">Importadoras</div>
                </div>
                <div className="rounded-xl px-4 py-3" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)' }}>
                  <div className="text-2xl font-extrabold text-white leading-none">15</div>
                  <div className="text-[11px] mt-1 text-white/70 font-semibold tracking-wide uppercase">Nichos ativos</div>
                </div>
              </div>

              {/* Niche cards */}
              <div className="grid grid-cols-2 gap-3 p-5">
                {[
                  { name: "Bolsas", count: 32 },
                  { name: "Moda Feminina", count: 58 },
                  { name: "Semijoias", count: 24 },
                  { name: "Calçados", count: 41 },
                  { name: "Papelaria Fofa", count: 18 },
                  { name: "Eletrônicos", count: 22 },
                ].map((n, i) => (
                  <motion.div
                    key={n.name}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.7 + i * 0.07 }}
                    className="rounded-lg px-3 py-2.5 flex items-center justify-between"
                    style={{
                      background: 'rgba(255,255,255,0.03)',
                      border: '1px solid rgba(0,239,255,0.1)',
                    }}
                  >
                    <span className="text-sm font-semibold text-white truncate">{n.name}</span>
                    <span
                      className="text-[11px] font-bold px-2 py-0.5 rounded-md shrink-0"
                      style={{
                        background: 'rgba(0,239,255,0.12)',
                        color: '#00EFFF',
                        border: '1px solid rgba(0,239,255,0.25)',
                      }}
                    >
                      {n.count}
                    </span>
                  </motion.div>
                ))}
              </div>

              {/* Footer */}
              <div className="px-5 pb-5">
                <div className="flex items-center justify-between text-[11px] text-white/60">
                  <span className="inline-flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                    Atualizado hoje
                  </span>
                  <span className="text-cyan-300/80 font-semibold">+ novos nichos em breve</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
