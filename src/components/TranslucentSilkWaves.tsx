import React from "react";

export const TranslucentSilkWaves: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0 opacity-30">
      {/* Ribbon 1: Onda Translúcida Dourada */}
      <svg
        className="absolute top-10 -left-20 w-[1200px] h-[400px] opacity-30 animate-aurora-glow"
        viewBox="0 0 1200 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M-100 200 C300 50, 600 350, 1300 150"
          stroke="url(#silkGrad1)"
          strokeWidth="40"
          strokeLinecap="round"
          className="blur-3xl"
        />
        <defs>
          <linearGradient id="silkGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#BA9485" stopOpacity="0.15" />
            <stop offset="50%" stopColor="#E5C9BD" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#D4A390" stopOpacity="0.05" />
          </linearGradient>
        </defs>
      </svg>

      {/* Ribbon 2: Onda Translúcida Marfim */}
      <svg
        className="absolute bottom-0 -right-20 w-[1100px] h-[350px] opacity-30 animate-float-slow"
        viewBox="0 0 1100 350"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 150 C400 300, 700 50, 1200 200"
          stroke="url(#silkGrad2)"
          strokeWidth="35"
          strokeLinecap="round"
          className="blur-3xl"
        />
        <defs>
          <linearGradient id="silkGrad2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#EFE6DF" stopOpacity="0.4" />
            <stop offset="50%" stopColor="#BA9485" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#FFF5EC" stopOpacity="0.4" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};
