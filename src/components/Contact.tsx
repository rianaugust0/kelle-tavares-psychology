import { site } from "@/config/site";
import { WhatsAppLink } from "./WhatsAppLink";
import { Reveal } from "./Reveal";

export function Contact() {
  return (
    <section id="contato" className="bg-coffee py-28 text-ivory md:py-36 border-t border-coffee/20">
      <div className="mx-auto max-w-[940px] px-6 text-center md:px-10">
        <Reveal>
          <div className="inline-flex items-center gap-3">
            <span className="h-px w-6 bg-rose/60" />
            <p className="eyebrow text-rose">Contato</p>
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
              className="inline-block bg-ivory text-coffee px-10 py-5 text-[0.82rem] font-semibold tracking-[0.18em] uppercase transition-all duration-300 hover:bg-rose hover:text-ivory shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            >
              Conversar pelo WhatsApp →
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
