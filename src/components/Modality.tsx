import { site } from "@/config/site";
import { Reveal } from "./Reveal";

export function Modality() {
  return (
    <section className="bg-warm-white py-16 md:py-20">
      <div className="mx-auto max-w-[1240px] px-6 md:px-10">
        <Reveal className="grid gap-10 md:grid-cols-[1fr_1fr] md:gap-20">
          <div>
            <p className="eyebrow">Modalidade</p>
            <h2 className="mt-5 text-[1.8rem] text-foreground sm:text-[2.2rem]">
              Atendimento online
            </h2>
            <p className="mt-5 max-w-lg text-[0.98rem] text-taupe">
              O atendimento é realizado de forma remota, enquanto o paciente participa de um ambiente
              adequado e privado.
            </p>
          </div>
          <div className="self-end">
            <p className="label-caps">Localização profissional</p>
            <p className="mt-3 font-serif text-[1.6rem] text-foreground">{site.city}</p>
            <p className="mt-4 text-[0.82rem] text-taupe">{site.modality.note}</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
