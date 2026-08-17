export type Article = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  image?: string;
  content?: string;
};

/** Estrutura reutilizável para os futuros conteúdos em /conteudos. */
export const articles: Article[] = [
  {
    slug: "por-que-e-tao-dificil-estabelecer-limites",
    title: "Por que é tão difícil estabelecer limites?",
    excerpt:
      "Dizer não envolve mais do que firmeza: envolve história, vínculos e a forma como aprendemos a ocupar espaço nas relações.",
    category: "Adultos",
    date: "",
  },
  {
    slug: "voce-precisa-estar-em-crise-para-procurar-terapia",
    title: "Você precisa estar em crise para procurar terapia?",
    excerpt:
      "A terapia não começa apenas no limite do sofrimento. Ela também é um espaço de compreensão e cuidado contínuo.",
    category: "Psicologia",
    date: "",
  },
  {
    slug: "comportamento-tambem-e-uma-forma-de-comunicacao",
    title: "Comportamento também é uma forma de comunicação.",
    excerpt:
      "Antes de corrigir, vale perguntar o que aquele comportamento está tentando dizer sobre necessidades e contexto.",
    category: "Desenvolvimento",
    date: "",
  },
];
