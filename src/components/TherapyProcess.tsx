import { processSteps } from "@/config/site";
import { Reveal } from "./Reveal";

export function TherapyProcess() {
  return (
    <section id="como-funciona" className="border-t border-border py-20 md:py-28">
      <div className="mx-auto max-w-[1240px] px-6 md:px-10">
        <Reveal className="max-w-2xl">
          <div className="flex items-center gap-3">
            <span className="h-px w-6 bg-terracotta/60" />
            <p className="eyebrow">O processo</p>
          </div>
          <h2 className="mt-6 text-[2.1rem] leading-tight text-foreground sm:text-[2.9rem]">
            Começar a terapia pode ser mais simples do que parece.
          </h2>
        </Reveal>

        <ol className="mt-16 border-l border-border/80 pl-6 md:mt-20 md:pl-10">
          {processSteps.map((step, i) => (
            <Reveal as="li" key={step.index} delay={i * 80} className="group relative pb-12 last:pb-0">
              <span
                aria-hidden="true"
                className="absolute top-2 -left-[calc(1.5rem+3.5px)] size-2 rounded-full border border-background bg-terracotta transition-transform duration-300 group-hover:scale-125 md:-left-[calc(2.5rem+4.5px)] md:size-2.5"
              />
              <p className="label-caps font-medium text-taupe/80 group-hover:text-terracotta transition-colors duration-300">{step.index}</p>
              <h3 className="mt-2 text-[1.45rem] text-foreground sm:text-[1.75rem]">{step.title}</h3>
              <p className="mt-3 max-w-xl text-[0.98rem] leading-relaxed text-taupe">{step.text}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
