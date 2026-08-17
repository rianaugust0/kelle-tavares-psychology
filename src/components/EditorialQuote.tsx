import { site } from "@/config/site";
import { Reveal } from "./Reveal";

export function EditorialQuote() {
  return (
    <section className="bg-blush py-28 md:py-40">
      <div className="mx-auto max-w-[900px] px-6 text-center md:px-10">
        <Reveal>
          <blockquote className="text-[2rem] leading-[1.22] text-foreground sm:text-[2.7rem] lg:text-[3.1rem]">
            “Cada história merece ser escutada em sua singularidade.”
          </blockquote>
          <p className="label-caps mt-12">{site.name}</p>
        </Reveal>
      </div>
    </section>
  );
}
