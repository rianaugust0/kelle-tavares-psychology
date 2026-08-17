import type { ReactNode } from "react";

/**
 * Moldura editorial para as fotografias reais de Kelle.
 * Enquanto a fotografia definitiva não estiver disponível, exibe uma imagem
 * de textura neutra com indicação discreta de substituição.
 */
export function PhotoFrame({
  src,
  alt,
  pending = false,
  note,
  priority = false,
  width,
  height,
  className = "",
  children,
}: {
  src: string;
  alt: string;
  pending?: boolean;
  note?: string;
  priority?: boolean;
  width: number;
  height: number;
  className?: string;
  children?: ReactNode;
}) {
  return (
    <figure className={`relative overflow-hidden bg-muted ${className}`}>
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        loading={priority ? "eager" : "lazy"}
        {...(priority ? { fetchPriority: "high" as const } : {})}
        className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out hover:scale-[1.02]"
      />
      {pending && (
        <figcaption className="absolute inset-x-0 bottom-0 bg-warm-white/85 px-4 py-3 text-center">
          <span className="label-caps block">Espaço reservado para fotografia</span>
          {note && <span className="mt-1 block text-[0.7rem] text-taupe">{note}</span>}
        </figcaption>
      )}
      {children}
    </figure>
  );
}
