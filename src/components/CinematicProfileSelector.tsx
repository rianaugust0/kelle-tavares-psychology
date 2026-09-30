import { Reveal } from "./Reveal";
import { WhatsAppLink } from "./WhatsAppLink";
import { TranslucentLuxuryMarquee } from "./TranslucentLuxuryMarquee";
import { TranslucentSilkWaves } from "./TranslucentSilkWaves";
import { User, Baby, ArrowRight, Sparkles } from "lucide-react";
import { trackAdultServiceClick, trackChildServiceClick } from "@/lib/analytics";

export function CinematicProfileSelector() {
  return (
    <>
      {/* 🎞️ Marquee Ticker Editorial Infinito de Vidro Translúcido */}
      <TranslucentLuxuryMarquee />

      <section className="relative bg-[#F6F0EB] py-12 lg:py-16 overflow-hidden border-t border-[#D9C8BC]/40">
        {/* 🎐 Ondas de Luz Translúcida Fluida no Fundo */}
        <TranslucentSilkWaves />

        <div className="mx-auto max-w-[1280px] px-6 sm:px-10 lg:px-12 relative z-10">
          
          {/* Chamada Cinematográfica */}
          <Reveal direction="up" className="flex flex-col items-center text-center max-w-[680px] mx-auto mb-8 sm:mb-10">
            <div className="inline-flex items-center gap-2.5 bg-white/80 border border-[#D9C8BC] px-3.5 py-1 rounded-full text-[0.65rem] font-bold tracking-[0.2em] uppercase text-[#7E655B] mb-3 shadow-2xs backdrop-blur-xs">
              <Sparkles className="size-3 text-[#A07365]" />
              QUAL É O SEU MOMENTO ATUAL?
            </div>
            <h2 className="font-serif text-[1.8rem] sm:text-[2.2rem] lg:text-[2.5rem] font-semibold text-[#3A2E2B] leading-tight">
              Selecione o atendimento desejado para iniciar
            </h2>
            <p className="text-[0.85rem] text-[#6E5F57] mt-2 font-sans">
              Toque abaixo para tirar dúvidas diretamente no WhatsApp sobre a sua necessidade:
            </p>
          </Reveal>

          {/* Cards de Seleção Interativos com Efeito de Cinema */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 max-w-[960px] mx-auto">
            
            {/* Card 1: Adultos */}
            <Reveal direction="left" delay={100}>
              <WhatsAppLink
                location="cinematic_selector_adultos"
                event="whatsapp_selector_adult_click"
                target="adultos"
                onClick={() => trackAdultServiceClick("home_cinematic_selector")}
                className="group relative overflow-hidden flex flex-col justify-between glassmorphism-card border border-[#D9C8BC] p-6 sm:p-8 rounded-2xl shadow-sm hover:shadow-2xl hover:border-[#BA9485] hover:-translate-y-1.5 transition-all duration-500 text-left block w-full"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#BA9485]/20 to-transparent rounded-bl-full pointer-events-none transition-all duration-500 group-hover:scale-125" />
                
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex size-12 items-center justify-center rounded-2xl bg-[#3A2E2B] text-white shadow-md group-hover:scale-110 transition-transform duration-300">
                      <User className="size-6" />
                    </div>
                    <span className="text-[0.62rem] font-bold tracking-[0.2em] uppercase bg-[#EFE6DF] text-[#7E655B] px-3 py-1 rounded-full border border-[#D9C8BC]">
                      SELEÇÃO RÁPIDA
                    </span>
                  </div>

                  <h3 className="font-serif text-[1.6rem] sm:text-[1.8rem] font-semibold text-[#3A2E2B] leading-snug group-hover:text-[#A07365] transition-colors">
                    Psicoterapia para Adultos
                  </h3>
                  <p className="text-[0.85rem] leading-relaxed text-[#6E5F57] mt-2 font-sans">
                    Espaço de escuta, autoconhecimento, regulação emocional e suporte para angústias e ansiedade.
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#EFE6DF] flex items-center justify-between text-[0.72rem] font-bold tracking-[0.16em] uppercase text-[#3A2E2B] group-hover:text-[#A07365]">
                  <span>CONVERSAR SOBRE ADULTOS</span>
                  <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-2 text-[#BA9485]" />
                </div>
              </WhatsAppLink>
            </Reveal>

            {/* Card 2: Acompanhamento Infantil */}
            <Reveal direction="right" delay={180}>
              <WhatsAppLink
                location="cinematic_selector_infantil"
                event="whatsapp_selector_child_click"
                target="infantil"
                onClick={() => trackChildServiceClick("home_cinematic_selector")}
                className="group relative overflow-hidden flex flex-col justify-between glassmorphism-card border border-[#D9C8BC] p-6 sm:p-8 rounded-2xl shadow-sm hover:shadow-2xl hover:border-[#BA9485] hover:-translate-y-1.5 transition-all duration-500 text-left block w-full"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#A07365]/20 to-transparent rounded-bl-full pointer-events-none transition-all duration-500 group-hover:scale-125" />
                
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex size-12 items-center justify-center rounded-2xl bg-[#7E655B] text-white shadow-md group-hover:scale-110 transition-transform duration-300">
                      <Baby className="size-6" />
                    </div>
                    <span className="text-[0.62rem] font-bold tracking-[0.2em] uppercase bg-[#EFE6DF] text-[#7E655B] px-3 py-1 rounded-full border border-[#D9C8BC]">
                      SELEÇÃO RÁPIDA
                    </span>
                  </div>

                  <h3 className="font-serif text-[1.6rem] sm:text-[1.8rem] font-semibold text-[#3A2E2B] leading-snug group-hover:text-[#A07365] transition-colors">
                    Acompanhamento Infantil
                  </h3>
                  <p className="text-[0.85rem] leading-relaxed text-[#6E5F57] mt-2 font-sans">
                    Desenvolvimento infantil, ABA, acompanhamento para crianças neurodivergentes e suporte familiar.
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#EFE6DF] flex items-center justify-between text-[0.72rem] font-bold tracking-[0.16em] uppercase text-[#3A2E2B] group-hover:text-[#A07365]">
                  <span>CONVERSAR SOBRE INFANTIL</span>
                  <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-2 text-[#BA9485]" />
                </div>
              </WhatsAppLink>
            </Reveal>

          </div>
        </div>
      </section>
    </>
  );
}
