import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faq } from "@/config/site";
import { Reveal } from "./Reveal";

export function FAQ() {
  return (
    <section id="duvidas" className="border-t border-border py-20 md:py-28">
      <div className="mx-auto max-w-[1240px] px-6 md:px-10">
        <div className="grid gap-12 lg:grid-cols-[38fr_62fr] lg:gap-20">
          <Reveal>
            <p className="eyebrow">Dúvidas</p>
            <h2 className="mt-6 text-[2.1rem] text-foreground sm:text-[2.7rem]">
              Antes de começar...
            </h2>
          </Reveal>

          <Reveal delay={100}>
            <Accordion type="single" collapsible className="w-full">
              {faq.map((item, i) => (
                <AccordionItem key={item.q} value={`item-${i}`} className="border-border">
                  <AccordionTrigger className="py-6 text-left font-serif text-[1.25rem] leading-snug font-light hover:no-underline sm:text-[1.4rem]">
                    {item.q}
                  </AccordionTrigger>
                  <AccordionContent className="pb-7 text-[0.97rem] leading-relaxed text-taupe">
                    {item.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
