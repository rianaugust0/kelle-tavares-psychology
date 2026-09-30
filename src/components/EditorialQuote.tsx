import { Reveal } from "./Reveal";
import { WhatsAppLink } from "./WhatsAppLink";
import { ArrowRight } from "lucide-react";

export function EditorialQuote() {
  return (
    <section className="relative bg-[#2D2320] py-24 sm:py-32 lg:py-36 text-[#F6F0EB] overflow-hidden border-t border-[#4A3E3A]">
      
      {/* Aurora / Névoa Orgânica Fluida de Fundo (Fluid Organic Glow) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] sm:w-[850px] sm:h-[850px] rounded-full bg-gradient-to-tr from-[#A07365]/35 via-[#C59B8B]/20 to-[#3A2E2B]/10 blur-[100px] pointer-events-none animate-aurora-glow" />
      <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] rounded-full bg-radial from-[#D8A798]/20 to-transparent blur-3xl pointer-events-none animate-float-slow" />

      {/* Partículas de Poeira Estelar Translúcidas (Starlight Dust Glow) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0 opacity-60">
        <div className="absolute top-[20%] left-[15%] size-2 rounded-full bg-[#D8A798]/40 blur-xs animate-dust-particle" style={{ animationDelay: "0s" }} />
        <div className="absolute top-[40%] right-[20%] size-3 rounded-full bg-[#EFE4DC]/50 blur-xs animate-dust-particle" style={{ animationDelay: "2s" }} />
        <div className="absolute bottom-[25%] left-[30%] size-2.5 rounded-full bg-[#C59B8B]/40 blur-xs animate-dust-particle" style={{ animationDelay: "4s" }} />
        <div className="absolute bottom-[35%] right-[35%] size-2 rounded-full bg-[#F6F0EB]/60 blur-xs animate-dust-particle" style={{ animationDelay: "1s" }} />
      </div>

      <div className="relative z-10 mx-auto max-w-[1240px] px-6 sm:px-10 lg:px-12 text-center">
        <Reveal direction="scale" className="flex flex-col items-center">
          
          {/* Aspas Gigantes Editoriais Translúcidas com Flutuação */}
          <span className="font-serif text-[7rem] sm:text-[10rem] lg:text-[12rem] leading-none text-[#C59B8B]/20 font-bold select-none pointer-events-none block -mb-16 sm:-mb-24 lg:-mb-28 animate-float-slow">
            “
          </span>

          {/* Tagline superior com linhas delimitadoras */}
          <div className="inline-flex items-center gap-3.5 mb-6">
            <span className="h-[1px] w-8 sm:w-12 bg-[#C59B8B]/50" />
            <span className="text-[0.68rem] font-bold tracking-[0.26em] uppercase text-[#C59B8B]">
              UMA OUTRA POSSIBILIDADE
            </span>
            <span className="h-[1px] w-8 sm:w-12 bg-[#C59B8B]/50" />
          </div>

          {/* Frase Principal em Destaque */}
          <blockquote className="font-serif text-[2.3rem] sm:text-[3.5rem] lg:text-[4.4rem] font-medium leading-[1.12] text-[#F6F0EB] tracking-tight max-w-[1020px] mx-auto">
            Terapia não precisa começar somente quando{" "}
            <span className="font-serif italic font-normal text-[#D8A798] underline underline-offset-8 decoration-[#D8A798]/30">
              tudo desmorona.
            </span>
          </blockquote>

          {/* Subtexto explicativo acolhedor */}
          <p className="mt-8 max-w-[620px] text-[0.95rem] leading-relaxed text-[#D2C3BB] font-sans">
            Cuidar da sua saúde emocional é um gesto de prevenção, autoconhecimento e construção de equilíbrio para todas as fases da vida.
          </p>

          {/* Botão de Ação CTA com Shimmer Light Sweep */}
          <div className="mt-10">
            <WhatsAppLink
              location="editorial_quote"
              event="whatsapp_quote_click"
              target="home"
              className="group relative overflow-hidden inline-flex items-center gap-3 border border-[#C59B8B] bg-[#C59B8B]/10 hover:bg-[#C59B8B] text-[#F6F0EB] hover:text-[#2D2320] px-8 py-4 text-[0.72rem] font-bold tracking-[0.16em] uppercase transition-all duration-300 rounded-xs shadow-md active:scale-[0.98]"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />
              <span>DAR O PRIMEIRO PASSO</span>
              <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
            </WhatsAppLink>
          </div>

        </Reveal>
      </div>
    </section>
  );
}

