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
  content: string[];
}

export const ARTICLES: Article[] = [];

export function getArticleBySlug(slug: string): Article | undefined {
  return ARTICLES.find((a) => a.slug === slug);
}
