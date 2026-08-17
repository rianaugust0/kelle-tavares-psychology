import type { ReactNode } from "react";
import { getWhatsAppUrl, type WhatsAppTarget } from "@/config/site";
import { track, type AnalyticsEvent } from "@/lib/analytics";

export function WhatsAppLink({
  children,
  className = "",
  location,
  target = "home",
  event,
  ariaLabel,
}: {
  children: ReactNode;
  className?: string;
  location: string;
  target?: WhatsAppTarget;
  event?: AnalyticsEvent;
  ariaLabel?: string;
}) {
  const url = getWhatsAppUrl(target);
  const external = url.startsWith("http");

  return (
    <a
      href={url}
      aria-label={ariaLabel}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      onClick={() => {
        if (event) {
          track(event, { location, target });
        } else {
          track("whatsapp_click", { location, target });
        }
      }}
      className={className}
    >
      {children}
    </a>
  );
}
