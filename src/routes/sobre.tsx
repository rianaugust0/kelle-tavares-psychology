import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/Reveal";
import { PhotoFrame } from "@/components/PhotoPlaceholder";
import { WhatsAppLink } from "@/components/WhatsAppLink";
import { site, career, seoConfig, absoluteUrl } from "@/config/site";
import portrait from "@/assets/kelle-1.png";
import aboutPhoto from "@/assets/kelle-2.png";
import careerPhoto from "@/assets/kelle-3.png";

const seo = seoConfig.sobre;

export const Route = createFileRoute("/sobre")({
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
          "@type": "Psychologist",
          name: site.name,
          jobTitle: site.professionalTitle,
          identifier: `CRP ${site.crp}`,
          description: seo.description,
          url: seo.canonical,
          image: absoluteUrl("/og-image.jpg"),
          address: {
            "@type": "PostalAddress",
            addressLocality: "Goiânia",
            addressRegion: "GO",
            addressCountry: "BR",
          },
          areaServed: {
            "@type": "City",
            name: "Goiânia",
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
  component: SobrePage,
});

function SobrePage() {
  return (
    <>
      <Header />
      <main>
        {/* 1. HERO INSTITUCIONAL */}
        <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-ivory overflow-hidden">
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-terracotta/10 rounded-full blur-3xl pointer-events-none -z-10" />
          <div className="mx-auto max-w-[1240px] px-6 md:px-10">
            <div className="grid items-center gap-12 lg:grid-cols-[55fr_45fr] lg:gap-16">
              <Reveal>
                <div className="flex items-center gap-3">
                  <span className="h-px w-8 bg-terracotta" />
                  <p className="eyebrow text-terracotta font-semibold">Sobre Kelle Tavares</p>
                </div>

                <h1 className="mt-6 text-[2.5rem] leading-[1.08] text-foreground sm:text-[3.2rem] lg:text-[3.8rem] font-light font-serif">
                  Kelle Tavares | Psicóloga em Goiânia
                </h1>

                <p className="mt-6 max-w-xl text-[1.1rem] leading-relaxed text-taupe font-normal">
                  Uma trajetória pautada pela escuta atenta, pela responsabilidade ética e pelo cuidado contínuo no acompanhamento psicológico de crianças, adultos e orientação familiar.
                </p>

                <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-6">
                  <a
                    href="#atendimentos"
                    className="bg-foreground text-primary-foreground px-8 py-4 text-center text-[0.78rem] font-semibold tracking-[0.16em] uppercase transition-all duration-300 hover:bg-terracotta hover:text-white shadow-md hover:shadow-lg hover:-translate-y-0.5"
                  >
                    Conhecer os atendimentos →
                  </a>
                </div>

                <div className="mt-12 pt-8 border-t border-border/80 max-w-sm flex items-center gap-3">
                  <span className="h-2 w-2 rounded-full bg-terracotta/70 animate-pulse" />
                  <p className="text-[0.78rem] tracking-[0.12em] text-foreground/80 uppercase font-semibold">
                    Atendimento em Goiânia e online • CRP {site.crp}
                  </p>
                </div>
              </Reveal>

              <Reveal delay={140} className="relative">
                <div className="relative p-3 bg-warm-white border border-border/80 shadow-lg">
                  <PhotoFrame
                    src={portrait}
                    alt="Retrato profissional de Kelle Tavares, psicóloga em Goiânia"
                    width={912}
                    height={1200}
                    priority
                    pending={false}
                    className="aspect-[4/5] w-full object-cover grayscale-[4%]"
                  />
                  <div className="absolute -bottom-3 -right-3 w-28 h-28 border-r-2 border-b-2 border-terracotta/50 pointer-events-none" />
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* 2. SEÇÃO SOBRE MIM */}
        <section className="py-24 md:py-32 border-t border-border bg-blush/45">
          <div className="mx-auto max-w-[1240px] px-6 md:px-10">
            <div className="grid gap-12 lg:grid-cols-[45fr_55fr] lg:gap-16 items-center">
              <Reveal className="relative">
                <div className="relative p-3 bg-warm-white border border-border/80 shadow-md">
                  <PhotoFrame
                    src={aboutPhoto}
                    alt="Kelle Tavares em ambiente de atendimento psicológico"
                    width={800}
                    height={1000}
                    pending={false}
                    className="aspect-[4/5] w-full object-cover grayscale-[4%]"
                  />
                  <div className="absolute top-6 -left-3 w-12 h-px bg-terracotta" />
                </div>
              </Reveal>

              <Reveal delay={100}>
                <div className="flex items-center gap-3">
                  <span className="h-px w-8 bg-terracotta" />
                  <p className="eyebrow text-terracotta font-semibold">Acolhimento e ética</p>
                </div>

                <h2 className="mt-6 font-serif text-[2.3rem] leading-[1.12] text-foreground sm:text-[3.1rem]">
                  Psicologia com escuta, cuidado e responsabilidade.
                </h2>

                <div className="mt-6 space-y-5 text-[1.05rem] leading-relaxed text-taupe">
                  <p>
                    Sou psicóloga em Goiânia, graduada pela Faculdade Unida de Campinas (FacUnicamps) e inscrita no CRP 21419. Atuo oferecendo acompanhamento psicológico fundamentado no respeito à individualidade de cada pessoa.
                  </p>
                  <p>
                    Construí minha atuação prática no acompanhamento do público infantil — especialmente no desenvolvimento de crianças neurodivergentes em contextos clínicos e domiciliares — bem como na psicoterapia individual para adultos.
                  </p>
                  <p className="text-foreground/90 font-medium font-serif text-[1.18rem]">
                    Ao aprofundar meus estudos em Análise do Comportamento Aplicada (ABA), neuropsicologia e desenvolvimento infantil, busco unir a fundamentação científica ao acolhimento humano e sem julgamentos.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* 3. SEÇÃO TRAJETÓRIA PROFISSIONAL */}
        <section className="border-t border-border py-24 md:py-32 bg-ivory">
          <div className="mx-auto max-w-[1240px] px-6 md:px-10">
            <Reveal className="max-w-2xl">
              <div className="flex items-center gap-3">
                <span className="h-px w-8 bg-terracotta" />
                <p className="eyebrow text-terracotta font-semibold">História e vivência</p>
              </div>
              <h2 className="mt-6 text-[2.4rem] leading-tight text-foreground sm:text-[3.2rem]">
                Minha trajetória
              </h2>
            </Reveal>

            <div className="mt-16 grid gap-12 lg:grid-cols-[40fr_60fr] lg:gap-16 items-start">
              <Reveal className="relative">
                <div className="p-3 bg-warm-white border border-border/80 shadow-md">
                  <PhotoFrame
                    src={careerPhoto}
                    alt="Kelle Tavares, psicóloga profissional"
                    width={600}
                    height={800}
                    pending={false}
                    className="aspect-[3/4] w-full object-cover grayscale-[4%]"
                  />
                </div>
                <div className="absolute -bottom-3 -right-3 w-20 h-20 border-r-2 border-b-2 border-terracotta/40 pointer-events-none" />
              </Reveal>

              <div className="space-y-8">
                {/* Destaque +3 Anos */}
                <Reveal delay={80} className="p-8 bg-warm-white border border-border/80 shadow-sm">
                  <div className="flex items-baseline gap-4 border-b border-border/80 pb-6">
                    <span className="font-serif text-[4.5rem] leading-none text-terracotta font-light">
                      +3
                    </span>
                    <div>
                      <p className="font-serif text-[1.6rem] text-foreground leading-tight font-medium">
                        anos de atuação profissional
                      </p>
                      <p className="text-[0.88rem] text-taupe mt-1">
                        Experiência prática voltada ao desenvolvimento infantil, crianças neurodivergentes e acompanhamento de adultos.
                      </p>
                    </div>
                  </div>

                  <div className="mt-6 pt-2 space-y-4">
                    <div>
                      <p className="font-serif text-[1.2rem] text-foreground font-medium">
                        Atendimento clínico e domiciliar
                      </p>
                      <p className="text-[0.85rem] text-taupe mt-0.5">
                        Acompanhamento estruturado em ambiente clínico e contexto domiciliar.
                      </p>
                    </div>
                    <div>
                      <p className="font-serif text-[1.2rem] text-foreground font-medium">
                        Vivência em instituições de Goiânia
                      </p>
                      <p className="text-[0.85rem] text-taupe mt-0.5">
                        Atuação profissional no Instituto NeuroOrtopédico de Goiânia e na Clínica Casa Colorê.
                      </p>
                    </div>
                  </div>
                </Reveal>
              </div>
            </div>
          </div>
        </section>

        {/* 4. SEÇÃO FORMAÇÃO E EXPERIÊNCIA */}
        <section className="border-t border-border py-20 md:py-28 bg-blush/20">
          <div className="mx-auto max-w-[1240px] px-6 md:px-10">
            <Reveal className="max-w-2xl">
              <div className="flex items-center gap-3">
                <span className="h-px w-8 bg-terracotta" />
                <p className="eyebrow text-terracotta font-semibold">Rigor técnico e estudo</p>
              </div>
              <h2 className="mt-5 text-[2.2rem] leading-tight text-foreground sm:text-[2.9rem]">
                Formação e experiência que sustentam o cuidado
              </h2>
            </Reveal>

            <div className="mt-12 grid gap-6 md:grid-cols-2">
              <Reveal delay={80} className="p-8 bg-warm-white border border-border/80 shadow-xs">
                <h3 className="label-caps border-b border-border/80 pb-4 font-semibold tracking-[0.2em] text-terracotta">
                  Formação acadêmica
                </h3>
                <ul className="mt-6 space-y-4">
                  {career.formation.map((item) => (
                    <li key={item.title} className="border-b border-border/40 pb-3 last:border-none last:pb-0">
                      <p className="font-serif text-[1.18rem] text-foreground font-medium">
                        {item.title}
                      </p>
                      {item.detail && (
                        <p className="text-[0.83rem] text-taupe mt-0.5">{item.detail}</p>
                      )}
                    </li>
                  ))}
                </ul>
              </Reveal>

              <Reveal delay={140} className="p-8 bg-warm-white border border-border/80 shadow-xs">
                <h3 className="label-caps border-b border-border/80 pb-4 font-semibold tracking-[0.2em] text-terracotta">
                  Atuação e áreas de aprofundamento
                </h3>
                <ul className="mt-6 space-y-4">
                  {career.experience.map((item) => (
                    <li key={item.title} className="border-b border-border/40 pb-3 last:border-none last:pb-0">
                      <p className="font-serif text-[1.18rem] text-foreground font-medium">
                        {item.title}
                      </p>
                      {item.detail && (
                        <p className="text-[0.83rem] text-taupe mt-0.5">{item.detail}</p>
                      )}
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>
          </div>
        </section>

        {/* 5. SEÇÃO ÁREAS DE ATENDIMENTO */}
        <section id="atendimentos" className="border-t border-border py-20 md:py-28 bg-ivory">
          <div className="mx-auto max-w-[1240px] px-6 md:px-10">
            <Reveal className="max-w-2xl">
              <div className="flex items-center gap-3">
                <span className="h-px w-8 bg-terracotta" />
                <p className="eyebrow text-terracotta font-semibold">Atendimentos</p>
              </div>
              <h2 className="mt-5 text-[2.3rem] leading-tight text-foreground sm:text-[3.1rem]">
                Como posso te acompanhar?
              </h2>
              <p className="mt-4 text-[1.05rem] leading-relaxed text-taupe">
                Conheça os detalhes de cada modalidade de acompanhamento psicológico:
              </p>
            </Reveal>

            <div className="mt-12 grid gap-8 md:grid-cols-2">
              {/* Card Adultos */}
              <Reveal delay={80} className="p-8 md:p-10 bg-warm-white border border-border/80 shadow-sm flex flex-col justify-between transition-all duration-300 hover:border-terracotta/50 hover:-translate-y-1">
                <div>
                  <span className="font-serif text-[2.2rem] text-terracotta font-light">01</span>
                  <h3 className="mt-3 font-serif text-[1.9rem] text-foreground">
                    Psicoterapia para Adultos
                  </h3>
                  <p className="mt-4 text-[1rem] leading-relaxed text-taupe">
                    Um espaço de escuta e reflexão para compreender emoções, comportamentos, relações e diferentes momentos da vida.
                  </p>
                </div>
                <div className="mt-10 pt-6 border-t border-border/60">
                  <Link
                    to="/adultos"
                    className="inline-flex items-center gap-2 text-[0.8rem] font-bold tracking-[0.16em] uppercase text-foreground transition-colors duration-200 hover:text-terracotta"
                  >
                    Conhecer psicoterapia para adultos <span>→</span>
                  </Link>
                </div>
              </Reveal>

              {/* Card Infantil */}
              <Reveal delay={160} className="p-8 md:p-10 bg-warm-white border border-border/80 shadow-sm flex flex-col justify-between transition-all duration-300 hover:border-terracotta/50 hover:-translate-y-1">
                <div>
                  <span className="font-serif text-[2.2rem] text-terracotta font-light">02</span>
                  <h3 className="mt-3 font-serif text-[1.9rem] text-foreground">
                    Acompanhamento Psicológico Infantil
                  </h3>
                  <p className="mt-4 text-[1rem] leading-relaxed text-taupe">
                    Um acompanhamento atento ao desenvolvimento, comportamento, contexto familiar e às necessidades individuais de cada criança.
                  </p>
                </div>
                <div className="mt-10 pt-6 border-t border-border/60">
                  <Link
                    to="/infantil"
                    className="inline-flex items-center gap-2 text-[0.8rem] font-bold tracking-[0.16em] uppercase text-foreground transition-colors duration-200 hover:text-terracotta"
                  >
                    Conhecer acompanhamento infantil <span>→</span>
                  </Link>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* 6. SEÇÃO MODALIDADES */}
        <section className="border-t border-border py-20 md:py-24 bg-blush/30">
          <div className="mx-auto max-w-[1100px] px-6 md:px-10">
            <Reveal className="p-8 md:p-12 bg-warm-white border border-border/80 shadow-sm text-center">
              <div className="inline-flex items-center gap-3">
                <span className="h-px w-8 bg-terracotta" />
                <p className="eyebrow text-terracotta font-semibold">Formas de Atendimento</p>
                <span className="h-px w-8 bg-terracotta" />
              </div>

              <h2 className="mt-4 font-serif text-[2.2rem] leading-tight text-foreground sm:text-[2.8rem]">
                Possibilidades de atendimento
              </h2>

              <p className="mx-auto mt-4 max-w-2xl text-[1.05rem] leading-relaxed text-taupe">
                Kelle Tavares é psicóloga em Goiânia/GO e realiza atendimento psicológico online, permitindo o acompanhamento seguro de pessoas em diferentes localidades.
              </p>

              <p className="mx-auto mt-3 max-w-2xl text-[0.96rem] leading-relaxed text-taupe/90">
                Para informações sobre possibilidades de atendimento presencial em Goiânia, entre em contato para verificar disponibilidade e modalidade adequada ao seu caso.
              </p>
            </Reveal>
          </div>
        </section>

        {/* 7. CTA FINAL */}
        <section className="bg-coffee py-32 text-ivory md:py-40 border-t border-coffee/20 relative overflow-hidden">
          <div className="relative mx-auto max-w-[940px] px-6 text-center md:px-10">
            <Reveal>
              <div className="inline-flex items-center gap-3">
                <span className="h-px w-8 bg-rose" />
                <p className="eyebrow text-rose font-semibold">Próximo passo</p>
                <span className="h-px w-8 bg-rose" />
              </div>

              <h2 className="mt-6 font-serif text-[2.8rem] leading-[1.08] text-ivory sm:text-[3.6rem] lg:text-[4.2rem]">
                Vamos conversar?
              </h2>

              <p className="mx-auto mt-6 max-w-xl text-[1.05rem] leading-relaxed text-ivory/85">
                Entre em contato pelo WhatsApp para tirar dúvidas, conhecer os detalhes do atendimento e verificar disponibilidade de horários.
              </p>

              <div className="mt-12 flex justify-center">
                <WhatsAppLink
                  location="sobre_final"
                  className="inline-block bg-ivory text-coffee px-12 py-5 text-[0.85rem] font-bold tracking-[0.2em] uppercase transition-all duration-300 hover:bg-terracotta hover:text-white shadow-2xl hover:-translate-y-1"
                >
                  Conversar pelo WhatsApp →
                </WhatsAppLink>
              </div>

              <div className="mx-auto mt-20 max-w-xs border-t border-ivory/20 pt-8">
                <p className="font-serif text-[1.7rem] tracking-tight text-ivory">{site.name}</p>
                <p className="mt-2 text-[0.75rem] font-semibold tracking-[0.3em] uppercase text-rose">
                  {site.professionalTitle} • CRP {site.crp}
                </p>
              </div>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
