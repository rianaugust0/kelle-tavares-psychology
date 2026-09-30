import React from "react";

interface GoldFoilTextProps {
  children: React.ReactNode;
  className?: string;
  as?: "h1" | "h2" | "h3" | "h4" | "span" | "div";
}

export const GoldFoilText: React.FC<GoldFoilTextProps> = ({
  children,
  className = "",
  as: Component = "h2",
}) => {
  return (
    <Component
      className={`relative inline-block font-serif font-semibold tracking-[0.06em] text-transparent bg-clip-text bg-gradient-to-r from-[#3A2E2B] via-[#C49380] via-[#F3E6DF] via-[#BA9485] to-[#443632] animate-shimmer drop-shadow-xs ${className}`}
    >
      {children}
    </Component>
  );
};
