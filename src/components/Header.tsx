import { useEffect, useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link, useRouterState } from "@tanstack/react-router";
import { site } from "@/config/site";
import { WhatsAppLink } from "./WhatsAppLink";
import { trackAdultServiceClick, trackChildServiceClick } from "@/lib/analytics";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const routerState = useRouterState();

  // Fecha o menu mobile quando a rota mudar
  useEffect(() => {
    setOpen(false);
  }, [routerState.location.pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        open
          ? "bg-ivory border-b border-border shadow-sm"
          : scrolled
          ? "header-scrolled"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-[1240px] items-center justify-between px-6 py-4 md:px-10 md:py-5">
        <Link 
          to="/" 
          onClick={() => setOpen(false)}
          className="group leading-none z-50 relative" 
          aria-label="Kelle Tavares, psicóloga"
        >
          <span className="block font-serif text-[1.35rem] tracking-tight text-foreground md:text-[1.5rem]">
            {site.name}
          </span>
          <span className="label-caps mt-1 block">{site.professionalTitle}</span>
        </Link>

        {/* Desktop Nav */}
        <nav aria-label="Navegação principal" className="hidden items-center gap-7 lg:flex">
          {site.nav.map((item) => {
            if ("children" in item && item.children) {
              return (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => setServicesOpen(true)}
                  onMouseLeave={() => setServicesOpen(false)}
                >
                  <a
                    href={item.href}
                    className="link-underline flex items-center gap-1 text-[0.82rem] text-taupe transition-colors hover:text-foreground"
                  >
                    {item.label}
                    <ChevronDown className="size-3.5 opacity-60 transition-transform duration-200" />
                  </a>

                  {servicesOpen && (
                    <div className="absolute top-full -left-4 mt-2 w-64 border border-border bg-warm-white/95 p-3 shadow-md backdrop-blur-md">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          to={child.href}
                          onClick={() => {
                            if (child.href === "/adultos") {
                              trackAdultServiceClick("header_dropdown");
                            } else if (child.href === "/infantil") {
                              trackChildServiceClick("header_dropdown");
                            }
                          }}
                          className="block rounded-xs px-3 py-2.5 text-[0.82rem] text-taupe transition-colors hover:bg-blush/40 hover:text-foreground"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            }

            if (item.href.startsWith("/") && !item.href.includes("#")) {
              return (
                <Link
                  key={item.href}
                  to={item.href}
                  className="link-underline text-[0.82rem] text-taupe transition-colors hover:text-foreground"
                >
                  {item.label}
                </Link>
              );
            }

            return (
              <a
                key={item.href}
                href={item.href}
                className="link-underline text-[0.82rem] text-taupe transition-colors hover:text-foreground"
              >
                {item.label}
              </a>
            );
          })}

          <WhatsAppLink
            location="header"
            className="border border-foreground px-5 py-2.5 text-[0.75rem] font-medium tracking-[0.12em] uppercase text-foreground transition-all duration-300 hover:bg-foreground hover:text-primary-foreground"
          >
            Agendar atendimento
          </WhatsAppLink>
        </nav>

        {/* Mobile Hamburger Toggle Button */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          className="-mr-2 p-2.5 text-foreground z-50 relative flex items-center justify-center focus:outline-none lg:hidden"
        >
          {open ? <X className="size-6 text-foreground" strokeWidth={1.5} /> : <Menu className="size-6 text-foreground" strokeWidth={1.5} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {open && (
        <div className="fixed inset-x-0 top-0 bottom-0 h-[100dvh] bg-ivory pt-24 px-6 pb-10 z-40 overflow-y-auto flex flex-col justify-between border-t border-border lg:hidden animate-in fade-in duration-200">
          <nav aria-label="Navegação mobile" className="flex flex-col gap-5 pt-2">
            <Link
              to="/"
              onClick={() => setOpen(false)}
              className="font-serif text-[1.9rem] text-foreground hover:text-terracotta transition-colors"
            >
              Início
            </Link>
            
            <Link
              to="/sobre"
              onClick={() => setOpen(false)}
              className="font-serif text-[1.9rem] text-foreground hover:text-terracotta transition-colors"
            >
              Sobre
            </Link>

            <div className="flex flex-col gap-2.5 border-y border-border/80 py-3.5 my-1">
              <p className="label-caps font-semibold text-terracotta">Atendimentos</p>
              <Link
                to="/adultos"
                onClick={() => {
                  trackAdultServiceClick("header_mobile");
                  setOpen(false);
                }}
                className="font-serif text-[1.5rem] text-foreground/90 pl-3 hover:text-terracotta transition-colors"
              >
                Psicoterapia para Adultos
              </Link>
              <Link
                to="/infantil"
                onClick={() => {
                  trackChildServiceClick("header_mobile");
                  setOpen(false);
                }}
                className="font-serif text-[1.5rem] text-foreground/90 pl-3 hover:text-terracotta transition-colors"
              >
                Acompanhamento Infantil
              </Link>
            </div>

            <a
              href="/#conteudos"
              onClick={() => setOpen(false)}
              className="font-serif text-[1.9rem] text-foreground hover:text-terracotta transition-colors"
            >
              Conteúdos
            </a>

            <a
              href="/#duvidas"
              onClick={() => setOpen(false)}
              className="font-serif text-[1.9rem] text-foreground hover:text-terracotta transition-colors"
            >
              Dúvidas
            </a>
          </nav>

          <div className="pt-6 border-t border-border/80">
            <WhatsAppLink
              location="header_mobile"
              className="block w-full py-4 text-center text-[0.8rem] font-bold tracking-[0.16em] uppercase bg-foreground text-primary-foreground transition-all duration-300 hover:bg-terracotta hover:text-white shadow-md"
            >
              Agendar atendimento
            </WhatsAppLink>
            <p className="mt-4 text-center text-[0.72rem] tracking-wider text-taupe uppercase">
              {site.city} • CRP {site.crp}
            </p>
          </div>
        </div>
      )}
    </header>
  );
}
