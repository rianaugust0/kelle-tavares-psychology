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
    <section id="duvidas" className="relative border-t border-[#D9C8BC]/40 py-20 lg:py-28 bg-[#F6F0EB] overflow-hidden">
      {/* Halo de luz ambiente no FAQ */}
      <div className="absolute top-1/3 left-10 size-[380px] rounded-full bg-[#EAE0D6]/50 blur-3xl pointer-events-none" />

      <div className="mx-auto max-w-[1280px] px-6 sm:px-10 lg:px-12 relative z-10">
        <div className="grid gap-12 lg:grid-cols-[38fr_62fr] lg:gap-20 items-start">
          
          <Reveal direction="left">
            <div className="flex items-center gap-3 mb-3">
              <span className="h-[1px] w-6 bg-[#BA9485]" />
              <span className="text-[0.68rem] font-bold tracking-[0.24em] uppercase text-[#BA9485]">
                DÚVIDAS FREQUENTES
              </span>
            </div>
            
            <h2 className="font-serif text-[2.4rem] font-semibold leading-[1.12] text-[#3A2E2B] sm:text-[3.2rem] lg:text-[3.5rem] tracking-tight">
              Talvez você esteja se perguntando...
            </h2>
            <p className="mt-4 text-[0.92rem] leading-relaxed text-[#6E5F57]">
              Esclareça os pontos práticos e sinta-se inteiramente à vontade para dar o primeiro passo.
            </p>

            <div className="mt-8 pt-6 border-t border-[#D9C8BC]/60 hidden lg:block">
              <p className="text-[0.85rem] text-[#6E5F57] font-medium">Ficou com alguma dúvida específica?</p>
              <WhatsAppLink
                location="faq_sidebar"
                className="group mt-3 inline-flex items-center gap-2 text-[0.72rem] font-bold tracking-[0.16em] uppercase text-[#3A2E2B] transition-colors duration-200 hover:text-[#7E655B]"
              >
                <span>CONVERSAR NO WHATSAPP</span>
                <span className="transition-transform duration-300 group-hover:translate-x-1.5">→</span>
              </WhatsAppLink>
            </div>
          </Reveal>

          <Reveal direction="right" delay={120} className="glassmorphism-card p-6 sm:p-8 rounded-2xl shadow-sm border border-[#D9C8BC]">
            <Accordion type="single" collapsible className="w-full divide-y divide-[#EFE6DF]">
              {homeFaq.map((item, i) => (
                <AccordionItem key={item.q} value={`item-${i}`} className="border-none py-3">
                  <AccordionTrigger className="text-left font-serif text-[1.25rem] font-semibold text-[#3A2E2B] hover:no-underline hover:text-[#A07365] transition-colors duration-200 sm:text-[1.4rem]">
                    {item.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-[0.9rem] leading-relaxed text-[#6E5F57] pt-2 pb-4 font-sans">
                    {item.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>

            <div className="mt-6 pt-6 border-t border-[#EFE6DF] lg:hidden">
              <p className="text-[0.85rem] text-[#6E5F57] font-medium">Ficou com alguma dúvida específica?</p>
              <WhatsAppLink
                location="faq_bottom"
                className="group mt-2.5 inline-flex items-center gap-2 text-[0.72rem] font-bold tracking-[0.16em] uppercase text-[#3A2E2B] transition-colors duration-200 hover:text-[#7E655B]"
              >
                <span>CONVERSAR NO WHATSAPP</span>
                <span className="transition-transform duration-300 group-hover:translate-x-1.5">→</span>
              </WhatsAppLink>
            </div>
          </Reveal>

        </div>
      </div>
    </section>

  );
}
