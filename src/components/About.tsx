import aboutImage from "@/assets/kelle-2.png";
import { site } from "@/config/site";
import { WhatsAppLink } from "./WhatsAppLink";
import { Reveal } from "./Reveal";
import { AnimatedCounter } from "./AnimatedCounter";
import { MessageCircle, Video, User, Sparkles, MapPin, ArrowRight } from "lucide-react";

export function About() {
  return (
    <section id="sobre" className="relative bg-[#F6F0EB] py-20 lg:py-28 overflow-hidden border-t border-[#D9C8BC]/40">
      {/* Luz ambiente de fundo no Sobre */}
      <div className="absolute top-1/2 left-1/3 -translate-y-1/2 size-[500px] rounded-full bg-[#EAE0D6]/40 blur-3xl pointer-events-none animate-glow-pulse" />

      <div className="mx-auto max-w-[1280px] px-6 sm:px-10 lg:px-12 relative z-10">
        
        {/* Bloco Superior: Conteúdo Principal (Texto + Fotografia com Badges) */}
        <div className="grid items-center gap-12 lg:grid-cols-[52fr_48fr] lg:gap-16 xl:gap-20">
          
          {/* Coluna da Esquerda: Textos e Botão Conversar */}
          <Reveal direction="left" className="flex flex-col items-start space-y-6">
            {/* Tag de Destaque */}
            <span className="inline-block bg-[#7E655B] px-3.5 py-1.5 text-[0.62rem] font-bold tracking-[0.2em] uppercase text-white rounded-xs shadow-xs">
              SOBRE KELLE TAVARES
            </span>

            {/* Título H2 */}
            <h2 className="font-serif text-[2.4rem] font-semibold leading-[1.1] text-[#3A2E2B] sm:text-[3.1rem] lg:text-[3.6rem] tracking-tight">
              Excelência e<br />
              sensibilidade em<br />
              <span className="font-serif italic font-medium text-[#A07365]">saúde emocional</span>
            </h2>

            {/* Parágrafos explicativos */}
            <div className="space-y-4 text-[0.92rem] leading-relaxed text-[#6E5F57] max-w-[500px]">
              <p>
                Sou psicóloga formada pela FacUnicamps, dedicada a oferecer um espaço seguro, acolhedor e técnico para adultos e crianças compreenderem seus sentimentos e viverem com mais equilíbrio.
              </p>
              <p>
                Com especializações em <strong className="font-bold text-[#3A2E2B]">Análise do Comportamento Aplicada (ABA)</strong> e <strong className="font-bold text-[#3A2E2B]">Neuropsicologia</strong>, minha prática combina rigor científico com um olhar atento à história única de cada pessoa.
              </p>
            </div>

            {/* Botão Conversar com Kelle com Efeito Hover Dynamic */}
            <div className="pt-2">
              <WhatsAppLink
                location="about_section"
                event="whatsapp_about_click"
                target="home"
                className="group relative overflow-hidden inline-flex items-center gap-2.5 bg-[#3A2E2B] border border-[#3A2E2B] px-6 py-3.5 text-[0.7rem] font-bold tracking-[0.14em] uppercase text-white transition-all duration-300 hover:bg-[#52423D] hover:shadow-lg active:scale-[0.98] rounded-xs"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />
                <MessageCircle className="size-4 text-white/90 transition-transform duration-300 group-hover:rotate-12" />
                <span>CONVERSAR COM KELLE</span>
              </WhatsAppLink>
            </div>
          </Reveal>

          {/* Coluna da Direita: Moldura Redonda com Halo + Badges Flutuantes Animados */}
          <Reveal direction="right" delay={150} className="relative flex justify-center lg:justify-end my-6 lg:my-0">
            <div className="relative w-full max-w-[380px] sm:max-w-[420px] lg:max-w-[440px] group">
              
              {/* Anel de Fundo Circular (Halo de Luz Warm com Pulsar) */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] h-[320px] sm:w-[380px] sm:h-[380px] rounded-full border border-[#D9C8BC]/70 bg-gradient-to-tr from-[#EFE6DF]/60 to-transparent pointer-events-none animate-spin-slow" />

              {/* Quadro da Foto Principal com Topo Arredondado & Zoom Hover */}
              <div className="relative z-10 border-[8px] border-white bg-white shadow-lg rounded-t-[36px] sm:rounded-t-[44px] rounded-b-[24px] overflow-hidden transition-shadow duration-500 group-hover:shadow-2xl">
                <img
                  src={aboutImage}
                  alt="Kelle Tavares em atendimento"
                  width={912}
                  height={1104}
                  className="w-full h-auto object-cover aspect-[4/5] block transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                />
              </div>

              {/* Badge Flutuante Superior Direito: Sessão Online (Com Flutuação Suave) */}
              <div className="absolute -top-3 -right-2 sm:-right-6 z-20 flex items-center gap-3 bg-white/95 backdrop-blur-md px-4 py-3 rounded-2xl shadow-md border border-[#EFE6DF] animate-float-slow transition-transform duration-300 hover:scale-105">
                <div className="flex size-9 items-center justify-center rounded-xl bg-[#F6F0EB] text-[#7E655B] shrink-0">
                  <Video className="size-4" />
                </div>
                <div>
                  <p className="text-[0.78rem] font-bold text-[#3A2E2B] leading-tight">Sessão Online</p>
                  <p className="text-[0.65rem] text-[#8E7D76] leading-tight mt-0.5">Privacidade e sigilo em todo o Brasil</p>
                </div>
              </div>

              {/* Badge Flutuante Inferior Esquerdo: Anos de Prática (Com Contagem Animada e Flutuação) */}
              <div className="absolute -bottom-4 -left-3 sm:-left-6 z-20 flex items-center gap-3 bg-white/95 backdrop-blur-md px-4 py-3 rounded-2xl shadow-md border border-[#EFE6DF] animate-float-subtle transition-transform duration-300 hover:scale-105">
                <div className="flex items-center justify-center px-2.5 py-1.5 rounded-lg bg-[#7E655B] text-white text-[0.8rem] font-bold shrink-0 shadow-xs">
                  <AnimatedCounter end={3} prefix="+" />
                </div>
                <div>
                  <p className="text-[0.78rem] font-bold text-[#3A2E2B] leading-tight">Anos de Prática</p>
                  <p className="text-[0.65rem] text-[#8E7D76] leading-tight mt-0.5">Clínica e desenvolvimento infantil</p>
                </div>
              </div>

            </div>
          </Reveal>

        </div>

        {/* Bloco Inferior: Barra Horizontal Resumo (Cards + CTA Agendar Sessão com Stagger) */}
        <Reveal direction="up" delay={220} className="mt-16 sm:mt-20 w-full">
          <div className="w-full rounded-2xl border border-[#D9C8BC]/80 bg-white/80 p-3 sm:p-4 shadow-xs backdrop-blur-xs">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 items-center">
              
              {/* Card 1: Profissional */}
              <div className="flex items-center gap-3 bg-[#F9F6F3] p-3 rounded-xl border border-[#EFE6DF] transition-all duration-300 hover:border-[#BA9485]/50 hover:bg-white hover:-translate-y-0.5">
                <div className="flex size-9 items-center justify-center rounded-lg bg-white text-[#7E655B] shadow-xs shrink-0">
                  <User className="size-4" />
                </div>
                <div>
                  <p className="text-[0.6rem] font-semibold uppercase tracking-wider text-[#8E7D76]">PROFISSIONAL</p>
                  <p className="text-[0.78rem] font-bold text-[#3A2E2B]">Kelle Tavares • CRP {site.crp}</p>
                </div>
              </div>

              {/* Card 2: Especialidade */}
              <div className="flex items-center gap-3 bg-[#F9F6F3] p-3 rounded-xl border border-[#EFE6DF] transition-all duration-300 hover:border-[#BA9485]/50 hover:bg-white hover:-translate-y-0.5">
                <div className="flex size-9 items-center justify-center rounded-lg bg-white text-[#7E655B] shadow-xs shrink-0">
                  <Sparkles className="size-4" />
                </div>
                <div>
                  <p className="text-[0.6rem] font-semibold uppercase tracking-wider text-[#8E7D76]">ESPECIALIDADE</p>
                  <p className="text-[0.78rem] font-bold text-[#3A2E2B]">Adultos & ABA Infantil</p>
                </div>
              </div>

              {/* Card 3: Atendimento */}
              <div className="flex items-center gap-3 bg-[#F9F6F3] p-3 rounded-xl border border-[#EFE6DF] transition-all duration-300 hover:border-[#BA9485]/50 hover:bg-white hover:-translate-y-0.5">
                <div className="flex size-9 items-center justify-center rounded-lg bg-white text-[#7E655B] shadow-xs shrink-0">
                  <MapPin className="size-4" />
                </div>
                <div>
                  <p className="text-[0.6rem] font-semibold uppercase tracking-wider text-[#8E7D76]">ATENDIMENTO</p>
                  <p className="text-[0.78rem] font-bold text-[#3A2E2B]">Online & Goiânia (GO)</p>
                </div>
              </div>

              {/* Card 4: Botão Agendar Sessão */}
              <WhatsAppLink
                location="about_summary_bar"
                event="whatsapp_about_summary_click"
                target="home"
                className="group relative overflow-hidden flex items-center justify-center gap-2 bg-[#8C6353] hover:bg-[#775244] text-white p-3.5 rounded-xl font-bold text-[0.75rem] tracking-[0.14em] uppercase transition-all duration-300 shadow-xs hover:shadow-md active:scale-[0.98]"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />
                <span>AGENDAR SESSÃO</span>
                <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
              </WhatsAppLink>

            </div>
          </div>
        </Reveal>

      </div>
    </section>
  );
}

