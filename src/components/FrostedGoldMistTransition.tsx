import React, { useEffect, useRef, useState } from "react";

export const FrostedGoldMistTransition: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.15 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-16 sm:h-24 my-6 pointer-events-none overflow-hidden select-none"
    >
      {/* 1. Onda de Vidro Frosted Liquid Glass */}
      <div
        className={`absolute inset-0 bg-gradient-to-r from-transparent via-[#F6F0EB]/80 to-transparent backdrop-blur-md transition-all duration-1000 ease-out ${
          isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
        }`}
      />

      {/* 2. Névoa Suave de Micropartículas de Ouro */}
      <div
        className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-full bg-gradient-to-r from-[#BA9485]/0 via-[#E5C9BD]/25 to-[#BA9485]/0 blur-2xl transition-all duration-1200 ease-out ${
          isVisible ? "opacity-100 scale-x-100" : "opacity-0 scale-x-50"
        }`}
      />

      {/* 3. Linha Editorial Divisória de Luxo */}
      <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex items-center justify-center">
        <div
          className={`h-[1px] bg-gradient-to-r from-transparent via-[#BA9485]/60 to-transparent transition-all duration-1000 ease-out ${
            isVisible ? "w-4/5 sm:w-2/3 opacity-100" : "w-0 opacity-0"
          }`}
        />
        <div
          className={`size-2 rounded-full bg-[#BA9485] shadow-[0_0_10px_rgba(186,148,133,0.8)] transition-all duration-700 delay-300 ${
            isVisible ? "scale-100 opacity-100" : "scale-0 opacity-0"
          }`}
        />
      </div>
    </div>
  );
};
