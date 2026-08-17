import { site } from "@/config/site";
import aboutImage from "@/assets/placeholder-about.jpg";
import { PhotoFrame } from "./PhotoPlaceholder";
import { Reveal } from "./Reveal";

export function About() {
  return (
    <section id="sobre" className="border-t border-border py-20 md:py-28">
      <div className="mx-auto max-w-[1240px] px-6 md:px-10">
        <div className="grid gap-12 lg:grid-cols-[42fr_58fr] lg:gap-20">
          <Reveal className="order-2 lg:order-1">
            <PhotoFrame
              src={aboutImage}
              alt="Fotografia de Kelle Tavares em ambiente de atendimento — fotografia a ser substituída"
              width={912}
              height={1104}
              pending
              note="Segunda fotografia de Kelle"
              className="aspect-[4/5] w-full"
            />
          </Reveal>

          <Reveal delay={100} className="order-1 lg:order-2">
            <p className="eyebrow">Sobre mim</p>
            <h2 className="mt-6 text-[2.1rem] text-foreground sm:text-[2.8rem]">
              Olá, eu sou a Kelle.
            </h2>
            <div className="mt-8 space-y-6 text-[1rem] text-taupe">
              <p>
                Sou psicóloga e construí minha trajetória profissional especialmente no
                acompanhamento de crianças neurodivergentes, atuando em contextos clínicos e
                domiciliares.
              </p>
              <p>
                Ao longo dessa caminhada, venho aprofundando meus estudos em comportamento,
                desenvolvimento e neuropsicologia.
              </p>
              <p>
                Atualmente, além da minha atuação com o público infantil, estou ampliando meu
                trabalho para a psicoterapia individual de adultos, oferecendo um espaço profissional
                de escuta e acompanhamento para diferentes momentos da vida.
              </p>
            </div>

            <div className="mt-10 border-t border-border pt-6">
              <p className="font-serif text-2xl text-foreground">{site.name}</p>
              <p className="label-caps mt-2">
                {site.professionalTitle} • CRP {site.crp}
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
