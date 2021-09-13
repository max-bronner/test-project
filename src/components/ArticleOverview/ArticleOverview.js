import './ArticleOverview.css';

import ArticleCard from '../ArticleCard/ArticleCard';

function ArticleOverview({ content }) {
  return (
    <section className={'article-overview'}>
      {content &&
        content.map((article, index) => {
          return <ArticleCard key={index} content={article} />;
        })}
    </section>
  );
}

export default ArticleOverview;
