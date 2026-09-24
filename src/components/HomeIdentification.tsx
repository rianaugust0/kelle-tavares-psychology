import { Reveal } from "./Reveal";

export function HomeIdentification() {
  return (
    <section className="bg-warm-white py-24 md:py-36 lg:py-44">
      <div className="mx-auto max-w-[1160px] px-6 md:px-10">
        <Reveal className="grid gap-12 lg:grid-cols-[28fr_72fr] lg:gap-20">
          <div><p className="eyebrow">Um ponto de partida</p><span className="mt-6 block h-px w-20 bg-terracotta" /></div>
          <div>
            <h2 className="text-[2.3rem] leading-[1.18] text-foreground sm:text-[3.4rem] lg:text-[4.3rem]">
              Talvez você não saiba exatamente explicar o que está acontecendo. <em className="font-normal text-terracotta">E tudo bem começar por aí.</em>
            </h2>
            <p className="mt-9 max-w-2xl text-[1.03rem] leading-relaxed text-taupe">
              A psicoterapia pode ser um espaço para dar nome ao que se sente, perceber padrões e construir novas formas de compreender a própria história.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
