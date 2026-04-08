import { MessageCircle } from "lucide-react";

const WHATSAPP_LINK = "https://wa.me/5511983348749?text=Pagina%20de%20vendas";

const WhatsAppFloat = () => (
  <a
    href={WHATSAPP_LINK}
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:-translate-y-1"
    style={{
      background: 'linear-gradient(135deg, #00FF88 0%, #00CC6A 100%)',
      boxShadow: '0 0 20px rgba(0,255,136,0.35), 0 0 50px rgba(0,255,136,0.1)',
    }}
    aria-label="Falar no WhatsApp"
  >
    <MessageCircle className="w-7 h-7" style={{ color: '#0A192F' }} />
  </a>
);

export default WhatsAppFloat;
