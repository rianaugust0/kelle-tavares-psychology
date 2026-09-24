import { Reveal } from "./Reveal";

export function EditorialQuote() {
  return (
    <section className="bg-coffee py-28 text-ivory md:py-44">
      <div className="mx-auto max-w-[1200px] px-6 md:px-10">
        <Reveal>
          <p className="eyebrow text-rose">Uma outra possibilidade</p>
          <blockquote className="mt-10 max-w-[1080px] text-[2.8rem] leading-[1.12] text-ivory sm:text-[4.2rem] lg:text-[5.2rem]">
            Terapia não precisa começar somente quando <em className="font-normal text-rose">tudo desmorona.</em>
          </blockquote>
          <span className="mt-14 block h-px w-28 bg-rose/60" />
        </Reveal>
      </div>
    </section>
  );
}
