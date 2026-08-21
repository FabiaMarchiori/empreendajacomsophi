import { useEffect, useState } from "react";
import whatsappIcon from "@/assets/whatsapp-icon.png";

const WHATSAPP_LINK = "https://wa.me/5511983348749?text=Pagina%20de%20vendas";

const WhatsAppFloat = () => {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const targets = [
      document.getElementById("cta-final"),
      document.querySelector("footer"),
    ].filter((el): el is HTMLElement => el instanceof HTMLElement);
    if (!targets.length) return;

    const visible = new Set<Element>();
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) visible.add(entry.target);
          else visible.delete(entry.target);
        });
        setHidden(visible.size > 0);
      },
      { threshold: 0.2 },
    );

    targets.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <a
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      aria-hidden={hidden}
      tabIndex={hidden ? -1 : 0}
      className={
        "fixed z-[9999] block overflow-hidden rounded-[14px] transition-all duration-300 hover:scale-110 hover:brightness-110 " +
        "right-[14px] h-12 w-12 md:right-6 md:h-[62px] md:w-[62px] " +
        (hidden ? "pointer-events-none translate-y-3 opacity-0" : "opacity-100")
      }
      style={{
        bottom: "calc(14px + env(safe-area-inset-bottom))",
        boxShadow: "0 4px 14px rgba(37,211,102,0.45), 0 0 30px rgba(37,211,102,0.18)",
      }}
    >
      <img
        src={whatsappIcon}
        alt=""
        className="block"
        style={{
          width: "150%",
          height: "150%",
          objectFit: "cover",
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      />
    </a>
  );
};

export default WhatsAppFloat;
