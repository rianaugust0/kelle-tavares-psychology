import { useRouterState } from "@tanstack/react-router";
import { getWhatsAppUrl, type WhatsAppTarget } from "@/config/site";
import { trackWhatsAppClick } from "@/lib/analytics";

export function FloatingWhatsApp() {
  const routerState = useRouterState();
  const path = routerState.location.pathname;

  let target: WhatsAppTarget = "home";
  let pageName = "home";
  let serviceCategory: "adultos" | "infantil" | "geral" = "geral";

  if (path.includes("adultos")) {
    target = "adultos";
    pageName = "adultos";
    serviceCategory = "adultos";
  } else if (path.includes("infantil")) {
    target = "infantil";
    pageName = "infantil";
    serviceCategory = "infantil";
  } else if (path.includes("conteudos")) {
    pageName = "conteudos";
  }

  const url = getWhatsAppUrl(target);

  return (
    <aside aria-label="Contato rápido via WhatsApp" className="fixed bottom-6 right-6 z-40">
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() =>
          trackWhatsAppClick({
            page: pageName,
            position: "floating",
            service: serviceCategory,
          })
        }
        aria-label="Conversar com Kelle Tavares pelo WhatsApp"
        className="group relative flex items-center justify-center size-14 md:size-15 rounded-full bg-[#25D366] text-white shadow-xl transition-all duration-300 hover:scale-105 hover:bg-[#20bd5a] hover:shadow-2xl focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:ring-offset-2"
      >
        {/* Subtle ping ring */}
        <span className="absolute -inset-1 rounded-full bg-[#25D366]/30 animate-ping pointer-events-none opacity-75 duration-1000" />

        {/* WhatsApp Icon */}
        <svg
          className="size-7 md:size-8 fill-current relative z-10"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
        </svg>

        {/* Hover tooltip */}
        <span className="pointer-events-none absolute right-full mr-3 whitespace-nowrap bg-foreground text-primary-foreground px-3 py-1.5 text-[0.72rem] font-medium tracking-wide uppercase shadow-lg opacity-0 transition-opacity duration-200 group-hover:opacity-100 hidden md:block">
          Conversar pelo WhatsApp
        </span>
      </a>
    </aside>
  );
}
