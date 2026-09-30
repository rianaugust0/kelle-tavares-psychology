import { processSteps, site } from "@/config/site";
import { Reveal } from "./Reveal";
import { WhatsAppLink } from "./WhatsAppLink";
import { MessageCircle, Sparkles, Calendar, Check, ArrowRight } from "lucide-react";

export function TherapyProcess() {
  const icons = [MessageCircle, Sparkles, Calendar, Check];

  return (
    <section id="como-funciona" className="relative bg-[#F6F0EB] py-20 lg:py-28 overflow-hidden border-t border-[#D9C8BC]/40">
      
      {/* Glow de Iluminação Respiratório ao Fundo (Ambient Motion Glow) */}
      <div className="absolute top-1/2 left-1/2 w-[550px] h-[550px] sm:w-[750px] sm:h-[750px] rounded-full bg-gradient-to-tr from-[#A07365]/20 via-[#EFE6DF]/30 to-transparent blur-3xl pointer-events-none animate-glow-pulse" />

      <div className="relative z-10 mx-auto max-w-[1280px] px-6 sm:px-10 lg:px-12">
        
        {/* Cabeçalho Centralizado */}
        <Reveal direction="up" className="flex flex-col items-center text-center max-w-[720px] mx-auto mb-14 lg:mb-18">
          <div className="inline-flex items-center gap-3 mb-3">
            <span className="h-[1px] w-6 bg-[#BA9485]" />
            <span className="text-[0.68rem] font-bold tracking-[0.24em] uppercase text-[#BA9485]">
              COMO FUNCIONA O PROCESSO
            </span>
            <span className="h-[1px] w-6 bg-[#BA9485]" />
          </div>

          <h2 className="font-serif text-[2.4rem] font-semibold leading-[1.12] text-[#3A2E2B] sm:text-[3.2rem] lg:text-[3.5rem] tracking-tight">
            Começar a terapia pode ser mais simples do que parece.
          </h2>
        </Reveal>

        {/* Grade de 4 Cards Elegantes dos Passos com Linha de Fluxo Animada */}
        <div className="relative">
          
          {/* Linha Conectora de Fluxo Animada com Brilho Terracota no Desktop */}
          <div className="hidden lg:block absolute top-[52px] left-[8%] right-[8%] h-[3px] z-0 pointer-events-none">
            <div className="w-full h-full animate-line-flow opacity-60 rounded-full" />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#A07365]/40 to-transparent blur-xs animate-pulse" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
            {processSteps.map((step, i) => {
              const IconComp = icons[i] ?? MessageCircle;
              return (
                <Reveal
                  key={step.index}
                  direction="up"
                  delay={i * 120}
                  className="group relative flex flex-col justify-between bg-white/95 border border-[#D9C8BC]/80 rounded-2xl p-7 shadow-xs hover:shadow-xl hover:border-[#A07365]/60 hover:-translate-y-2.5 transition-all duration-500 ease-out"
                >
                  <div>
                    {/* Topo do Card: Número + Ícone Interativo */}
                    <div className="flex items-center justify-between mb-6">
                      <span className="font-serif text-[1.25rem] font-bold text-[#A07365] bg-[#EFE6DF] group-hover:bg-[#A07365] group-hover:text-white px-3 py-1 rounded-xl transition-colors duration-300">
                        {step.index}
                      </span>
                      <div className="flex size-11 items-center justify-center rounded-xl bg-[#F6F0EB] text-[#7E655B] group-hover:bg-[#3A2E2B] group-hover:text-white group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-xs">
                        <IconComp className="size-5" />
                      </div>
                    </div>

                    {/* Título do Passo */}
                    <h3 className="font-serif text-[1.48rem] font-semibold text-[#3A2E2B] leading-snug mb-3 group-hover:text-[#A07365] transition-colors duration-300">
                      {step.title}
                    </h3>

                    {/* Descrição */}
                    <p className="text-[0.88rem] leading-relaxed text-[#6E5F57] font-sans">
                      {step.text}
                    </p>
                  </div>

                  {/* Linha Inferior com Indicador Sutil e Seta Deslizante */}
                  <div className="pt-6 mt-6 border-t border-[#EFE6DF] flex items-center justify-between text-[0.68rem] font-bold tracking-[0.16em] uppercase text-[#8E7D76]">
                    <span className="group-hover:text-[#3A2E2B] transition-colors">Passo {i + 1} de 4</span>
                    <ArrowRight className="size-4 text-[#A07365] opacity-60 group-hover:opacity-100 group-hover:translate-x-2 transition-all duration-300" />
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>

        {/* Rodapé do Bloco com Botão de Ação e Garantia */}
        <Reveal direction="up" delay={400} className="mt-14 flex flex-col items-center justify-center gap-4 text-center">
          <WhatsAppLink
            location="therapy_process_footer"
            event="whatsapp_process_click"
            target="home"
            className="group relative overflow-hidden inline-flex items-center gap-3 bg-[#3A2E2B] border border-[#3A2E2B] px-8 py-4 text-[0.72rem] font-bold tracking-[0.16em] uppercase text-white transition-all duration-300 hover:bg-[#52423D] hover:shadow-lg rounded-xs active:scale-[0.98]"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />
            <Sparkles className="size-4 text-[#D8A798] transition-transform duration-300 group-hover:rotate-12" />
            <span>INICIAR MEU ACOMPANHAMENTO</span>
            <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
          </WhatsAppLink>

          <p className="text-[0.68rem] font-medium tracking-[0.18em] uppercase text-[#8E7D76] pt-1">
            🔒 Atendimento com sigilo profissional • CRP {site.crp}
          </p>
        </Reveal>

      </div>
    </section>
  );
}

