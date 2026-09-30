import React, { useEffect, useState } from "react";

export const LuxuryCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [trailingPos, setTrailingPos] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [cursorText, setCursorText] = useState("");
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    // Detecta se é tela touch
    if (window.matchMedia("(pointer: coarse)").matches) {
      setIsTouchDevice(true);
      return;
    }

    let animationFrameId: number;

    const onMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });

      // Checa se o elemento sob o mouse é interativo
      const target = e.target as HTMLElement | null;
      const interactiveEl = target?.closest(
        "a, button, [role='button'], input, textarea, select, [data-cursor]"
      ) as HTMLElement | null;

      if (interactiveEl) {
        setIsHovered(true);
        const customText = interactiveEl.getAttribute("data-cursor");
        if (customText) {
          setCursorText(customText);
        } else if (interactiveEl.tagName === "A" || interactiveEl.tagName === "BUTTON") {
          const textContent = interactiveEl.textContent?.trim().toUpperCase() || "";
          if (textContent.includes("AGENDAR") || textContent.includes("CONSULTA")) {
            setCursorText("AGENDAR");
          } else if (textContent.includes("WHATSAPP") || textContent.includes("CONVERSAR")) {
            setCursorText("CONVERSAR");
          } else {
            setCursorText("VER");
          }
        } else {
          setCursorText("");
        }
      } else {
        setIsHovered(false);
        setCursorText("");
      }
    };

    window.addEventListener("mousemove", onMouseMove);

    // Suavização do anel fluido (lerp)
    const render = () => {
      setTrailingPos((prev) => {
        const dx = position.x - prev.x;
        const dy = position.y - prev.y;
        return {
          x: prev.x + dx * 0.18,
          y: prev.y + dy * 0.18,
        };
      });
      animationFrameId = requestAnimationFrame(render);
    };
    render();

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, [position.x, position.y]);

  if (isTouchDevice) return null;

  return (
    <>
      {/* Ponto Central */}
      <div
        className="fixed top-0 left-0 w-2 h-2 rounded-full bg-[var(--terracotta)] pointer-events-none z-[99999] transition-opacity duration-300"
        style={{
          transform: `translate3d(${position.x - 4}px, ${position.y - 4}px, 0)`,
          opacity: isHovered ? 0.4 : 0.85,
        }}
      />

      {/* Anel Fluido Exterior */}
      <div
        className={`fixed top-0 left-0 rounded-full border pointer-events-none z-[99998] flex items-center justify-center text-center transition-all duration-300 ease-out backdrop-blur-[2px] ${
          isHovered
            ? "w-20 h-20 -ml-10 -mt-10 border-[var(--terracotta)]/60 bg-[var(--ivory)]/40 shadow-lg scale-100"
            : "w-10 h-10 -ml-5 -mt-5 border-[var(--terracotta)]/35 bg-transparent scale-100"
        }`}
        style={{
          transform: `translate3d(${trailingPos.x}px, ${trailingPos.y}px, 0)`,
        }}
      >
        {isHovered && cursorText && (
          <span className="text-[0.6rem] font-sans font-semibold tracking-widest text-[var(--coffee)] uppercase px-1 transition-opacity duration-200">
            {cursorText}
          </span>
        )}
      </div>
    </>
  );
};
