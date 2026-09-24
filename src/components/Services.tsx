import { Link } from "@tanstack/react-router";
import { trackAdultServiceClick, trackChildServiceClick } from "@/lib/analytics";
import { Reveal } from "./Reveal";
import adultImage from "@/assets/kelle-2.png";
import childImage from "@/assets/kelle-3.png";

export function Services() {
  return (
    <section id="atendimentos" className="bg-ivory py-24 md:py-36">
      <div className="mx-auto max-w-[1320px] px-6 md:px-10">
        <Reveal className="grid gap-6 lg:grid-cols-[32fr_68fr] lg:items-end">
          <p className="eyebrow">Atendimentos</p>
          <h2 className="text-[2.4rem] leading-[1.13] text-foreground sm:text-[3.5rem] lg:text-[4.2rem]">Duas formas de cuidado. <em className="font-normal text-terracotta">A mesma escuta.</em></h2>
        </Reveal>

        <div className="mt-16 space-y-24 lg:mt-24 lg:space-y-32">
          <Reveal>
            <article className="grid items-center gap-8 lg:grid-cols-[58fr_42fr] lg:gap-0">
              <div className="image-reveal aspect-[4/3] overflow-hidden"><img src={adultImage} alt="Kelle Tavares em momento de leitura" width={640} height={480} loading="lazy" className="h-full w-full object-cover transition-transform duration-[1200ms] hover:scale-[1.025]" /></div>
              <div className="relative bg-warm-white px-7 py-10 lg:-ml-16 lg:px-14 lg:py-16">
                <p className="label-caps text-terracotta">01 — Adultos</p>
                <h3 className="mt-5 text-[2rem] text-foreground sm:text-[2.7rem]">Psicoterapia para adultos</h3>
                <p className="mt-6 text-[0.98rem] leading-relaxed text-taupe">Um espaço de escuta e reflexão para compreender emoções, relações, experiências e diferentes momentos da vida.</p>
                <Link to="/adultos" onClick={() => trackAdultServiceClick("services_editorial")} className="mt-8 inline-flex items-center gap-4 text-[0.73rem] font-semibold tracking-[0.16em] uppercase text-foreground hover:text-terracotta">Conhecer o atendimento <span className="editorial-arrow">→</span></Link>
              </div>
            </article>
          </Reveal>
          <Reveal>
            <article className="grid items-center gap-8 lg:grid-cols-[42fr_58fr] lg:gap-0">
              <div className="relative z-10 order-2 bg-blush px-7 py-10 lg:order-1 lg:-mr-16 lg:px-14 lg:py-16">
                <p className="label-caps text-terracotta">02 — Infância</p>
                <h3 className="mt-5 text-[2rem] text-foreground sm:text-[2.7rem]">Acompanhamento infantil</h3>
                <p className="mt-6 text-[0.98rem] leading-relaxed text-taupe">Um acompanhamento atento ao desenvolvimento, comportamento, contexto familiar e às necessidades individuais de cada criança.</p>
                <Link to="/infantil" onClick={() => trackChildServiceClick("services_editorial")} className="mt-8 inline-flex items-center gap-4 text-[0.73rem] font-semibold tracking-[0.16em] uppercase text-foreground hover:text-terracotta">Conhecer o atendimento <span className="editorial-arrow">→</span></Link>
              </div>
              <div className="image-reveal order-1 aspect-[4/3] overflow-hidden lg:order-2"><img src={childImage} alt="Kelle Tavares estudando em ambiente profissional" width={640} height={480} loading="lazy" className="h-full w-full object-cover transition-transform duration-[1200ms] hover:scale-[1.025]" /></div>
            </article>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
