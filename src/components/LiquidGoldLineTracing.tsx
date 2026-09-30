import React, { useEffect, useRef, useState } from "react";

interface LiquidGoldLineTracingProps {
  className?: string;
  width?: number;
  height?: number;
  orientation?: "horizontal" | "vertical" | "custom";
}

export const LiquidGoldLineTracing: React.FC<LiquidGoldLineTracingProps> = ({
  className = "",
  orientation = "horizontal",
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef} className={`relative overflow-hidden pointer-events-none ${className}`}>
      {orientation === "horizontal" ? (
        <svg
          className="w-full h-3 overflow-visible"
          viewBox="0 0 400 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Trilha de Ouro Líquido com Gradiente */}
          <defs>
            <linearGradient id="goldLiquidGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#BA9485" stopOpacity="0.1" />
              <stop offset="50%" stopColor="#D4A390" stopOpacity="1" />
              <stop offset="100%" stopColor="#BA9485" stopOpacity="0.2" />
            </linearGradient>
            <filter id="goldGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="1.5" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* Linha Guia Fina */}
          <path
            d="M0 6 H400"
            stroke="rgba(186, 148, 133, 0.2)"
            strokeWidth="1"
          />

          {/* Linha Animada Desenhada em Ouro Líquido */}
          <path
            d="M0 6 H400"
            stroke="url(#goldLiquidGrad)"
            strokeWidth="2"
            strokeLinecap="round"
            filter="url(#goldGlow)"
            className="transition-all duration-1200 cubic-bezier(0.22, 1, 0.36, 1)"
            style={{
              strokeDasharray: 400,
              strokeDashoffset: isVisible ? 0 : 400,
            }}
          />

          {/* Ponto Brilhante na Ponta do Traço */}
          <circle
            cx={isVisible ? "400" : "0"}
            cy="6"
            r="2.5"
            fill="#D4A390"
            className="transition-all duration-1200 cubic-bezier(0.22, 1, 0.36, 1) drop-shadow-[0_0_8px_rgba(212,163,144,0.9)]"
          />
        </svg>
      ) : (
        <svg
          className="h-full w-3 overflow-visible"
          viewBox="0 0 12 400"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="goldLiquidGradVert" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#BA9485" stopOpacity="0.1" />
              <stop offset="50%" stopColor="#D4A390" stopOpacity="1" />
              <stop offset="100%" stopColor="#BA9485" stopOpacity="0.2" />
            </linearGradient>
          </defs>
          <path
            d="M6 0 V400"
            stroke="url(#goldLiquidGradVert)"
            strokeWidth="2"
            strokeLinecap="round"
            className="transition-all duration-1200 cubic-bezier(0.22, 1, 0.36, 1)"
            style={{
              strokeDasharray: 400,
              strokeDashoffset: isVisible ? 0 : 400,
            }}
          />
        </svg>
      )}
    </div>
  );
};
