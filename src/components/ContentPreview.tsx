import { Link } from "@tanstack/react-router";
import { articles } from "@/data/articles";
import { INSTAGRAM_URL } from "@/config/site";
import { track } from "@/lib/analytics";
import { Reveal } from "./Reveal";

export function ContentPreview() {
  return (
    <section id="conteudos" className="border-t border-border py-20 md:py-28">
      <div className="mx-auto max-w-[1240px] px-6 md:px-10">
        <Reveal className="max-w-2xl">
          <div className="flex items-center gap-3">
            <span className="h-px w-6 bg-terracotta/60" />
            <p className="eyebrow">Conteúdos</p>
          </div>
          <h2 className="mt-6 text-[2.1rem] leading-tight text-foreground sm:text-[2.9rem]">
            Psicologia também é compreensão.
          </h2>
          <p className="mt-6 text-[1rem] text-taupe leading-relaxed">
            Reflexões e conteúdos sobre comportamento, desenvolvimento, relações, emoções e saúde
            mental.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-10 md:mt-16 md:grid-cols-3 md:gap-8">
          {articles.map((article, i) => (
            <Reveal as="article" key={article.slug} delay={i * 90}>
              <Link to="/conteudos" className="group block border-t border-foreground/30 pt-8 h-full">
                <span className="label-caps font-semibold text-terracotta tracking-[0.25em]">
                  {article.category}
                </span>
                
                <h3 className="mt-4 font-serif text-[1.55rem] leading-snug text-foreground transition-all duration-300 group-hover:text-terracotta group-hover:translate-x-0.5">
                  {article.title}
                </h3>
                
                <p className="mt-4 text-[0.94rem] leading-relaxed text-taupe">{article.excerpt}</p>
                
                <p className="mt-6 text-[0.72rem] tracking-[0.08em] text-taupe/60 uppercase font-medium">
                  {article.slug.includes("limites") ? "4 min leitura" : article.slug.includes("crise") ? "3 min leitura" : "5 min leitura"}
                </p>
              </Link>
            </Reveal>
          ))}
        </div>

        {INSTAGRAM_URL && (
          <Reveal className="mt-16 pt-8 border-t border-border/40">
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => track("instagram_click", { location: "conteudos" })}
              className="link-underline text-[0.75rem] font-medium tracking-[0.14em] uppercase text-terracotta"
            >
              Acompanhe no Instagram →
            </a>
          </Reveal>
        )}
      </div>
    </section>
  );
}
