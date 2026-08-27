import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/Reveal";
import { PhotoFrame } from "@/components/PhotoPlaceholder";
import { WhatsAppLink } from "@/components/WhatsAppLink";
import { site, absoluteUrl } from "@/config/site";
import { getArticleBySlug } from "@/data/articles";
import portrait from "@/assets/kelle-1.png";
import { ArrowLeft, Calendar, CheckCircle2, User } from "lucide-react";

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

    const title = "Como Funciona a Primeira Sessão de Terapia? | Kelle Tavares";
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
          <div className="mx-auto max-w-[820px] px-6 md:px-10">
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

              <h1 className="mt-6 text-[2.3rem] leading-[1.12] text-foreground sm:text-[3.1rem] lg:text-[3.4rem] font-serif font-light">
                {article.title}
              </h1>

              {/* AUTORIA, REVISÃO E DATA REAL */}
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

                <div className="flex flex-wrap items-center gap-5 text-[0.82rem]">
                  <span className="inline-flex items-center gap-1.5 text-terracotta font-medium">
                    <CheckCircle2 className="size-3.5" />
                    Revisado por {site.name}
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <Calendar className="size-3.5" />
                    27 de agosto de 2026
                  </span>
                </div>
              </div>
            </Reveal>

            {/* INTRODUÇÃO DO ARTIGO */}
            <Reveal delay={80} className="mt-10 space-y-5 text-[1.08rem] leading-relaxed text-taupe">
              {article.intro.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </Reveal>

            {/* SEÇÕES DO ARTIGO (H2 + PARÁGRAFOS) */}
            <div className="mt-10 space-y-12">
              {article.sections.map((section, sIdx) => (
                <Reveal key={sIdx} delay={100 + sIdx * 30}>
                  {section.heading && (
                    <h2 className="font-serif text-[1.8rem] leading-tight text-foreground font-normal border-b border-border/60 pb-3 mb-5">
                      {section.heading}
                    </h2>
                  )}

                  <div className="space-y-4 text-[1.05rem] leading-relaxed text-taupe">
                    {section.paragraphs.map((p, pIdx) => {
                      // Inserção natural do link contextual na última seção ("Como começar?")
                      if (section.heading === "Como começar?" && p.includes("psicoterapia para adultos")) {
                        const parts = p.split("psicoterapia para adultos");
                        return (
                          <p key={pIdx}>
                            {parts[0]}
                            <Link to="/adultos" className="text-foreground font-medium underline decoration-terracotta/50 hover:text-terracotta transition-colors">
                              psicoterapia para adultos
                            </Link>
                            {parts[1]}
                          </p>
                        );
                      }

                      return <p key={pIdx}>{p}</p>;
                    })}
                  </div>
                </Reveal>
              ))}
            </div>

            {/* CTAS FINAIS DO ARTIGO */}
            <Reveal delay={200} className="mt-16 pt-10 border-t border-border/80">
              <div className="p-8 md:p-10 bg-warm-white border border-border/80 shadow-sm text-center">
                <p className="eyebrow text-terracotta font-semibold">Próximo Passo</p>
                <h3 className="mt-3 font-serif text-[1.8rem] text-foreground font-medium sm:text-[2.2rem]">
                  Quer entender como o acompanhamento pode te ajudar?
                </h3>
                <p className="mx-auto mt-3 max-w-xl text-[0.98rem] leading-relaxed text-taupe">
                  Fale diretamente com Kelle Tavares para tirar suas dúvidas sobre os atendimentos e verificar horários disponíveis.
                </p>

                <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Link
                    to="/adultos"
                    className="w-full sm:w-auto border border-foreground px-7 py-4 text-center text-[0.75rem] font-semibold tracking-[0.14em] uppercase text-foreground transition-all duration-300 hover:bg-foreground hover:text-primary-foreground"
                  >
                    Conhecer a psicoterapia para adultos →
                  </Link>

                  <WhatsAppLink
                    location="artigo_primeira_sessao"
                    event="whatsapp_click"
                    target="adultos"
                    className="w-full sm:w-auto bg-foreground text-primary-foreground px-7 py-4 text-center text-[0.75rem] font-semibold tracking-[0.14em] uppercase transition-all duration-300 hover:bg-terracotta hover:text-white shadow-md hover:-translate-y-0.5"
                  >
                    Conversar sobre o atendimento
                  </WhatsAppLink>
                </div>
              </div>
            </Reveal>

            {/* BLOCO DISCRETO DA AUTORA */}
            <Reveal delay={240} className="mt-12 p-8 bg-warm-white border border-border/80 shadow-xs flex flex-col sm:flex-row items-center gap-6">
              <PhotoFrame
                src={portrait}
                alt="Retrato de Kelle Tavares, psicóloga em Goiânia"
                width={200}
                height={200}
                pending={false}
                className="size-20 rounded-full object-cover shrink-0 border border-border"
              />
              <div className="text-center sm:text-left">
                <h4 className="font-serif text-[1.35rem] text-foreground font-medium">
                  {site.name}
                </h4>
                <p className="text-[0.82rem] font-semibold tracking-[0.12em] uppercase text-terracotta mt-0.5">
                  {site.professionalTitle} • CRP {site.crp}
                </p>
                <p className="mt-2 text-[0.88rem] leading-relaxed text-taupe">
                  Psicóloga em Goiânia (CRP 21419), graduada pela FacUnicamps com pós-graduação em Análise do Comportamento Aplicada (ABA) e Neuropsicologia. Atua no acompanhamento psicológico individual de adultos e suporte a famílias.
                </p>
                <div className="mt-4">
                  <Link
                    to="/sobre"
                    className="inline-flex items-center gap-1.5 text-[0.75rem] font-bold tracking-[0.14em] uppercase text-foreground hover:text-terracotta"
                  >
                    Conhecer Kelle Tavares <span>→</span>
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
