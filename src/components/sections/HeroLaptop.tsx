import { motion, type MotionValue, useReducedMotion, useTransform } from "framer-motion";
import { useEffect, useState } from "react";

import importersScreen from "@/assets/mod-importadoras.png";

type HeroLaptopProps = {
  scrollProgress: MotionValue<number>;
};

const HeroLaptop = ({ scrollProgress }: HeroLaptopProps) => {
  const reduced = !!useReducedMotion();
  const [desktopMotion, setDesktopMotion] = useState(
    () => typeof window !== "undefined" && window.matchMedia("(min-width: 960px)").matches && !reduced,
  );

  const scale = useTransform(scrollProgress, [0, 0.14, 0.46, 0.78, 1], [1, 1.012, 1.042, 1.018, 1]);
  const y = useTransform(scrollProgress, [0, 0.14, 0.46, 0.78, 1], [0, -2, -9, -3, 0]);
  const rotateX = useTransform(scrollProgress, [0, 0.46, 1], [2.1, 0.7, 1.6]);
  const rotateY = useTransform(scrollProgress, [0, 0.46, 1], [-5.4, -2.7, -4.4]);
  const glowOpacity = useTransform(scrollProgress, [0, 0.14, 0.46, 0.78, 1], [0.52, 0.65, 0.92, 0.7, 0.55]);
  const shadowOpacity = useTransform(scrollProgress, [0, 0.46, 1], [0.46, 0.68, 0.48]);
  const sweepX = useTransform(scrollProgress, [0.08, 0.25, 0.58, 0.78], ["-145%", "-145%", "145%", "145%"]);
  const sweepOpacity = useTransform(scrollProgress, [0.08, 0.2, 0.58, 0.68], [0, 0.22, 0.18, 0]);

  useEffect(() => {
    const media = window.matchMedia("(min-width: 960px)");
    const update = () => setDesktopMotion(media.matches && !reduced);

    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, [reduced]);

  return (
    <motion.div
      initial={reduced ? false : { opacity: 0, y: 18, scale: 0.975 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: reduced ? 0.01 : 0.72, delay: reduced ? 0 : 0.14, ease: [0.22, 1, 0.36, 1] }}
      className="relative mx-auto w-full max-w-[760px] pb-[8%] pt-3 min-[960px]:pb-[6%]"
    >
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute -inset-x-[2%] -inset-y-[8%] rounded-[45%] blur-[72px]"
        style={{
          background: "radial-gradient(ellipse at 56% 47%, rgba(0,239,255,0.2) 0%, rgba(0,196,214,0.08) 38%, transparent 72%)",
          opacity: desktopMotion ? glowOpacity : 0.58,
        }}
      />

      <motion.div
        className="relative origin-[50%_76%] will-change-transform"
        style={
          desktopMotion
            ? { perspective: 1500, scale, y, rotateX, rotateY }
            : { perspective: 1500, rotateX: reduced ? 0 : 0.8, rotateY: reduced ? 0 : -1.2 }
        }
      >
        <div className="relative z-10 mx-auto w-[92%] rounded-[1.2rem_1.2rem_0.6rem_0.6rem] border border-white/15 bg-gradient-to-b from-[#272b30] via-[#11151a] to-[#05080c] p-[clamp(5px,0.8vw,10px)] shadow-[inset_0_1px_0_rgba(255,255,255,0.18),inset_0_-2px_5px_rgba(0,0,0,0.85),0_22px_44px_rgba(0,0,0,0.42)]">
          <div aria-hidden="true" className="absolute left-1/2 top-[3px] h-[3px] w-[3px] -translate-x-1/2 rounded-full bg-white/20 shadow-[0_0_4px_rgba(0,0,0,0.8)]" />

          <div className="relative aspect-[16/10] overflow-hidden rounded-[0.75rem_0.75rem_0.35rem_0.35rem] bg-[#06172b] shadow-[inset_0_0_0_1px_rgba(0,0,0,0.9)]">
            <img
              src={importersScreen}
              alt="Interface real da Central de Fornecedores"
              className="h-full w-full object-contain"
            />
            {!reduced && desktopMotion && (
              <motion.div
                aria-hidden="true"
                className="pointer-events-none absolute inset-y-[-20%] w-[24%] skew-x-[-16deg] bg-gradient-to-r from-transparent via-white/15 to-transparent blur-md"
                style={{ x: sweepX, opacity: sweepOpacity }}
              />
            )}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/[0.055] via-transparent to-cyan-400/[0.025]"
            />
          </div>
        </div>

        <div aria-hidden="true" className="relative z-20 mx-auto h-[clamp(10px,1.25vw,17px)] w-[96%] -translate-y-px rounded-b-[28%] border-x border-b border-white/10 bg-gradient-to-b from-[#242a30] via-[#11161c] to-[#05070a] shadow-[inset_0_1px_0_rgba(255,255,255,0.2)]">
          <div className="absolute left-1/2 top-0 h-[35%] w-[16%] -translate-x-1/2 rounded-b-lg bg-black/65 shadow-[inset_0_1px_0_rgba(255,255,255,0.1)]" />
        </div>

        <div
          aria-hidden="true"
          className="relative z-10 mx-auto -mt-px h-[clamp(34px,5.2vw,69px)] w-full origin-top [clip-path:polygon(3%_0,97%_0,100%_74%,94%_100%,6%_100%,0_74%)] bg-gradient-to-b from-[#30363d] via-[#151a20] to-[#07090c] shadow-[inset_0_1px_0_rgba(255,255,255,0.24),inset_0_-8px_16px_rgba(0,0,0,0.58)]"
        >
          <div className="absolute inset-x-[8%] top-[12%] bottom-[19%] rounded-[8px] border border-white/[0.055] bg-gradient-to-b from-white/[0.035] to-black/10" />
          <div className="absolute bottom-[9%] left-1/2 h-[6%] w-[24%] -translate-x-1/2 rounded-full bg-black/50 blur-[0.5px]" />
        </div>

        <div aria-hidden="true" className="relative z-20 mx-auto -mt-[clamp(6px,0.8vw,11px)] h-[clamp(8px,1vw,13px)] w-[89%] rounded-[0_0_42%_42%] border-b border-white/15 bg-gradient-to-b from-[#15191e] to-[#050608] shadow-[0_5px_8px_rgba(0,0,0,0.5)]">
          <div className="absolute left-1/2 top-0 h-[55%] w-[14%] -translate-x-1/2 rounded-b-xl bg-white/[0.08]" />
        </div>

        <motion.div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-[2%] left-[5%] right-[3%] -z-10 h-[14%] rounded-[50%] blur-[20px]"
          style={{
            background: "rgba(0,0,0,0.9)",
            opacity: desktopMotion ? shadowOpacity : 0.5,
            transform: "perspective(800px) rotateX(62deg)",
          }}
        />
      </motion.div>
    </motion.div>
  );
};

export default HeroLaptop;
