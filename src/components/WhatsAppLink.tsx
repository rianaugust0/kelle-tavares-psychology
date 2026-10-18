import type { ReactNode } from "react";
import { useRouterState } from "@tanstack/react-router";
import { getWhatsAppUrl, type WhatsAppTarget } from "@/config/site";
import { trackWhatsAppClick } from "@/lib/analytics";

export function WhatsAppLink({
  children,
  className = "",
  location,
  target,
  ariaLabel,
  onClick,
}: {
  children: ReactNode;
  className?: string;
  location: string;
  target?: WhatsAppTarget;
  event?: string;
  ariaLabel?: string;
  onClick?: () => void;
}) {
  const routerState = useRouterState();
  const currentPath = routerState?.location?.pathname || "/";

  let pageName = "home";
  if (currentPath.includes("adultos")) {
    pageName = "adultos";
  } else if (currentPath.includes("infantil")) {
    pageName = "infantil";
  } else if (currentPath.includes("conteudos")) {
    pageName = "conteudos";
  } else if (currentPath.includes("sobre")) {
    pageName = "sobre";
  }

  // Se o target não foi fornecido explicitamente, herda da rota atual
  const effectiveTarget: WhatsAppTarget =
    target ?? (pageName === "adultos" ? "adultos" : pageName === "infantil" ? "infantil" : "home");

  const serviceCategory: "adultos" | "infantil" | "geral" =
    effectiveTarget === "adultos" ? "adultos" : effectiveTarget === "infantil" ? "infantil" : "geral";

  const url = getWhatsAppUrl(effectiveTarget);
  const external = url.startsWith("http");

  return (
    <a
      href={url}
      aria-label={ariaLabel}
      data-button-location={location}
      data-service-type={serviceCategory}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      onClick={() => {
        onClick?.();
        trackWhatsAppClick({
          button_location: location,
          service_type: serviceCategory,
          page_location: typeof window !== "undefined" ? window.location.href : currentPath,
          page: pageName,
          position: location,
          service: serviceCategory,
        });
      }}
      className={className}
    >
      {children}
    </a>
  );
}
