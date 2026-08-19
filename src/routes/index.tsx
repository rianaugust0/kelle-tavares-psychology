import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { About } from "@/components/About";
import { EditorialQuote } from "@/components/EditorialQuote";
import { TherapyProcess } from "@/components/TherapyProcess";
import { Career } from "@/components/Career";
import { Modality } from "@/components/Modality";
import { FAQ } from "@/components/FAQ";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { site, seoConfig, absoluteUrl } from "@/config/site";

const seo = seoConfig.home;

export const Route = createFileRoute("/")({
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
          "@type": "Person",
          name: site.name,
          jobTitle: "Psicóloga",
          description: seo.description,
          url: seo.canonical,
          image: absoluteUrl("/og-image.jpg"),
          address: {
            "@type": "PostalAddress",
            addressLocality: "Goiânia",
            addressRegion: "GO",
            addressCountry: "BR",
          },
          knowsAbout: [
            "Psicoterapia para adultos",
            "Acompanhamento psicológico infantil",
            "Análise do Comportamento Aplicada (ABA)",
            "Neuropsicologia",
            "Desenvolvimento Infantil",
          ],
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Header />
      <main>
        {/* 1. HERO (Foto + Proposta + WhatsApp) */}
        <Hero />

        {/* 2. ATENDIMENTOS (Dois grandes blocos visuais protagonistas: Adultos x Infantil) */}
        <Services />

        {/* 3. SOBRE KELLE (Foto profissional + Apresentação curta) */}
        <About />

        {/* 4. FRASE EDITORIAL (Bloco Café para momento de impacto e quebra visual) */}
        <EditorialQuote />

        {/* 5. COMO FUNCIONA (3 passos do acompanhamento) */}
        <TherapyProcess />

        {/* 6. AUTORIDADE RESUMIDA (+3 anos + Formação + Foto espontânea) */}
        <Career />

        {/* 7. ATENDIMENTO ONLINE (Informação prática) */}
        <Modality />

        {/* 8. DÚVIDAS ANTES DE COMEÇAR (FAQ de redução de objeções com link para WhatsApp) */}
        <FAQ />

        {/* 9. CTA FINAL CAFÉ (Conversão direta) */}
        <Contact />
      </main>
      <Footer />
    </>
  );
}
