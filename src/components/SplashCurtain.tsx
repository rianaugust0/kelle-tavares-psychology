import React, { useEffect, useState } from "react";

export const SplashCurtain: React.FC = () => {
  const [isVisible, setIsVisible] = useState<boolean>(true);
  const [isOpening, setIsOpening] = useState<boolean>(false);

  useEffect(() => {
    // Evita reaplicar caso já tenha sido executado na sessão corrente (opcional, pode ajustar conforme desejo)
    const hasSeen = sessionStorage.getItem("kelle_splash_seen");
    if (hasSeen) {
      setIsVisible(false);
      return;
    }

    // Trava scroll do body durante a abertura
    document.body.style.overflow = "hidden";

    // Inicia a abertura das cortinas após 1.3s
    const timerOpen = setTimeout(() => {
      setIsOpening(true);
    }, 1300);

    // Esconde o componente após a animação de deslize finalizar (2.4s)
    const timerRemove = setTimeout(() => {
      setIsVisible(false);
      document.body.style.overflow = "";
      sessionStorage.setItem("kelle_splash_seen", "true");
    }, 2400);

    return () => {
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
        className={`w-full h-1/2 bg-[var(--ivory)] border-b border-[var(--terracotta)]/20 shadow-2xl transition-transform duration-1000 ease-[cubic-bezier(0.77,0,0.175,1)] ${
          isOpening ? "-translate-y-full" : "translate-y-0"
        }`}
      />

      {/* Conteúdo Central (Assinatura Editorial) */}
      <div
        className={`fixed inset-0 flex flex-col items-center justify-center text-center p-6 transition-all duration-700 ease-out z-10 ${
          isOpening ? "opacity-0 scale-95" : "opacity-100 scale-100"
        }`}
      >
        <span className="text-[0.65rem] sm:text-xs font-semibold tracking-[0.3em] uppercase text-[var(--terracotta)] mb-3">
          Atendimento Clínico & Avaliação
        </span>
        <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl text-[var(--coffee)] tracking-[0.08em] font-light">
          Kelle Tavares
        </h1>
        <div className="flex items-center gap-3 my-4">
          <span className="w-8 h-[1px] bg-[var(--terracotta)]/40"></span>
          <span className="text-xs sm:text-sm font-sans tracking-[0.25em] text-[var(--taupe)] uppercase">
            Psicologia
          </span>
          <span className="w-8 h-[1px] bg-[var(--terracotta)]/40"></span>
        </div>
      </div>

      {/* Cortina Inferior */}
      <div
        className={`w-full h-1/2 bg-[var(--ivory)] border-t border-[var(--terracotta)]/20 shadow-2xl transition-transform duration-1000 ease-[cubic-bezier(0.77,0,0.175,1)] ${
          isOpening ? "translate-y-full" : "translate-y-0"
        }`}
      />
    </div>
  );
};
