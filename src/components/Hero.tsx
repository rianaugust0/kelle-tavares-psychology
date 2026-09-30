import portrait from "@/assets/kelle-1.png";
import { site } from "@/config/site";
import { WhatsAppLink } from "./WhatsAppLink";
import { Reveal } from "./Reveal";
import { TiltCard } from "./TiltCard";
import { ArrowRight, Sparkles, CheckCircle2 } from "lucide-react";

export function Hero() {
  return (
    <section id="inicio" className="relative min-h-[92vh] bg-[#F6F0EB] pt-24 pb-16 lg:pt-32 lg:pb-24 overflow-hidden">
      {/* Halos de luz suave de fundo no Hero */}
      <div className="absolute top-1/4 right-1/4 size-[450px] rounded-full bg-[#E8DDD4]/60 blur-3xl pointer-events-none animate-glow-pulse" />
      <div className="absolute bottom-10 left-10 size-[320px] rounded-full bg-[#BA9485]/15 blur-3xl pointer-events-none" />

      <div className="mx-auto max-w-[1280px] px-6 sm:px-10 lg:px-12 relative z-10">
        <div className="grid items-center gap-12 lg:grid-cols-[54fr_46fr] lg:gap-14 xl:gap-16">
          
          {/* Coluna da Esquerda: Conteúdo de Texto */}
          <Reveal direction="up" className="flex flex-col items-start space-y-6">
            
            {/* Badge Flutuante de Status de Atendimento Live */}
            <div className="inline-flex items-center gap-2.5 bg-white/90 border border-[#D9C8BC] px-4 py-1.5 rounded-full shadow-xs backdrop-blur-md animate-pulse-ring">
              <span className="relative flex size-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#A07365] opacity-75" />
                <span className="relative inline-flex size-2.5 rounded-full bg-[#7E655B]" />
              </span>
              <span className="text-[0.68rem] font-bold tracking-[0.16em] uppercase text-[#3A2E2B]">
                Agenda Aberta • Goiânia & Online
              </span>
            </div>

            {/* Tagline superior */}
            <div className="flex items-center gap-3 pt-1">
              <span className="h-[1px] w-6 bg-[#BA9485]" />
              <span className="text-[0.68rem] font-bold tracking-[0.22em] uppercase text-[#BA9485] flex items-center gap-1.5">
                <Sparkles className="size-3 text-[#BA9485]" />
                PSICOLOGIA • ESCUTA • CUIDADO
              </span>
            </div>

            {/* Título Principal H1 com Word Stagger Reveal */}
            <h1 className="font-serif text-[2.8rem] font-semibold leading-[1.08] text-[#3A2E2B] sm:text-[3.5rem] lg:text-[4rem] xl:text-[4.5rem] tracking-tight">
              <span className="inline-block transition-all">Psicóloga</span>{" "}
              <span className="inline-block font-serif italic text-metallic-gold">em Goiânia</span>{" "}
              <span className="font-light text-[#BA9485]">|</span>
              <br />
              <span className="inline-block">Atendimento online</span>{" "}
              <span className="inline-block font-serif italic font-normal text-[#BA9485]">e presencial</span>
            </h1>

            {/* Subtítulo em itálico */}
            <p className="font-serif italic text-[1.25rem] leading-relaxed text-[#A07365] sm:text-[1.4rem] font-medium">
              Cuidar da sua saúde emocional pode ser mais leve do que você imagina.
            </p>

            {/* Parágrafo de descrição */}
            <p className="max-w-[460px] text-[0.9rem] leading-relaxed text-[#6E5F57] font-normal">
              Um espaço seguro, acolhedor e profissional para você se compreender, organizar seus sentimentos e viver com mais equilíbrio.
            </p>

            {/* Botões de Ação com Efeito Shimmer e Hover Dynamics */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full sm:w-auto">
              <WhatsAppLink
                location="home_hero_primary"
                event="whatsapp_home_hero_click"
                target="home"
                className="group relative overflow-hidden inline-flex items-center justify-center bg-[#382C26] border border-[#382C26] px-7 py-4 text-[0.72rem] font-bold tracking-[0.16em] uppercase text-white transition-all duration-300 hover:bg-[#524138] hover:shadow-xl active:scale-[0.98] rounded-xs"
              >
                {/* Linha de brilho sweep */}
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />
                <span className="relative z-10 flex items-center gap-2">
                  AGENDE SEU ATENDIMENTO
                  <ArrowRight className="size-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </WhatsAppLink>

              <a
                href="#sobre"
                className="inline-flex items-center justify-center bg-transparent border border-[#382C26] px-7 py-4 text-[0.72rem] font-bold tracking-[0.16em] uppercase text-[#382C26] transition-all duration-300 hover:bg-[#382C26] hover:text-white hover:shadow-md active:scale-[0.98] rounded-xs"
              >
                CONHEÇA MEU TRABALHO
              </a>
            </div>

            {/* Rodapé da Seção (CRP / Cidade) */}
            <div className="pt-3 flex items-center gap-2 text-[0.68rem] font-medium tracking-[0.18em] uppercase text-[#8E7D76]">
              <CheckCircle2 className="size-3.5 text-[#7E655B]" />
              <span>ATENDIMENTO EM GOIÂNIA E ONLINE — CRP {site.crp}</span>
            </div>
          </Reveal>

          {/* Coluna da Direita: Moldura Fotográfica 3D Interativa com TiltCard */}
          <Reveal direction="scale" delay={140} className="relative flex justify-center lg:justify-end">
            <TiltCard maxTilt={6} className="w-full max-w-[400px] sm:max-w-[430px] lg:max-w-[450px] mr-2 mb-2 group">
              
              {/* Moldura Externa Traseira (Linha de Contorno Deslocada com Flutuação) */}
              <div className="absolute -inset-3 translate-x-2.5 translate-y-2.5 border border-[#C8B6A9] pointer-events-none transition-transform duration-500 group-hover:translate-x-3.5 group-hover:translate-y-3.5" />

              {/* Quadro da Foto com Borda Branca, Contorno Fino e Zoom Suave */}
              <div className="relative border border-[#C8B6A9] bg-white p-2.5 shadow-md overflow-hidden transition-all duration-500 group-hover:shadow-2xl rounded-xs">
                <img
                  src={portrait}
                  alt="Kelle Tavares, Psicóloga em Goiânia"
                  width={765}
                  height={1024}
                  className="w-full h-auto object-cover aspect-[3/4] block transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                />
              </div>

              {/* Badge Glassmorphism de Destaque no Card */}
              <div className="absolute -bottom-4 right-4 z-20 glassmorphism-card px-4 py-2.5 rounded-xl shadow-lg flex items-center gap-2.5 border border-white/80">
                <Sparkles className="size-4 text-[#7E655B]" />
                <span className="text-[0.7rem] font-bold text-[#3A2E2B] tracking-wide">Pós em ABA & Neuropsicologia</span>
              </div>

            </TiltCard>
          </Reveal>

        </div>
      </div>
    </section>
  );
}


