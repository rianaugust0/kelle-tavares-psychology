import React, { useState, useEffect } from "react";
import { X, MessageCircle, Sparkles } from "lucide-react";
import { WhatsAppLink } from "./WhatsAppLink";
import { trackWhatsAppClick } from "@/lib/analytics";

export const DelicateLuxuryNotification: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    // Aparece delicadamente após 4.5 segundos da entrada no site
    const timer = setTimeout(() => {
      if (!isDismissed) {
        setIsVisible(true);
      }
    }, 4500);

    return () => clearTimeout(timer);
  }, [isDismissed]);

  if (isDismissed || !isVisible) return null;

  return (
    <div className="fixed bottom-20 left-4 sm:bottom-6 sm:left-6 z-50 animate-in fade-in slide-in-from-bottom-6 duration-700 max-w-[300px] sm:max-w-[330px]">
      <div className="relative group bg-white/95 backdrop-blur-xl border border-[#D9C8BC]/80 p-3.5 sm:p-4 rounded-2xl shadow-2xl transition-all duration-300 hover:shadow-2xl hover:border-[#BA9485]">
        
        {/* Botão de Fechar Delicado */}
        <button
          onClick={() => setIsDismissed(true)}
          className="absolute -top-2 -right-2 bg-[#F6F0EB] text-[#7E655B] hover:text-[#3A2E2B] hover:bg-[#EFE6DF] p-1 rounded-full border border-[#D9C8BC] transition-colors shadow-xs"
          aria-label="Fechar notificação"
        >
          <X className="size-3.5" />
        </button>

        {/* Link Interativo de WhatsApp */}
        <WhatsAppLink
          location="delicate_corner_toast"
          event="whatsapp_corner_notification_click"
          onClick={() => trackWhatsAppClick("corner_notification")}
          className="flex items-start gap-3 text-left"
        >
          {/* Avatar / Status Badge */}
          <div className="relative shrink-0 mt-0.5">
            <img
              src="/dra-kelle-avatar.jpg"
              alt="Dra. Kelle Tavares"
              className="size-10 rounded-full object-cover border border-[#D9C8BC] shadow-xs"
              onError={(e) => {
                // Fallback caso imagem avatar não exista
                e.currentTarget.style.display = "none";
              }}
            />
            <span className="absolute bottom-0 right-0 size-2.5 bg-emerald-500 rounded-full border-2 border-white animate-pulse" />
          </div>

          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-1.5 mb-0.5">
              <span className="text-[0.62rem] font-bold tracking-[0.18em] uppercase text-[#7E655B]">
                DRA. KELLE TAVARES
              </span>
              <span className="inline-block size-1 bg-[#BA9485] rounded-full" />
              <span className="text-[0.6rem] font-medium text-emerald-700 bg-emerald-50 px-1.5 py-0.2 rounded-full border border-emerald-200">
                ONLINE
              </span>
            </div>

            <p className="text-[0.78rem] font-medium text-[#3A2E2B] leading-snug">
              Atendimento presencial em Goiânia & consultas online.
            </p>

            <div className="mt-2 inline-flex items-center gap-1.5 text-[0.68rem] font-semibold text-[#A07365] group-hover:text-[#3A2E2B] transition-colors">
              <MessageCircle className="size-3.5 text-emerald-600 shrink-0" />
              <span>Consultar horários no WhatsApp</span>
            </div>
          </div>
        </WhatsAppLink>
      </div>
    </div>
  );
};
