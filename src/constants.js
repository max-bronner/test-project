import ArticleOverview from "./components/ArticleOverview/ArticleOverview";
import Article from "./components/Article/Article";
import ArticleOverview from './components/ArticleOverview/ArticleOverview';
import Article from './components/Article/Article';
import Card from './components/Layout/Card/Card';

const MAP_COMPONENTS = {
  ArticleOverview: ArticleOverview,
  Article: Article,
}
  Card: Card,
};

const META_TAGS_SELECTORS = ['meta[name="description"]', 'meta[property="og:title"]', 'meta[property="og:description"]'];

export { MAP_COMPONENTS, META_TAGS_SELECTORS };
