import { site } from "@/config/site";
import portrait from "@/assets/kelle-1.png";
import { PhotoFrame } from "./PhotoPlaceholder";
import { WhatsAppLink } from "./WhatsAppLink";
import { Reveal } from "./Reveal";
import { Link } from "@tanstack/react-router";

export function Hero() {
  return (
    <section id="inicio" className="relative min-h-[92svh] overflow-hidden bg-ivory pt-24 lg:min-h-screen lg:pt-0">
      <div className="mx-auto grid min-h-[calc(92svh-6rem)] max-w-[1440px] lg:min-h-screen lg:grid-cols-[58fr_42fr]">
        <div className="relative z-10 flex items-center px-6 py-16 md:px-12 lg:px-20 xl:px-24">
          <Reveal className="max-w-[780px]">
            <p className="eyebrow border-b border-terracotta/35 pb-3">Psicologia • escuta • cuidado</p>
            <h1 className="mt-8 text-[2.75rem] leading-[1.08] text-foreground sm:text-[4rem] lg:text-[4.8rem] xl:text-[5.4rem]">
              Psicoterapia para quem quer compreender melhor o que acontece <em className="font-normal text-terracotta">aí dentro.</em>
            </h1>
            <p className="mt-8 max-w-lg text-[1rem] leading-relaxed text-taupe sm:text-[1.08rem]">
              Um espaço profissional de escuta para adultos e crianças, construído com cuidado, responsabilidade e respeito a cada história.
            </p>
            <div className="mt-10 flex flex-col items-start gap-5 sm:flex-row sm:items-center">
              <a href="#atendimentos" className="inline-flex items-center gap-4 bg-foreground px-7 py-4 text-[0.73rem] font-semibold tracking-[0.16em] uppercase text-primary-foreground transition-colors hover:bg-terracotta">
                Conhecer os atendimentos <span className="editorial-arrow">→</span>
              </a>
              <WhatsAppLink location="home_hero" event="whatsapp_home_hero_click" target="home" className="link-underline text-[0.73rem] font-semibold tracking-[0.15em] uppercase text-foreground">
                Conversar com Kelle
              </WhatsAppLink>
            </div>
            <p className="mt-12 text-[0.7rem] font-medium tracking-[0.17em] uppercase text-taupe">
              Psicóloga em Goiânia • Atendimento online • CRP {site.crp}
            </p>
          </Reveal>
        </div>

        <Reveal delay={100} className="relative min-h-[58svh] lg:min-h-screen">
          <div className="image-reveal absolute inset-0">
            <PhotoFrame src={portrait} alt="Retrato real de Kelle Tavares, psicóloga" width={765} height={1024} priority pending={false} className="h-full w-full" />
          </div>
          <p className="absolute right-6 bottom-8 z-10 border-t border-warm-white/60 pt-3 text-[0.65rem] font-medium tracking-[0.22em] uppercase text-warm-white lg:right-10 lg:bottom-12">
            escuta, cuidado e presença.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
