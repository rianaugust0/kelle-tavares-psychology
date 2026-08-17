import { site } from "@/config/site";
import { Reveal } from "./Reveal";

export function EditorialQuote() {
  return (
    <section className="bg-coffee py-24 md:py-32 text-ivory border-t border-coffee/20">
      <div className="mx-auto max-w-[940px] px-6 text-center md:px-10">
        <Reveal>
          <p className="eyebrow text-rose font-medium tracking-[0.25em]">Ética e acolhimento</p>
          <blockquote className="mt-6 font-serif text-[2.2rem] leading-[1.25] text-ivory sm:text-[3rem] font-light">
            “Cada história merece ser escutada em sua <span className="italic font-normal text-rose">singularidade</span>.”
          </blockquote>
          <div className="mt-8 flex justify-center">
            <span className="h-px w-16 bg-rose/40" />
          </div>
          <p className="mt-6 font-serif text-[1.2rem] text-ivory/80">{site.name}</p>
        </Reveal>
      </div>
    </section>
  );
}
