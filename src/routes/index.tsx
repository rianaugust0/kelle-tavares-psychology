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
import { site } from "@/config/site";

const TITLE = "Kelle Tavares | Psicóloga";
const DESCRIPTION =
  "Conheça o trabalho da psicóloga Kelle Tavares, informações sobre psicoterapia para adultos, acompanhamento psicológico infantil e atendimento online.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { property: "og:locale", content: "pt_BR" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: site.name,
          jobTitle: "Psicóloga",
          address: { "@type": "PostalAddress", addressLocality: "Goiânia", addressRegion: "GO", addressCountry: "BR" },
          knowsAbout: [
            "Psicoterapia para adultos",
            "Acompanhamento psicológico infantil",
            "Análise do Comportamento Aplicada",
            "Neuropsicologia",
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
