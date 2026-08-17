/**
 * Dados profissionais centralizados.
 * Nunca duplicar estas informações em componentes.
 * Campos marcados como placeholder devem ser confirmados com Kelle.
 */

const WHATSAPP_NUMBER = ""; // [INFORMAÇÃO A CONFIRMAR] ex.: "5562900000000"
const WHATSAPP_MESSAGE =
  "Olá, Kelle! Conheci seu trabalho pelo site e gostaria de saber mais sobre os atendimentos.";

export const WHATSAPP_URL = WHATSAPP_NUMBER
  ? `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`
  : "#contato";

export const INSTAGRAM_URL = ""; // Instagram profissional ainda será criado

export const site = {
  name: "Kelle Tavares",
  professionalTitle: "Psicóloga",
  crp: "[INSERIR]",
  city: "Goiânia — GO",
  whatsappUrl: WHATSAPP_URL,
  whatsappMessage: WHATSAPP_MESSAGE,
  instagramUrl: INSTAGRAM_URL,
  email: "", // [INFORMAÇÃO A CONFIRMAR]
  sessionDuration: "[INFORMAÇÃO A CONFIRMAR]",
  approach: "[INFORMAÇÃO A CONFIRMAR]",
  modality: {
    online: true,
    presencial: false,
    note: "Possibilidade futura de atendimento presencial.",
  },
  serviceTypes: [
    {
      id: "adultos",
      index: "01",
      title: "Psicoterapia para adultos",
      description:
        "Um espaço de escuta e reflexão para compreender emoções, comportamentos, relações e experiências, respeitando a individualidade e o momento de cada pessoa.",
    },
    {
      id: "infantil",
      index: "02",
      title: "Acompanhamento infantil",
      description:
        "Um acompanhamento construído considerando desenvolvimento, comportamento, contexto familiar e as necessidades individuais de cada criança.",
    },
  ],
  nav: [
    { label: "Início", href: "#inicio" },
    { label: "Sobre", href: "#sobre" },
    { label: "Atendimentos", href: "#atendimentos" },
    { label: "Trajetória", href: "#trajetoria" },
    { label: "Como funciona", href: "#como-funciona" },
    { label: "Conteúdos", href: "#conteudos" },
    { label: "Dúvidas", href: "#duvidas" },
  ],
} as const;

export const career = {
  formation: [
    { title: "Graduação em Psicologia", detail: "FacUnicamps · 2020 – 2024" },
    { title: "Pós-graduação em Análise do Comportamento Aplicada — ABA", detail: "" },
    { title: "Pós-graduação em Neuropsicologia", detail: "" },
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
      detail: "Experiência profissional · período [INFORMAÇÃO A CONFIRMAR]",
    },
    {
      title: "Clínica Casa Colorê",
      detail: "Experiência profissional · período [INFORMAÇÃO A CONFIRMAR]",
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
    a: "Sim. Atualmente o atendimento acontece de forma online, com a psicóloga em ambiente profissional e o paciente participando de um espaço adequado e privado. Há possibilidade futura de atendimento presencial.",
  },
  {
    q: "Você atende adultos?",
    a: "Sim. Além da atuação com o público infantil, o atendimento de psicoterapia individual para adultos faz parte desta nova fase profissional.",
  },
  {
    q: "Como funciona o acompanhamento infantil?",
    a: "O acompanhamento é construído considerando desenvolvimento, comportamento, contexto familiar e as necessidades individuais de cada criança, com participação das pessoas responsáveis ao longo do processo.",
  },
  {
    q: "Qual a duração das sessões?",
    a: "[INFORMAÇÃO A CONFIRMAR]",
  },
  {
    q: "Como faço para agendar?",
    a: "O contato pode ser feito pelo WhatsApp ou pelo formulário de interesse deste site. A partir daí conversamos sobre disponibilidade e modalidade de atendimento.",
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
    title: "Conversamos sobre o atendimento",
    text: "Algumas informações iniciais ajudam a entender disponibilidade e modalidade.",
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
