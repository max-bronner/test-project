function Article({ content }) {
  return (
    <article className={'article'}>
      <h2>{content.title}</h2>
      <p>{content.text}</p>

      <address>{content.author}</address>
    </article>
  );
}

export default Article;
