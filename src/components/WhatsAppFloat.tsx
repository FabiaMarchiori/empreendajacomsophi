import whatsappIcon from "@/assets/whatsapp-icon.png";

const WHATSAPP_LINK = "https://wa.me/5511983348749?text=Pagina%20de%20vendas";

const WhatsAppFloat = () => (
  <a
    href={WHATSAPP_LINK}
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-6 right-6 z-[9999] block w-[62px] h-[62px] rounded-[14px] overflow-hidden transition-all duration-300 hover:scale-110 hover:brightness-110"
    style={{
      boxShadow: '0 4px 14px rgba(37,211,102,0.45), 0 0 30px rgba(37,211,102,0.18)',
    }}
    aria-label="Falar no WhatsApp"
  >
    <img
      src={whatsappIcon}
      alt="WhatsApp"
      className="block"
      style={{
        width: '150%',
        height: '150%',
        objectFit: 'cover',
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
      }}
    />
  </a>
);

export default WhatsAppFloat;
