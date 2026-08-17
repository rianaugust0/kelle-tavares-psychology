import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { WhatsAppLink } from "./WhatsAppLink";
import { Reveal } from "./Reveal";

export function FAQ() {
  const homeFaq = [
    {
      q: "Preciso saber exatamente o que falar antes de entrar em contato?",
      a: "Não. O primeiro contato também serve para entender o que você está buscando, tirar dúvidas iniciais e avaliar qual formato de acompanhamento faz sentido para o seu momento.",
    },
    {
      q: "Como sei qual acompanhamento procurar?",
      a: "Você não precisa chegar com tudo definido. No primeiro contato, é possível conversar brevemente sobre a necessidade apresentada — seja para atendimento individual de adultos ou acompanhamento infantil.",
    },
    {
      q: "O atendimento é somente online?",
      a: "Sim. Os atendimentos são realizados na modalidade online com total sigilo e acolhimento, possibilitando o acompanhamento de pacientes independentemente da sua cidade ou país.",
    },
    {
      q: "Como começo o atendimento?",
      a: "O primeiro passo é uma mensagem pelo WhatsApp para verificar disponibilidade de horários, esclarecer informações práticas e alinhar o primeiro encontro.",
    },
  ];

  return (
    <section id="duvidas" className="border-t border-border py-20 md:py-28 bg-blush/35">
      <div className="mx-auto max-w-[1240px] px-6 md:px-10">
        <div className="grid gap-12 lg:grid-cols-[38fr_62fr] lg:gap-20">
          <Reveal>
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-terracotta" />
              <p className="eyebrow text-terracotta font-semibold">Dúvidas</p>
            </div>
            <h2 className="mt-5 text-[2.4rem] leading-tight text-foreground sm:text-[3.2rem]">
              Talvez você esteja se perguntando...
            </h2>
            <p className="mt-4 text-[1.05rem] leading-relaxed text-taupe">
              Perguntas frequentes para esclarecer pontos práticos antes de dar o primeiro passo.
            </p>

            <div className="mt-8 pt-6 border-t border-border/80 hidden lg:block">
              <p className="text-[0.88rem] text-taupe font-medium">Ainda tem alguma dúvida?</p>
              <WhatsAppLink
                location="faq_sidebar"
                className="mt-2 inline-flex items-center gap-1.5 text-[0.8rem] font-bold tracking-[0.14em] uppercase text-terracotta transition-colors duration-200 hover:text-foreground"
              >
                Conversar com Kelle →
              </WhatsAppLink>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <Accordion type="single" collapsible className="w-full divide-y divide-border border-y border-border">
              {homeFaq.map((item, i) => (
                <AccordionItem key={item.q} value={`item-${i}`} className="border-none py-2.5">
                  <AccordionTrigger className="text-left font-serif text-[1.3rem] font-normal text-foreground hover:no-underline sm:text-[1.45rem]">
                    {item.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-[0.98rem] leading-relaxed text-taupe pt-1.5 pb-4">
                    {item.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>

            <div className="mt-8 pt-6 border-t border-border/80 lg:hidden">
              <p className="text-[0.88rem] text-taupe font-medium">Ainda tem alguma dúvida?</p>
              <WhatsAppLink
                location="faq_bottom"
                className="mt-2 inline-flex items-center gap-1.5 text-[0.8rem] font-bold tracking-[0.14em] uppercase text-terracotta transition-colors duration-200 hover:text-foreground"
              >
                Conversar com Kelle →
              </WhatsAppLink>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
