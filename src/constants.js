import ArticleOverview from './components/ArticleOverview/ArticleOverview';
import Article from './components/Article/Article';
import DataTable from './components/DataDisplay/DataTable/DataTable';
import Card from './components/Layout/Card/Card';

const MAP_COMPONENTS = {
  ArticleOverview: ArticleOverview,
  Article: Article,
  DataTable: DataTable,
  Card: Card,
};

const META_TAGS_SELECTORS = ['meta[name="description"]', 'meta[property="og:title"]', 'meta[property="og:description"]'];

export { MAP_COMPONENTS, META_TAGS_SELECTORS };
