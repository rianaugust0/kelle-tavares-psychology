import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/Reveal";
import { PhotoFrame } from "@/components/PhotoPlaceholder";
import { WhatsAppLink } from "@/components/WhatsAppLink";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { site, faqAdultos, processStepsAdultos } from "@/config/site";
import portrait from "@/assets/kelle-1.png";
import aboutPhoto from "@/assets/kelle-2.png";

const TITLE = "Psicoterapia para Adultos | Kelle Tavares";
const DESCRIPTION =
  "Conheça informações sobre psicoterapia para adultos com a psicóloga Kelle Tavares e saiba como funciona o atendimento online.";

export const Route = createFileRoute("/adultos")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/adultos" },
      { property: "og:locale", content: "pt_BR" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/adultos" }],
  }),
  component: AdultosPage,
});

function AdultosPage() {
  const pilares = [
    { num: "01", title: "Emoções e angústias", desc: "Compreender sentimentos difíceis e reações que geram incômodo." },
    { num: "02", title: "Relações e vínculos", desc: "Refletir sobre dinâmicas afetivas e limites saudáveis." },
    { num: "03", title: "Padrões repetitivos", desc: "Identificar ciclos cotidianos que trazem frustração." },
    { num: "04", title: "Transições de vida", desc: "Apoio para atravessar mudanças, escolhas e novos momentos." },
  ];

  return (
    <>
      <Header />
      <main>
        {/* CAPÍTULO 1: MARFIM — HERO SOFISTICADO */}
        <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-ivory overflow-hidden">
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-rose/15 rounded-full blur-3xl pointer-events-none -z-10" />
          <div className="mx-auto max-w-[1240px] px-6 md:px-10">
            <div className="grid items-center gap-12 lg:grid-cols-[55fr_45fr] lg:gap-16">
              <Reveal>
                <div className="flex items-center gap-3">
                  <span className="h-px w-8 bg-terracotta" />
                  <p className="eyebrow text-terracotta font-semibold">Psicoterapia para adultos</p>
                </div>

                <h1 className="mt-6 text-[2.7rem] leading-[1.06] text-foreground sm:text-[3.5rem] lg:text-[4.2rem] font-light">
                  Um espaço para olhar com mais <span className="italic font-normal text-terracotta">cuidado</span> para aquilo que você tem vivido.
                </h1>

                <p className="mt-6 max-w-xl text-[1.1rem] leading-relaxed text-taupe font-normal">
                  A psicoterapia pode oferecer um espaço de escuta e reflexão para compreender experiências, emoções, relações e diferentes momentos da vida.
                </p>

                <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-6">
                  <WhatsAppLink
                    location="adultos_hero"
                    target="adultos"
                    event="whatsapp_adult_hero_click"
                    className="bg-foreground text-primary-foreground px-8 py-4 text-center text-[0.78rem] font-semibold tracking-[0.16em] uppercase transition-all duration-300 hover:bg-terracotta hover:text-white shadow-md hover:shadow-lg hover:-translate-y-0.5"
                  >
                    Conversar sobre atendimento →
                  </WhatsAppLink>
                </div>

                <div className="mt-12 pt-8 border-t border-border/80 max-w-sm flex items-center gap-3">
                  <span className="h-2 w-2 rounded-full bg-terracotta/70 animate-pulse" />
                  <p className="text-[0.78rem] tracking-[0.12em] text-foreground/80 uppercase font-semibold">
                    Atendimento online • CRP {site.crp}
                  </p>
                </div>
              </Reveal>

              <Reveal delay={140} className="relative">
                <div className="relative p-3 bg-warm-white border border-border/80 shadow-lg">
                  <PhotoFrame
                    src={portrait}
                    alt="Retrato de Kelle Tavares, psicóloga"
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

        {/* CAPÍTULO 2: ROSÉ — IDENTIFICAÇÃO EDITORIAL (COMPOSIÇÃO ASSIMÉTRICA COM NÚMEROS) */}
        <section className="py-24 md:py-32 border-t border-border bg-blush/45">
          <div className="mx-auto max-w-[1240px] px-6 md:px-10">
            <Reveal>
              <div className="flex items-center gap-3">
                <span className="h-px w-8 bg-terracotta" />
                <p className="eyebrow text-terracotta font-semibold">Identificação e ponto de partida</p>
              </div>
              
              <h2 className="mt-6 font-serif text-[2.5rem] leading-[1.12] text-foreground sm:text-[3.4rem] max-w-3xl">
                Nem sempre é preciso saber exatamente o que dizer para começar.
              </h2>
              
              <div className="mt-6 space-y-4 text-[1.1rem] leading-relaxed text-taupe max-w-3xl">
                <p>
                  Algumas pessoas chegam à psicoterapia porque algo está incomodando. Outras percebem padrões que se repetem, atravessam mudanças ou simplesmente desejam compreender melhor a própria história.
                </p>
                <p className="text-foreground/90 font-medium font-serif text-[1.25rem]">
                  O ponto de partida não precisa estar completamente organizado. Ele pode ser construído ao longo do processo.
                </p>
              </div>

              {/* 4 Pilares Editoriais Serifados */}
              <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4 pt-8 border-t border-terracotta/25">
                {pilares.map((item) => (
                  <div key={item.num} className="p-5 bg-warm-white/75 border border-border/60">
                    <span className="font-serif text-[1.3rem] text-terracotta font-semibold block">{item.num}</span>
                    <h3 className="font-serif text-[1.35rem] text-foreground font-medium mt-1">{item.title}</h3>
                    <p className="text-[0.84rem] text-taupe mt-1.5 leading-snug">{item.desc}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        {/* CAPÍTULO 3: MARFIM — COMO FUNCIONA */}
        <section className="border-t border-border py-20 md:py-24 bg-ivory">
          <div className="mx-auto max-w-[1240px] px-6 md:px-10">
            <Reveal className="max-w-2xl">
              <div className="flex items-center gap-3">
                <span className="h-px w-8 bg-terracotta" />
                <p className="eyebrow text-terracotta font-semibold">O processo</p>
              </div>
              <h2 className="mt-5 text-[2.2rem] leading-tight text-foreground sm:text-[2.9rem]">
                Como funciona o acompanhamento
              </h2>
            </Reveal>

            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {processStepsAdultos.map((step, i) => (
                <Reveal key={step.index} delay={i * 90} className="p-6 md:p-7 bg-warm-white border border-border/80 shadow-xs flex flex-col justify-between transition-all duration-300 hover:border-terracotta/40 hover:-translate-y-0.5">
                  <div>
                    <span className="font-serif text-[2.1rem] text-terracotta font-light">
                      {step.index}
                    </span>
                    <h3 className="mt-3 text-[1.4rem] text-foreground font-serif">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-[0.94rem] leading-relaxed text-taupe">
                      {step.text}
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

        {/* CAPÍTULO 4: CAFÉ — MOMENTO DE IMPACTO EDITORIAL */}
        <section className="bg-coffee py-16 md:py-20 text-ivory border-t border-coffee/20">
          <div className="mx-auto max-w-[940px] px-6 text-center md:px-10">
            <Reveal>
              <p className="eyebrow text-rose font-medium tracking-[0.25em]">Espaço de escuta</p>
              <blockquote className="mt-5 font-serif text-[1.9rem] leading-[1.2] text-ivory sm:text-[2.5rem] font-light">
                “A psicoterapia é a oportunidade de olhar para si com tempo, atenção e sem a pressa das respostas prontas.”
              </blockquote>
              <div className="mt-6 flex justify-center">
                <span className="h-px w-14 bg-rose/40" />
              </div>
            </Reveal>
          </div>
        </section>

        {/* CAPÍTULO 5: MARFIM — SOBRE KELLE (FOTO + BIO) */}
        <section className="border-t border-border py-20 md:py-26 bg-ivory">
          <div className="mx-auto max-w-[1240px] px-6 md:px-10">
            <div className="grid gap-10 lg:grid-cols-[42fr_58fr] lg:gap-16 items-center">
              <Reveal className="relative">
                <div className="p-2.5 bg-warm-white border border-border/80 shadow-xs">
                  <PhotoFrame
                    src={aboutPhoto}
                    alt="Kelle Tavares, psicóloga"
                    width={912}
                    height={1104}
                    pending={false}
                    className="aspect-[4/5] w-full object-cover grayscale-[4%]"
                  />
                </div>
                <div className="absolute top-5 -left-3 w-12 h-px bg-terracotta pointer-events-none hidden md:block" />
              </Reveal>

              <Reveal delay={100}>
                <div className="flex items-center gap-3">
                  <span className="h-px w-8 bg-terracotta" />
                  <p className="eyebrow text-terracotta font-semibold">Sobre a psicóloga</p>
                </div>
                <h2 className="mt-5 text-[2.2rem] leading-tight text-foreground sm:text-[2.9rem]">
                  Kelle Tavares
                </h2>
                <div className="mt-6 space-y-4 text-[1rem] leading-relaxed text-taupe">
                  <p>
                    Sou psicóloga graduada pela FacUnicamps, comprometida com uma prática clínica ética, reflexiva e fundamentada.
                  </p>
                  <p>
                    Ofereço um espaço profissional de escuta atenta e individualizada, em que cada pessoa pode olhar para sua própria história com acolhimento, respeito ao seu tempo e sem julgamentos.
                  </p>
                  <div className="mt-3 p-3.5 border-l-2 border-terracotta bg-blush/40 text-[0.9rem] text-foreground font-medium">
                    Atendimento online para pacientes em todo o Brasil e exterior • Base profissional em Goiânia — GO
                  </div>
                </div>

                <div className="mt-8 pt-5 border-t border-border flex items-center justify-between flex-wrap gap-4">
                  <p className="label-caps font-semibold text-foreground/80">
                    {site.professionalTitle} • CRP {site.crp}
                  </p>
                  <a
                    href="/#trajetoria"
                    className="link-underline text-[0.78rem] font-semibold tracking-[0.16em] uppercase text-terracotta transition-colors duration-200 hover:text-foreground"
                  >
                    Conheça minha trajetória →
                  </a>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* CAPÍTULO 6: ROSÉ — FAQ ADULTOS */}
        <section className="border-t border-border py-24 md:py-32 bg-blush/35">
          <div className="mx-auto max-w-[880px] px-6 md:px-10">
            <Reveal>
              <div className="flex items-center gap-3">
                <span className="h-px w-8 bg-terracotta" />
                <p className="eyebrow text-terracotta font-semibold">Dúvidas frequentes</p>
              </div>
              <h2 className="mt-6 text-[2.2rem] leading-tight text-foreground sm:text-[2.8rem]">
                Dúvidas comuns sobre o atendimento
              </h2>
            </Reveal>

            <Accordion type="single" collapsible className="mt-14 divide-y divide-border border-y border-border">
              {faqAdultos.map((item, i) => (
                <AccordionItem key={i} value={`item-${i}`} className="border-none py-3">
                  <AccordionTrigger className="text-left font-serif text-[1.35rem] font-normal text-foreground hover:no-underline sm:text-[1.5rem]">
                    {item.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-[1rem] leading-relaxed text-taupe pt-2 pb-5">
                    {item.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* CAPÍTULO 7: CAFÉ — CONVERSÃO FINAL */}
        <section className="bg-coffee py-32 text-ivory md:py-40 border-t border-coffee/20 relative overflow-hidden">
          <div className="relative mx-auto max-w-[940px] px-6 text-center md:px-10">
            <Reveal>
              <div className="inline-flex items-center gap-3">
                <span className="h-px w-8 bg-rose" />
                <p className="eyebrow text-rose font-semibold">Contato</p>
                <span className="h-px w-8 bg-rose" />
              </div>

              <h2 className="mt-6 font-serif text-[3rem] leading-[1.06] text-ivory sm:text-[3.8rem] lg:text-[4.6rem]">
                Podemos conversar sobre o atendimento?
              </h2>

              <p className="mx-auto mt-6 max-w-xl text-[1.1rem] leading-relaxed text-ivory/85">
                Envie uma mensagem pelo WhatsApp para tirar dúvidas iniciais e verificar disponibilidade de horários.
              </p>

              <div className="mt-12 flex justify-center">
                <WhatsAppLink
                  location="adultos_final"
                  target="adultos"
                  event="whatsapp_adult_final_click"
                  className="inline-block bg-ivory text-coffee px-12 py-5 text-[0.85rem] font-bold tracking-[0.2em] uppercase transition-all duration-300 hover:bg-terracotta hover:text-white shadow-2xl hover:-translate-y-1"
                >
                  Conversar com Kelle pelo WhatsApp →
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
