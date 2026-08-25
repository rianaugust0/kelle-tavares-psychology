import { site } from "@/config/site";
import { Reveal } from "./Reveal";
import kellePhoto from "@/assets/kelle-4.png";
import { PhotoFrame } from "./PhotoPlaceholder";

export function Modality() {
  return (
    <section className="bg-warm-white py-16 md:py-24 border-t border-border/40">
      <div className="mx-auto max-w-[1240px] px-6 md:px-10">
        <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-20 items-center">
          <Reveal>
            <div className="flex items-center gap-3">
              <span className="h-px w-6 bg-terracotta/60" />
              <p className="eyebrow">Modalidades de Atendimento</p>
            </div>
            <h2 className="mt-5 text-[1.8rem] text-foreground sm:text-[2.2rem]">
              Como acontecem os atendimentos
            </h2>
            <p className="mt-4 max-w-lg text-[0.98rem] leading-relaxed text-taupe">
              O acompanhamento psicológico é planejado com responsabilidade, conforto e foco nas necessidades individuais de cada paciente.
            </p>
            
            <div className="mt-8 space-y-6 border-t border-border/60 pt-6">
              <div>
                <h3 className="label-caps font-semibold text-terracotta">
                  Atendimento presencial em Goiânia
                </h3>
                <p className="mt-2 text-[0.95rem] leading-relaxed text-foreground/90">
                  Atendimento psicológico presencial em Goiânia, mediante agendamento prévio.
                </p>
              </div>

              <div className="border-t border-border/40 pt-5">
                <h3 className="label-caps font-semibold text-terracotta">
                  Atendimento online
                </h3>
                <p className="mt-2 text-[0.95rem] leading-relaxed text-foreground/90">
                  Atendimento psicológico online com privacidade, acolhimento e flexibilidade, disponível para pacientes de diferentes regiões do Brasil.
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={100} className="relative">
            <PhotoFrame
              src={kellePhoto}
              alt="Kelle Tavares em ambiente de atendimento e acolhimento"
              width={600}
              height={700}
              pending={false}
              className="aspect-[4/3] sm:aspect-[16/11] lg:aspect-[4/3] w-full object-cover shadow-sm grayscale-[5%] hover:grayscale-0 transition-all duration-700"
            />
            <div className="absolute -bottom-3 -right-3 w-16 h-16 border-b border-r border-rose/30 pointer-events-none hidden sm:block" />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
