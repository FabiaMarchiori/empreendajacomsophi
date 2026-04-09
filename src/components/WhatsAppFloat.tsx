import whatsappIcon from "@/assets/whatsapp-icon.png";

const WHATSAPP_LINK = "https://wa.me/5511983348749?text=Pagina%20de%20vendas";

const WhatsAppFloat = () => (
  <a
    href={WHATSAPP_LINK}
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-5 right-5 z-50 w-[60px] h-[60px] rounded-[16px] overflow-hidden transition-all duration-300 hover:scale-105 hover:brightness-110"
    style={{
      boxShadow: '0 4px 14px rgba(37,211,102,0.4), 0 0 30px rgba(37,211,102,0.15)',
    }}
    aria-label="Falar no WhatsApp"
  >
    <img src={whatsappIcon} alt="WhatsApp" className="w-full h-full object-cover" />
  </a>
);

export default WhatsAppFloat;
