import { motion, type MotionValue, useReducedMotion, useTransform } from "framer-motion";
import { useEffect, useState } from "react";

import importersScreen from "@/assets/mod-importadoras.png";

type HeroTabletProps = {
  scrollProgress: MotionValue<number>;
};

const HeroTablet = ({ scrollProgress }: HeroTabletProps) => {
  const reduced = !!useReducedMotion();
  const [desktopMotion, setDesktopMotion] = useState(
    () => typeof window !== "undefined" && window.matchMedia("(min-width: 960px)").matches && !reduced,
  );

  const scale = useTransform(scrollProgress, [0, 0.18, 0.5, 0.82, 1], [1, 1.01, 1.035, 1.014, 1]);
  const y = useTransform(scrollProgress, [0, 0.18, 0.5, 0.82, 1], [0, -2, -8, -3, 0]);
  const rotateX = useTransform(scrollProgress, [0, 0.5, 1], [1.2, 0.25, 0.9]);
  const rotateY = useTransform(scrollProgress, [0, 0.5, 1], [-3.6, -1.5, -2.8]);
  const glowOpacity = useTransform(scrollProgress, [0, 0.18, 0.5, 0.82, 1], [0.52, 0.64, 0.86, 0.66, 0.54]);
  const shadowOpacity = useTransform(scrollProgress, [0, 0.5, 1], [0.38, 0.54, 0.4]);
  const sweepX = useTransform(scrollProgress, [0.1, 0.28, 0.62, 0.78], ["-120%", "-120%", "320%", "320%"]);
  const sweepOpacity = useTransform(scrollProgress, [0.1, 0.24, 0.62, 0.72], [0, 0.75, 0.48, 0]);

  useEffect(() => {
    const media = window.matchMedia("(min-width: 960px)");
    const update = () => setDesktopMotion(media.matches && !reduced);

    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, [reduced]);

  return (
    <motion.div
      initial={reduced ? false : { opacity: 0, y: 16, scale: 0.985 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: reduced ? 0.01 : 0.72, delay: reduced ? 0 : 0.14, ease: [0.22, 1, 0.36, 1] }}
      className="relative mx-auto w-full max-w-[620px] px-1 py-5 min-[960px]:mr-0 min-[960px]:py-3"
    >
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute -inset-x-[8%] -inset-y-[7%] rounded-[42%] blur-[68px]"
        style={{
          background:
            "radial-gradient(ellipse at 52% 48%, rgba(0,239,255,0.2) 0%, rgba(0,196,214,0.075) 42%, transparent 72%)",
          opacity: desktopMotion ? glowOpacity : 0.54,
        }}
      />

      <motion.div
        className="relative origin-center will-change-transform"
        style={
          desktopMotion
            ? { perspective: 1500, scale, y, rotateX, rotateY }
            : { perspective: 1500, rotateX: 0, rotateY: reduced ? 0 : -0.7 }
        }
      >
        <div
          aria-hidden="true"
          className="absolute inset-[1.5%_-1.1%_-1.5%_1.1%] rounded-[clamp(1rem,2.2vw,1.65rem)] border border-white/[0.055] bg-[#05080d] shadow-[inset_-2px_-2px_5px_rgba(0,0,0,0.78)]"
        />

        <div className="relative overflow-hidden rounded-[clamp(1rem,2.2vw,1.65rem)] border border-white/[0.16] bg-gradient-to-br from-[#242a31] via-[#0b1016] to-[#030609] p-[clamp(4px,0.55vw,7px)] shadow-[inset_0_1px_0_rgba(255,255,255,0.2),0_24px_48px_rgba(0,0,0,0.42),0_0_32px_rgba(0,239,255,0.08)]">
          <div className="relative overflow-hidden rounded-[clamp(0.72rem,1.7vw,1.25rem)] bg-[#06172b] shadow-[inset_0_0_0_1px_rgba(0,0,0,0.88)]">
            <img
              src={importersScreen}
              alt="Interface real da Central de Fornecedores"
              className="block h-auto w-full"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/[0.035] via-transparent to-cyan-400/[0.018]"
            />
          </div>

          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-[7%] top-0 h-px overflow-hidden rounded-full bg-white/[0.08]"
          >
            {!reduced && desktopMotion && (
              <motion.div
                className="h-full w-[30%] bg-gradient-to-r from-transparent via-cyan-100/90 to-transparent shadow-[0_0_8px_rgba(0,239,255,0.65)]"
                style={{ x: sweepX, opacity: sweepOpacity }}
              />
            )}
          </div>

          <div
            aria-hidden="true"
            className="absolute left-1/2 top-[2px] h-[2px] w-[2px] -translate-x-1/2 rounded-full bg-white/20 shadow-[0_0_4px_rgba(0,0,0,0.9)]"
          />
        </div>

        <motion.div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-[4%] left-[8%] right-[6%] -z-10 h-[8%] rounded-[50%] bg-black/80 blur-[18px]"
          style={{
            opacity: desktopMotion ? shadowOpacity : 0.36,
            transform: "perspective(700px) rotateX(64deg)",
          }}
        />
      </motion.div>
    </motion.div>
  );
};

export default HeroTablet;
