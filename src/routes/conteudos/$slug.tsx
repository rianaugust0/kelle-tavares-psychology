import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/Reveal";
import { PhotoFrame } from "@/components/PhotoPlaceholder";
import { site, absoluteUrl } from "@/config/site";
import { getArticleBySlug } from "@/data/articles";
import portrait from "@/assets/kelle-1.png";
import { ArrowLeft, Calendar, Clock, User } from "lucide-react";

export const Route = createFileRoute("/conteudos/$slug")({
  loader: ({ params }) => {
    const article = getArticleBySlug(params.slug);
    return { article };
  },
  head: ({ loaderData }) => {
    const article = loaderData?.article;
    if (!article) {
      return {
        meta: [{ title: "Conteúdo não encontrado | Kelle Tavares" }],
      };
    }

    const title = `${article.title} | Kelle Tavares`;
    const description = article.description;
    const canonical = absoluteUrl(`/conteudos/${article.slug}`);
    const ogImage = article.image ? absoluteUrl(article.image) : absoluteUrl("/og-image.jpg");

    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "article" },
        { property: "og:url", content: canonical },
        { property: "og:image", content: ogImage },
        { property: "article:published_time", content: article.publishedAt },
        { property: "article:author", content: site.name },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: title },
        { name: "twitter:description", content: description },
        { name: "twitter:image", content: ogImage },
      ],
      links: [{ rel: "canonical", href: canonical }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: article.title,
            description: article.description,
            datePublished: article.publishedAt,
            dateModified: article.updatedAt || article.publishedAt,
            author: {
              "@type": "Person",
              name: site.name,
              jobTitle: site.professionalTitle,
              identifier: `CRP ${site.crp}`,
              url: absoluteUrl("/sobre"),
            },
            publisher: {
              "@type": "Person",
              name: site.name,
              url: site.url,
            },
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": canonical,
            },
          }),
        },
      ],
    };
  },
  component: ArticlePage,
});

function ArticlePage() {
  const { article } = Route.useLoaderData();

  if (!article) {
    return (
      <>
        <Header />
        <main className="py-40 text-center bg-ivory">
          <div className="mx-auto max-w-lg px-6">
            <h1 className="font-serif text-[2.2rem] text-foreground">Conteúdo não encontrado</h1>
            <p className="mt-4 text-taupe">O artigo que você procura não está disponível ou foi movido.</p>
            <div className="mt-8">
              <Link
                to="/conteudos"
                className="inline-flex items-center gap-2 border border-foreground px-6 py-3 text-[0.78rem] font-bold tracking-[0.14em] uppercase text-foreground hover:bg-foreground hover:text-primary-foreground transition-colors"
              >
                <ArrowLeft className="size-4" /> Voltar para Conteúdos
              </Link>
            </div>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <main>
        <article className="pt-32 pb-24 md:pt-40 md:pb-32 bg-ivory">
          <div className="mx-auto max-w-[860px] px-6 md:px-10">
            <Reveal>
              <Link
                to="/conteudos"
                className="inline-flex items-center gap-2 text-[0.78rem] font-semibold tracking-[0.14em] uppercase text-taupe hover:text-foreground transition-colors mb-8"
              >
                <ArrowLeft className="size-4" /> Voltar para Conteúdos
              </Link>

              <div className="flex items-center gap-3">
                <span className="h-px w-8 bg-terracotta" />
                <p className="eyebrow text-terracotta font-semibold">{article.category}</p>
              </div>

              <h1 className="mt-6 text-[2.3rem] leading-[1.12] text-foreground sm:text-[3.1rem] font-serif">
                {article.title}
              </h1>

              <p className="mt-6 text-[1.12rem] leading-relaxed text-taupe font-normal italic">
                {article.description}
              </p>

              {/* AUTORIA E METADADOS */}
              <div className="mt-8 pt-6 border-t border-b border-border/80 py-4 flex flex-wrap items-center justify-between gap-4 text-[0.85rem] text-taupe">
                <div className="flex items-center gap-3">
                  <User className="size-4 text-terracotta" />
                  <span>
                    Por{" "}
                    <Link to="/sobre" className="font-semibold text-foreground hover:text-terracotta underline decoration-terracotta/40">
                      {site.name} — Psicóloga • CRP {site.crp}
                    </Link>
                  </span>
                </div>

                <div className="flex items-center gap-6">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="size-3.5" />
                    {new Date(article.publishedAt).toLocaleDateString("pt-BR", {
                      day: "2-digit",
                      month: "long",
                      year: "numeric",
                    })}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock className="size-3.5" />
                    {article.readingTime}
                  </span>
                </div>
              </div>
            </Reveal>

            {/* IMAGEM PRINCIPAL */}
            {article.image && (
              <Reveal delay={80} className="mt-10">
                <div className="p-3 bg-warm-white border border-border/80 shadow-md">
                  <PhotoFrame
                    src={article.image}
                    alt={article.imageAlt || article.title}
                    width={1200}
                    height={700}
                    pending={false}
                    className="w-full aspect-[16/9] object-cover"
                  />
                </div>
              </Reveal>
            )}

            {/* CORPO DO ARTIGO */}
            <Reveal delay={120} className="mt-12 space-y-6 text-[1.05rem] leading-relaxed text-foreground/90">
              {article.content.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </Reveal>

            {/* CARD DE AUTORA NO FINAL DO ARTIGO */}
            <Reveal delay={160} className="mt-16 p-8 bg-warm-white border border-border/80 shadow-sm flex flex-col sm:flex-row items-center gap-6">
              <PhotoFrame
                src={portrait}
                alt="Retrato de Kelle Tavares"
                width={200}
                height={200}
                pending={false}
                className="size-24 rounded-full object-cover shrink-0 border border-border"
              />
              <div>
                <p className="eyebrow text-terracotta font-semibold">Sobre a autora</p>
                <h3 className="font-serif text-[1.4rem] text-foreground font-medium mt-1">
                  Kelle Tavares
                </h3>
                <p className="mt-2 text-[0.88rem] leading-relaxed text-taupe">
                  Psicóloga em Goiânia (CRP 21419), atua com psicoterapia para adultos e acompanhamento psicológico infantil.
                </p>
                <div className="mt-4 flex items-center gap-4">
                  <Link
                    to="/sobre"
                    className="text-[0.75rem] font-bold tracking-[0.14em] uppercase text-foreground hover:text-terracotta underline"
                  >
                    Ver biografia profissional →
                  </Link>
                </div>
              </div>
            </Reveal>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
