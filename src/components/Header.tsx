import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { site } from "@/config/site";
import { WhatsAppLink } from "./WhatsAppLink";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
        scrolled ? "bg-background/92 border-b border-border backdrop-blur-sm" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-[1240px] items-center justify-between px-6 py-4 md:px-10 md:py-5">
        <a href="#inicio" className="group leading-none" aria-label="Kelle Tavares, psicóloga">
          <span className="block font-serif text-[1.35rem] tracking-tight text-foreground md:text-[1.5rem]">
            {site.name}
          </span>
          <span className="label-caps mt-1 block">{site.professionalTitle}</span>
        </a>

        <nav aria-label="Navegação principal" className="hidden items-center gap-7 lg:flex">
          {site.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="link-underline text-[0.82rem] text-taupe transition-colors hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
          <WhatsAppLink
            location="header"
            className="border border-foreground px-5 py-2.5 text-[0.75rem] font-medium tracking-[0.12em] uppercase text-foreground transition-colors duration-300 hover:bg-foreground hover:text-primary-foreground"
          >
            Agendar atendimento
          </WhatsAppLink>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          className="-mr-2 p-2 text-foreground lg:hidden"
        >
          {open ? <X className="size-5" strokeWidth={1.3} /> : <Menu className="size-5" strokeWidth={1.3} />}
        </button>
      </div>

      {open && (
        <div className="fixed inset-0 top-[73px] bg-background px-6 pt-8 pb-12 lg:hidden">
          <nav aria-label="Navegação mobile" className="flex flex-col gap-6">
            {site.nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="font-serif text-3xl text-foreground"
              >
                {item.label}
              </a>
            ))}
            <div className="rule mt-2" />
            <WhatsAppLink
              location="header_mobile"
              className="border border-foreground px-6 py-4 text-center text-[0.75rem] font-medium tracking-[0.14em] uppercase text-foreground"
            >
              Agendar atendimento
            </WhatsAppLink>
          </nav>
        </div>
      )}
    </header>
  );
}
