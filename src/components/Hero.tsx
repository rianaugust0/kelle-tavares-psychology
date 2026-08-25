import { site } from "@/config/site";
import portrait from "@/assets/kelle-1.png";
import { PhotoFrame } from "./PhotoPlaceholder";
import { WhatsAppLink } from "./WhatsAppLink";
import { Reveal } from "./Reveal";

export function Hero() {
  return (
    <section id="inicio" className="pt-32 pb-20 md:pt-40 md:pb-28">
      <div className="mx-auto max-w-[1240px] px-6 md:px-10">
        <div className="grid items-center gap-10 lg:grid-cols-[55fr_45fr] lg:gap-16">
          <Reveal>
            <div className="flex items-center gap-3">
              <span className="h-px w-6 bg-terracotta/60" />
              <p className="eyebrow">Psicologia • Escuta • Cuidado</p>
            </div>
            
            <h1 className="mt-6 text-[2.2rem] font-serif leading-[1.12] text-foreground sm:text-[2.8rem] lg:text-[3.3rem]">
              Psicóloga em Goiânia e atendimento psicológico online
            </h1>

            <p className="mt-5 font-serif text-[1.4rem] italic leading-snug text-terracotta/95 sm:text-[1.65rem] lg:text-[1.85rem]">
              Um espaço de escuta, compreensão e cuidado.
            </p>
            
            <p className="mt-5 max-w-xl text-[1.02rem] font-medium leading-relaxed text-foreground/90">
              Psicoterapia para adultos e acompanhamento psicológico infantil, com atendimento online.
            </p>

            <p className="mt-3 max-w-xl text-[0.98rem] leading-relaxed text-taupe">
              Um acompanhamento construído com acolhimento, responsabilidade e respeito à individualidade de cada pessoa.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-6">
              <WhatsAppLink
                location="home_hero"
                event="whatsapp_home_hero_click"
                target="home"
                className="bg-foreground text-primary-foreground px-7 py-3.5 text-center text-[0.75rem] font-medium tracking-[0.14em] uppercase transition-all duration-300 hover:bg-terracotta hover:text-white shadow-sm"
              >
                Quero saber sobre atendimento
              </WhatsAppLink>
              <a
                href="#sobre"
                className="border border-foreground/70 px-7 py-3.5 text-center text-[0.75rem] font-medium tracking-[0.14em] uppercase text-foreground transition-all duration-300 hover:bg-foreground hover:text-primary-foreground"
              >
                Conheça meu trabalho
              </a>
            </div>

            <div className="mt-12 pt-8 border-t border-border/60 max-w-sm">
              <p className="text-[0.78rem] tracking-[0.08em] text-taupe uppercase font-medium">
                Atendimento online e presencial em Goiânia • CRP {site.crp}
              </p>
            </div>
          </Reveal>

          <Reveal delay={140} className="relative">
            <PhotoFrame
              src={portrait}
              alt="Retrato real de Kelle Tavares, psicóloga"
              width={912}
              height={1200}
              priority
              pending={false}
              className="relative aspect-[4/5] w-full object-cover shadow-sm grayscale-[15%] hover:grayscale-0 transition-all duration-700"
            />
            {/* Subtle editorial line design detail */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border-r border-b border-rose/30 pointer-events-none hidden md:block" />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
