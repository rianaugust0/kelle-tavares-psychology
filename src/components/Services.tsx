import { useState } from "react";
import { Reveal } from "./Reveal";
import { WhatsAppLink } from "./WhatsAppLink";
import { Check, ArrowRight } from "lucide-react";
import portrait from "@/assets/kelle-1.png";
import aboutImage from "@/assets/kelle-2.png";
import childImage from "@/assets/kelle-3.png";
import { site } from "@/config/site";

interface TabData {
  id: string;
  label: string;
  title: string;
  subtitle: string;
  image: string;
  badgeLabel: string;
  bullets: string[];
}

const TABS: TabData[] = [
  {
    id: "psicoterapia",
    label: "Psicoterapia",
    title: "Como a Psicoterapia para adultos pode ajudar",
    subtitle: "Atendimento clínico individual focado em autoconhecimento, regulação emocional e qualidade de vida.",
    image: aboutImage,
    badgeLabel: "Psicoterapia Adultos",
    bullets: [
      "Espaço seguro e confidencial para elaboração de sentimentos e angústias",
      "Suporte no manejo de ansiedade, estresse e sobrecarga emocional",
      "Desenvolvimento de estratégias saudáveis de regulação emocional e autocompaixão",
      "Compreensão de padrões comportamentais e fortalecimento da autonomia",
      "Acompanhamento personalizado respeitando o tempo e história de cada pessoa",
    ],
  },
  {
    id: "tea",
    label: "TEA (Autismo)",
    title: "Como o acompanhamento no TEA pode ajudar",
    subtitle: "Intervenção comportamental estruturada (ABA) com foco em desenvolvimento e qualidade de vida.",
    image: portrait,
    badgeLabel: "Intervenção ABA",
    bullets: [
      "Desenvolver comunicação funcional, habilidades sociais e autonomia diária",
      "Apoio na regulação emocional e manejo de crises e sobrecargas sensoriais",
      "Intervenção comportamental individualizada baseada em evidências científicas (ABA)",
      "Orientação e treinamento contínuo para pais e familiares no ambiente doméstico",
      "Suporte técnico e alinhamento para inclusão e adaptação escolar",
    ],
  },
  {
    id: "tdah",
    label: "TDAH",
    title: "Como o acompanhamento no TDAH pode ajudar",
    subtitle: "Acompanhamento focado em funções executivas, organização, atenção e estratégias comportamentais práticas.",
    image: childImage,
    badgeLabel: "Acompanhamento TDAH",
    bullets: [
      "Treino de funções executivas (planejamento, organização e controle inibitório)",
      "Desenvolvimento de rotinas funcionais e gestão do tempo no dia a dia",
      "Estratégias para redução da procrastinação e melhora do foco sustentado",
      "Suporte na regulação da impulsividade e tolerância à frustração",
      "Alinhamento multidisciplinar e orientação para contexto escolar e familiar",
    ],
  },
  {
    id: "avaliacao",
    label: "Avaliação Psicológica",
    title: "Como a Avaliação Psicológica pode ajudar",
    subtitle: "Processo investigativo abrangente para mapeamento do perfil cognitivo, emocional e comportamental.",
    image: aboutImage,
    badgeLabel: "Avaliação Clínica",
    bullets: [
      "Aplicação de instrumentos e testes psicológicos padronizados e validados",
      "Investigação detalhada do desenvolvimento e histórico de vida",
      "Mapeamento de pontos fortes e áreas que necessitam de intervenção",
      "Elaboração de laudo técnico claro, rigoroso e fundamentado",
      "Devolutiva explicativa com orientações práticas para a família e equipe",
    ],
  },
];

export function Services() {
  const [activeTabId, setActiveTabId] = useState<string>("tea");

  const activeTab = TABS.find((t) => t.id === activeTabId) ?? TABS[1];

  return (
    <section id="atendimentos" className="relative bg-[#F6F0EB] py-20 lg:py-28 overflow-hidden border-t border-[#D9C8BC]/40">
      <div className="mx-auto max-w-[1280px] px-6 sm:px-10 lg:px-12">
        
        {/* Cabeçalho da Seção */}
        <Reveal className="flex flex-col items-center text-center max-w-[640px] mx-auto mb-10">
          <span className="text-[0.68rem] font-bold tracking-[0.24em] uppercase text-[#8E7D76] block mb-2">
            ÁREAS DE ATUAÇÃO & CUIDADO
          </span>
          <p className="text-[0.88rem] text-[#6E5F57] leading-relaxed font-sans">
            Escolha uma área para conhecer como o acompanhamento especializado pode te apoiar:
          </p>
        </Reveal>

        {/* Abas / Filtros Interativos (Pills) com Animação de Seleção */}
        <Reveal direction="up" delay={100} className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3.5 mb-14 lg:mb-16">
          {TABS.map((tab) => {
            const isActive = tab.id === activeTabId;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTabId(tab.id)}
                className={`px-5 py-2.5 rounded-full text-[0.78rem] font-medium transition-all duration-300 cursor-pointer ${
                  isActive
                    ? "bg-[#3A2E2B] text-white border border-[#3A2E2B] shadow-md scale-105"
                    : "bg-[#F9F5F1] text-[#6E5F57] border border-[#D9C8BC] hover:border-[#3A2E2B] hover:text-[#3A2E2B] hover:scale-102"
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </Reveal>

        {/* Área de Conteúdo da Aba Selecionada */}
        <div key={activeTab.id} className="grid items-center gap-12 lg:grid-cols-[44fr_56fr] lg:gap-16 animate-in fade-in zoom-in-95 duration-500">
          
          {/* Coluna da Esquerda: Card da Foto com Etiqueta sobreposta no Rodapé */}
          <Reveal direction="left" delay={120} className="flex justify-center lg:justify-start">
            <div className="relative w-full max-w-[380px] sm:max-w-[420px] rounded-2xl overflow-hidden border border-[#D9C8BC] bg-white shadow-md group">
              <img
                src={activeTab.image}
                alt={activeTab.title}
                width={765}
                height={1024}
                className="w-full h-auto object-cover aspect-[4/5] block transition-transform duration-700 ease-out group-hover:scale-[1.03]"
              />
              
              {/* Barra de Legenda Inferior Sobreposta */}
              <div className="absolute inset-x-3 bottom-3 bg-white/95 backdrop-blur-md px-4 py-2.5 rounded-xl border border-[#EFE6DF] flex items-center justify-between shadow-xs transition-transform duration-300 group-hover:translate-y-[-2px]">
                <span className="text-[0.72rem] font-semibold text-[#4A3E38]">
                  {activeTab.badgeLabel}
                </span>
                <span className="text-[0.72rem] font-medium text-[#8E7D76]">
                  CRP {site.crp}
                </span>
              </div>
            </div>
          </Reveal>

          {/* Coluna da Direita: Detalhes, Lista de Tópicos e Botão CTA */}
          <Reveal direction="right" delay={180} className="flex flex-col items-start">
            {/* Ícone Ornato Ilustrativo com Rotação Suave */}
            <div className="mb-3 text-[#A07365]">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="size-6 transition-transform duration-500 hover:rotate-45">
                <path d="M12 2C13.5 6 18 8 20 12C18 16 13.5 18 12 22C10.5 18 6 16 4 12C6 8 10.5 6 12 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>

            {/* Título da Aba */}
            <h2 className="font-serif text-[2.3rem] font-semibold leading-[1.1] text-[#3A2E2B] sm:text-[2.9rem] lg:text-[3.3rem] tracking-tight mb-3">
              {activeTab.title}
            </h2>

            {/* Subtítulo da Aba */}
            <p className="text-[0.88rem] leading-relaxed text-[#6E5F57] mb-6 font-sans max-w-[540px]">
              {activeTab.subtitle}
            </p>

            {/* Lista de Benefícios / Tópicos de Atuação (Checklist com Micro-hover) */}
            <ul className="space-y-3.5 mb-8 w-full max-w-[560px]">
              {activeTab.bullets.map((bullet, idx) => (
                <li key={idx} className="group/item flex items-start gap-3 transition-transform duration-200 hover:translate-x-1">
                  <div className="flex size-5 shrink-0 items-center justify-center rounded-full bg-[#EFE4DC] text-[#A07365] mt-0.5 transition-colors duration-200 group-hover/item:bg-[#3A2E2B] group-hover/item:text-white">
                    <Check className="size-3 stroke-[2.5]" />
                  </div>
                  <span className="text-[0.88rem] leading-snug text-[#4A3E38] font-normal group-hover/item:text-[#3A2E2B]">
                    {bullet}
                  </span>
                </li>
              ))}
            </ul>

            {/* Frase com Destaque Manuscrito em Itálico */}
            <p className="font-serif italic text-[1.2rem] sm:text-[1.32rem] text-[#A07365] mb-7">
              Você não precisa esperar{" "}
              <span className="underline underline-offset-4 decoration-[#A07365] font-normal">
                tudo piorar
              </span>{" "}
              para buscar ajuda.
            </p>

            {/* Botão de Ação CTA com Shimmer Sweep */}
            <WhatsAppLink
              location="services_section_tab"
              event="whatsapp_services_tab_click"
              target="home"
              className="group relative overflow-hidden inline-flex items-center gap-3 bg-[#3A2E2B] border border-[#3A2E2B] px-7 py-3.5 text-[0.72rem] font-bold tracking-[0.14em] uppercase text-white transition-all duration-300 hover:bg-[#52423D] rounded-xs shadow-xs hover:shadow-md active:scale-[0.98]"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />
              <span>AGENDE SEU ATENDIMENTO</span>
              <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
            </WhatsAppLink>

          </Reveal>

        </div>

      </div>
    </section>
  );
}
