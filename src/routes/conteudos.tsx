import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/Reveal";
import { articles } from "@/data/articles";

export const Route = createFileRoute("/conteudos")({
  head: () => ({
    meta: [
      { title: "Conteúdos | Kelle Tavares, Psicóloga em Goiânia" },
      {
        name: "description",
        content:
          "Reflexões sobre comportamento, desenvolvimento, relações e saúde mental escritas pela psicóloga Kelle Tavares.",
      },
      { property: "og:title", content: "Conteúdos | Kelle Tavares, Psicóloga" },
      {
        property: "og:description",
        content:
          "Reflexões sobre comportamento, desenvolvimento, relações e saúde mental escritas pela psicóloga Kelle Tavares.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/conteudos" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/conteudos" }],
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
