import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/Reveal";
import { PhotoFrame } from "@/components/PhotoPlaceholder";
import { WhatsAppLink } from "@/components/WhatsAppLink";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { site, career, absoluteUrl } from "@/config/site";
import portrait from "@/assets/kelle-1.png";
import aboutPhoto from "@/assets/kelle-4.png";
import careerPhoto from "@/assets/kelle-3.png";

const seo = {
  title: "Psicóloga Infantil em Goiânia | Kelle Tavares",
  description:
    "Acompanhamento psicológico infantil em Goiânia com Kelle Tavares, psicóloga CRP 21419. Atendimento acolhedor para crianças e orientação aos responsáveis.",
  canonical: absoluteUrl("/infantil"),
  ogImage: absoluteUrl("/og-image.jpg"),
};

export const Route = createFileRoute("/infantil")({
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
          name: "Psicóloga Infantil em Goiânia | Kelle Tavares",
          provider: {
            "@type": "Person",
            name: site.name,
            jobTitle: "Psicóloga",
            identifier: `CRP ${site.crp}`,
            url: site.url,
          },
          serviceType: "Acompanhamento Psicológico Infantil e Orientação Parental",
          description: seo.description,
          url: seo.canonical,
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
        }),
      },
    ],
  }),
  component: InfantilPage,
});

function InfantilPage() {
  const motivos = [
    {
      title: "Mudanças importantes no comportamento",
      desc: "Alterações no humor, comportamento ou rotina que chamam a atenção da família.",
    },
    {
      title: "Dificuldades emocionais",
      desc: "Momentos de maior sensibilidade, irritabilidade, choro constante ou sobrecarga de sentimentos.",
    },
    {
      title: "Medos e inseguranças",
      desc: "Receios recorrentes que interferem no bem-estar diário, no sono ou na autonomia da criança.",
    },
    {
      title: "Dificuldades de socialização",
      desc: "Desafios para interagir, fazer amigos, expressar desejos ou se integrar a grupos.",
    },
    {
      title: "Autoestima e percepção de si",
      desc: "Insegurança quanto às próprias habilidades, autoexigência ou retraimento social.",
    },
    {
      title: "Mudanças familiares ou escolares",
      desc: "Transição de escola, nascimento de irmãos, perdas ou reconfigurações familiares.",
    },
    {
      title: "Desenvolvimento infantil",
      desc: "Necessidade de acompanhamento atento dos marcos e etapas do crescimento.",
    },
    {
      title: "Dificuldades de adaptação",
      desc: "Desafios para lidar com regras, limites, novos ambientes ou rotinas.",
    },
  ];

  const pilaresComoFunciona = [
    {
      num: "01",
      title: "Idade e desenvolvimento",
      desc: "Estratégias e recursos terapêuticos adaptados à maturidade e fase de vida da criança.",
    },
    {
      num: "02",
      title: "Contexto familiar e orientação",
      desc: "Conversas periódicas e escuta contínua com os pais e responsáveis.",
    },
    {
      num: "03",
      title: "Necessidades individuais",
      desc: "Olhar cuidadoso para a singularidade, o ritmo e o universo de cada criança.",
    },
    {
      num: "04",
      title: "Estratégias adequadas",
      desc: "Atividades lúdicas e intervenções focadas no acolhimento e desenvolvimento de recursos emocionais.",
    },
  ];

  const faqInfantilCustom = [
    {
      q: "Quando procurar uma psicóloga infantil?",
      a: "A busca pelo acompanhamento psicológico infantil pode ocorrer ao notar mudanças de comportamento, dificuldades emocionais, desafios de adaptação escolar, medos recorrentes ou quando a família sente necessidade de orientação profissional para apoiar o desenvolvimento da criança.",
    },
    {
      q: "Como funciona o primeiro contato?",
      a: "Os pais ou responsáveis entram em contato pelo WhatsApp para conversar inicialmente, apresentar suas dúvidas e demandas, compreender a forma de trabalho e verificar a disponibilidade de horários.",
    },
    {
      q: "Os responsáveis participam do acompanhamento?",
      a: "Sim. A família desempenha papel fundamental no processo. São realizados encontros de orientação parental e conversas periódicas com os responsáveis para compartilhar observações, alinhar estratégias e acompanhar a evolução da criança.",
    },
    {
      q: "Como funciona o acompanhamento psicológico infantil?",
      a: "O acompanhamento considera a idade, a fase de desenvolvimento e o contexto individual de cada criança. São utilizadas estratégias lúdicas e recursos terapêuticos próprios para acolher emoções, promover o autoconhecimento e favorecer o desenvolvimento saudável.",
    },
    {
      q: "Como conversar sobre disponibilidade de horários?",
      a: "Basta enviar uma mensagem diretamente pelo WhatsApp. Conversamos sobre as opções de horários do acompanhamento online e organizamos os próximos passos de forma simples.",
    },
  ];

  return (
    <>
      <Header />
      <main>
        {/* CAPÍTULO 1: MARFIM — APRESENTAÇÃO (HERO) */}
        <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-ivory overflow-hidden">
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-terracotta/10 rounded-full blur-3xl pointer-events-none -z-10" />
          <div className="mx-auto max-w-[1240px] px-6 md:px-10">
            <div className="grid items-center gap-12 lg:grid-cols-[55fr_45fr] lg:gap-16">
              <Reveal>
                <div className="flex items-center gap-3">
                  <span className="h-px w-8 bg-terracotta" />
                  <p className="eyebrow text-terracotta font-semibold">Acompanhamento psicológico infantil</p>
                </div>

                <h1 className="mt-6 text-[2.7rem] leading-[1.06] text-foreground sm:text-[3.5rem] lg:text-[4.2rem] font-light font-serif">
                  Psicóloga infantil em Goiânia
                </h1>

                <p className="mt-6 max-w-xl text-[1.1rem] leading-relaxed text-taupe font-normal">
                  Acompanhamento psicológico infantil com escuta, cuidado e atenção às necessidades de cada criança e de sua família.
                </p>

                <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-6">
                  <WhatsAppLink
                    location="infantil_hero"
                    target="infantil"
                    event="whatsapp_child_hero_click"
                    className="bg-foreground text-primary-foreground px-8 py-4 text-center text-[0.78rem] font-semibold tracking-[0.16em] uppercase transition-all duration-300 hover:bg-terracotta hover:text-white shadow-md hover:shadow-lg hover:-translate-y-0.5"
                  >
                    Quero saber sobre o atendimento →
                  </WhatsAppLink>
                </div>

                <div className="mt-12 pt-8 border-t border-border/80 max-w-sm flex items-center gap-3">
                  <span className="h-2 w-2 rounded-full bg-terracotta/70 animate-pulse" />
                  <p className="text-[0.78rem] tracking-[0.12em] text-foreground/80 uppercase font-semibold">
                    Atendimento infantil em Goiânia • CRP {site.crp}
                  </p>
                </div>
              </Reveal>

              <Reveal delay={140} className="relative">
                <div className="relative p-3 bg-warm-white border border-border/80 shadow-lg">
                  <PhotoFrame
                    src={portrait}
                    alt="Retrato de Kelle Tavares, psicóloga infantil em Goiânia"
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

        {/* CAPÍTULO 2: ROSÉ — QUANDO BUSCAR ACOMPANHAMENTO PSICOLÓGICO INFANTIL? */}
        <section className="py-24 md:py-32 border-t border-border bg-blush/45">
          <div className="mx-auto max-w-[1240px] px-6 md:px-10">
            <div className="grid gap-12 lg:grid-cols-[58fr_42fr] lg:gap-16 items-center">
              <Reveal>
                <div className="flex items-center gap-3">
                  <span className="h-px w-8 bg-terracotta" />
                  <p className="eyebrow text-terracotta font-semibold">Orientação aos responsáveis</p>
                </div>

                <h2 className="mt-6 font-serif text-[2.4rem] leading-[1.12] text-foreground sm:text-[3.2rem]">
                  Quando buscar acompanhamento psicológico infantil?
                </h2>

                <div className="mt-6 space-y-4 text-[1.05rem] leading-relaxed text-taupe">
                  <p>
                    Diferentes comportamentos, mudanças na rotina, sentimentos expressos e desafios do desenvolvimento podem levar a família a buscar orientação de uma psicóloga infantil.
                  </p>
                  <p className="text-foreground/90 font-medium font-serif text-[1.15rem]">
                    O acompanhamento psicológico infantil oferece um espaço seguro e acolhedor para compreender as necessidades da criança e auxiliar os pais ao longo do processo, sem rótulos ou diagnósticos precipitados.
                  </p>
                </div>

                {/* Grid dos principais motivos / temas */}
                <div className="mt-10 grid gap-4 sm:grid-cols-2 pt-6 border-t border-terracotta/25">
                  {motivos.map((item, idx) => (
                    <div key={idx} className="p-4 bg-warm-white/80 border border-border/60">
                      <span className="font-serif text-[0.88rem] text-terracotta font-semibold block uppercase tracking-wider">
                        0{idx + 1}
                      </span>
                      <h3 className="font-serif text-[1.15rem] text-foreground font-medium mt-1">
                        {item.title}
                      </h3>
                      <p className="text-[0.82rem] text-taupe mt-1 leading-snug">
                        {item.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </Reveal>

              <Reveal delay={120} className="relative order-first lg:order-last">
                <div className="relative p-3 bg-warm-white border border-border/80 shadow-md">
                  <PhotoFrame
                    src={aboutPhoto}
                    alt="Kelle Tavares, psicóloga infantil em Goiânia"
                    width={800}
                    height={1000}
                    pending={false}
                    className="aspect-[4/5] w-full object-cover grayscale-[4%]"
                  />
                  <div className="absolute top-6 -left-3 w-12 h-px bg-terracotta" />
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* CAPÍTULO 3: MARFIM — COMO FUNCIONA O ACOMPANHAMENTO INFANTIL */}
        <section className="border-t border-border py-20 md:py-28 bg-ivory">
          <div className="mx-auto max-w-[1240px] px-6 md:px-10">
            <Reveal className="max-w-3xl">
              <div className="flex items-center gap-3">
                <span className="h-px w-8 bg-terracotta" />
                <p className="eyebrow text-terracotta font-semibold">Cuidado e metodologia</p>
              </div>
              <h2 className="mt-5 text-[2.2rem] leading-tight text-foreground sm:text-[2.9rem]">
                Como funciona o acompanhamento infantil
              </h2>
              <p className="mt-4 text-[1.05rem] leading-relaxed text-taupe">
                O trabalho da psicologia infantil é construído de maneira simples, acolhedora e estruturada, considerando as particularidades de cada criança e a parceria contínua com a família.
              </p>
            </Reveal>

            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {pilaresComoFunciona.map((item) => (
                <Reveal key={item.num} delay={80} className="p-6 bg-warm-white border border-border/80 shadow-xs flex flex-col justify-between transition-all duration-300 hover:border-terracotta/40 hover:-translate-y-0.5">
                  <div>
                    <span className="font-serif text-[1.8rem] text-terracotta font-light">
                      {item.num}
                    </span>
                    <h3 className="mt-3 text-[1.25rem] text-foreground font-serif">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-[0.88rem] leading-relaxed text-taupe">
                      {item.desc}
                    </p>
                  </div>
                  <div className="mt-6 pt-3 border-t border-border/50">
                    <span className="h-0.5 w-6 bg-terracotta/40 block" />
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* CAPÍTULO 4: EXPERIÊNCIA DA KELLE */}
        <section className="border-t border-border py-24 md:py-32 bg-blush/20">
          <div className="mx-auto max-w-[1240px] px-6 md:px-10">
            <Reveal className="max-w-2xl">
              <div className="flex items-center gap-3">
                <span className="h-px w-8 bg-terracotta" />
                <p className="eyebrow text-terracotta font-semibold">Experiência profissional</p>
              </div>
              <h2 className="mt-6 text-[2.4rem] leading-tight text-foreground sm:text-[3.2rem]">
                Experiência da Kelle
              </h2>
              <p className="mt-3 text-[1.05rem] text-taupe font-normal">
                Kelle Tavares • Psicóloga • CRP 21419 • Goiânia
              </p>
            </Reveal>

            <div className="mt-16 grid gap-12 lg:grid-cols-[40fr_60fr] lg:gap-16 items-start">
              <Reveal className="relative">
                <div className="p-3 bg-warm-white border border-border/80 shadow-md">
                  <PhotoFrame
                    src={careerPhoto}
                    alt="Kelle Tavares, psicóloga infantil em Goiânia"
                    width={600}
                    height={800}
                    pending={false}
                    className="aspect-[3/4] w-full object-cover grayscale-[4%]"
                  />
                </div>
                <div className="absolute -bottom-3 -right-3 w-20 h-20 border-r-2 border-b-2 border-terracotta/40 pointer-events-none" />
              </Reveal>

              <div className="space-y-10">
                {/* Destaque profissional */}
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
                        Atuação destacada com desenvolvimento infantil, comportamento e crianças neurodivergentes.
                      </p>
                    </div>
                  </div>

                  <div className="mt-6 pt-2 space-y-3">
                    <div>
                      <p className="font-serif text-[1.2rem] text-foreground font-medium">
                        Atendimento clínico e domiciliar
                      </p>
                      <p className="text-[0.85rem] text-taupe mt-0.5">
                        Acompanhamento estruturado respeitando o contexto e a rotina da criança.
                      </p>
                    </div>
                    <div>
                      <p className="font-serif text-[1.2rem] text-foreground font-medium">
                        Experiência institucional em Goiânia
                      </p>
                      <p className="text-[0.85rem] text-taupe mt-0.5">
                        Vivência prática no Instituto NeuroOrtopédico de Goiânia e na Clínica Casa Colorê.
                      </p>
                    </div>
                  </div>
                </Reveal>

                {/* Formação Acadêmica */}
                <Reveal delay={140} className="p-8 bg-warm-white border border-border/80 shadow-sm">
                  <h3 className="label-caps border-b border-border/80 pb-4 font-semibold tracking-[0.2em] text-terracotta">
                    Formação acadêmica e continuada
                  </h3>
                  <ul className="mt-6 space-y-4">
                    {career.formation.map((item) => (
                      <li key={item.title} className="border-b border-border/40 pb-3 last:border-none last:pb-0">
                        <p className="font-serif text-[1.15rem] text-foreground font-medium">
                          {item.title}
                        </p>
                        {item.detail && (
                          <p className="text-[0.82rem] text-taupe mt-0.5">{item.detail}</p>
                        )}
                      </li>
                    ))}
                  </ul>
                </Reveal>
              </div>
            </div>
          </div>
        </section>

        {/* CAPÍTULO 5: CAFÉ — MANIFESTO E ÉTICA */}
        <section className="bg-coffee py-20 md:py-24 text-ivory border-t border-coffee/20">
          <div className="mx-auto max-w-[940px] px-6 text-center md:px-10">
            <Reveal>
              <p className="eyebrow text-rose font-medium tracking-[0.25em]">Compromisso ético</p>
              <blockquote className="mt-6 font-serif text-[2.1rem] leading-[1.2] text-ivory sm:text-[2.8rem] font-light">
                “Cada criança carrega uma forma própria de sentir e aprender o mundo. O papel da psicologia é criar pontes de compreensão e respeito.”
              </blockquote>
              <div className="mt-8 flex justify-center">
                <span className="h-px w-16 bg-rose/40" />
              </div>
            </Reveal>
          </div>
        </section>

        {/* CAPÍTULO 6: ATENDIMENTO EM GOIÂNIA */}
        <section className="border-t border-border py-20 md:py-24 bg-ivory">
          <div className="mx-auto max-w-[1100px] px-6 md:px-10">
            <Reveal className="p-8 md:p-12 bg-warm-white border border-border/80 shadow-sm text-center">
              <div className="inline-flex items-center gap-3">
                <span className="h-px w-8 bg-terracotta" />
                <p className="eyebrow text-terracotta font-semibold">Psicóloga em Goiânia</p>
                <span className="h-px w-8 bg-terracotta" />
              </div>
              <h2 className="mt-4 font-serif text-[2.2rem] leading-tight text-foreground sm:text-[2.8rem]">
                Acompanhamento infantil com psicóloga em Goiânia
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-[1.05rem] leading-relaxed text-taupe">
                Kelle Tavares é psicóloga em Goiânia (GO) e realiza acompanhamento psicológico infantil e orientação aos responsáveis na modalidade online.
              </p>
              <p className="mx-auto mt-3 max-w-xl text-[0.92rem] text-taupe/80 italic">
                Horários, formatos e detalhes do primeiro atendimento são combinados diretamente no contato via WhatsApp.
              </p>
            </Reveal>
          </div>
        </section>

        {/* CAPÍTULO 7: ROSÉ — FAQ DOS RESPONSÁVEIS */}
        <section className="border-t border-border py-20 md:py-26 bg-blush/35">
          <div className="mx-auto max-w-[880px] px-6 md:px-10">
            <Reveal>
              <div className="flex items-center gap-3">
                <span className="h-px w-8 bg-terracotta" />
                <p className="eyebrow text-terracotta font-semibold">Dúvidas frequentes</p>
              </div>
              <h2 className="mt-5 text-[2.2rem] leading-tight text-foreground sm:text-[2.8rem]">
                Dúvidas comuns dos responsáveis
              </h2>
            </Reveal>

            <Accordion type="single" collapsible className="mt-12 divide-y divide-border border-y border-border">
              {faqInfantilCustom.map((item, i) => (
                <AccordionItem key={i} value={`item-${i}`} className="border-none py-2.5">
                  <AccordionTrigger className="text-left font-serif text-[1.3rem] font-normal text-foreground hover:no-underline sm:text-[1.45rem]">
                    {item.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-[0.98rem] leading-relaxed text-taupe pt-1.5 pb-4">
                    {item.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* CAPÍTULO 8: CAFÉ — CONVERSÃO FINAL (CTA) */}
        <section className="bg-coffee py-32 text-ivory md:py-40 border-t border-coffee/20 relative overflow-hidden">
          <div className="relative mx-auto max-w-[940px] px-6 text-center md:px-10">
            <Reveal>
              <div className="inline-flex items-center gap-3">
                <span className="h-px w-8 bg-rose" />
                <p className="eyebrow text-rose font-semibold">Contato</p>
                <span className="h-px w-8 bg-rose" />
              </div>

              <h2 className="mt-6 font-serif text-[2.6rem] leading-[1.1] text-ivory sm:text-[3.5rem] lg:text-[4.2rem]">
                Quer saber mais sobre o acompanhamento infantil?
              </h2>

              <p className="mx-auto mt-6 max-w-xl text-[1.1rem] leading-relaxed text-ivory/85">
                Entre em contato para conversar sobre o atendimento e verificar disponibilidade de horários.
              </p>

              <div className="mt-12 flex justify-center">
                <WhatsAppLink
                  location="infantil_final"
                  target="infantil"
                  event="whatsapp_child_final_click"
                  className="inline-block bg-terracotta text-white px-12 py-5 text-[0.85rem] font-bold tracking-[0.2em] uppercase transition-all duration-300 hover:bg-white hover:text-coffee shadow-2xl hover:-translate-y-1"
                >
                  Falar com Kelle →
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

