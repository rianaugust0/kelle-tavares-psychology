/**
 * Camada conceitual de analytics.
 * Nenhum serviço externo conectado ainda: os eventos são apenas encaminhados
 * para window.dataLayer quando existir.
 */
export type AnalyticsEvent =
  | "whatsapp_click"
  | "instagram_click"
  | "contact_form_start"
  | "contact_form_submit"
  | "adult_service_click"
  | "child_service_click";

export function track(event: AnalyticsEvent, payload: Record<string, unknown> = {}) {
  if (typeof window === "undefined") return;
  const w = window as unknown as { dataLayer?: unknown[] };
  w.dataLayer = w.dataLayer ?? [];
  w.dataLayer.push({ event, ...payload });
}
