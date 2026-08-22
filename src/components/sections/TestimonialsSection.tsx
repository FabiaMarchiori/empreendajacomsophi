import { useCallback, useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Quote } from "lucide-react";

import {
  type CarouselApi,
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const testimonials = [
  { name: "Alik Nunes", text: "O material é excelente! Extremamente organizado e com a relação dos melhores fornecedores. Amei demais! O atendimento também é excelente." },
  { name: "Elen Camargo", text: "Não é golpe. Recebi a lista dos fornecedores e quando fui pessoalmente ao Brás, eles me ajudaram muito. Me deram dicas de compras e me orientaram. Indico o trabalho deles." },
  { name: "Érica Oliveira", text: "Estou enlouquecendo! Muita coisa linda e barata. Essa lista é uma mina de ouro pra quem revende!" },
  { name: "Papelaria Office", text: "Pode confiar. Você compra a lista, arquivo ela, e quando postam algo você pergunta o nome do fornecedor, consulta sua lista e entra em contato. Já comprei com 2 fornecedores e recebi tudo direitinho." },
  { name: "Andréa Lopes", text: "Já consegui minha lista. Obrigada! Dinheiro bem gasto. Demais a lista de vocês!" },
  { name: "Joseane", text: "Gente, pode comprar das lojas que estão na lista, é super confiável. Atenciosos, às vezes demoram para responder devido à demanda, mas vem tudo certinho. Com certeza comprarei mais. Fiz compras de Make e Acessórios." },
];

const TestimonialsSection = () => {
  const reduced = useReducedMotion();
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);
  const carouselRegionRef = useRef<HTMLDivElement>(null);
  const pauseReasonsRef = useRef(new Set<string>());
  const resumeAfterRef = useRef(0);

  const pause = useCallback((reason: string) => {
    pauseReasonsRef.current.add(reason);
  }, []);

  const resume = useCallback((reason: string, delay = 900) => {
    pauseReasonsRef.current.delete(reason);
    resumeAfterRef.current = performance.now() + delay;
  }, []);

  useEffect(() => {
    if (!api) return;

    const updatePosition = () => {
      setCurrent(api.selectedScrollSnap());
      setCount(api.scrollSnapList().length);
    };

    updatePosition();
    api.on("select", updatePosition);
    api.on("reInit", updatePosition);

    return () => {
      api.off("select", updatePosition);
      api.off("reInit", updatePosition);
    };
  }, [api]);

  useEffect(() => {
    if (!api || reduced) return;

    const root = carouselRegionRef.current;
    if (!root) return;

    let frame = 0;
    let previousTime = performance.now();
    let previousIndex = api.selectedScrollSnap();
    let engine = api.internalEngine();

    const updateEngine = () => {
      engine = api.internalEngine();
      previousIndex = api.selectedScrollSnap();
    };
    const handlePointerDown = () => pause("drag");
    const handlePointerUp = () => resume("drag", 2200);
    const handleVisibility = () => {
      if (document.hidden) pause("document");
      else resume("document", 700);
    };
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) resume("viewport", 700);
        else pause("viewport");
      },
      { threshold: 0.12 },
    );

    observer.observe(root);
    handleVisibility();
    api.on("pointerDown", handlePointerDown);
    api.on("pointerUp", handlePointerUp);
    api.on("reInit", updateEngine);
    document.addEventListener("visibilitychange", handleVisibility);

    const tick = (time: number) => {
      const elapsed = Math.min(time - previousTime, 32);
      previousTime = time;

      if (pauseReasonsRef.current.size === 0 && time >= resumeAfterRef.current && !engine.dragHandler.pointerDown()) {
        engine.animation.stop();
        const mobile = window.matchMedia("(max-width: 639px)").matches;
        const distance = (mobile ? 0.6 : 0.7) * (elapsed / 16.667);

        engine.location.add(-distance);
        engine.target.set(engine.location);
        engine.previousLocation.set(engine.location);
        engine.offsetLocation.set(engine.location);
        engine.scrollLooper.loop(-1);
        engine.slideLooper.loop();
        engine.translate.to(engine.location.get());
        api.emit("scroll");

        let closestIndex = 0;
        let closestDistance = Number.POSITIVE_INFINITY;
        engine.scrollSnaps.forEach((snap, index) => {
          const snapDistance = Math.abs(snap - engine.location.get());
          if (snapDistance < closestDistance) {
            closestDistance = snapDistance;
            closestIndex = index;
          }
        });

        if (closestIndex !== previousIndex) {
          engine.indexPrevious.set(previousIndex);
          engine.index.set(closestIndex);
          previousIndex = closestIndex;
          api.emit("select");
        }
      }

      frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      api.off("pointerDown", handlePointerDown);
      api.off("pointerUp", handlePointerUp);
      api.off("reInit", updateEngine);
      document.removeEventListener("visibilitychange", handleVisibility);
    };
  }, [api, pause, reduced, resume]);

  return (
    <section className="relative overflow-hidden bg-[#0A192F] py-20 md:py-24">
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[520px] w-[760px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/[0.035] blur-[150px]" />
      <div className="container relative z-10 mx-auto px-4">
        <motion.header
          initial={reduced ? { opacity: 0 } : { opacity: 0, y: 24 }}
          whileInView={reduced ? { opacity: 1 } : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: reduced ? 0.01 : 0.55, ease: "easeOut" }}
          className="mx-auto mb-12 max-w-3xl text-center md:mb-14"
        >
          <span className="mb-5 inline-block rounded-full bg-cyan-500/10 px-4 py-1.5 text-sm font-bold tracking-wide text-white">
            QUEM JÁ CONFIOU, CONTA
          </span>
          <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-white md:text-4xl lg:text-5xl">
            Experiências reais de quem já comprou com a gente.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-white md:text-lg">
            Relatos de clientes que já utilizaram nossos materiais e fornecedores ao longo dessa jornada.
          </p>
        </motion.header>

        <motion.div
          ref={carouselRegionRef}
          initial={reduced ? { opacity: 0 } : { opacity: 0, y: 20 }}
          whileInView={reduced ? { opacity: 1 } : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: reduced ? 0.01 : 0.5, ease: "easeOut" }}
          className="mx-auto max-w-6xl"
          onMouseEnter={() => pause("hover")}
          onMouseLeave={() => resume("hover", 900)}
          onFocusCapture={() => pause("focus")}
          onBlurCapture={(event) => {
            if (!event.currentTarget.contains(event.relatedTarget)) resume("focus", 1600);
          }}
          onTouchStart={() => pause("touch")}
          onTouchEnd={() => resume("touch", 2400)}
        >
          <Carousel
            setApi={setApi}
            opts={{ align: "start", loop: true, dragFree: true, skipSnaps: false }}
            aria-label="Depoimentos de clientes"
            className="px-0 md:px-11"
          >
            <CarouselContent className="-ml-4 items-stretch">
              {testimonials.map((testimonial, index) => (
                <CarouselItem
                  key={testimonial.name}
                  aria-label={(index + 1) + " de " + testimonials.length}
                  className="basis-[88%] pl-4 sm:basis-1/2 lg:basis-1/3"
                >
                  <article className="group relative flex h-full min-h-[19rem] flex-col overflow-hidden rounded-2xl border border-cyan-300/15 bg-[#0b2139]/90 p-6 shadow-[0_20px_48px_rgba(0,0,0,0.3),inset_0_1px_0_rgba(103,232,249,0.1)] transition-[transform,border-color,box-shadow] duration-300 [@media(hover:hover)_and_(pointer:fine)]:hover:-translate-y-0.5 [@media(hover:hover)_and_(pointer:fine)]:hover:border-cyan-300/30 [@media(hover:hover)_and_(pointer:fine)]:hover:shadow-[0_24px_54px_rgba(0,0,0,0.34),0_0_28px_rgba(0,239,255,0.08),inset_0_1px_0_rgba(103,232,249,0.14)]">
                    <Quote aria-hidden="true" className="absolute right-5 top-5 h-8 w-8 text-cyan-300/15" />
                    <p className="relative z-10 mb-7 pr-6 leading-relaxed text-white">“{testimonial.text}”</p>
                    <footer className="mt-auto flex items-center gap-3 border-t border-white/[0.07] pt-5">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-cyan-300/15 bg-cyan-500/10">
                        <span className="text-sm font-bold text-cyan-300">{testimonial.name.charAt(0)}</span>
                      </div>
                      <p className="font-semibold text-white">{testimonial.name}</p>
                    </footer>
                  </article>
                </CarouselItem>
              ))}
            </CarouselContent>

            <CarouselPrevious
              aria-label="Ver depoimentos anteriores"
              className="left-0 hidden h-9 w-9 border-cyan-300/20 bg-[#0b2139] text-cyan-200 hover:border-cyan-300/40 hover:bg-[#0d2944] focus-visible:ring-2 focus-visible:ring-cyan-300 md:flex"
            />
            <CarouselNext
              aria-label="Ver próximos depoimentos"
              className="right-0 hidden h-9 w-9 border-cyan-300/20 bg-[#0b2139] text-cyan-200 hover:border-cyan-300/40 hover:bg-[#0d2944] focus-visible:ring-2 focus-visible:ring-cyan-300 md:flex"
            />
          </Carousel>

          <div className="mt-7 flex items-center justify-center gap-2" aria-label={"Depoimento " + (current + 1) + " de " + count}>
            {Array.from({ length: count }).map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => {
                  pause("control");
                  api?.scrollTo(index);
                  resume("control", 2600);
                }}
                aria-label={"Ir para o depoimento " + (index + 1)}
                aria-current={index === current ? "true" : undefined}
                className={"h-2 rounded-full transition-[width,background-color] duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A192F] " + (
                  index === current ? "w-6 bg-cyan-300" : "w-2 bg-white/25 hover:bg-white/40"
                )}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
