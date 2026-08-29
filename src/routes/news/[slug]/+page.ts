import { error } from "@sveltejs/kit";
import { newsItems } from "$data/news";

export const load = ({ params }) => {
  const article = newsItems.find((item) => item.id === params.slug);

  if (!article) {
    throw error(404, "News story not found");
  }

  const relatedNews = newsItems
    .filter((item) => item.id !== article.id)
    .slice(0, 3);

  return { article, relatedNews };
};
