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
  const [scrollProgress, setScrollProgress] = useState(0);
  const routerState = useRouterState();

  // Fecha o menu mobile quando a rota mudar
  useEffect(() => {
    setOpen(false);
  }, [routerState.location.pathname]);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 8);
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        setScrollProgress((window.scrollY / totalHeight) * 100);
      }
    };
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
          ? "bg-[#F6F0EB] border-b border-[#D9C8BC] shadow-sm"
          : scrolled
          ? "bg-[#F6F0EB]/95 backdrop-blur-md border-b border-[#D9C8BC]/40 shadow-xs"
          : "bg-[#F6F0EB]"
      }`}
    >
      {/* Barra de Progresso de Leitura Horizontal no Topo do Header */}
      <div 
        className="absolute bottom-0 left-0 h-[2.5px] bg-gradient-to-r from-[#BA9485] via-[#7E655B] to-[#3A2E2B] transition-all duration-150 ease-out z-50 pointer-events-none"
        style={{ width: `${scrollProgress}%` }}
      />

      <div className="mx-auto flex max-w-[1280px] items-center justify-between px-6 py-4 md:px-10 md:py-5">
        <Link 
          to="/" 
          onClick={() => setOpen(false)}
          className="group leading-none z-50 relative flex flex-col" 
          aria-label="Kelle Tavares, psicóloga"
        >
          <span className="block font-serif text-[1.4rem] font-medium tracking-tight text-[#3A2E2B]">
            {site.name}
          </span>
          <span className="text-[0.58rem] font-medium tracking-[0.3em] uppercase text-[#8E7D76] mt-0.5 block">
            {site.professionalTitle}
          </span>
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
                    className="link-underline flex items-center gap-1.5 text-[0.78rem] font-normal text-[#5E5049] transition-colors hover:text-[#3A2E2B]"
                  >
                    {item.label}
                    <ChevronDown className="size-3.5 opacity-60 transition-transform duration-200" />
                  </a>

                  {servicesOpen && (
                    <div className="absolute top-full -left-4 mt-2 w-64 border border-[#D9C8BC] bg-[#F6F0EB] p-3 shadow-md backdrop-blur-md">
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
                          className="block rounded-xs px-3 py-2.5 text-[0.78rem] text-[#5E5049] transition-colors hover:bg-[#EFE6DF] hover:text-[#3A2E2B]"
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
                  className="link-underline text-[0.78rem] font-normal text-[#5E5049] transition-colors hover:text-[#3A2E2B]"
                >
                  {item.label}
                </Link>
              );
            }

            return (
              <a
                key={item.href}
                href={item.href}
                className="link-underline text-[0.78rem] font-normal text-[#5E5049] transition-colors hover:text-[#3A2E2B]"
              >
                {item.label}
              </a>
            );
          })}

          <WhatsAppLink
            location="header"
            className="border border-[#3A2E2B] bg-transparent px-5 py-2.5 text-[0.7rem] font-medium tracking-[0.14em] uppercase text-[#3A2E2B] transition-colors duration-200 hover:bg-[#3A2E2B] hover:text-white"
          >
            AGENDAR ATENDIMENTO
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
