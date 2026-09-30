import React, { useState } from "react";

interface VolumetricRayPhotoProps {
  src: string;
  alt: string;
  className?: string;
  aspectRatio?: string;
}

export const VolumetricRayPhoto: React.FC<VolumetricRayPhotoProps> = ({
  src,
  alt,
  className = "",
  aspectRatio = "aspect-[4/5]",
}) => {
  const [transform, setTransform] = useState({ rotateX: 0, rotateY: 0, shineX: 50, shineY: 50 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -6; // Inclinação suave 3D
    const rotateY = ((x - centerX) / centerX) * 6;

    const shineX = (x / rect.width) * 100;
    const shineY = (y / rect.height) * 100;

    setTransform({ rotateX, rotateY, shineX, shineY });
  };

  const handleMouseLeave = () => {
    setTransform({ rotateX: 0, rotateY: 0, shineX: 50, shineY: 50 });
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`relative group perspective-1000 overflow-hidden rounded-2xl cursor-pointer ${aspectRatio} ${className}`}
      style={{
        transformStyle: "preserve-3d",
      }}
    >
      {/* 1. Camada 3D de Fundo com Raios Volumétricos de Luz (God Rays) */}
      <div
        className="absolute inset-0 z-0 bg-gradient-to-tr from-[#3A2E2B]/20 via-[#BA9485]/15 to-[#FFF5EC]/30 transition-transform duration-300 ease-out"
        style={{
          transform: `translateZ(-20px) rotateX(${transform.rotateX * 0.5}deg) rotateY(${transform.rotateY * 0.5}deg)`,
        }}
      />

      {/* Raios Solares Volumétricos Reativos */}
      <div
        className="absolute inset-0 z-10 pointer-events-none opacity-60 group-hover:opacity-90 transition-opacity duration-500"
        style={{
          background: `radial-gradient(circle at ${transform.shineX}% ${transform.shineY}%, rgba(255, 245, 236, 0.45) 0%, rgba(186, 148, 133, 0.25) 35%, transparent 70%)`,
        }}
      />

      {/* 2. Camada da Fotografia (Retrato da Dra. Kelle / Consultório) */}
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover relative z-20 transition-transform duration-500 ease-out group-hover:scale-105"
        style={{
          transform: `translateZ(10px) rotateX(${transform.rotateX}deg) rotateY(${transform.rotateY}deg)`,
        }}
        loading="lazy"
      />

      {/* 3. Borda Editorial Dourada 3D Reativa */}
      <div
        className="absolute inset-0 z-30 border border-[#BA9485]/40 rounded-2xl pointer-events-none transition-all duration-300 group-hover:border-[#E5C9BD]"
        style={{
          transform: `translateZ(25px) rotateX(${transform.rotateX * 1.2}deg) rotateY(${transform.rotateY * 1.2}deg)`,
        }}
      />
    </div>
  );
};
