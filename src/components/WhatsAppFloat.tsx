import whatsappIcon from "@/assets/whatsapp-icon.png";

const WHATSAPP_LINK = "https://wa.me/5511983348749?text=Pagina%20de%20vendas";

const WhatsAppFloat = () => (
  <a
    href={WHATSAPP_LINK}
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-6 right-6 z-50 w-[60px] h-[60px] rounded-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:-translate-y-1"
    style={{
      background: 'linear-gradient(135deg, #25D366 0%, #128C7E 100%)',
      boxShadow: '0 0 20px rgba(37,211,102,0.35), 0 0 50px rgba(37,211,102,0.1)',
    }}
    aria-label="Falar no WhatsApp"
  >
    <img src={whatsappIcon} alt="WhatsApp" className="w-9 h-9 object-contain" />
  </a>
);

export default WhatsAppFloat;
