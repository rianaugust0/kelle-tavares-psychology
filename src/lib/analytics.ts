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

/**
 * Inicializa a tag do Google Analytics 4 de forma idempotente (evita duplicação).
 */
export function initGA() {
  if (typeof window === "undefined") return;
  if (document.getElementById("ga4-script")) return;

  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag() {
    window.dataLayer.push(arguments);
  };

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
  page: "home" | "adultos" | "infantil" | "conteudos" | string;
  position:
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
 * Rastreia cliques que direcionam para o WhatsApp (Evento Principal).
 */
export function trackWhatsAppClick(params: WhatsAppClickParams) {
  if (typeof window === "undefined") return;
  
  // GA4 gtag event
  if (typeof window.gtag === "function") {
    window.gtag("event", "whatsapp_click", {
      page: params.page,
      position: params.position,
      ...(params.service ? { service: params.service } : {}),
    });
  }

  // DataLayer backup
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: "whatsapp_click",
    ...params,
  });
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
