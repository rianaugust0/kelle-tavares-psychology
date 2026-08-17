/**
 * Camada conceitual de analytics.
 * Eventos preparados para mensuração de conversão e conexão futura com ferramentas de tráfego.
 */
export type AnalyticsEvent =
  | "whatsapp_click"
  | "whatsapp_home_hero_click"
  | "whatsapp_home_final_click"
  | "whatsapp_adult_hero_click"
  | "whatsapp_adult_final_click"
  | "whatsapp_child_hero_click"
  | "whatsapp_child_final_click"
  | "adult_service_click"
  | "child_service_click"
  | "instagram_click"
  | "contact_form_start"
  | "contact_form_submit";

export function track(event: AnalyticsEvent, payload: Record<string, unknown> = {}) {
  if (typeof window === "undefined") return;
  const w = window as unknown as { dataLayer?: unknown[] };
  w.dataLayer = w.dataLayer ?? [];
  w.dataLayer.push({ event, ...payload });
}
