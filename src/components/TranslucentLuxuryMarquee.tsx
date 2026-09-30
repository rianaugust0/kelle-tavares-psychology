import React from "react";

const MARQUEE_ITEMS = [
  "PSICOLOGIA CLÍNICA & DESENVOLVIMENTO",
  "ATENDIMENTO HUMANIZADO",
  "GOIÂNIA & ONLINE",
  "PÓS EM NEUROPSICOLOGIA & ABA",
  "ESCUTA QUALIFICADA",
  "REEMBOLSO PLANO DE SAÚDE",
  "EXCELÊNCIA & CUIDADO",
];

export const TranslucentLuxuryMarquee: React.FC = () => {
  return (
    <div className="relative w-full overflow-hidden border-y border-[#D9C8BC]/20 bg-transparent py-1.5 z-20 pointer-events-none select-none">
      {/* Soft edge fading */}
      <div className="absolute inset-y-0 left-0 w-12 sm:w-20 bg-gradient-to-r from-[#F6F0EB] to-transparent z-10" />
      <div className="absolute inset-y-0 right-0 w-12 sm:w-20 bg-gradient-to-l from-[#F6F0EB] to-transparent z-10" />

      {/* Marquee ticker track */}
      <div className="flex w-max animate-marquee-slow opacity-75">
        {[...Array(2)].map((_, arrayIdx) => (
          <div key={arrayIdx} className="flex items-center gap-6 sm:gap-10 px-2">
            {MARQUEE_ITEMS.map((item, itemIdx) => (
              <React.Fragment key={itemIdx}>
                <span className="font-sans text-[0.65rem] sm:text-[0.7rem] tracking-[0.28em] text-[#6E5F57] uppercase font-light">
                  {item}
                </span>
                <span className="text-[0.6rem] text-[#BA9485]/50 font-light select-none">
                  •
                </span>
              </React.Fragment>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};
