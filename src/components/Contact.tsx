import { site } from "@/config/site";
import { WhatsAppLink } from "./WhatsAppLink";
import { InterestForm } from "./InterestForm";
import { Reveal } from "./Reveal";

export function Contact() {
  return (
    <section id="contato" className="bg-coffee py-24 text-ivory md:py-32">
      <div className="mx-auto max-w-[1240px] px-6 md:px-10">
        <div className="grid gap-16 lg:grid-cols-[52fr_48fr] lg:gap-24">
          <Reveal>
            <p className="eyebrow text-rose">Contato</p>
            <h2 className="mt-6 text-[2.4rem] text-ivory sm:text-[3.2rem]">Vamos conversar?</h2>
            <p className="mt-7 max-w-lg text-[1rem] text-ivory/75">
              Se você deseja conhecer melhor meu trabalho ou saber mais sobre os atendimentos, entre
              em contato.
            </p>

            <WhatsAppLink
              location="cta_final"
              className="mt-10 inline-block border border-ivory/50 px-7 py-4 text-[0.75rem] font-medium tracking-[0.14em] uppercase text-ivory transition-colors duration-300 hover:bg-ivory hover:text-coffee"
            >
              Conversar pelo WhatsApp →
            </WhatsAppLink>

            <div className="mt-14 border-t border-ivory/20 pt-6">
              <p className="font-serif text-[1.6rem] text-ivory">{site.name}</p>
              <p className="mt-2 text-[0.7rem] font-medium tracking-[0.28em] uppercase text-ivory/60">
                {site.professionalTitle} • CRP {site.crp}
              </p>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <InterestForm />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
