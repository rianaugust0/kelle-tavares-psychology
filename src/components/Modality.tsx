import { site } from "@/config/site";
import { Reveal } from "./Reveal";
import kellePhoto from "@/assets/kelle-4.png";
import { PhotoFrame } from "./PhotoPlaceholder";

export function Modality() {
  return (
    <section className="bg-warm-white py-16 md:py-24 border-t border-border/40">
      <div className="mx-auto max-w-[1240px] px-6 md:px-10">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20 items-center">
          <Reveal>
            <div className="flex items-center gap-3">
              <span className="h-px w-6 bg-terracotta/60" />
              <p className="eyebrow">Modalidade</p>
            </div>
            <h2 className="mt-5 text-[1.8rem] text-foreground sm:text-[2.2rem]">
              Atendimento online
            </h2>
            <p className="mt-5 max-w-lg text-[0.98rem] leading-relaxed text-taupe">
              O atendimento é realizado de forma remota, permitindo que o acompanhamento aconteça com privacidade, conforto e organização.
            </p>
            
            <div className="mt-8 border-t border-border/60 pt-6">
              <p className="label-caps font-semibold">Localização profissional</p>
              <p className="mt-2 font-serif text-[1.6rem] text-foreground">{site.city}</p>
              <p className="mt-1 text-[0.85rem] text-taupe">Atendimento online em todo o Brasil.</p>
            </div>
          </Reveal>

          <Reveal delay={100} className="relative">
            <PhotoFrame
              src={kellePhoto}
              alt="Kelle Tavares em ambiente de atendimento e acolhimento"
              width={600}
              height={700}
              pending={false}
              className="aspect-[4/3] sm:aspect-[16/11] lg:aspect-[4/3] w-full object-cover shadow-sm grayscale-[5%] hover:grayscale-0 transition-all duration-700"
            />
            <div className="absolute -bottom-3 -right-3 w-16 h-16 border-b border-r border-rose/30 pointer-events-none hidden sm:block" />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
