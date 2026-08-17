import { career } from "@/config/site";
import { Reveal } from "./Reveal";

export function Career() {
  return (
    <section id="trajetoria" className="py-20 md:py-28">
      <div className="mx-auto max-w-[1240px] px-6 md:px-10">
        <Reveal className="max-w-2xl">
          <p className="eyebrow">Trajetória</p>
          <h2 className="mt-6 text-[2.1rem] text-foreground sm:text-[2.9rem]">
            Formação contínua faz parte do meu trabalho.
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-14 lg:grid-cols-2 lg:gap-24">
          <Reveal>
            <h3 className="label-caps">Formação</h3>
            <ul className="mt-8 space-y-7">
              {career.formation.map((item) => (
                <li key={item.title} className="border-t border-border pt-5">
                  <p className="font-serif text-[1.35rem] leading-snug text-foreground">
                    {item.title}
                  </p>
                  {item.detail && (
                    <p className="mt-1.5 text-[0.85rem] tracking-wide text-taupe">{item.detail}</p>
                  )}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={110}>
            <h3 className="label-caps">Experiência</h3>
            <ul className="mt-8 space-y-7">
              {career.experience.map((item) => (
                <li key={item.title} className="border-t border-border pt-5">
                  <p className="font-serif text-[1.35rem] leading-snug text-foreground">
                    {item.title}
                  </p>
                  {item.detail && <p className="mt-1.5 text-[0.9rem] text-taupe">{item.detail}</p>}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
