import { useEffect, useState } from "react";
import { WhatsAppLink } from "./WhatsAppLink";
import { MessageCircle, Sparkles } from "lucide-react";
import { site } from "@/config/site";

export function StickyMobileBar() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Exibe a barra apenas após o usuário rolar 350px (passar do topo do Hero)
      if (window.scrollY > 350) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-3 inset-x-3 lg:hidden z-50 animate-in slide-in-from-bottom-5 fade-in duration-300 pointer-events-auto">
      <div className="bg-white/95 border border-[#D9C8BC]/90 text-[#3A2E2B] p-2.5 sm:p-3 rounded-2xl shadow-xl flex items-center justify-between gap-3 backdrop-blur-xl">
        
        {/* Informação de Alerta de Atendimento Live */}
        <div className="flex items-center gap-2.5 min-w-0 pl-1">
          <div className="relative flex size-2.5 shrink-0">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex size-2.5 rounded-full bg-emerald-500" />
          </div>
          <div className="truncate">
            <p className="text-[0.72rem] font-bold text-[#3A2E2B] tracking-tight truncate leading-tight flex items-center gap-1.5 font-serif">
              <span>{site.name}</span>
            </p>
            <p className="text-[0.6rem] text-[#7E655B] font-medium tracking-wider uppercase truncate mt-0.5 font-sans">
              AGENDA ABERTA • GOIÂNIA & ONLINE
            </p>
          </div>
        </div>

        {/* Botão de Alta Conversão Verde WhatsApp com Pulse Ring */}
        <WhatsAppLink
          location="sticky_mobile_bar"
          event="whatsapp_sticky_mobile_click"
          target="home"
          className="group relative overflow-hidden shrink-0 inline-flex items-center gap-1.5 bg-[#25D366] hover:bg-[#1eb857] text-white px-3.5 py-2 text-[0.68rem] font-bold tracking-[0.14em] uppercase rounded-xl transition-all duration-300 shadow-md active:scale-[0.95]"
        >
          <MessageCircle className="size-3.5 text-white fill-white/20" />
          <span>AGENDAR</span>
        </WhatsAppLink>

      </div>
    </div>
  );

}
