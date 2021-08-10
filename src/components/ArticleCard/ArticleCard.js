import './ArticleCard.css';
import { Link } from 'react-router-dom';

function ArticleCard({ content }) {


  return (
    <article className={'article-card'}>
      <Link className={'article-card__link'} to={content.link}>
        <h2 className={'article-card__title'}>
          {content.title}
        </h2>
        <p className={'article-card__text'}>
          {content.preview}
        </p>
        
        <address className={'article-card__author'}>
          {content.author}
        </address>
        
      </Link>
    </article>
  )
}

export default ArticleCard;