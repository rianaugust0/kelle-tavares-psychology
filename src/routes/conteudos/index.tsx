import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/Reveal";
import { WhatsAppLink } from "@/components/WhatsAppLink";
import { site, seoConfig, absoluteUrl } from "@/config/site";
import { ARTICLES, Article } from "@/data/articles";
import { useState } from "react";
import { BookOpen, Sparkles, ArrowRight } from "lucide-react";

const seo = seoConfig.conteudos;

export const Route = createFileRoute("/conteudos/")({
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
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: seo.title,
          description: seo.description,
          url: seo.canonical,
          publisher: {
            "@type": "Person",
            name: site.name,
            jobTitle: site.professionalTitle,
            identifier: `CRP ${site.crp}`,
            url: absoluteUrl("/sobre"),
          },
        }),
      },
    ],
  }),
  component: ConteudosPage,
});

const CATEGORIES = ["Todos", "Psicoterapia", "Adultos", "Infância", "Desenvolvimento"] as const;

function ConteudosPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("Todos");

  const filteredArticles = selectedCategory === "Todos"
    ? ARTICLES
    : ARTICLES.filter((a) => a.category === selectedCategory);

  return (
    <>
      <Header />
      <main>
        {/* HERO */}
        <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-ivory overflow-hidden border-b border-border">
          <div className="mx-auto max-w-[1240px] px-6 md:px-10">
            <Reveal className="max-w-3xl">
              <div className="flex items-center gap-3">
                <span className="h-px w-8 bg-terracotta" />
                <p className="eyebrow text-terracotta font-semibold">CONTEÚDOS</p>
              </div>

              <h1 className="mt-6 text-[2.5rem] leading-[1.08] text-foreground sm:text-[3.2rem] lg:text-[3.8rem] font-light font-serif">
                Psicologia explicada de forma clara e responsável.
              </h1>

              <p className="mt-6 max-w-2xl text-[1.1rem] leading-relaxed text-taupe font-normal">
                Informações sobre psicoterapia, saúde emocional, desenvolvimento e acompanhamento psicológico para ajudar você a compreender melhor diferentes momentos da vida.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4 text-[0.82rem] text-taupe font-medium">
                <span className="inline-flex items-center gap-2 bg-warm-white px-4 py-2 border border-border/80 rounded-full">
                  <span className="h-2 w-2 rounded-full bg-terracotta" />
                  Por <Link to="/sobre" className="text-foreground hover:text-terracotta underline decoration-terracotta/40 underline-offset-4 font-semibold">{site.name}</Link> — Psicóloga • CRP {site.crp}
                </span>
              </div>
            </Reveal>
          </div>
        </section>

        {/* CATEGORIAS E ARTIGOS */}
        <section className="py-20 md:py-28 bg-blush/25">
          <div className="mx-auto max-w-[1240px] px-6 md:px-10">
            {/* Filtro de Categorias */}
            <Reveal className="flex flex-wrap items-center gap-3 border-b border-border/80 pb-8">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-5 py-2.5 text-[0.78rem] font-semibold tracking-[0.14em] uppercase transition-all duration-200 rounded-xs ${
                    selectedCategory === cat
                      ? "bg-foreground text-primary-foreground shadow-xs"
                      : "bg-warm-white text-taupe hover:text-foreground border border-border/80"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </Reveal>

            {/* Lista de Artigos ou Estado Editorial Elegante */}
            <div className="mt-12">
              {filteredArticles.length > 0 ? (
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                  {filteredArticles.map((article) => (
                    <ArticleCard key={article.slug} article={article} />
                  ))}
                </div>
              ) : (
                <Reveal className="p-10 md:p-16 bg-warm-white border border-border/80 shadow-sm text-center max-w-3xl mx-auto my-6">
                  <div className="inline-flex items-center justify-center size-14 rounded-full bg-blush/60 text-terracotta mb-6">
                    <BookOpen className="size-6" strokeWidth={1.5} />
                  </div>
                  <h2 className="font-serif text-[1.8rem] text-foreground sm:text-[2.2rem]">
                    Em breve, novos conteúdos profissionais
                  </h2>
                  <p className="mt-4 text-[1.02rem] leading-relaxed text-taupe max-w-xl mx-auto">
                    Estamos preparando artigos e materiais educativos com fundamentação científica sobre comportamento, desenvolvimento infantil e psicoterapia para adultos.
                  </p>

                  <div className="mt-10 pt-8 border-t border-border/60 grid gap-4 sm:grid-cols-2 text-left">
                    <Link
                      to="/adultos"
                      className="p-5 bg-ivory border border-border/60 hover:border-terracotta/40 transition-colors group flex flex-col justify-between"
                    >
                      <div>
                        <p className="label-caps text-terracotta font-semibold">Serviço</p>
                        <p className="mt-1 font-serif text-[1.15rem] text-foreground font-medium">Psicoterapia para Adultos</p>
                        <p className="mt-1 text-[0.84rem] text-taupe">Saiba como funciona o atendimento individual.</p>
                      </div>
                      <span className="mt-4 inline-flex items-center gap-1.5 text-[0.75rem] font-bold tracking-[0.14em] uppercase text-foreground group-hover:text-terracotta">
                        Conhecer <ArrowRight className="size-3.5" />
                      </span>
                    </Link>

                    <Link
                      to="/infantil"
                      className="p-5 bg-ivory border border-border/60 hover:border-terracotta/40 transition-colors group flex flex-col justify-between"
                    >
                      <div>
                        <p className="label-caps text-terracotta font-semibold">Serviço</p>
                        <p className="mt-1 font-serif text-[1.15rem] text-foreground font-medium">Acompanhamento Infantil</p>
                        <p className="mt-1 text-[0.84rem] text-taupe">Orientações para famílias e crianças.</p>
                      </div>
                      <span className="mt-4 inline-flex items-center gap-1.5 text-[0.75rem] font-bold tracking-[0.14em] uppercase text-foreground group-hover:text-terracotta">
                        Conhecer <ArrowRight className="size-3.5" />
                      </span>
                    </Link>
                  </div>
                </Reveal>
              )}
            </div>
          </div>
        </section>

        {/* CTA CONVITE SOBRE & ATENDIMENTO */}
        <section className="border-t border-border py-20 md:py-24 bg-ivory">
          <div className="mx-auto max-w-[1100px] px-6 md:px-10">
            <Reveal className="p-8 md:p-12 bg-warm-white border border-border/80 shadow-sm grid items-center gap-8 md:grid-cols-[60fr_40fr]">
              <div>
                <span className="label-caps text-terracotta font-semibold">Conheça a Autora</span>
                <h2 className="mt-3 font-serif text-[2.1rem] leading-tight text-foreground sm:text-[2.6rem]">
                  Kelle Tavares
                </h2>
                <p className="mt-3 text-[0.98rem] leading-relaxed text-taupe">
                  Psicóloga em Goiânia (CRP 21419), graduada pela FacUnicamps com especialização em Análise do Comportamento Aplicada (ABA) e Neuropsicologia.
                </p>
                <div className="mt-6 flex flex-wrap gap-4">
                  <Link
                    to="/sobre"
                    className="border border-foreground px-6 py-3 text-[0.75rem] font-semibold tracking-[0.14em] uppercase text-foreground transition-colors hover:bg-foreground hover:text-primary-foreground"
                  >
                    Conhecer trajetória completa
                  </Link>
                </div>
              </div>

              <div className="p-6 bg-blush/30 border border-border/60 text-center flex flex-col items-center">
                <Sparkles className="size-8 text-terracotta mb-3" strokeWidth={1.5} />
                <h3 className="font-serif text-[1.3rem] text-foreground font-medium">
                  Deseja tirar dúvidas sobre o atendimento?
                </h3>
                <p className="mt-2 text-[0.88rem] text-taupe">
                  Fale diretamente pelo WhatsApp para consultar horários disponíveis.
                </p>
                <WhatsAppLink
                  location="conteudos_cta"
                  className="mt-5 w-full bg-foreground text-primary-foreground py-3.5 text-center text-[0.75rem] font-semibold tracking-[0.14em] uppercase transition-all duration-300 hover:bg-terracotta hover:text-white"
                >
                  Falar no WhatsApp
                </WhatsAppLink>
              </div>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export function ArticleCard({ article }: { article: Article }) {
  return (
    <div className="p-8 bg-warm-white border border-border/80 shadow-xs flex flex-col justify-between transition-all duration-300 hover:border-terracotta/50 hover:-translate-y-1">
      <div>
        <div className="flex items-center justify-between gap-3 text-[0.78rem]">
          <span className="label-caps text-terracotta font-semibold">{article.category}</span>
          <span className="text-taupe">{article.readingTime}</span>
        </div>
        <h3 className="mt-4 font-serif text-[1.45rem] leading-snug text-foreground font-medium">
          {article.title}
        </h3>
        <p className="mt-3 text-[0.92rem] leading-relaxed text-taupe line-clamp-3">
          {article.description}
        </p>
      </div>

      <div className="mt-8 pt-5 border-t border-border/60 flex items-center justify-between">
        <span className="text-[0.78rem] text-taupe">
          Por <Link to="/sobre" className="text-foreground font-medium hover:text-terracotta">{site.name}</Link>
        </span>
        <Link
          to="/conteudos/$slug"
          params={{ slug: article.slug }}
          className="inline-flex items-center gap-1.5 text-[0.75rem] font-bold tracking-[0.14em] uppercase text-foreground hover:text-terracotta"
        >
          Ler conteúdo <ArrowRight className="size-3.5" />
        </Link>
      </div>
    </div>
  );
}
