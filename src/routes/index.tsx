import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { CinematicProfileSelector } from "@/components/CinematicProfileSelector";
import { Services } from "@/components/Services";
import { About } from "@/components/About";
import { EditorialQuote } from "@/components/EditorialQuote";
import { LuxuryPortraitCover } from "@/components/LuxuryPortraitCover";
import { TherapyProcess } from "@/components/TherapyProcess";
import { FAQ } from "@/components/FAQ";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { SplashCurtain } from "@/components/SplashCurtain";
import { StickyMobileBar } from "@/components/StickyMobileBar";
import { LiquidEtherCanvas } from "@/components/LiquidEtherCanvas";
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
      <SplashCurtain />
      <LiquidEtherCanvas />
      <Header />
      <main className="relative z-10">

        {/* 1. HERO (Seção 1) */}
        <Hero />

        {/* 2. SELETOR CINEMATOGRÁFICO DE CONVERSÃO (Escolha Rápida de Atendimento) */}
        <CinematicProfileSelector />

        {/* 3. SOBRE KELLE TAVARES (Seção 2) */}
        <About />

        {/* 3.5. CAPA EDITORIAL ULTRA PREMIUM COM FOTO EM DEGRADÊ DE 70% DO FUNDO */}
        <LuxuryPortraitCover />

        {/* 4. ÁREAS DE ATUAÇÃO & CUIDADO (Seção 3) */}
        <Services />

        {/* 5. FRASE EDITORIAL (Bloco Café para momento de impacto e quebra visual) */}
        <EditorialQuote />

        {/* 6. COMO FUNCIONA (4 passos do acompanhamento) */}
        <TherapyProcess />

        {/* 7. DÚVIDAS ANTES DE COMEÇAR (FAQ de redução de objeções) */}
        <FAQ />

        {/* 8. CTA FINAL (Conversão direta para WhatsApp) */}
        <Contact />
      </main>

      {/* Barra Fixa Flutuante de Conversão Cinematográfica no Celular */}
      <StickyMobileBar />
      <Footer />
    </>
  );
}

