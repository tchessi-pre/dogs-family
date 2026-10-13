import { MessageCircle } from "lucide-react";

import { BRAND } from "@/lib/data";

const message = encodeURIComponent(
  "Bonjour, je souhaite avoir des informations sur vos services d'éducation canine."
);

export function WhatsAppButton() {
  const waNumber = process.env.WHATSAPP_NUMBER;
  const baseHref = waNumber ? `https://wa.me/${waNumber}` : BRAND.whatsappHref;

  return (
    <a
      href={`${baseHref}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contacter sur WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-0 hover:gap-3 px-3 hover:px-5 py-3 rounded-full bg-[#25D366] text-white shadow-lg hover:scale-105 transition-all duration-300 group overflow-hidden max-w-12.5 hover:max-w-75"
    >
      <MessageCircle className="w-6 h-6 shrink-0" />
      <span className="whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100 font-semibold">
        Discuter sur WhatsApp
      </span>
    </a>
  );
}
