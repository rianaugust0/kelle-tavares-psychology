import React, { useEffect, useState } from "react";

export const SplashCurtain: React.FC = () => {
  const [isVisible, setIsVisible] = useState<boolean>(true);
  const [isOpening, setIsOpening] = useState<boolean>(false);
  const [showBeam, setShowBeam] = useState<boolean>(false);

  useEffect(() => {
    const hasSeen = sessionStorage.getItem("kelle_splash_seen");
    if (hasSeen) {
      setIsVisible(false);
      return;
    }

    document.body.style.overflow = "hidden";

    // Feixe de luz central acende aos 1.0s
    const timerBeam = setTimeout(() => {
      setShowBeam(true);
    }, 1000);

    // Inicia abertura das cortinas aos 1.4s
    const timerOpen = setTimeout(() => {
      setIsOpening(true);
    }, 1400);

    // Finaliza e esconde aos 2.5s
    const timerRemove = setTimeout(() => {
      setIsVisible(false);
      document.body.style.overflow = "";
      sessionStorage.setItem("kelle_splash_seen", "true");
    }, 2500);

    return () => {
      clearTimeout(timerBeam);
      clearTimeout(timerOpen);
      clearTimeout(timerRemove);
      document.body.style.overflow = "";
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-[9999] pointer-events-none flex flex-col justify-between overflow-hidden">
      {/* Cortina Superior */}
      <div
        className={`w-full h-1/2 bg-[#F6F0EB] border-b border-[var(--terracotta)]/20 shadow-2xl transition-transform duration-1000 ease-[cubic-bezier(0.77,0,0.175,1)] ${
          isOpening ? "-translate-y-full" : "translate-y-0"
        }`}
      />

      {/* Feixe de Luz Horizontal Recortado na Divisão */}
      <div
        className={`fixed top-1/2 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[var(--terracotta)] to-transparent z-20 pointer-events-none transition-all duration-500 -translate-y-1/2 ${
          showBeam ? "opacity-100 scale-x-100 shadow-[0_0_15px_#BA9485]" : "opacity-0 scale-x-0"
        } ${isOpening ? "opacity-0 transition-opacity duration-300" : ""}`}
      />

      {/* Conteúdo Central (Assinatura Editorial com Staggered Fade) */}
      <div
        className={`fixed inset-0 flex flex-col items-center justify-center text-center p-6 transition-all duration-700 ease-out z-10 ${
          isOpening ? "opacity-0 scale-95" : "opacity-100 scale-100"
        }`}
      >
        <span className="text-[0.65rem] sm:text-xs font-semibold tracking-[0.35em] uppercase text-[var(--terracotta)] mb-3 animate-pulse">
          Atendimento Clínico & Avaliação
        </span>

        {/* Título com animação por letra */}
        <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl text-[var(--coffee)] tracking-[0.1em] font-light flex items-center justify-center gap-1.5">
          {"Kelle Tavares".split("").map((char, index) => (
            <span
              key={index}
              className="inline-block transition-all duration-500"
              style={{
                animationDelay: `${index * 50}ms`,
              }}
            >
              {char === " " ? "\u00A0" : char}
            </span>
          ))}
        </h1>

        <div className="flex items-center gap-3 my-4">
          <span className="w-10 h-[1px] bg-gradient-to-r from-transparent to-[var(--terracotta)]/60"></span>
          <span className="text-xs sm:text-sm font-sans tracking-[0.3em] text-[var(--taupe)] uppercase font-medium">
            Psicologia
          </span>
          <span className="w-10 h-[1px] bg-gradient-to-l from-transparent to-[var(--terracotta)]/60"></span>
        </div>
      </div>

      {/* Cortina Inferior */}
      <div
        className={`w-full h-1/2 bg-[#F6F0EB] border-t border-[var(--terracotta)]/20 shadow-2xl transition-transform duration-1000 ease-[cubic-bezier(0.77,0,0.175,1)] ${
          isOpening ? "translate-y-full" : "translate-y-0"
        }`}
      />
    </div>
  );
};
