import type { ReactNode } from "react";
import { WHATSAPP_URL } from "@/config/site";
import { track } from "@/lib/analytics";

export function WhatsAppLink({
  children,
  className = "",
  location,
  ariaLabel,
}: {
  children: ReactNode;
  className?: string;
  location: string;
  ariaLabel?: string;
}) {
  const external = WHATSAPP_URL.startsWith("http");
  return (
    <a
      href={WHATSAPP_URL}
      aria-label={ariaLabel}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      onClick={() => track("whatsapp_click", { location })}
      className={className}
    >
      {children}
    </a>
  );
}
