import { Link } from "@tanstack/react-router";
import { Reveal } from "./Reveal";
import { track } from "@/lib/analytics";

export function HomeIdentification() {
  const topics = [
    "Compreender melhor emoções e comportamentos;",
    "Observar padrões que se repetem nas escolhas e rotinas;",
    "Refletir sobre relações, vínculos e experiências;",
    "Atravessar diferentes momentos e mudanças da vida;",
    "Desenvolver maior clareza e acolhimento sobre si.",
  ];

  return (
    <section className="py-20 md:py-28 border-t border-border bg-background">
      <div className="mx-auto max-w-[1240px] px-6 md:px-10">
        <div className="grid gap-12 lg:grid-cols-[45fr_55fr] lg:gap-20 items-center">
          <Reveal>
            <div className="flex items-center gap-3">
              <span className="h-px w-6 bg-terracotta/60" />
              <p className="eyebrow">Identificação e reflexão</p>
            </div>
            <h2 className="mt-6 text-[2.2rem] leading-tight text-foreground sm:text-[3rem]">
              A psicoterapia pode ser um espaço para...
            </h2>
            <p className="mt-6 text-[1rem] leading-relaxed text-taupe">
              Um processo cuidadoso e ético que oferece suporte para quem deseja olhar para a própria história com mais presença, escuta e profundidade.
            </p>
            
            <div className="mt-8">
              <Link
                to="/adultos"
                onClick={() => track("adult_service_click", { location: "home_identification" })}
                className="link-underline text-[0.78rem] font-semibold tracking-[0.14em] uppercase text-terracotta"
              >
                Conhecer psicoterapia para adultos →
              </Link>
            </div>
          </Reveal>

          <Reveal delay={120} className="border-l border-border/80 pl-6 sm:pl-10 space-y-6">
            {topics.map((topic, i) => (
              <div key={i} className="flex items-start gap-4">
                <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-rose" />
                <p className="font-serif text-[1.35rem] leading-snug text-foreground/90 sm:text-[1.55rem]">
                  {topic}
                </p>
              </div>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
