import portraitImage from "@/assets/kelle-laptop.png";
import { site } from "@/config/site";
import { WhatsAppLink } from "./WhatsAppLink";
import { Reveal } from "./Reveal";
import { MessageCircle, ArrowRight, ShieldCheck, HeartHandshake } from "lucide-react";
import { trackWhatsAppClick } from "@/lib/analytics";

export const LuxuryPortraitCover: React.FC = () => {
  return (
    <section className="relative w-full bg-[#1C1513] text-[#F6F0EB] overflow-hidden border-y border-[#3A2E2B]">
      
      {/* --- VERSÃO MOBILE (< lg): Foto no Topo sem Sobreposição + Texto Limpo Abaixo --- */}
      <div className="block lg:hidden w-full">
        {/* Foto da Kelle no Laptop com Enquadramento Perfeito no Celular */}
        <div className="relative w-full h-[300px] xs:h-[340px] sm:h-[400px] overflow-hidden bg-[#1C1513]">
          <img
            src={portraitImage}
            alt="Kelle Tavares Psicóloga em Atendimento Online no Notebook"
            className="w-full h-full object-cover object-[center_25%]"
          />
          {/* Degradê na base da foto para transição suave com a área de texto */}
          <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#1C1513] to-transparent" />
        </div>

        {/* Conteúdo de Texto de Resposta Direta (Fórmula AIDA) */}
        <div className="px-6 py-8 sm:px-10 text-[#F6F0EB] relative z-10 -mt-6">
          <Reveal direction="up">
            {/* A - Attention: Badge de Atendimento Online Sem Fronteiras */}
            <div className="inline-flex items-center gap-2 bg-[#BA9485]/15 border border-[#BA9485]/30 px-3.5 py-1.5 rounded-full backdrop-blur-md mb-4">
              <span className="relative flex size-2 shrink-0">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
              </span>
              <span className="text-[0.62rem] font-bold tracking-[0.18em] uppercase text-[#D8A798]">
                ATENDIMENTO ONLINE SEM FRONTEIRAS
              </span>
            </div>

            {/* A - Attention: Headline de Alto Impacto ligada à foto no notebook */}
            <h2 className="font-serif text-[2.1rem] sm:text-[2.6rem] font-medium leading-[1.12] text-[#F6F0EB] tracking-tight">
              Sua consulta psicológica no conforto da sua casa —{" "}
              <span className="font-serif italic font-normal text-[#D8A798]">
                de onde você estiver.
              </span>
            </h2>

            {/* I - Interest: Subheadline de Praticidade e Sigilo */}
            <p className="mt-4 text-[0.88rem] leading-relaxed text-[#D2C3BB] font-sans font-light">
              Você não precisa enfrentar o trânsito ou adiar o seu bem-estar. Receba acompanhamento técnico, individualizado e 100% confidencial no seu computador ou celular.
            </p>

            {/* D - Desire: Selos de Facilidade e Reembolso */}
            <div className="mt-6 space-y-2">
              <div className="flex items-center gap-2.5 bg-white/5 border border-white/10 p-2.5 rounded-xl backdrop-blur-md">
                <ShieldCheck className="size-4 text-[#D8A798] shrink-0" />
                <span className="text-[0.72rem] font-medium text-[#E5D7CE]">Sigilo & Privacidade Criptografada</span>
              </div>
              <div className="flex items-center gap-2.5 bg-white/5 border border-white/10 p-2.5 rounded-xl backdrop-blur-md">
                <HeartHandshake className="size-4 text-[#D8A798] shrink-0" />
                <span className="text-[0.72rem] font-medium text-[#E5D7CE]">Auxílio para Reembolso do Plano</span>
              </div>
            </div>

            {/* A - Action: Botão de Conversão Direta no WhatsApp */}
            <div className="mt-6">
              <WhatsAppLink
                location="luxury_portrait_cover_mobile"
                event="whatsapp_luxury_cover_mobile_click"
                target="home"
                onClick={() => trackWhatsAppClick("luxury_portrait_cover_mobile")}
                className="group relative overflow-hidden flex items-center justify-center gap-2.5 bg-[#BA9485] hover:bg-[#a78173] text-[#1C1513] w-full py-3.5 text-[0.72rem] font-bold tracking-[0.14em] uppercase rounded-xs transition-all shadow-lg active:scale-[0.98]"
              >
                <MessageCircle className="size-4 text-[#1C1513]" />
                <span>AGENDAR CONSULTA ONLINE NO WHATSAPP</span>
                <ArrowRight className="size-4" />
              </WhatsAppLink>
            </div>

            <p className="mt-3 text-[0.6rem] font-bold tracking-[0.14em] uppercase text-center text-[#9E8B83]">
              RESPOSTA RÁPIDA • KELLE TAVARES | PSICÓLOGA (CRP {site.crp})
            </p>
          </Reveal>
        </div>
      </div>


      {/* --- VERSÃO DESKTOP (>= lg): Capa Editorial Full-Bleed em Parallax --- */}
      <div className="hidden lg:flex relative w-full min-h-[85vh] lg:min-h-[88vh] items-center">
        {/* Fotografia de Fundo Completa na Direita (100% Encaixe Sem Bordas Pretas) */}
        <div className="absolute inset-y-0 right-0 w-full lg:w-[65%] xl:w-[60%] h-full pointer-events-none z-0 overflow-hidden">
          <img
            src={portraitImage}
            alt="Kelle Tavares Psicóloga em Atendimento Online no Notebook"
            className="w-full h-full object-cover object-[center_45%] opacity-95 transition-transform duration-700 hover:scale-[1.02]"
          />
          {/* Transição suave em degradê vindo da esquerda */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#1C1513] via-[#1C1513]/80 via-40% to-transparent pointer-events-none" />
        </div>

        {/* Efeito de Luz Aurora */}
        <div className="absolute top-1/3 left-10 w-[500px] h-[500px] rounded-full bg-[#BA9485]/15 blur-[120px] pointer-events-none z-0 animate-aurora-glow" />

        {/* Conteúdo Desktop (Fórmula AIDA) */}
        <div className="relative z-10 mx-auto max-w-[1280px] w-full px-10 lg:px-12 py-24">
          <div className="max-w-[660px]">
            <Reveal direction="left">
              {/* A - Attention */}
              <div className="inline-flex items-center gap-2.5 bg-[#BA9485]/15 border border-[#BA9485]/30 px-4 py-1.5 rounded-full backdrop-blur-md mb-6">
                <span className="relative flex size-2 shrink-0">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
                </span>
                <span className="text-[0.66rem] font-bold tracking-[0.22em] uppercase text-[#D8A798]">
                  ATENDIMENTO ONLINE SEM FRONTEIRAS • BRASIL & EXTERIOR
                </span>
              </div>

              {/* A - Attention Headline */}
              <h2 className="font-serif text-[3.3rem] lg:text-[4rem] font-medium leading-[1.08] text-[#F6F0EB] tracking-tight">
                Sua consulta psicológica no conforto da sua casa —{" "}
                <span className="font-serif italic font-normal text-[#D8A798]">
                  de onde você estiver.
                </span>
              </h2>

              {/* I - Interest Subheadline */}
              <p className="mt-6 text-[1.05rem] leading-relaxed text-[#D2C3BB] font-sans font-light max-w-[580px]">
                Você não precisa enfrentar o trânsito, alterar sua rotina ou adiar o seu cuidado emocional. Receba acompanhamento psicológico de alto nível, individualizado e 100% seguro no seu notebook ou celular.
              </p>

              {/* D - Desire Bullets */}
              <div className="mt-8 grid grid-cols-2 gap-3 max-w-[540px]">
                <div className="flex items-center gap-2.5 bg-white/5 border border-white/10 p-3 rounded-xl backdrop-blur-md">
                  <ShieldCheck className="size-4 text-[#D8A798] shrink-0" />
                  <span className="text-[0.75rem] font-medium text-[#E5D7CE]">Sigilo & Criptografia de Dados</span>
                </div>
                <div className="flex items-center gap-2.5 bg-white/5 border border-white/10 p-3 rounded-xl backdrop-blur-md">
                  <HeartHandshake className="size-4 text-[#D8A798] shrink-0" />
                  <span className="text-[0.75rem] font-medium text-[#E5D7CE]">Facilidade com Reembolso do Plano</span>
                </div>
              </div>

              {/* A - Action Button */}
              <div className="mt-10 flex items-center gap-4">
                <WhatsAppLink
                  location="luxury_portrait_cover_desktop"
                  event="whatsapp_luxury_cover_click"
                  target="home"
                  onClick={() => trackWhatsAppClick("luxury_portrait_cover_desktop")}
                  className="group relative overflow-hidden inline-flex items-center justify-center gap-3 bg-[#BA9485] hover:bg-[#a78173] text-[#1C1513] px-8 py-4 text-[0.74rem] font-bold tracking-[0.16em] uppercase rounded-xs transition-all duration-300 shadow-xl hover:shadow-2xl active:scale-[0.98]"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />
                  <MessageCircle className="size-4 text-[#1C1513]" />
                  <span>AGENDAR CONSULTA ONLINE NO WHATSAPP</span>
                  <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
                </WhatsAppLink>
              </div>

              <p className="mt-4 text-[0.65rem] font-bold tracking-[0.18em] uppercase text-[#9E8B83]">
                RESPOSTA RÁPIDA VIA WHATSAPP • KELLE TAVARES | PSICÓLOGA (CRP {site.crp})
              </p>
            </Reveal>
          </div>
        </div>
      </div>

    </section>
  );
};
