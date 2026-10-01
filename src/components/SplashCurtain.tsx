import React, { useEffect, useState, useCallback } from "react";
import { Sparkles } from "lucide-react";

const FULL_NAME = "Kelle Tavares";
const SESSION_STORAGE_KEY = "kelle_splash_seen";

export const SplashCurtain: React.FC = () => {
  const [isMounted, setIsMounted] = useState<boolean>(true);
  const [typedText, setTypedText] = useState<string>("");
  const [isTopTaglineVisible, setIsTopTaglineVisible] = useState<boolean>(false);
  const [isTypingComplete, setIsTypingComplete] = useState<boolean>(false);
  const [isBottomSubtitleVisible, setIsBottomSubtitleVisible] = useState<boolean>(false);
  const [isLeaping, setIsLeaping] = useState<boolean>(false);
  const [isOpening, setIsOpening] = useState<boolean>(false);

  const finishAndUnmount = useCallback(() => {
    try {
      sessionStorage.setItem(SESSION_STORAGE_KEY, "true");
    } catch {
      // Ignore storage errors if private browsing blocks it
    }
    setIsMounted(false);
    document.body.style.overflow = "";
  }, []);

  const triggerSkip = useCallback(() => {
    if (isOpening) return;
    setIsOpening(true);
    setTimeout(finishAndUnmount, 600);
  }, [isOpening, finishAndUnmount]);

  useEffect(() => {
    // Verifica imediatamente se já foi exibido nesta sessão do navegador
    try {
      if (sessionStorage.getItem(SESSION_STORAGE_KEY)) {
        setIsMounted(false);
        return;
      }
    } catch {
      // Ignore
    }

    // Bloqueia a rolagem durante a abertura da cortina
    document.body.style.overflow = "hidden";

    // 1. PASSO 1: Aos 0ms (instantâneo), revela o título principal "PSICOLOGIA CLÍNICA & DESENVOLVIMENTO"
    setIsTopTaglineVisible(true);

    // 2. PASSO 2: Aos 50ms, inicia a digitação cadenciada e graciosa de "Kelle Tavares" (~90ms por caractere, ~1.2s total)
    let charIndex = 0;
    let timeoutId: ReturnType<typeof setTimeout>;

    const typeNextChar = () => {
      if (charIndex < FULL_NAME.length) {
        charIndex++;
        setTypedText(FULL_NAME.slice(0, charIndex));
        const nextDelay = FULL_NAME[charIndex - 1] === " " ? 140 : 90;
        timeoutId = setTimeout(typeNextChar, nextDelay);
      } else {
        // Digitação do nome concluída com extrema elegância!
        setIsTypingComplete(true);

        // 3. PASSO 3: Pausa de 200ms e o subtítulo desliza elegantemente nos 2 segundos escolhidos
        setTimeout(() => {
          setIsBottomSubtitleVisible(true);

          // 4. PASSO 4: Abertura triunfal da cortina após o deslize de 2 segundos
          setTimeout(() => {
            setIsLeaping(true);
            setIsOpening(true);
          }, 2100);
        }, 200);
      }
    };

    const initialTypingTimer = setTimeout(typeNextChar, 50);

    // Desmonta o componente após todo o ritual (~4000ms no total)
    const timerUnmount = setTimeout(() => {
      finishAndUnmount();
    }, 4000);

    return () => {
      clearTimeout(initialTypingTimer);
      clearTimeout(timeoutId);
      clearTimeout(timerUnmount);
      document.body.style.overflow = "";
    };
  }, [finishAndUnmount]);

  if (!isMounted) return null;

  return (
    <div
      onClick={triggerSkip}
      className={`fixed inset-0 z-[99999] cursor-pointer select-none overflow-hidden transform-gpu transition-opacity duration-800 ${
        isOpening ? "pointer-events-none opacity-0" : "pointer-events-auto opacity-100"
      }`}
      title="Clique em qualquer lugar para pular"
    >
      {/* 1. Fundo de Ondas Líquidas Orgânicas nas Cores Oficiais da Marca (Café, Terracota, Rosé Gold & Blush) */}
      <div className="absolute inset-0 bg-[#2C211D] overflow-hidden">
        {/* Onda Líquida Orgânica 1 (Superior em Rosé Gold & Terracota) */}
        <svg
          className="absolute -top-24 -left-24 w-[150%] h-[70%] opacity-55 blur-2xl animate-aurora-glow transform-gpu"
          viewBox="0 0 1200 600"
          fill="none"
        >
          <path
            d="M0,300 C300,450 600,150 900,350 C1100,480 1200,200 1300,300 L1300,0 L0,0 Z"
            fill="url(#splash-wave-1)"
          />
          <defs>
            <linearGradient id="splash-wave-1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#BA9485" stopOpacity="0.85" />
              <stop offset="50%" stopColor="#A07365" stopOpacity="0.55" />
              <stop offset="100%" stopColor="#2C211D" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>

        {/* Onda Líquida Orgânica 2 (Central Ondulante em Blush & Rosé Gold) */}
        <svg
          className="absolute top-1/4 -right-24 w-[150%] h-[75%] opacity-50 blur-3xl animate-pulse transform-gpu"
          viewBox="0 0 1200 600"
          fill="none"
        >
          <path
            d="M0,200 C350,50 650,400 950,150 C1150,0 1250,250 1400,180 L1400,600 L0,600 Z"
            fill="url(#splash-wave-2)"
          />
          <defs>
            <linearGradient id="splash-wave-2" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#D8C7BC" stopOpacity="0.75" />
              <stop offset="50%" stopColor="#BA9485" stopOpacity="0.45" />
              <stop offset="100%" stopColor="#3A2E2B" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>

        {/* Onda Líquida Orgânica 3 (Inferior em Café Profundo) */}
        <svg
          className="absolute -bottom-24 -left-16 w-[140%] h-[60%] opacity-70 blur-2xl transform-gpu"
          viewBox="0 0 1200 500"
          fill="none"
        >
          <path
            d="M0,150 C400,350 700,50 1000,250 C1150,350 1250,100 1300,200 L1300,500 L0,500 Z"
            fill="url(#splash-wave-3)"
          />
          <defs>
            <linearGradient id="splash-wave-3" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#443632" stopOpacity="0.95" />
              <stop offset="60%" stopColor="#7E655B" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#2C211D" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>

        {/* Vinheta Aveludada Periférica */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_20%,_#1E1614_100%)] opacity-85" />
      </div>

      {/* 2. Conteúdo Central: Animação Delicada, Lenta, Fluida e Cuidadosa em Pausas Cadenciadas */}
      <div
        className={`absolute inset-0 flex flex-col items-center justify-center text-center p-6 pointer-events-none transform-gpu transition-all duration-800 cubic-bezier(0.16,1,0.3,1) ${
          isLeaping
            ? "-translate-y-8 scale-105 opacity-0 blur-xs"
            : "translate-y-0 scale-100 opacity-100"
        }`}
      >
        {/* Tagline Superior (Desce suavemente com desaceleração aveludada) */}
        <div
          className={`flex items-center gap-3.5 mb-5 overflow-hidden py-1 transition-all duration-[1200ms] cubic-bezier(0.16,1,0.3,1) transform-gpu ${
            isTopTaglineVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-3"
          }`}
        >
          <span
            className={`h-[1px] bg-gradient-to-r from-transparent via-[#BA9485] to-[#BA9485] transition-all duration-[1200ms] cubic-bezier(0.16,1,0.3,1) ${
              isTopTaglineVisible ? "w-12 sm:w-20 opacity-90" : "w-0 opacity-0"
            }`}
          />
          <span className="text-[0.70rem] sm:text-[0.76rem] font-bold tracking-[0.38em] uppercase text-[#F2ECE6] flex items-center gap-2 drop-shadow-[0_0_12px_rgba(186,148,133,0.5)]">
            <Sparkles className="size-3.5 text-[#BA9485] animate-pulse" />
            PSICOLOGIA CLÍNICA & DESENVOLVIMENTO
          </span>
          <span
            className={`h-[1px] bg-gradient-to-l from-transparent via-[#BA9485] to-[#BA9485] transition-all duration-[1200ms] cubic-bezier(0.16,1,0.3,1) ${
              isTopTaglineVisible ? "w-12 sm:w-20 opacity-90" : "w-0 opacity-0"
            }`}
          />
        </div>

        {/* Nome Principal (Digitação Cadenciada Elegante) */}
        <div className="relative overflow-hidden py-3 px-6 my-1 min-h-[4rem] sm:min-h-[5.5rem] flex items-center justify-center">
          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-light tracking-[0.12em] drop-shadow-[0_0_30px_rgba(186,148,133,0.45)] inline-flex items-center justify-center gap-1 select-none">
            <span className="text-[#FBF8F5]">{typedText.slice(0, 5)}</span>
            {typedText.length > 5 && (
              <span className="bg-gradient-to-r from-[#EAD5C5] via-[#BA9485] to-[#A07365] bg-clip-text text-transparent font-medium ml-3">
                {typedText.slice(5)}
              </span>
            )}
            {/* Cursor elegante de digitação: visível SOMENTE quando há texto sendo digitado */}
            {typedText.length > 0 && !isTypingComplete && (
              <span className="inline-block w-[3px] h-[0.75em] bg-[#BA9485] ml-1.5 align-middle rounded-full animate-pulse transition-opacity duration-200" />
            )}
          </h1>
        </div>

        {/* Subtítulo Inferior (Passo 3: Desliza suavemente em exatos 2 segundos) */}
        <div
          className={`flex items-center gap-3.5 mt-5 overflow-hidden py-1 transition-all duration-[2000ms] cubic-bezier(0.16,1,0.3,1) transform-gpu ${
            isBottomSubtitleVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <span
            className={`h-[1px] bg-gradient-to-r from-transparent via-[#BA9485] to-[#BA9485] transition-all duration-[2000ms] ease-out ${
              isBottomSubtitleVisible ? "w-14 sm:w-24 opacity-80" : "w-0 opacity-0"
            }`}
          />
          <span className="text-[0.74rem] sm:text-xs font-serif italic tracking-[0.32em] text-[#D8C7BC] uppercase font-light">
            Excelência • Escuta • Cuidado
          </span>
          <span
            className={`h-[1px] bg-gradient-to-l from-transparent via-[#BA9485] to-[#BA9485] transition-all duration-[2000ms] ease-out ${
              isBottomSubtitleVisible ? "w-14 sm:w-24 opacity-80" : "w-0 opacity-0"
            }`}
          />
        </div>
      </div>
    </div>
  );
};









