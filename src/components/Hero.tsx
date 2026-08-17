import { site } from "@/config/site";
import portrait from "@/assets/placeholder-portrait.jpg";
import { PhotoFrame } from "./PhotoPlaceholder";
import { WhatsAppLink } from "./WhatsAppLink";
import { Reveal } from "./Reveal";

export function Hero() {
  return (
    <section id="inicio" className="pt-32 pb-20 md:pt-40 md:pb-28">
      <div className="mx-auto max-w-[1240px] px-6 md:px-10">
        <div className="grid items-center gap-12 lg:grid-cols-[55fr_45fr] lg:gap-16">
          <Reveal>
            <p className="eyebrow">Psicologia • Escuta • Cuidado</p>
            <h1 className="mt-7 text-[2.6rem] leading-[1.06] text-foreground sm:text-[3.4rem] lg:text-[4.1rem]">
              Um espaço de escuta, compreensão e cuidado.
            </h1>
            <p className="mt-7 max-w-xl text-[1.02rem] text-taupe">
              Acompanhamento psicológico construído com acolhimento, respeito à individualidade e um
              olhar atento para cada história.
            </p>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-5">
              <a
                href="#sobre"
                className="border border-foreground px-7 py-4 text-center text-[0.75rem] font-medium tracking-[0.14em] uppercase text-foreground transition-colors duration-300 hover:bg-foreground hover:text-primary-foreground"
              >
                Conheça meu trabalho
              </a>
              <WhatsAppLink
                location="hero"
                className="link-underline self-start text-[0.75rem] font-medium tracking-[0.14em] uppercase text-terracotta sm:self-auto"
              >
                Agendar atendimento →
              </WhatsAppLink>
            </div>

            <p className="mt-10 text-[0.78rem] tracking-[0.06em] text-taupe">
              Atendimento online • {site.city}
            </p>
          </Reveal>

          <Reveal delay={140} className="relative">
            <span
              aria-hidden="true"
              className="absolute -top-6 -left-6 hidden h-40 w-40 border border-rose/50 lg:block"
            />
            <PhotoFrame
              src={portrait}
              alt="Retrato vertical de Kelle Tavares, psicóloga — fotografia a ser substituída"
              width={912}
              height={1200}
              priority
              pending
              note="Retrato vertical de Kelle"
              className="relative aspect-[4/5] w-full lg:aspect-[3/4]"
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
