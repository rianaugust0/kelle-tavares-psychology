import { site, INSTAGRAM_URL } from "@/config/site";
import { track } from "@/lib/analytics";

export function Footer() {
  return (
    <footer className="border-t border-border bg-background py-14">
      <div className="mx-auto flex max-w-[1240px] flex-col gap-8 px-6 md:flex-row md:items-end md:justify-between md:px-10">
        <div>
          <p className="font-serif text-[1.5rem] text-foreground">{site.name}</p>
          <p className="label-caps mt-2">
            {site.professionalTitle} • CRP {site.crp}
          </p>
          <p className="mt-4 text-[0.85rem] text-taupe">
            Atendimento online • {site.city}
          </p>
        </div>

        <nav aria-label="Navegação do rodapé" className="flex flex-wrap gap-x-6 gap-y-2">
          <a href="/" className="link-underline text-[0.8rem] text-taupe hover:text-foreground">
            Início
          </a>
          <a href="/#sobre" className="link-underline text-[0.8rem] text-taupe hover:text-foreground">
            Sobre
          </a>
          <a href="/adultos" className="link-underline text-[0.8rem] text-taupe hover:text-foreground">
            Psicoterapia para Adultos
          </a>
          <a href="/infantil" className="link-underline text-[0.8rem] text-taupe hover:text-foreground">
            Acompanhamento Infantil
          </a>
          <a href="/#conteudos" className="link-underline text-[0.8rem] text-taupe hover:text-foreground">
            Conteúdos
          </a>
          <a href="/#duvidas" className="link-underline text-[0.8rem] text-taupe hover:text-foreground">
            Dúvidas
          </a>
          {INSTAGRAM_URL && (
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => track("instagram_click", { location: "footer" })}
              className="link-underline text-[0.8rem] text-taupe hover:text-foreground"
            >
              Instagram
            </a>
          )}
        </nav>
      </div>
      <div className="mx-auto mt-12 max-w-[1240px] px-6 md:px-10">
        <div className="rule" />
        <p className="mt-6 text-[0.72rem] tracking-[0.08em] text-taupe">
          © {new Date().getFullYear()} {site.name}. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
