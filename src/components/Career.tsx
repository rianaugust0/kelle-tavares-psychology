import { Link } from "@tanstack/react-router";
import { Reveal } from "./Reveal";
import { AnimatedCounter } from "./AnimatedCounter";
import kelle3 from "@/assets/kelle-3.png";
import { PhotoFrame } from "./PhotoPlaceholder";

export function Career() {
  return (
    <section id="trajetoria" className="border-t border-border py-20 md:py-28 bg-ivory overflow-hidden relative">
      <div className="mx-auto max-w-[1240px] px-6 md:px-10">
        <div className="grid gap-12 lg:grid-cols-[40fr_60fr] lg:gap-16 items-center">
          {/* Foto espontânea de Kelle com Zoom Hover */}
          <Reveal direction="left" className="relative group">
            <div className="p-3 bg-warm-white border border-border/80 shadow-md transition-all duration-500 group-hover:shadow-xl">
              <PhotoFrame
                src={kelle3}
                alt="Fotografia de Kelle Tavares, psicóloga"
                width={600}
                height={800}
                pending={false}
                className="aspect-[3/4] w-full max-w-md mx-auto lg:max-w-none object-cover grayscale-[4%] transition-transform duration-700 group-hover:scale-[1.03]"
              />
            </div>
            <div className="absolute -bottom-3 -right-3 w-16 h-16 border-b-2 border-r-2 border-terracotta/40 pointer-events-none hidden md:block transition-all duration-500 group-hover:translate-x-1 group-hover:translate-y-1" />
          </Reveal>

          {/* Autoridade Concisa com Contagem Animada */}
          <Reveal direction="right" delay={120} className="space-y-8">
            <div>
              <div className="flex items-center gap-3">
                <span className="h-px w-8 bg-terracotta" />
                <p className="eyebrow text-terracotta font-semibold">Formação e experiência</p>
              </div>
              <h2 className="mt-5 text-[2.4rem] leading-tight text-foreground sm:text-[3.2rem]">
                Formação e experiência que sustentam o cuidado.
              </h2>
            </div>

            <div className="p-8 bg-warm-white border border-border/80 shadow-xs space-y-6 rounded-2xl transition-all duration-300 hover:shadow-md">
              <div className="flex items-baseline gap-4 border-b border-border/80 pb-6">
                <span className="font-serif text-[4.2rem] leading-none text-terracotta font-light">
                  <AnimatedCounter end={3} prefix="+" />
                </span>
                <div>
                  <p className="font-serif text-[1.5rem] text-foreground leading-tight font-medium">
                    anos de atuação profissional
                  </p>
                  <p className="text-[0.88rem] text-taupe mt-1">
                    Prática clínica e acompanhamento estruturado em diferentes contextos.
                  </p>
                </div>
              </div>

              <div className="space-y-3 pt-1 text-[1rem] leading-relaxed">
                <div>
                  <p className="font-serif text-[1.2rem] text-foreground font-medium">Psicóloga graduada</p>
                  <p className="text-[0.85rem] text-taupe">Faculdade Unida de Campinas (FacUnicamps)</p>
                </div>

                <div className="pt-2">
                  <p className="font-serif text-[1.2rem] text-foreground font-medium">Formação continuada e pós-graduação</p>
                  <p className="text-[0.85rem] text-taupe">Análise do Comportamento Aplicada (ABA) • Neuropsicologia • Desenvolvimento Infantil</p>
                </div>
              </div>

              <div className="pt-4 border-t border-border/60">
                <Link
                  to="/sobre"
                  className="group inline-flex items-center gap-2 text-[0.78rem] font-bold tracking-[0.16em] uppercase text-terracotta transition-colors duration-200 hover:text-foreground"
                >
                  <span>Conhecer minha trajetória detalhada</span>
                  <span className="transition-transform duration-300 group-hover:translate-x-1.5">→</span>
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

