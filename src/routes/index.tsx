import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { EditorialQuote } from "@/components/EditorialQuote";
import { Career } from "@/components/Career";
import { TherapyProcess } from "@/components/TherapyProcess";
import { Modality } from "@/components/Modality";
import { ContentPreview } from "@/components/ContentPreview";
import { FAQ } from "@/components/FAQ";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { site } from "@/config/site";

const TITLE = "Kelle Tavares | Psicóloga em Goiânia";
const DESCRIPTION =
  "Conheça o trabalho da psicóloga Kelle Tavares, sua trajetória profissional e informações sobre acompanhamento psicológico infantil e psicoterapia para adultos.";

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
        <Hero />
        <About />
        <Services />
        <EditorialQuote />
        <Career />
        <TherapyProcess />
        <Modality />
        <ContentPreview />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
