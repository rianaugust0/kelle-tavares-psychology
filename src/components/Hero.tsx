import portrait from "@/assets/kelle-1.png";
import { site } from "@/config/site";
import { WhatsAppLink } from "./WhatsAppLink";
import { Reveal } from "./Reveal";

export function Hero() {
  return (
    <section id="inicio" className="relative min-h-[90vh] bg-[#F6F0EB] pt-28 pb-16 lg:pt-32 lg:pb-24 overflow-hidden flex items-center">
      <div className="mx-auto w-full max-w-[1280px] px-6 md:px-10 relative z-10">
        <div className="grid items-center gap-12 lg:grid-cols-[54fr_46fr] lg:gap-14 xl:gap-16">
          
          {/* Coluna da Esquerda: Conteúdo de Texto */}
          <Reveal direction="up" className="flex flex-col items-start space-y-5">
            
            {/* Tagline superior */}
            <div className="flex items-center gap-3">
              <span className="h-[1px] w-6 bg-[#BA9485]" />
              <span className="text-[0.65rem] font-medium tracking-[0.22em] uppercase text-[#BA9485]">
                PSICOLOGIA • ESCUTA • CUIDADO
              </span>
            </div>

            {/* Título Principal H1 */}
            <h1 className="font-serif text-[2.5rem] font-normal leading-[1.08] text-[#3A2E2B] sm:text-[3rem] lg:text-[3.35rem] tracking-tight">
              Psicóloga em Goiânia <span className="font-light text-[#BA9485]">|</span>
              <br />
              Atendimento online e
              <br />
              presencial
            </h1>

            {/* Subtítulo em itálico suave */}
            <p className="font-serif italic text-[1.15rem] sm:text-[1.25rem] leading-[1.4] text-[#7E6E66] font-normal max-w-[460px]">
              Cuidar da sua saúde emocional pode ser mais leve do que você imagina.
            </p>

            {/* Parágrafo de descrição */}
            <p className="max-w-[480px] text-[0.88rem] leading-[1.65] text-[#6E5F57] font-normal">
              Um espaço seguro, acolhedor e profissional para você se compreender, organizar seus sentimentos e viver com mais equilíbrio.
            </p>

            {/* Botões de Ação */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full sm:w-auto">
              <WhatsAppLink
                location="home_hero_primary"
                event="whatsapp_home_hero_click"
                target="home"
                className="inline-flex items-center justify-center bg-[#382C26] border border-[#382C26] px-6 py-3.5 text-[0.68rem] font-semibold tracking-[0.16em] uppercase text-white transition-all duration-300 hover:bg-[#524138]"
              >
                AGENDE SEU ATENDIMENTO
              </WhatsAppLink>

              <a
                href="#sobre"
                className="inline-flex items-center justify-center bg-transparent border border-[#382C26] px-6 py-3.5 text-[0.68rem] font-semibold tracking-[0.16em] uppercase text-[#382C26] transition-all duration-300 hover:bg-[#382C26] hover:text-white"
              >
                CONHEÇA MEU TRABALHO
              </a>
            </div>

            {/* Rodapé da Seção (CRP / Cidade) */}
            <div className="pt-3 text-[0.65rem] font-normal tracking-[0.18em] uppercase text-[#8E7D76]">
              <span>ATENDIMENTO EM GOIÂNIA E ONLINE · CRP {site.crp}</span>
            </div>
          </Reveal>

          {/* Coluna da Direita: Moldura Fotográfica */}
          <Reveal direction="scale" delay={140} className="relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[390px] sm:max-w-[420px] lg:max-w-[440px] mr-2 mb-2">
              {/* Moldura Externa Deslocada (Apenas direita e baixo) */}
              <div className="absolute inset-0 translate-x-2.5 translate-y-2.5 border border-[#DFD3C9] pointer-events-none" />

              {/* Quadro da Foto */}
              <div className="relative bg-white/80 p-1 shadow-xs overflow-hidden">
                <img
                  src={portrait}
                  alt="Kelle Tavares, Psicóloga em Goiânia"
                  width={765}
                  height={1024}
                  className="w-full h-auto object-cover aspect-[3/4] block"
                />
              </div>
            </div>
          </Reveal>

        </div>
      </div>
    </section>
  );
}
