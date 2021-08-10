import ArticleOverview from "./components/ArticleOverview/ArticleOverview";
import Article from "./components/Article/Article";

const MAP_COMPONENTS = {
  ArticleOverview: ArticleOverview,
  Article: Article,
}

const META_TAGS_SELECTORS = [
  'meta[name="description"]',
  'meta[property="og:title"]',
  'meta[property="og:description"]',
]

export { 
  MAP_COMPONENTS,
  META_TAGS_SELECTORS
};