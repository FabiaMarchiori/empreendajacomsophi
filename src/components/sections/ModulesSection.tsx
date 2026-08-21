import { motion, useReducedMotion } from "framer-motion";
import { Bot, Calculator, LayoutDashboard, Package, Play } from "lucide-react";
import { useState } from "react";
import capaVideo from "@/assets/capa_video.png";

const pillars = [
  {
    icon: Package,
    title: "CENTRAL DE FORNECEDORES",
    description: "Mais de 320 fornecedores e importadoras organizados por categorias para facilitar sua pesquisa.",
  },
  {
    icon: Calculator,
    title: "PRECIFICAÇÃO",
    description: "Organize custos, margem e outros dados importantes para chegar a um preço de venda mais consciente.",
  },
  {
    icon: LayoutDashboard,
    title: "GESTÃO DO NEGÓCIO",
    description: "Recursos para acompanhar áreas como produtos, vendas, estoque, clientes, caixa e operação.",
  },
  {
    icon: Bot,
    title: "SOPH — SUA SÓCIA DIGITAL",
    description: "Uma camada de assistência criada para apoiar você ao longo da sua jornada dentro da plataforma.",
  },
];

const ModulesSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const reduced = !!useReducedMotion();
  const reveal = (delay = 0, distance = 18) => ({
    initial: reduced ? false : { opacity: 0, y: distance },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.25 },
    transition: { duration: 0.5, delay: reduced ? 0 : delay, ease: "easeOut" as const },
  });

  return (
    <>
      <section className="relative overflow-hidden bg-deep py-16 md:py-24">
        <div className="pointer-events-none absolute left-1/2 top-0 h-[420px] w-[700px] -translate-x-1/2 rounded-full bg-cyan-500/3 blur-[150px]" />

        <div className="container relative z-10 mx-auto px-4">
          <motion.div {...reveal()} className="mx-auto mb-12 max-w-4xl text-center md:mb-14">
            <span className="mb-6 inline-block rounded-full bg-cyan-500/10 px-4 py-1.5 text-sm font-bold tracking-wide text-white">
              MUITO ALÉM DOS FORNECEDORES
            </span>
            <h2 className="mb-6 text-3xl font-extrabold tracking-tight text-white md:text-4xl lg:text-5xl">
              Você entra pelos fornecedores. E encontra <span className="gradient-text">muito mais.</span>
            </h2>
            <p className="mx-auto max-w-3xl text-base leading-relaxed text-white sm:text-lg">
              Além da Central de Fornecedores, o EmpreendaJá reúne ferramentas para ajudar você a precificar, organizar
              e administrar seu negócio — com a Soph como camada de assistência dentro da plataforma.
            </p>
          </motion.div>

          <div className="mx-auto grid max-w-5xl gap-4 md:grid-cols-2">
            {pillars.map((pillar, i) => (
              <motion.div
                key={pillar.title}
                {...reveal(0.08 + i * 0.07)}
                whileHover={reduced ? undefined : { y: -4 }}
                className="card-premium group flex items-start gap-4 p-5 sm:p-6"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-cyan-300/20 bg-cyan-300/[0.07] shadow-[0_0_18px_rgba(0,239,255,0.08)] transition-colors duration-300 group-hover:border-cyan-300/35 group-hover:bg-cyan-300/[0.1]">
                  <pillar.icon className="h-5 w-5 text-cyan-300" />
                </div>
                <div className="min-w-0">
                  <h3 className="text-sm font-extrabold uppercase tracking-[0.1em] text-white sm:text-base">
                    {pillar.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-white sm:text-base">{pillar.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.p
            {...reveal(0.22, 12)}
            className="mx-auto mt-12 max-w-3xl text-center text-base font-bold leading-relaxed text-white sm:text-lg"
          >
            <span className="text-cyan-300">Fornecedores</span> para encontrar. Ferramentas para administrar. Soph para
            acompanhar.
          </motion.p>
        </div>
      </section>

      <section className="relative overflow-hidden py-14 lg:py-16" style={{ background: "#0a192f" }}>
        {/* Ambient glow */}
        <div
          className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[160px] lg:left-[70%]"
          style={{ background: "rgba(0,255,255,0.06)" }}
        />

        <div className="container relative z-10 mx-auto grid max-w-[1060px] grid-cols-1 items-center justify-center gap-10 px-6 min-[900px]:grid-cols-[minmax(0,32rem)_auto] min-[900px]:justify-center min-[900px]:gap-14">
          <motion.div {...reveal()} className="mx-auto max-w-xl text-center min-[900px]:mx-0 min-[900px]:max-w-[34rem] min-[900px]:text-left">

            <span className="mb-5 inline-block text-xs font-extrabold uppercase tracking-[0.22em] text-cyan-300">
              VEJA POR DENTRO
            </span>
            <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-[2rem] lg:text-[2.1rem]">
              Veja o EmpreendaJá <span className="gradient-text">por dentro.</span>
            </h2>
            <p className="mt-4 text-base leading-relaxed text-white">
              Conheça, em poucos minutos, alguns dos principais recursos da plataforma.
            </p>
          </motion.div>

          {/* ── iPhone Mockup with Video ── */}
          <motion.div
            {...reveal(0.1, 24)}
            className="flex w-full max-w-[300px] flex-col items-center justify-center justify-self-center min-[900px]:max-w-[225px]"
          >

            <span className="mb-4 inline-block rounded-full border border-cyan-300/15 bg-cyan-300/[0.06] px-4 py-1.5 text-[11px] font-extrabold uppercase tracking-[0.18em] text-cyan-200/85">
              TOUR DA PLATAFORMA
            </span>
            <div className="relative">
              {/* Outer glow */}
              <div
                className="pointer-events-none absolute inset-0 rounded-[3rem] opacity-60 blur-3xl"
                style={{
                  background: "radial-gradient(circle, #00FFFF 0%, transparent 70%)",
                  transform: "scale(1.15)",
                }}
              />

              {/* iPhone Frame */}
              <div
                className="relative mx-auto h-[620px] w-[300px] p-[14px] min-[900px]:h-[465px] min-[900px]:w-[225px] min-[900px]:p-[10px]"

                style={{
                  background: "linear-gradient(145deg, #1a1a1a 0%, #2a2a2a 50%, #0f0f0f 100%)",
                  borderRadius: "3rem",
                  boxShadow:
                    "0 0 60px rgba(0,255,255,0.35), 0 0 120px rgba(0,255,255,0.15), inset 0 0 2px rgba(255,255,255,0.1), 0 25px 50px rgba(0,0,0,0.6)",
                  border: "1px solid rgba(0,255,255,0.25)",
                }}
              >

                {/* Side buttons */}
                <div className="absolute left-[-3px] top-[110px] h-[32px] w-[3px] rounded-l-sm bg-[#1a1a1a]" />
                <div className="absolute left-[-3px] top-[160px] h-[55px] w-[3px] rounded-l-sm bg-[#1a1a1a]" />
                <div className="absolute left-[-3px] top-[225px] h-[55px] w-[3px] rounded-l-sm bg-[#1a1a1a]" />
                <div className="absolute right-[-3px] top-[140px] h-[80px] w-[3px] rounded-r-sm bg-[#1a1a1a]" />

                {/* Screen */}
                <div className="relative h-full w-full overflow-hidden bg-black" style={{ borderRadius: "2.3rem" }}>
                  {/* Dynamic Island */}
                  <div
                    className="absolute left-1/2 top-2 z-20 -translate-x-1/2"
                    style={{ width: "100px", height: "28px", background: "#000", borderRadius: "999px" }}
                  />

                  {/* YouTube Short Embed */}
                  {isPlaying ? (
                    <iframe
                      src="https://www.youtube.com/embed/K_ZQ1pTcNNs?autoplay=1&controls=1&rel=0&modestbranding=1&playsinline=1"
                      title="EmpreendaJá com Soph"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="absolute inset-0 h-full w-full"
                      style={{ border: "none" }}
                    />
                  ) : (
                    <button
                      type="button"
                      onClick={() => setIsPlaying(true)}
                      aria-label="Reproduzir vídeo"
                      className="group absolute inset-0 h-full w-full cursor-pointer overflow-hidden"
                    >
                      <img
                        src={capaVideo}
                        alt="Veja por dentro do Ecossistema EmpreendaJá com Soph"
                        className="absolute inset-0 h-full w-full bg-black object-contain object-center transition-transform duration-500 group-hover:scale-[1.02]"
                      />
                      <div className="absolute inset-0 flex items-center justify-center bg-black/10 transition-colors duration-300 group-hover:bg-black/20">
                        <div
                          className="flex h-20 w-20 items-center justify-center rounded-full transition-transform duration-300 group-hover:scale-110"
                          style={{
                            background: "rgba(0,255,255,0.18)",
                            border: "2px solid #00FFFF",
                            boxShadow: "0 0 30px rgba(0,255,255,0.6), 0 0 60px rgba(0,255,255,0.3)",
                            backdropFilter: "blur(4px)",
                          }}
                        >
                          <Play className="ml-1 h-8 w-8" style={{ color: "#00FFFF", fill: "#00FFFF" }} />
                        </div>
                      </div>
                    </button>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default ModulesSection;
