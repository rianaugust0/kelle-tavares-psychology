import { site } from "@/config/site";
import { track } from "@/lib/analytics";
import { Reveal } from "./Reveal";

export function Services() {
  return (
    <section id="atendimentos" className="border-t border-border py-20 md:py-28">
      <div className="mx-auto max-w-[1240px] px-6 md:px-10">
        <Reveal className="max-w-2xl">
          <p className="eyebrow">Atendimentos</p>
          <h2 className="mt-6 text-[2.1rem] text-foreground sm:text-[2.9rem]">
            Diferentes histórias. Um cuidado individualizado.
          </h2>
        </Reveal>

        <div className="mt-14 space-y-16 md:mt-20 md:space-y-20">
          {site.serviceTypes.map((service, i) => (
            <Reveal key={service.id} delay={i * 90}>
              <article className="grid gap-6 border-t border-border pt-10 md:grid-cols-[auto_1fr_auto] md:gap-12">
                <p className="font-serif text-[2.4rem] leading-none text-rose">{service.index}</p>
                <div className="max-w-2xl">
                  <h3 className="text-[1.75rem] text-foreground sm:text-[2.15rem]">
                    {service.title}
                  </h3>
                  <p className="mt-5 text-[1rem] text-taupe">{service.description}</p>
                </div>
                <a
                  href="#duvidas"
                  onClick={() =>
                    track(service.id === "adultos" ? "adult_service_click" : "child_service_click")
                  }
                  className="link-underline h-fit self-end text-[0.75rem] font-medium tracking-[0.14em] uppercase text-terracotta"
                >
                  Saiba mais →
                </a>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
