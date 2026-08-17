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
          <p className="eyebrow">Conteúdos</p>
          <h2 className="mt-6 text-[2.1rem] text-foreground sm:text-[2.9rem]">
            Psicologia também é compreensão.
          </h2>
          <p className="mt-6 text-[1rem] text-taupe">
            Reflexões e conteúdos sobre comportamento, desenvolvimento, relações, emoções e saúde
            mental.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-10 md:mt-16 md:grid-cols-3 md:gap-8">
          {articles.map((article, i) => (
            <Reveal as="article" key={article.slug} delay={i * 90}>
              <Link to="/conteudos" className="group block border-t border-foreground/25 pt-6">
                <p className="label-caps">
                  Post {String(i + 1).padStart(2, "0")} — {article.category}
                </p>
                <h3 className="mt-5 text-[1.5rem] leading-snug text-foreground transition-colors duration-300 group-hover:text-terracotta">
                  {article.title}
                </h3>
                <p className="mt-4 text-[0.92rem] text-taupe">{article.excerpt}</p>
              </Link>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-14">
          {INSTAGRAM_URL ? (
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => track("instagram_click", { location: "conteudos" })}
              className="link-underline text-[0.75rem] font-medium tracking-[0.14em] uppercase text-terracotta"
            >
              Acompanhe no Instagram →
            </a>
          ) : (
            <p className="text-[0.75rem] tracking-[0.14em] uppercase text-taupe">
              Acompanhe no Instagram → [perfil a confirmar]
            </p>
          )}
        </Reveal>
      </div>
    </section>
  );
}
