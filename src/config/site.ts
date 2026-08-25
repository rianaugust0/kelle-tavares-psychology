/**
 * Dados profissionais centralizados.
 * Nunca duplicar estas informações em componentes.
 */

export const SITE_URL =
  (typeof process !== "undefined" && process.env.VITE_SITE_URL) ||
  (typeof import.meta !== "undefined" && import.meta.env?.VITE_SITE_URL) ||
  "https://kellepsitavares.netlify.app";

export function absoluteUrl(path: string = "/") {
  const cleanBase = SITE_URL.replace(/\/+$/, "");
  const cleanPath = path.startsWith("/") ? path : `/${path}`;
  return `${cleanBase}${cleanPath}`;
}

export const DEFAULT_OG_IMAGE = absoluteUrl("/og-image.jpg");

export const seoConfig = {
  home: {
    title: "Kelle Tavares | Psicóloga em Goiânia e Atendimento Online",
    description:
      "Conheça o trabalho da psicóloga Kelle Tavares, CRP 21419. Psicoterapia para adultos, acompanhamento psicológico infantil e atendimento online.",
    canonical: absoluteUrl("/"),
    ogImage: DEFAULT_OG_IMAGE,
  },
  adultos: {
    title: "Psicoterapia para Adultos Online | Kelle Tavares",
    description:
      "Psicoterapia para adultos com Kelle Tavares, psicóloga em Goiânia. Atendimento psicológico online com escuta profissional, acolhimento e privacidade.",
    canonical: absoluteUrl("/adultos"),
    ogImage: DEFAULT_OG_IMAGE,
  },
  infantil: {
    title: "Psicóloga Infantil em Goiânia | Kelle Tavares",
    description:
      "Conheça o acompanhamento psicológico infantil com Kelle Tavares, psicóloga CRP 21419, sua formação, experiência profissional e formas de atendimento.",
    canonical: absoluteUrl("/infantil"),
    ogImage: DEFAULT_OG_IMAGE,
  },
  conteudos: {
    title: "Conteúdos e Artigos | Kelle Tavares, Psicóloga",
    description:
      "Reflexões sobre comportamento, desenvolvimento, relações e saúde mental escritas pela psicóloga Kelle Tavares, CRP 21419.",
    canonical: absoluteUrl("/conteudos"),
    ogImage: DEFAULT_OG_IMAGE,
  },
} as const;

const WHATSAPP_NUMBER = "5562995543365"; // +55 62 9554-3365

export const WHATSAPP_MESSAGES = {
  home: "Olá, Kelle! Conheci seu trabalho pelo site e gostaria de saber mais sobre os atendimentos.",
  adultos: "Olá, Kelle! Conheci seu trabalho pelo site e gostaria de saber mais sobre a psicoterapia para adultos.",
  infantil: "Olá, Kelle! Conheci seu trabalho pelo site e gostaria de saber mais sobre o acompanhamento psicológico infantil.",
} as const;

export type WhatsAppTarget = keyof typeof WHATSAPP_MESSAGES;

export function getWhatsAppUrl(target: WhatsAppTarget = "home") {
  const msg = WHATSAPP_MESSAGES[target] ?? WHATSAPP_MESSAGES.home;
  return WHATSAPP_NUMBER
    ? `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`
    : "#contato";
}

export const WHATSAPP_URL = getWhatsAppUrl("home");

export const INSTAGRAM_URL = "";

export const site = {
  name: "Kelle Tavares",
  professionalTitle: "Psicóloga",
  crp: "21419",
  city: "Goiânia — GO",
  url: SITE_URL,
  whatsappUrl: WHATSAPP_URL,
  whatsappMessage: WHATSAPP_MESSAGES.home,
  instagramUrl: INSTAGRAM_URL,
  email: "",
  sessionDuration: "50 minutos",
  approach: "",
  modality: {
    online: true,
    presencial: false,
    note: "Atendimento online em todo o Brasil.",
  },
  serviceTypes: [
    {
      id: "adultos",
      index: "01",
      title: "Psicoterapia para adultos",
      href: "/adultos",
      description:
        "Um espaço de escuta e reflexão para compreender emoções, comportamentos, relações e diferentes momentos da vida.",
      ctaLabel: "Conhecer psicoterapia para adultos →",
    },
    {
      id: "infantil",
      index: "02",
      title: "Acompanhamento infantil",
      href: "/infantil",
      description:
        "Um acompanhamento construído considerando desenvolvimento, comportamento, contexto familiar e as necessidades individuais de cada criança.",
      ctaLabel: "Conhecer acompanhamento infantil →",
    },
  ],
  nav: [
    { label: "Início", href: "/" },
    { label: "Sobre", href: "/#sobre" },
    { 
      label: "Atendimentos", 
      href: "/#atendimentos",
      children: [
        { label: "Psicoterapia para Adultos", href: "/adultos" },
        { label: "Acompanhamento Infantil", href: "/infantil" },
      ]
    },
    { label: "Conteúdos", href: "/#conteudos" },
    { label: "Dúvidas", href: "/#duvidas" },
  ],
} as const;

export const career = {
  formation: [
    { title: "Graduação em Psicologia", detail: "FacUnicamps · 2020 – 2024" },
    { title: "Pós-graduação em Análise do Comportamento Aplicada — ABA", detail: "Especialização focada no desenvolvimento e comportamento" },
    { title: "Pós-graduação em Neuropsicologia", detail: "Estudo aprofundado das funções cognitivas e comportamentais" },
    { title: "Formação em Aplicador Técnico ABA", detail: "" },
    { title: "Formação em Alfabetização e Autismo", detail: "" },
    { title: "Formação em DIR/Floortime", detail: "Em andamento" },
  ],
  experience: [
    {
      title: "Mais de 3 anos de atuação profissional",
      detail: "Especialmente com crianças neurodivergentes.",
    },
    {
      title: "Atendimento clínico e domiciliar",
      detail: "Experiência em diferentes contextos de acompanhamento.",
    },
    {
      title: "Instituto NeuroOrtopédico de Goiânia",
      detail: "Experiência profissional",
    },
    {
      title: "Clínica Casa Colorê",
      detail: "Experiência profissional",
    },
  ],
} as const;

export const faq = [
  {
    q: "Como funciona a primeira sessão?",
    a: "O primeiro encontro é um espaço de escuta e compreensão da demanda apresentada. Conversamos sobre o momento atual, expectativas e possibilidades de acompanhamento.",
  },
  {
    q: "O atendimento é online?",
    a: "Sim. O atendimento acontece de forma remota, com a psicóloga em ambiente profissional e o paciente participando de um espaço adequado e privado.",
  },
  {
    q: "Você atende adultos?",
    a: "Sim. Além da atuação com o público infantil, realizo psicoterapia individual para adultos, oferecendo suporte para diferentes demandas e momentos de vida.",
  },
  {
    q: "Como funciona o acompanhamento infantil?",
    a: "O acompanhamento é construído considerando desenvolvimento, comportamento, contexto familiar e as necessidades individuais de cada criança, com participação das pessoas responsáveis ao longo do processo.",
  },
  {
    q: "Qual a duração das sessões?",
    a: "As sessões têm duração média de 50 minutos, variando de acordo com o plano terapêutico estabelecido.",
  },
  {
    q: "Como faço para agendar?",
    a: "O contato pode ser feito pelo WhatsApp ou pelos canais informados neste site. A partir daí alinhamos informações sobre disponibilidade e modalidade de atendimento.",
  },
] as const;

export const faqAdultos = [
  {
    q: "Como funciona o primeiro encontro?",
    a: "O primeiro encontro é um espaço inicial de acolhimento e escuta para compreender o que trouxe você até aqui, suas expectativas e como podemos construir o acompanhamento.",
  },
  {
    q: "Preciso saber exatamente o que falar?",
    a: "Não. O ponto de partida não precisa estar organizado. O processo de fala, reflexão e compreensão é construído em conjunto, no seu próprio ritmo.",
  },
  {
    q: "Como funciona o atendimento online?",
    a: "As sessões ocorrem por videochamada em plataforma segura e sigilosa, permitindo que você participe com privacidade e conforto de onde estiver.",
  },
  {
    q: "Como verifico horários e dou o primeiro passo?",
    a: "Basta clicar no botão de WhatsApp para conversarmos brevemente, tirar dúvidas e combinarmos o primeiro encontro.",
  },
] as const;

export const faqInfantil = [
  {
    q: "Como funciona o primeiro contato?",
    a: "Os pais ou responsáveis entram em contato pelo WhatsApp para conversar inicialmente, apresentar suas dúvidas e entender as possibilidades de acompanhamento.",
  },
  {
    q: "Como acontece a participação da família?",
    a: "A família tem papel central. Realizamos conversas e alinhamentos periódicos com os responsáveis para compartilhar orientações e acompanhar o desenvolvimento.",
  },
  {
    q: "Qual a modalidade de atendimento?",
    a: "A modalidade e as possibilidades de atendimento são avaliadas de acordo com as necessidades específicas e a realidade de cada criança e família.",
  },
  {
    q: "Como verificar disponibilidade e horários?",
    a: "Basta enviar uma mensagem pelo WhatsApp para alinharmos informações sobre disponibilidade e próximos passos.",
  },
] as const;

export const processSteps = [
  {
    index: "01",
    title: "Entre em contato",
    text: "Envie uma mensagem para conhecer melhor as possibilidades de atendimento.",
  },
  {
    index: "02",
    title: "Entendemos a sua necessidade",
    text: "Nesse primeiro contato, alinhamos algumas informações e entendemos brevemente o que você busca no acompanhamento.",
  },
  {
    index: "03",
    title: "Primeiro encontro",
    text: "Um primeiro espaço de escuta e compreensão da demanda apresentada.",
  },
  {
    index: "04",
    title: "Acompanhamento",
    text: "O processo é construído de maneira individualizada ao longo dos encontros.",
  },
] as const;

export const processStepsAdultos = [
  {
    index: "01",
    title: "Primeiro contato",
    text: "Conversamos sobre disponibilidade e algumas informações iniciais.",
  },
  {
    index: "02",
    title: "Primeiro encontro",
    text: "Um primeiro espaço para compreender o que trouxe você até aqui.",
  },
  {
    index: "03",
    title: "Acompanhamento",
    text: "O processo é construído individualmente ao longo dos encontros.",
  },
] as const;

export const processStepsInfantil = [
  {
    index: "01",
    title: "Contato do responsável",
    text: "Primeira conversa pelo WhatsApp para acolher a demanda e tirar dúvidas iniciais.",
  },
  {
    index: "02",
    title: "Conversa inicial",
    text: "Alinhamento cuidadoso com a família para compreender o contexto, a rotina e a criança.",
  },
  {
    index: "03",
    title: "Construção do acompanhamento",
    text: "Processo atento e individualizado, com escuta contínua e suporte aos responsáveis.",
  },
] as const;
