import { site } from "@/config/site";
import { WhatsAppLink } from "./WhatsAppLink";
import { Reveal } from "./Reveal";
import { ArrowRight, Sparkles } from "lucide-react";

export function Contact() {
  return (
    <section id="contato" className="bg-[#3A2E2B] py-28 text-[#F6F0EB] md:py-36 border-t border-[#3A2E2B]/20 relative overflow-hidden">
      {/* Halo de luz radial quente no fundo */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-[650px] rounded-full bg-gradient-to-tr from-[#BA9485]/20 via-[#A07365]/30 to-transparent blur-3xl pointer-events-none animate-glow-pulse" />

      <div className="mx-auto max-w-[940px] px-6 text-center md:px-10 relative z-10">
        <Reveal direction="scale">
          {/* Badge Live de Resposta Rápida */}
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 px-4 py-1.5 rounded-full mb-6 backdrop-blur-md">
            <span className="size-2 rounded-full bg-[#BA9485] animate-ping" />
            <span className="text-[0.68rem] font-bold tracking-[0.2em] uppercase text-[#F6F0EB]">
              Respondo em até 1h via WhatsApp
            </span>
          </div>

          <div className="flex items-center justify-center gap-3">
            <span className="h-[1px] w-6 bg-[#BA9485]" />
            <p className="text-[0.68rem] font-bold tracking-[0.24em] uppercase text-[#BA9485] flex items-center gap-1.5">
              <Sparkles className="size-3 text-[#BA9485]" />
              PRÓXIMO PASSO
            </p>
            <span className="h-[1px] w-6 bg-[#BA9485]" />
          </div>
          
          <h2 className="mt-6 font-serif text-[2.8rem] leading-[1.08] text-[#F6F0EB] sm:text-[3.6rem] lg:text-[4.2rem] tracking-tight">
            Vamos conversar?
          </h2>
          
          <p className="mx-auto mt-6 max-w-xl text-[1.02rem] leading-relaxed text-[#D9C8BC]">
            Se você deseja conhecer melhor meu trabalho ou saber mais sobre os atendimentos, entre em contato pelo WhatsApp. Este é o canal mais rápido e direto para alinharmos o seu primeiro encontro.
          </p>

          <div className="mt-12 flex justify-center">
            <WhatsAppLink
              location="cta_final"
              className="group relative overflow-hidden inline-flex items-center gap-3.5 bg-[#F6F0EB] text-[#3A2E2B] px-10 py-5 text-[0.82rem] font-bold tracking-[0.18em] uppercase transition-all duration-300 hover:bg-[#BA9485] hover:text-white shadow-2xl hover:shadow-2xl hover:-translate-y-1 active:scale-[0.98] rounded-xs animate-pulse-ring"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />
              <span>CONVERSAR PELO WHATSAPP</span>
              <ArrowRight className="size-4.5 transition-transform duration-300 group-hover:translate-x-1.5" />
            </WhatsAppLink>
          </div>

          <div className="mx-auto mt-20 max-w-xs border-t border-[#D9C8BC]/20 pt-8">
            <p className="font-serif text-[1.6rem] tracking-tight text-[#F6F0EB] font-medium">{site.name}</p>
            <p className="mt-2 text-[0.72rem] font-bold tracking-[0.28em] uppercase text-[#BA9485]">
              {site.professionalTitle} • CRP {site.crp}
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}


