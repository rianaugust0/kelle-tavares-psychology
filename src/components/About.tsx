import { site } from "@/config/site";
import aboutImage from "@/assets/kelle-2.png";
import { PhotoFrame } from "./PhotoPlaceholder";
import { Reveal } from "./Reveal";

export function About() {
  return (
    <section id="sobre" className="border-t border-border py-20 md:py-28">
      <div className="mx-auto max-w-[1240px] px-6 md:px-10">
        <div className="grid gap-12 lg:grid-cols-[42fr_58fr] lg:gap-20">
          <Reveal className="order-2 lg:order-1 relative">
            <PhotoFrame
              src={aboutImage}
              alt="Fotografia de Kelle Tavares em seu ambiente de atendimento clínico profissional"
              width={912}
              height={1104}
              pending={false}
              className="aspect-[4/5] w-full object-cover shadow-sm transition-all duration-700"
            />
            {/* Minimal design line highlight */}
            <div className="absolute top-4 -left-4 w-12 h-px bg-terracotta/40 pointer-events-none hidden md:block" />
            <div className="absolute -top-4 left-4 w-px h-12 bg-terracotta/40 pointer-events-none hidden md:block" />
          </Reveal>

          <Reveal delay={100} className="order-1 lg:order-2 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3">
                <span className="h-px w-6 bg-terracotta/60" />
                <p className="eyebrow">Sobre mim</p>
              </div>
              <h2 className="mt-6 text-[2.1rem] leading-tight text-foreground sm:text-[2.8rem]">
                Olá, eu sou a Kelle.
              </h2>
              <div className="mt-8 space-y-6 text-[1rem] leading-relaxed text-taupe">
                <p>
                  Sou psicóloga em Goiânia e realizo atendimento psicológico online.
                  Construí minha trajetória profissional especialmente no acompanhamento
                  de crianças neurodivergentes, atuando em contextos clínicos e domiciliares.
                </p>
                <p>
                  Ao profissionalizar minha atuação e aprofundar meus estudos em comportamento,
                  desenvolvimento e neuropsicologia, busco aplicar abordagens baseadas em evidências
                  para promover autonomia, acolhimento e qualidade de vida.
                </p>
                <p>
                  Minha atuação clínica contempla também a psicoterapia individual para adultos,
                  mantendo como base uma escuta cuidadosa, responsável e construída a partir
                  da singularidade de cada pessoa.
                </p>
              </div>
            </div>

            <div className="mt-12 pt-8 border-t border-border">
              <p className="font-serif text-[1.6rem] leading-none text-foreground">{site.name}</p>
              <p className="label-caps mt-3">
                {site.professionalTitle} • CRP {site.crp}
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
