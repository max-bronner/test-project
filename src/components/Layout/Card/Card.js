import './Card.css';

function Card({ content, children }) {
  return (
    <div className="card">
      {content.header && (
        <div className="card-header">
          <h3>{content.header}</h3>
        </div>
      )}
      <div className="card-body">{content.content || children}</div>
      {content.footer && <div className="card-footer">{content.footer}</div>}
    </div>
  );
}

export default Card;
