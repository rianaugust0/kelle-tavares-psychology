import { processSteps } from "@/config/site";
import { Reveal } from "./Reveal";

export function TherapyProcess() {
  return (
    <section id="como-funciona" className="border-t border-border py-20 md:py-28">
      <div className="mx-auto max-w-[1240px] px-6 md:px-10">
        <Reveal className="max-w-2xl">
          <p className="eyebrow">O processo</p>
          <h2 className="mt-6 text-[2.1rem] text-foreground sm:text-[2.9rem]">
            Começar a terapia pode ser mais simples do que parece.
          </h2>
        </Reveal>

        <ol className="mt-16 border-l border-border pl-6 md:mt-20 md:pl-10">
          {processSteps.map((step, i) => (
            <Reveal as="li" key={step.index} delay={i * 80} className="relative pb-12 last:pb-0">
              <span
                aria-hidden="true"
                className="absolute top-2 -left-[calc(1.5rem+3.5px)] size-1.5 rounded-full bg-terracotta md:-left-[calc(2.5rem+3.5px)]"
              />
              <p className="label-caps">{step.index}</p>
              <h3 className="mt-3 text-[1.5rem] text-foreground sm:text-[1.8rem]">{step.title}</h3>
              <p className="mt-3 max-w-xl text-[0.98rem] text-taupe">{step.text}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
