export interface ArticleSection {
  heading?: string;
  paragraphs: string[];
}

export interface Article {
  slug: string;
  title: string;
  description: string;
  category: "Psicoterapia" | "Adultos" | "Infância" | "Desenvolvimento";
  publishedAt: string;
  updatedAt?: string;
  readingTime: string;
  image?: string;
  imageAlt?: string;
  excerpt: string;
  intro: string[];
  sections: ArticleSection[];
}

export const ARTICLES: Article[] = [
  {
    slug: "como-funciona-a-primeira-sessao-de-terapia",
    title: "Como funciona a primeira sessão de terapia?",
    description:
      "Entenda como funciona a primeira sessão de terapia, o que você pode falar, quais dúvidas tirar e o que esperar do início da psicoterapia.",
    category: "Psicoterapia",
    publishedAt: "2026-08-27",
    readingTime: "4 min de leitura",
    excerpt:
      "Entenda o que acontece no primeiro encontro, o que você pode falar e como funciona o início da psicoterapia.",
    intro: [
      "Começar a terapia pode trazer algumas dúvidas: O que eu vou falar? A psicóloga vai fazer muitas perguntas? Preciso contar tudo logo no primeiro encontro? E se eu não souber por onde começar?",
      "Essas dúvidas são compreensíveis. A primeira sessão é justamente um momento inicial de contato, em que psicóloga e paciente começam a compreender o que motivou a busca pela psicoterapia.",
      "Você não precisa chegar com tudo organizado ou saber exatamente o que dizer.",
    ],
    sections: [
      {
        heading: "O que acontece na primeira sessão de terapia?",
        paragraphs: [
          "A primeira sessão é um momento de acolhimento e compreensão inicial.",
          "A psicóloga pode buscar conhecer um pouco sobre você, o momento que está vivendo, o que motivou a procura pela terapia e quais questões gostaria de trabalhar ao longo do acompanhamento.",
          "Também é uma oportunidade para conhecer a profissional, entender como funciona o processo terapêutico e esclarecer dúvidas sobre os atendimentos.",
          "Não existe a expectativa de resolver todas as questões no primeiro encontro. A psicoterapia é um processo construído ao longo do tempo.",
        ],
      },
      {
        heading: "Preciso saber o que falar?",
        paragraphs: [
          "Não.",
          "Algumas pessoas chegam à primeira sessão sabendo exatamente o que querem conversar. Outras sabem apenas que alguma coisa não está bem. Há também quem tenha dificuldade para colocar em palavras aquilo que está sentindo.",
          "Tudo isso pode fazer parte do início do processo.",
          "Você pode começar falando sobre o que motivou a procura pela terapia, alguma situação que esteja vivendo ou simplesmente dizer que não sabe por onde começar.",
          "A conversa pode ser construída a partir daí.",
        ],
      },
      {
        heading: "O que a psicóloga pode perguntar?",
        paragraphs: [
          "As perguntas variam de acordo com cada pessoa e com o motivo que levou à busca pelo acompanhamento.",
          "A psicóloga pode querer compreender aspectos como sua rotina, relações, acontecimentos importantes, dificuldades atuais, expectativas em relação à terapia e outras informações que ajudem a compreender o contexto apresentado.",
          "Isso não significa que exista um questionário igual para todas as pessoas.",
          "Cada acompanhamento possui características próprias e deve considerar a história, as necessidades e o momento de quem está sendo atendido.",
        ],
      },
      {
        heading: "Preciso contar tudo na primeira sessão?",
        paragraphs: [
          "Não.",
          "A relação terapêutica é construída gradualmente, e alguns assuntos podem exigir mais tempo para serem abordados.",
          "Você pode falar sobre aquilo que se sentir confortável em compartilhar naquele momento.",
          "Ao longo dos encontros, conforme o processo se desenvolve, novos assuntos, sentimentos e experiências podem surgir naturalmente.",
        ],
      },
      {
        heading: "Posso fazer perguntas para a psicóloga?",
        paragraphs: [
          "Sim.",
          "A primeira sessão também é uma oportunidade para você conhecer melhor a profissional.",
          "Você pode tirar dúvidas sobre o funcionamento dos atendimentos, frequência das sessões, modalidade, duração, forma de trabalho e outras questões relacionadas ao processo.",
          "Sentir-se confortável para conversar e esclarecer dúvidas também é importante na construção do acompanhamento.",
        ],
      },
      {
        heading: "Como funciona a primeira sessão de terapia online?",
        paragraphs: [
          "No atendimento online, a sessão acontece por videochamada.",
          "É importante estar em um ambiente em que você se sinta confortável e tenha privacidade para conversar.",
          "Assim como em outros formatos de atendimento, o primeiro encontro permite compreender a demanda inicial, conhecer a profissional e conversar sobre como poderá funcionar o acompanhamento.",
          "Para algumas pessoas, a possibilidade de realizar a sessão de um ambiente escolhido por elas também facilita a inclusão da psicoterapia na rotina.",
        ],
      },
      {
        heading: "E depois da primeira sessão?",
        paragraphs: [
          "Caso haja interesse em continuar, os próximos encontros permitem aprofundar gradualmente as questões apresentadas e construir o processo terapêutico de acordo com as necessidades identificadas.",
          "A psicoterapia não segue necessariamente um roteiro idêntico para todas as pessoas.",
          "O acompanhamento é construído considerando a história, o contexto e as demandas de cada paciente.",
        ],
      },
      {
        heading: "Preciso estar passando por algo muito grave para procurar terapia?",
        paragraphs: [
          "Não necessariamente.",
          "A psicoterapia pode ser procurada em momentos de sofrimento emocional, mas também pode ser um espaço para compreender melhor emoções, comportamentos, relações, mudanças de vida e outras questões importantes para a pessoa.",
          "Não é necessário esperar que uma situação se torne insustentável para considerar conversar com uma psicóloga.",
        ],
      },
      {
        heading: "Como começar?",
        paragraphs: [
          "Se você está pensando em iniciar a psicoterapia, o primeiro passo pode ser simplesmente conversar com a profissional e esclarecer suas dúvidas.",
          "Kelle Tavares é psicóloga em Goiânia e realiza psicoterapia para adultos, com possibilidades de atendimento em Goiânia e online.",
        ],
      },
    ],
  },
];

export function getArticleBySlug(slug: string): Article | undefined {
  return ARTICLES.find((a) => a.slug === slug);
}
