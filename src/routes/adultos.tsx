import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/Reveal";
import { PhotoFrame } from "@/components/PhotoPlaceholder";
import { WhatsAppLink } from "@/components/WhatsAppLink";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { site, seoConfig } from "@/config/site";
import portrait from "@/assets/kelle-1.png";
import aboutPhoto from "@/assets/kelle-2.png";
import onlinePhoto from "@/assets/kelle-4.png";

const seo = seoConfig.adultos;

export const Route = createFileRoute("/adultos")({
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
          "@type": "Service",
          name: "Psicoterapia para Adultos Online",
          provider: {
            "@type": "Person",
            name: site.name,
            jobTitle: "Psicóloga",
            url: site.url,
          },
          serviceType: "Psicoterapia Individual para Adultos Online",
          description: seo.description,
          url: seo.canonical,
          areaServed: {
            "@type": "Country",
            name: "Brasil",
          },
        }),
      },
    ],
  }),
  component: AdultosPage,
});

function AdultosPage() {
  const temas = [
    {
      num: "01",
      title: "Ansiedade e preocupações",
      desc: "Compreender pensamentos acelerados, apreensões constantes e o impacto das incertezas no dia a dia.",
    },
    {
      num: "02",
      title: "Sobrecarga emocional",
      desc: "Espaço para acolher o cansaço mental, o acúmulo de exigências e a sensação de estar no limite.",
    },
    {
      num: "03",
      title: "Autoestima e autoconhecimento",
      desc: "Aprofundar a relação consigo mesmo, reconhecendo necessidades, limites e formas mais gentis de se perceber.",
    },
    {
      num: "04",
      title: "Relacionamentos e limites",
      desc: "Refletir sobre dinâmicas interpessoais, conflitos afetivos, convivência familiar e posicionamento nos vínculos.",
    },
    {
      num: "05",
      title: "Transições e mudanças de vida",
      desc: "Apoio para atravessar momentos de transição pessoal, decisões profissionais ou reconfigurações na rotina.",
    },
    {
      num: "06",
      title: "Dificuldades emocionais",
      desc: "Escuta atenta para momentos de desânimo, conflitos internos ou necessidade de reorganizar sentimentos.",
    },
  ];

  const passos = [
    {
      index: "01",
      title: "Primeiro contato",
      text: "Envie uma mensagem pelo WhatsApp para tirar dúvidas iniciais e conversar sobre a disponibilidade de horários.",
    },
    {
      index: "02",
      title: "Primeiro encontro",
      text: "Um espaço de acolhimento e escuta sem julgamentos para compreender o seu momento e o que você busca.",
    },
    {
      index: "03",
      title: "Continuidade e frequência",
      text: "O acompanhamento é individual, respeitando a sua singularidade. Frequência e planejamento são alinhados caso a caso.",
    },
  ];

  const faqAdultosList = [
    {
      q: "Como funciona a psicoterapia para adultos?",
      a: "A psicoterapia é um processo individual e ético de escuta e reflexão. Em cada sessão, trabalhamos as questões trazidas por você — sentimentos, relações, dúvidas e experiências — com respeito ao seu ritmo e sem julgamentos.",
    },
    {
      q: "Como funciona a terapia online?",
      a: "As sessões acontecem por videochamada em plataforma segura e sigilosa. O paciente pode participar com privacidade e conforto de onde estiver, precisando apenas de uma conexão estável à internet e um ambiente reservado.",
    },
    {
      q: "Preciso estar passando por um problema grave para procurar um psicólogo?",
      a: "Não. A psicoterapia acolhe desde a busca por autoconhecimento e apoio em transições de vida até momentos de angústia, ansiedade ou sobrecarga. Não é necessário esperar um sofrimento intenso para iniciar o cuidado.",
    },
    {
      q: "Qual é a duração das sessões?",
      a: "As sessões têm duração média de 50 minutos, acontecendo em dias e horários previamente combinados entre a psicóloga e o paciente.",
    },
    {
      q: "Como faço para conversar sobre disponibilidade de horários?",
      a: "Basta clicar em um dos botões de WhatsApp nesta página para enviar uma mensagem. Conversaremos de forma simples sobre as opções de horários e esclareceremos as dúvidas que você tiver.",
    },
  ];

  return (
    <>
      <Header />
      <main>
        {/* HERO SOFISTICADO */}
        <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-ivory overflow-hidden">
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-rose/15 rounded-full blur-3xl pointer-events-none -z-10" />
          <div className="mx-auto max-w-[1240px] px-6 md:px-10">
            <div className="grid items-center gap-12 lg:grid-cols-[55fr_45fr] lg:gap-16">
              <Reveal>
                <div className="flex items-center gap-3">
                  <span className="h-px w-8 bg-terracotta" />
                  <p className="eyebrow text-terracotta font-semibold">Atendimento Individual</p>
                </div>

                <h1 className="mt-6 text-[2.4rem] leading-[1.1] text-foreground sm:text-[3.2rem] lg:text-[3.8rem] font-light">
                  Psicoterapia para adultos online com psicóloga em Goiânia
                </h1>

                <p className="mt-6 max-w-xl text-[1.1rem] leading-relaxed text-taupe font-normal">
                  Um espaço de escuta e cuidado para adultos que desejam compreender melhor suas emoções, relações e diferentes momentos da vida, com atendimento psicológico online.
                </p>

                <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-6">
                  <WhatsAppLink
                    location="adultos_hero"
                    target="adultos"
                    event="whatsapp_adult_hero_click"
                    className="bg-foreground text-primary-foreground px-8 py-4 text-center text-[0.78rem] font-semibold tracking-[0.16em] uppercase transition-all duration-300 hover:bg-terracotta hover:text-white shadow-md hover:shadow-lg hover:-translate-y-0.5"
                  >
                    Quero saber sobre o atendimento
                  </WhatsAppLink>
                </div>

                <div className="mt-12 pt-8 border-t border-border/80 max-w-sm flex items-center gap-3">
                  <span className="h-2 w-2 rounded-full bg-terracotta/70 animate-pulse" />
                  <p className="text-[0.78rem] tracking-[0.12em] text-foreground/80 uppercase font-semibold">
                    Atendimento online • Psicóloga em Goiânia • CRP {site.crp}
                  </p>
                </div>
              </Reveal>

              <Reveal delay={140} className="relative">
                <div className="relative p-3 bg-warm-white border border-border/80 shadow-lg">
                  <PhotoFrame
                    src={portrait}
                    alt="Retrato de Kelle Tavares, psicóloga para adultos"
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

        {/* SEÇÃO: QUANDO A PSICOTERAPIA PODE AJUDAR */}
        <section className="py-24 md:py-32 border-t border-border bg-blush/45">
          <div className="mx-auto max-w-[1240px] px-6 md:px-10">
            <Reveal>
              <div className="flex items-center gap-3">
                <span className="h-px w-8 bg-terracotta" />
                <p className="eyebrow text-terracotta font-semibold">Indicações e acolhimento</p>
              </div>
              
              <h2 className="mt-6 font-serif text-[2.3rem] leading-[1.15] text-foreground sm:text-[3.2rem] max-w-3xl">
                Quando a psicoterapia pode ajudar?
              </h2>
              
              <div className="mt-6 space-y-4 text-[1.05rem] leading-relaxed text-taupe max-w-3xl">
                <p>
                  Diferentes situações e fases da vida podem nos convidar a buscar acompanhamento profissional.
                  Não é necessário esperar uma crise ou um sofrimento extremo para iniciar o processo terapêutico.
                </p>
                <p className="text-foreground/90 font-medium font-serif text-[1.2rem]">
                  A psicoterapia é um suporte ético para quem deseja compreender melhor a si mesmo e encontrar caminhos mais conscientes:
                </p>
              </div>

              {/* Grid elegante de temas de cuidado */}
              <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 pt-8 border-t border-terracotta/25">
                {temas.map((item) => (
                  <div key={item.num} className="p-6 bg-warm-white/85 border border-border/60 transition-all duration-300 hover:border-terracotta/40">
                    <span className="font-serif text-[1.2rem] text-terracotta font-semibold block">{item.num}</span>
                    <h3 className="font-serif text-[1.35rem] text-foreground font-medium mt-2">{item.title}</h3>
                    <p className="text-[0.92rem] text-taupe mt-2.5 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        {/* SEÇÃO: UM ESPAÇO PARA VOCÊ */}
        <section className="border-t border-border py-20 md:py-28 bg-warm-white">
          <div className="mx-auto max-w-[1240px] px-6 md:px-10">
            <Reveal className="max-w-3xl">
              <div className="flex items-center gap-3">
                <span className="h-px w-8 bg-terracotta" />
                <p className="eyebrow text-terracotta font-semibold">Um espaço para você</p>
              </div>

              <h2 className="mt-6 font-serif text-[2.3rem] leading-[1.15] text-foreground sm:text-[3.2rem]">
                Você não precisa esperar tudo ficar difícil para procurar terapia.
              </h2>

              <div className="mt-6 space-y-4 text-[1.05rem] leading-relaxed text-taupe">
                <p>
                  A psicoterapia também pode ser procurada por quem deseja se conhecer melhor, compreender padrões de comportamento, lidar com mudanças ou encontrar um espaço seguro para falar sobre o que tem vivido.
                </p>
                <p className="text-foreground/90 font-medium font-serif text-[1.2rem]">
                  Cada processo começa a partir da realidade, das necessidades e do momento de cada pessoa.
                </p>
              </div>

              <div className="mt-10 pt-4">
                <WhatsAppLink
                  location="adultos_espaco_voce"
                  target="adultos"
                  event="whatsapp_adult_section_click"
                  className="inline-flex items-center gap-2 text-[0.8rem] font-bold tracking-[0.16em] uppercase text-terracotta transition-colors duration-200 hover:text-foreground"
                >
                  Quero conversar sobre o atendimento <span>→</span>
                </WhatsAppLink>
              </div>
            </Reveal>
          </div>
        </section>

        {/* SEÇÃO: COMO FUNCIONA O ATENDIMENTO */}
        <section className="border-t border-border py-20 md:py-28 bg-ivory">
          <div className="mx-auto max-w-[1240px] px-6 md:px-10">
            <Reveal className="max-w-2xl">
              <div className="flex items-center gap-3">
                <span className="h-px w-8 bg-terracotta" />
                <p className="eyebrow text-terracotta font-semibold">O processo terapêutico</p>
              </div>
              <h2 className="mt-5 text-[2.2rem] leading-tight text-foreground sm:text-[2.9rem]">
                Como funciona o acompanhamento
              </h2>
              <p className="mt-4 text-[1.02rem] leading-relaxed text-taupe">
                Um acompanhamento individual e confidencial, centrado na sua realidade e construído com respeito ao seu tempo.
              </p>
            </Reveal>

            <div className="mt-14 grid gap-8 md:grid-cols-3">
              {passos.map((step, i) => (
                <Reveal key={step.index} delay={i * 90} className="p-7 md:p-8 bg-warm-white border border-border/80 shadow-xs flex flex-col justify-between transition-all duration-300 hover:border-terracotta/40 hover:-translate-y-0.5">
                  <div>
                    <span className="font-serif text-[2.2rem] text-terracotta font-light">
                      {step.index}
                    </span>
                    <h3 className="mt-3 text-[1.45rem] text-foreground font-serif">
                      {step.title}
                    </h3>
                    <p className="mt-3 text-[0.96rem] leading-relaxed text-taupe">
                      {step.text}
                    </p>
                  </div>
                  <div className="mt-8 pt-4 border-t border-border/50">
                    <span className="h-0.5 w-6 bg-terracotta/40 block" />
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* SEÇÃO: PSICOTERAPIA ONLINE */}
        <section className="border-t border-border/60 py-20 md:py-28 bg-warm-white">
          <div className="mx-auto max-w-[1240px] px-6 md:px-10">
            <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20 items-center">
              <Reveal>
                <div className="flex items-center gap-3">
                  <span className="h-px w-8 bg-terracotta" />
                  <p className="eyebrow text-terracotta font-semibold">Modalidade remota</p>
                </div>
                <h2 className="mt-5 text-[2.1rem] leading-tight text-foreground sm:text-[2.8rem]">
                  Psicoterapia online
                </h2>
                <div className="mt-6 space-y-4 text-[1rem] leading-relaxed text-taupe">
                  <p>
                    A psicoterapia online permite que as sessões sejam realizadas de forma remota,
                    com toda a privacidade, acolhimento e rigor ético do acompanhamento profissional.
                  </p>
                  <p>
                    Você pode participar de um ambiente que lhe seja confortável e seguro, com flexibilidade
                    de horários e sem a necessidade de deslocamentos na rotina.
                  </p>
                  <p className="text-foreground/90 font-medium pt-2">
                    Kelle Tavares é psicóloga em Goiânia e realiza atendimento psicológico online para adultos de diferentes regiões do Brasil.
                  </p>
                </div>

                <div className="mt-8 pt-6 border-t border-border/60">
                  <WhatsAppLink
                    location="adultos_online_section"
                    target="adultos"
                    event="whatsapp_adult_online_click"
                    className="inline-flex items-center gap-2 text-[0.8rem] font-bold tracking-[0.16em] uppercase text-terracotta transition-colors duration-200 hover:text-foreground"
                  >
                    Tirar dúvidas sobre a terapia online <span>→</span>
                  </WhatsAppLink>
                </div>
              </Reveal>

              <Reveal delay={120} className="relative">
                <div className="relative p-2.5 bg-ivory border border-border/80 shadow-sm">
                  <PhotoFrame
                    src={onlinePhoto}
                    alt="Kelle Tavares durante atendimento psicológico online"
                    width={600}
                    height={700}
                    pending={false}
                    className="aspect-[4/3] sm:aspect-[16/11] lg:aspect-[4/3] w-full object-cover grayscale-[4%]"
                  />
                  <div className="absolute -bottom-3 -right-3 w-16 h-16 border-b border-r border-terracotta/40 pointer-events-none hidden sm:block" />
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* MOMENTO DE IMPACTO EDITORIAL */}
        <section className="bg-coffee py-16 md:py-20 text-ivory border-t border-coffee/20">
          <div className="mx-auto max-w-[940px] px-6 text-center md:px-10">
            <Reveal>
              <p className="eyebrow text-rose font-medium tracking-[0.25em]">Espaço de escuta</p>
              <blockquote className="mt-5 font-serif text-[1.9rem] leading-[1.25] text-ivory sm:text-[2.5rem] font-light">
                “A psicoterapia é a oportunidade de olhar para si com tempo, atenção e sem a pressa das respostas prontas.”
              </blockquote>
              <div className="mt-6 flex justify-center">
                <span className="h-px w-14 bg-rose/40" />
              </div>
            </Reveal>
          </div>
        </section>

        {/* SOBRE A PROFISSIONAL (APRESENTAÇÃO CURTA) */}
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
                    Sou psicóloga em Goiânia, graduada pela Faculdade Unida de Campinas (FacUnicamps) e inscrita no CRP 21419.
                  </p>
                  <p>
                    Ofereço um espaço profissional de escuta atenta, ética e individualizada, em que cada pessoa pode olhar para sua própria história com acolhimento, respeito ao seu ritmo e sem julgamentos.
                  </p>
                  <div className="mt-3 p-3.5 border-l-2 border-terracotta bg-blush/40 text-[0.9rem] text-foreground font-medium">
                    Atendimento online para pacientes em todo o Brasil • Base profissional em Goiânia — GO
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
                    Conheça minha trajetória completa →
                  </a>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* FAQ ADULTOS */}
        <section className="border-t border-border py-24 md:py-32 bg-blush/35">
          <div className="mx-auto max-w-[880px] px-6 md:px-10">
            <Reveal>
              <div className="flex items-center gap-3">
                <span className="h-px w-8 bg-terracotta" />
                <p className="eyebrow text-terracotta font-semibold">Dúvidas frequentes</p>
              </div>
              <h2 className="mt-6 text-[2.2rem] leading-tight text-foreground sm:text-[2.8rem]">
                Dúvidas sobre o atendimento
              </h2>
            </Reveal>

            <Accordion type="single" collapsible className="mt-14 divide-y divide-border border-y border-border">
              {faqAdultosList.map((item, i) => (
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

        {/* CTA FINAL DE CONVERSÃO */}
        <section className="bg-coffee py-32 text-ivory md:py-40 border-t border-coffee/20 relative overflow-hidden">
          <div className="relative mx-auto max-w-[940px] px-6 text-center md:px-10">
            <Reveal>
              <div className="inline-flex items-center gap-3">
                <span className="h-px w-8 bg-rose" />
                <p className="eyebrow text-rose font-semibold">Contato</p>
                <span className="h-px w-8 bg-rose" />
              </div>

              <h2 className="mt-6 font-serif text-[2.8rem] leading-[1.08] text-ivory sm:text-[3.6rem] lg:text-[4.2rem]">
                Quer saber mais sobre o atendimento?
              </h2>

              <p className="mx-auto mt-6 max-w-xl text-[1.05rem] leading-relaxed text-ivory/85">
                Entre em contato para conversar sobre disponibilidade de horários e entender como funciona o atendimento.
              </p>

              <div className="mt-12 flex justify-center">
                <WhatsAppLink
                  location="adultos_final"
                  target="adultos"
                  event="whatsapp_adult_final_click"
                  className="inline-block bg-ivory text-coffee px-12 py-5 text-[0.85rem] font-bold tracking-[0.2em] uppercase transition-all duration-300 hover:bg-terracotta hover:text-white shadow-2xl hover:-translate-y-1"
                >
                  Falar com Kelle
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
