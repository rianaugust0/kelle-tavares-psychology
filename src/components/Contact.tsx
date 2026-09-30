import { site } from "@/config/site";
import { WhatsAppLink } from "./WhatsAppLink";
import { Reveal } from "./Reveal";
import { ArrowRight, Sparkles } from "lucide-react";

export function Contact() {
  return (
    <section id="contato" className="bg-coffee py-28 text-ivory md:py-36 border-t border-coffee/20 relative overflow-hidden">
      {/* Glow de fundo */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-[600px] rounded-full bg-radial from-[#BA9485]/20 to-transparent blur-3xl pointer-events-none animate-glow-pulse" />

      <div className="mx-auto max-w-[940px] px-6 text-center md:px-10 relative z-10">
        <Reveal direction="scale">
          <div className="inline-flex items-center gap-3">
            <span className="h-px w-6 bg-rose/60" />
            <p className="eyebrow text-rose flex items-center gap-1.5">
              <Sparkles className="size-3 text-rose" />
              Contato
            </p>
            <span className="h-px w-6 bg-rose/60" />
          </div>
          
          <h2 className="mt-6 font-serif text-[2.8rem] leading-[1.08] text-ivory sm:text-[3.6rem] lg:text-[4.2rem]">
            Vamos conversar?
          </h2>
          
          <p className="mx-auto mt-6 max-w-xl text-[1.05rem] leading-relaxed text-ivory/80">
            Se você deseja conhecer melhor meu trabalho ou saber mais sobre os atendimentos, entre em contato pelo WhatsApp. Este é o canal mais rápido e direto para conversarmos sobre o início do acompanhamento.
          </p>

          <div className="mt-12 flex justify-center">
            <WhatsAppLink
              location="cta_final"
              className="group relative overflow-hidden inline-flex items-center gap-3 bg-ivory text-coffee px-10 py-5 text-[0.82rem] font-semibold tracking-[0.18em] uppercase transition-all duration-300 hover:bg-rose hover:text-ivory shadow-lg hover:shadow-2xl hover:-translate-y-1 active:scale-[0.98] rounded-xs"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />
              <span>Conversar pelo WhatsApp</span>
              <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1.5" />
            </WhatsAppLink>
          </div>

          <div className="mx-auto mt-20 max-w-xs border-t border-ivory/15 pt-8">
            <p className="font-serif text-[1.6rem] tracking-tight text-ivory">{site.name}</p>
            <p className="mt-2 text-[0.72rem] font-medium tracking-[0.28em] uppercase text-rose">
              {site.professionalTitle} • CRP {site.crp}
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

