import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/Reveal";
import { articles } from "@/data/articles";
import { seoConfig } from "@/config/site";

const seo = seoConfig.conteudos;

export const Route = createFileRoute("/conteudos")({
  head: () => ({
    meta: [
      { title: seo.title },
      { name: "description", content: seo.description },
      { property: "og:title", content: seo.title },
      { property: "og:description", content: seo.description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: seo.canonical },
      { property: "og:image", content: seo.ogImage },
      { property: "og:locale", content: "pt_BR" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: seo.title },
      { name: "twitter:description", content: seo.description },
      { name: "twitter:image", content: seo.ogImage },
    ],
    links: [{ rel: "canonical", href: seo.canonical }],
  }),
  component: ConteudosPage,
});

function ConteudosPage() {
  return (
    <>
      <Header />
      <main className="pt-32 pb-24 md:pt-40">
        <div className="mx-auto max-w-[1000px] px-6 md:px-10">
          <Reveal>
            <p className="eyebrow">Conteúdos</p>
            <h1 className="mt-6 text-[2.4rem] text-foreground sm:text-[3.2rem]">
              Psicologia também é compreensão.
            </h1>
            <p className="mt-6 max-w-xl text-[1rem] text-taupe">
              Textos em preparação. Em breve, reflexões sobre comportamento, desenvolvimento,
              relações, emoções e saúde mental.
            </p>
          </Reveal>

          <ul className="mt-16 space-y-12">
            {articles.map((article, i) => (
              <Reveal as="li" key={article.slug} delay={i * 80} className="border-t border-border pt-7">
                <p className="label-caps">{article.category}</p>
                <h2 className="mt-4 text-[1.7rem] leading-snug text-foreground sm:text-[2rem]">
                  {article.title}
                </h2>
                <p className="mt-4 max-w-2xl text-[0.98rem] text-taupe">{article.excerpt}</p>
                <p className="mt-4 text-[0.75rem] tracking-[0.14em] uppercase text-taupe">
                  Publicação em breve
                </p>
              </Reveal>
            ))}
          </ul>

          <div className="mt-20">
            <Link
              to="/"
              className="link-underline text-[0.75rem] font-medium tracking-[0.14em] uppercase text-terracotta"
            >
              ← Voltar ao início
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
