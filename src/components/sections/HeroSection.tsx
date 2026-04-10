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
              Mais de 260+ Importadoras diretas com 15 nichos lucrativos,
              sua sócia digital Soph, gestão ERP, precificação inteligente e módulos para estruturar
              seu negócio em um só lugar. Pare de buscar, comece a lucrar.
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
                Ver como funciona
              </a>
            </motion.div>
          </div>

          {/* Right column - Device Mockups */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
            className="relative hidden lg:flex items-center justify-center"
          >
            {/* Glow behind */}
            <div
              className="absolute inset-0 rounded-3xl"
              style={{
                background: 'radial-gradient(ellipse at center, rgba(0,239,255,0.15) 0%, transparent 70%)',
                filter: 'blur(60px)',
              }}
            />

            {/* Notebook mockup */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotateY: -8 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0 }}
              transition={{ duration: 1.2, delay: 0.5, ease: "easeOut" }}
              className="relative w-full"
              style={{ perspective: '1200px' }}
            >
              <div
                className="relative rounded-xl overflow-hidden"
                style={{
                  background: 'linear-gradient(145deg, #0f2744 0%, #091b30 100%)',
                  border: '1px solid rgba(0,239,255,0.15)',
                  boxShadow: '0 0 60px rgba(0,239,255,0.08), 0 30px 60px rgba(0,0,0,0.5)',
                  padding: '8px',
                }}
              >
                {/* Top bar */}
                <div className="flex items-center gap-2 px-3 py-2 mb-1">
                  <div className="w-3 h-3 rounded-full bg-red-400/60" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400/60" />
                  <div className="w-3 h-3 rounded-full bg-green-400/60" />
                  <div className="flex-1 mx-4 h-5 rounded-full" style={{ background: 'rgba(255,255,255,0.05)' }} />
                </div>
                {/* Top glow line */}
                <div
                  className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px"
                  style={{ background: 'linear-gradient(90deg, transparent, rgba(0,239,255,0.4), transparent)' }}
                />
                <video
                  src="/videos/hero-demo.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="metadata"
                  className="w-full h-auto rounded-lg"
                  style={{ objectFit: 'cover' }}
                />
              </div>

              {/* Tablet mockup */}
              <motion.div
                initial={{ opacity: 0, x: 60, y: 30 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
                className="absolute -bottom-6 -right-4 w-[45%] rounded-lg overflow-hidden"
                style={{
                  background: '#0d1f36',
                  border: '1px solid rgba(0,239,255,0.2)',
                  boxShadow: '0 0 30px rgba(0,239,255,0.1), 0 15px 40px rgba(0,0,0,0.5)',
                  padding: '4px',
                }}
              >
                <video
                  src="/videos/hero-demo.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="metadata"
                  className="w-full h-auto rounded"
                  style={{ maxHeight: '140px', objectFit: 'cover', objectPosition: 'top' }}
                />
              </motion.div>

              {/* Mobile mockup */}
              <motion.div
                initial={{ opacity: 0, x: -40, y: 40 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 1, delay: 1, ease: "easeOut" }}
                className="absolute -bottom-4 -left-2 w-[22%] rounded-xl overflow-hidden"
                style={{
                  background: '#0d1f36',
                  border: '1px solid rgba(0,239,255,0.2)',
                  boxShadow: '0 0 20px rgba(0,239,255,0.08), 0 10px 30px rgba(0,0,0,0.5)',
                  padding: '3px',
                }}
              >
                <video
                  src="/videos/hero-demo.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="metadata"
                  className="w-full h-auto rounded-lg"
                  style={{ maxHeight: '120px', objectFit: 'cover', objectPosition: 'top' }}
                />
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
