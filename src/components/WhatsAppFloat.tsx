import whatsappIcon from "@/assets/whatsapp-icon.png";

const WHATSAPP_LINK = "https://wa.me/5511983348749?text=Pagina%20de%20vendas";

const WhatsAppFloat = () => (
  <a
    href={WHATSAPP_LINK}
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-5 right-5 z-50 w-[62px] h-[62px] rounded-[14px] overflow-hidden transition-all duration-300 hover:scale-105 hover:brightness-110 relative"
    style={{
      boxShadow: '0 4px 14px rgba(37,211,102,0.45), 0 0 30px rgba(37,211,102,0.18)',
    }}
    aria-label="Falar no WhatsApp"
  >
    <img src={whatsappIcon} alt="WhatsApp" className="w-[150%] h-[150%] object-cover absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
  </a>
);

export default WhatsAppFloat;
