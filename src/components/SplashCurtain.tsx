import React, { useEffect, useState } from "react";
import { Sparkles } from "lucide-react";

const FULL_NAME = "Kelle Tavares";

export const SplashCurtain: React.FC = () => {
  const [typedText, setTypedText] = useState<string>("");
  const [isTypingComplete, setIsTypingComplete] = useState<boolean>(false);
  const [isRevealed, setIsRevealed] = useState<boolean>(false);
  const [isOpening, setIsOpening] = useState<boolean>(false);
  const [isMounted, setIsMounted] = useState<boolean>(true);

  useEffect(() => {
    // Bloqueia a rolagem durante a abertura da cortina
    document.body.style.overflow = "hidden";

    // 1. Revela o halo de luz e as linhas após 300ms
    const revealTimer = setTimeout(() => {
      setIsRevealed(true);
    }, 300);

    // 2. Aguarda 1.0 SEGUNDO INTEIRO em tela limpa com apenas o cursor piscando antes de digitar
    let charIndex = 0;
    let timeoutId: ReturnType<typeof setTimeout>;

    const typeNextChar = () => {
      if (charIndex < FULL_NAME.length) {
        charIndex++;
        setTypedText(FULL_NAME.slice(0, charIndex));

        // Digitação bem cadenciada e pausada: 180ms por caractere (e 300ms no espaço)
        const nextDelay = FULL_NAME[charIndex - 1] === " " ? 300 : 180;
        timeoutId = setTimeout(typeNextChar, nextDelay);
      } else {
        setIsTypingComplete(true);
      }
    };

    // A primeira letra "K" só começa a ser digitada após 1000ms (1 segundo inteiro)
    const initialDelayTimer = setTimeout(typeNextChar, 1000);

    // 3. Aos 5500ms a cortina abre com física suave
    const timerOpen = setTimeout(() => {
      setIsOpening(true);
    }, 5500);

    // 4. Aos 6800ms o componente é desmontado e a rolagem é liberada
    const timerUnmount = setTimeout(() => {
      setIsMounted(false);
      document.body.style.overflow = "";
    }, 6800);

    return () => {
      clearTimeout(revealTimer);
      clearTimeout(initialDelayTimer);
      clearTimeout(timeoutId);
      clearTimeout(timerOpen);
      clearTimeout(timerUnmount);
      document.body.style.overflow = "";
    };
  }, []);

  if (!isMounted) return null;

  return (
    <div className="fixed inset-0 z-[99999] pointer-events-none overflow-hidden select-none perspective-1000">
      
      {/* 1. Painel Superior da Cortina (Marfim Quente Editorial) */}
      <div
        className={`absolute top-0 inset-x-0 h-1/2 bg-[#F6F0EB] shadow-2xl transition-transform duration-1200 ease-[cubic-bezier(0.77,0,0.175,1)] will-change-transform ${
          isOpening ? "-translate-y-full" : "translate-y-0"
        }`}
      />

      {/* 2. Painel Inferior da Cortina */}
      <div
        className={`absolute bottom-0 inset-x-0 h-1/2 bg-[#F6F0EB] shadow-2xl transition-transform duration-1200 ease-[cubic-bezier(0.77,0,0.175,1)] will-change-transform ${
          isOpening ? "translate-y-full" : "translate-y-0"
        }`}
      />

      {/* 3. Halo de Luz Quente de Fundo */}
      <div
        className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-[450px] sm:size-[600px] rounded-full bg-gradient-to-r from-[#BA9485]/20 via-[#E5C9BD]/30 to-[#BA9485]/20 blur-3xl z-10 pointer-events-none transition-all duration-1000 ${
          isOpening
            ? "opacity-0 scale-150 blur-2xl"
            : isRevealed
            ? "opacity-100 scale-110 animate-glow-pulse"
            : "opacity-0 scale-75"
        }`}
      />

      {/* 4. Zoom Cinematográfico Infinito + Digitação Cadenciada */}
      <div
        className={`absolute inset-0 flex flex-col items-center justify-center text-center p-6 z-20 will-change-transform transition-all ${
          isOpening
            ? "duration-800 ease-in opacity-0 scale-[1.32] blur-md"
            : isRevealed
            ? "duration-[5500ms] cubic-bezier(0.16,1,0.3,1) opacity-100 scale-110 blur-0"
            : "duration-0 opacity-0 scale-[0.88] blur-xs"
        }`}
      >
        {/* Tagline Superior com Linhas Editorial Elegantes */}
        <div className="flex items-center gap-3 mb-4">
          <span
            className={`h-[1px] bg-gradient-to-r from-transparent via-[#BA9485] to-[#BA9485] transition-all duration-1000 ease-out ${
              isRevealed ? "w-10 sm:w-16 opacity-100" : "w-0 opacity-0"
            }`}
          />
          <span className="text-[0.68rem] sm:text-[0.74rem] font-bold tracking-[0.34em] uppercase text-[#BA9485] flex items-center gap-1.5 drop-shadow-xs">
            <Sparkles className="size-3.5 text-[#BA9485]" />
            PSICOLOGIA CLÍNICA & DESENVOLVIMENTO
          </span>
          <span
            className={`h-[1px] bg-gradient-to-l from-transparent via-[#BA9485] to-[#BA9485] transition-all duration-1000 ease-out ${
              isRevealed ? "w-10 sm:w-16 opacity-100" : "w-0 opacity-0"
            }`}
          />
        </div>

        {/* Nome Principal Limpo com Digitação e Brilho Metálico Warm Gold */}
        <div className="relative inline-block py-2">
          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-semibold tracking-[0.09em] drop-shadow-xs py-2 text-metallic-gold inline-flex items-center justify-center min-h-[1.25em] select-none">
            <span>{typedText}</span>
            {/* Cursor piscante de digitação em tom dourado editorial */}
            <span
              className={`inline-block w-[3px] h-[0.75em] bg-[#BA9485] ml-1.5 align-middle rounded-full transition-opacity duration-300 ${
                isTypingComplete ? "opacity-0" : "animate-pulse opacity-100"
              }`}
            />
          </h1>
        </div>

        {/* Subtítulo Inferior */}
        <div className="flex items-center gap-3 mt-4">
          <span
            className={`h-[1px] bg-gradient-to-r from-transparent to-[#BA9485] transition-all duration-1000 delay-200 ease-out ${
              isRevealed ? "w-12 sm:w-18 opacity-100" : "w-0 opacity-0"
            }`}
          />
          <span className="text-[0.72rem] sm:text-xs font-serif italic tracking-[0.28em] text-[#7E655B] uppercase font-medium">
            Excelência • Escuta • Cuidado
          </span>
          <span
            className={`h-[1px] bg-gradient-to-l from-transparent to-[#BA9485] transition-all duration-1000 delay-200 ease-out ${
              isRevealed ? "w-12 sm:w-18 opacity-100" : "w-0 opacity-0"
            }`}
          />
        </div>
      </div>

    </div>
  );
};
