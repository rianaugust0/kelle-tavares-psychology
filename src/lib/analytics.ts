/**
 * Camada de Analytics e Google Analytics 4 (GA4).
 * Measurement ID: G-D1ZCJ27LJT
 * 
 * Privacidade e Segurança:
 * Não envia dados pessoais, diagnóstico, conteúdos de formulário, nomes ou telefones.
 * Apenas rastreia rota, página, posição de clique e categoria geral de atendimento.
 */

export const GA_MEASUREMENT_ID = "G-D1ZCJ27LJT";

declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
  }
}

let isWhatsAppListenerInitialized = false;
let lastWhatsAppClickTime = 0;
const WHATSAPP_DEDUP_WINDOW_MS = 500;

/**
 * Verifica se uma URL direciona para o WhatsApp (wa.me, api.whatsapp.com ou web.whatsapp.com).
 */
export function isWhatsAppUrl(url: string | null | undefined): boolean {
  if (!url) return false;
  try {
    const parsed = new URL(url, typeof window !== "undefined" ? window.location.origin : "https://kellepsitavares.netlify.app");
    const host = parsed.hostname.toLowerCase();
    return (
      host === "wa.me" ||
      host.endsWith(".wa.me") ||
      host === "api.whatsapp.com" ||
      host === "web.whatsapp.com"
    );
  } catch {
    const lower = url.toLowerCase();
    return (
      lower.includes("wa.me/") ||
      lower.includes("api.whatsapp.com") ||
      lower.includes("web.whatsapp.com")
    );
  }
}

function inferPageName(pathname: string): string {
  if (pathname.includes("adultos")) return "adultos";
  if (pathname.includes("infantil")) return "infantil";
  if (pathname.includes("conteudos")) return "conteudos";
  if (pathname.includes("sobre")) return "sobre";
  return "home";
}

function inferServiceType(pathname: string, href?: string | null): "adultos" | "infantil" | "geral" {
  const decodedHref = href ? decodeURIComponent(href).toLowerCase() : "";
  if (pathname.includes("adultos") || decodedHref.includes("adultos")) return "adultos";
  if (pathname.includes("infantil") || decodedHref.includes("infantil")) return "infantil";
  return "geral";
}

/**
 * Registra listener global delegando cliques em qualquer link ou botão que direcione ao WhatsApp,
 * garantindo cobertura total sem duplicar eventos já disparados pelo componente WhatsAppLink.
 */
function initWhatsAppClickTracking() {
  if (typeof window === "undefined" || typeof document === "undefined") return;
  if (isWhatsAppListenerInitialized) return;
  isWhatsAppListenerInitialized = true;

  document.addEventListener(
    "click",
    (event) => {
      const target = event.target as HTMLElement | null;
      if (!target || typeof target.closest !== "function") return;

      const clickable = target.closest("a, button") as HTMLElement | null;
      if (!clickable) return;

      const href =
        clickable.getAttribute("href") ||
        clickable.dataset.whatsappUrl ||
        clickable.getAttribute("data-href");

      if (!isWhatsAppUrl(href)) return;

      const pathname = window.location.pathname || "/";
      const pageName = inferPageName(pathname);
      const buttonLocation =
        clickable.dataset.buttonLocation ||
        clickable.getAttribute("data-location") ||
        clickable.id ||
        "whatsapp_button";
      const serviceType =
        (clickable.dataset.serviceType as "adultos" | "infantil" | "geral" | undefined) ||
        inferServiceType(pathname, href);

      trackWhatsAppClick({
        button_location: buttonLocation,
        service_type: serviceType,
        page_location: window.location.href,
        page: pageName,
        position: buttonLocation,
        service: serviceType,
      });
    },
    { capture: false }
  );
}

/**
 * Inicializa a tag do Google Analytics 4 de forma idempotente (evita duplicação).
 */
export function initGA() {
  if (typeof window === "undefined") return;

  initWhatsAppClickTracking();

  if (document.getElementById("ga4-script")) return;

  window.dataLayer = window.dataLayer || [];
  if (typeof window.gtag !== "function") {
    window.gtag = function gtag() {
      window.dataLayer.push(arguments);
    };
  }

  window.gtag("js", new Date());
  window.gtag("config", GA_MEASUREMENT_ID, {
    send_page_view: false, // Controlado manualmente pelas mudanças de rota client-side do TanStack Router
    anonymize_ip: true,
  });

  const script = document.createElement("script");
  script.id = "ga4-script";
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
  document.head.appendChild(script);
}

/**
 * Dispara evento de page_view do GA4 nas mudanças de rota SPA.
 */
export function trackPageView(url: string, title?: string) {
  if (typeof window === "undefined" || !window.gtag) return;
  window.gtag("event", "page_view", {
    page_path: url,
    page_location: window.location.href,
    page_title: title || document.title,
  });
}

/**
 * Parâmetros seguros para o evento principal de WhatsApp.
 */
export interface WhatsAppClickParams {
  button_location?: string;
  service_type?: "adultos" | "infantil" | "geral" | string;
  page_location?: string;
  page?: "home" | "adultos" | "infantil" | "conteudos" | string;
  position?:
    | "header"
    | "header_mobile"
    | "hero"
    | "cta_middle"
    | "cta_final"
    | "floating"
    | "faq"
    | "modality"
    | "about"
    | string;
  service?: "adultos" | "infantil" | "geral";
}

/**
 * Rastreia cliques reais que direcionam para o WhatsApp (Evento Principal: whatsapp_click).
 * Possui proteção contra disparos duplicados no mesmo clique.
 */
export function trackWhatsAppClick(params: WhatsAppClickParams | string) {
  if (typeof window === "undefined") return;

  const now = Date.now();
  if (now - lastWhatsAppClickTime < WHATSAPP_DEDUP_WINDOW_MS) {
    return;
  }
  lastWhatsAppClickTime = now;

  const pathname = window.location.pathname || "/";
  const normalizedParams: WhatsAppClickParams =
    typeof params === "string" ? { button_location: params, position: params } : params;

  const buttonLocation =
    normalizedParams.button_location || normalizedParams.position || "whatsapp_button";
  const serviceType =
    normalizedParams.service_type || normalizedParams.service || inferServiceType(pathname);
  const pageLocation = normalizedParams.page_location || window.location.href;
  const pageName = normalizedParams.page || inferPageName(pathname);

  const eventPayload = {
    button_location: buttonLocation,
    service_type: serviceType,
    page_location: pageLocation,
    page: pageName,
    position: buttonLocation,
    service: serviceType,
    transport_type: "beacon",
  };

  if (typeof window.gtag === "function") {
    window.gtag("event", "whatsapp_click", eventPayload);
  } else {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: "whatsapp_click",
      ...eventPayload,
    });
  }
}

/**
 * Rastreia interesse no atendimento para Adultos.
 */
export function trackAdultServiceClick(position: string = "services_card") {
  if (typeof window === "undefined") return;
  if (typeof window.gtag === "function") {
    window.gtag("event", "adult_service_click", {
      page: window.location.pathname,
      position,
      service: "adultos",
    });
  }
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: "adult_service_click",
    position,
    service: "adultos",
  });
}

/**
 * Rastreia interesse no atendimento Infantil.
 */
export function trackChildServiceClick(position: string = "services_card") {
  if (typeof window === "undefined") return;
  if (typeof window.gtag === "function") {
    window.gtag("event", "child_service_click", {
      page: window.location.pathname,
      position,
      service: "infantil",
    });
  }
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: "child_service_click",
    position,
    service: "infantil",
  });
}

export type AnalyticsEvent =
  | "whatsapp_click"
  | "adult_service_click"
  | "child_service_click"
  | "instagram_click";

export function track(event: AnalyticsEvent, payload: Record<string, unknown> = {}) {
  if (typeof window === "undefined") return;
  if (typeof window.gtag === "function") {
    window.gtag("event", event, payload);
  }
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event, ...payload });
}
