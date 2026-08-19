import { Link } from "@tanstack/react-router";
import { trackAdultServiceClick, trackChildServiceClick } from "@/lib/analytics";
import { Reveal } from "./Reveal";

export function Services() {
  return (
    <section id="atendimentos" className="border-t border-border py-20 md:py-28 bg-blush/35">
      <div className="mx-auto max-w-[1240px] px-6 md:px-10">
        <Reveal className="max-w-2xl">
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-terracotta" />
            <p className="eyebrow text-terracotta font-semibold">Atendimentos</p>
          </div>
          <h2 className="mt-5 text-[2.4rem] leading-tight text-foreground sm:text-[3.2rem]">
            Como posso te acompanhar?
          </h2>
          <p className="mt-4 text-[1.05rem] leading-relaxed text-taupe">
            Conheça as modalidades de cuidado e encontre o acompanhamento adequado ao seu momento.
          </p>
        </Reveal>

        {/* 2 Grandes Blocos Visuais Protagonistas */}
        <div className="mt-14 grid gap-8 md:grid-cols-2">
          {/* Card 1: Psicoterapia para Adultos */}
          <Reveal delay={80} className="p-8 md:p-10 bg-warm-white border border-border/80 shadow-sm flex flex-col justify-between transition-all duration-300 hover:border-terracotta/50 hover:-translate-y-1">
            <div>
              <span className="font-serif text-[2.2rem] text-terracotta font-light">
                01
              </span>
              <h3 className="mt-4 font-serif text-[1.85rem] text-foreground sm:text-[2.1rem]">
                Psicoterapia para Adultos
              </h3>
              <p className="mt-4 text-[1rem] leading-relaxed text-taupe">
                Um espaço de escuta e reflexão para compreender emoções, relações, experiências e diferentes momentos da vida.
              </p>
            </div>

            <div className="mt-10 pt-6 border-t border-border/60 flex items-center justify-between">
              <Link
                to="/adultos"
                onClick={() => trackAdultServiceClick("services_card")}
                className="inline-flex items-center gap-2 text-[0.8rem] font-bold tracking-[0.16em] uppercase text-foreground transition-colors duration-200 hover:text-terracotta"
              >
                Conhecer o atendimento <span>→</span>
              </Link>
            </div>
          </Reveal>

          {/* Card 2: Acompanhamento Infantil */}
          <Reveal delay={160} className="p-8 md:p-10 bg-warm-white border border-border/80 shadow-sm flex flex-col justify-between transition-all duration-300 hover:border-terracotta/50 hover:-translate-y-1">
            <div>
              <span className="font-serif text-[2.2rem] text-terracotta font-light">
                02
              </span>
              <h3 className="mt-4 font-serif text-[1.85rem] text-foreground sm:text-[2.1rem]">
                Acompanhamento Infantil
              </h3>
              <p className="mt-4 text-[1rem] leading-relaxed text-taupe">
                Um acompanhamento atento ao desenvolvimento, comportamento, contexto familiar e às necessidades individuais de cada criança.
              </p>
            </div>

            <div className="mt-10 pt-6 border-t border-border/60 flex items-center justify-between">
              <Link
                to="/infantil"
                onClick={() => trackChildServiceClick("services_card")}
                className="inline-flex items-center gap-2 text-[0.8rem] font-bold tracking-[0.16em] uppercase text-foreground transition-colors duration-200 hover:text-terracotta"
              >
                Conhecer o atendimento <span>→</span>
              </Link>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
