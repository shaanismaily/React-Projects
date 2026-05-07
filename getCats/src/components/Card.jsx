function Card({ name, character, origin, description, lifeSpan, altNames, wikipedia, image }) {
  const traits = character ? character.split(",").map(t => t.trim()).filter(Boolean) : [];
 
  return (
    <>
      <div className="card">
        <div className="card__image-wrap">
          {image && <img className="card__image" src={image} alt={`${name} cat`} />}
          <div className="card__image-overlay" />
          <span className="card__name-badge">{name}</span>
        </div>
 
        <div className="card__body">
          {altNames && altNames !== "None" && (
            <p className="card__alt">Also known as: {altNames}</p>
          )}
 
          {traits.length > 0 && (
            <div className="card__tags">
              {traits.map((trait) => (
                <span key={trait} className="card__tag">{trait}</span>
              ))}
            </div>
          )}
 
          <div className="card__divider" />
 
          <div className="card__meta">
            <div className="card__meta-item">
              <span className="card__meta-label">Origin</span>
              <span className="card__meta-value">{origin}</span>
            </div>
            <div className="card__meta-item">
              <span className="card__meta-label">Life Span</span>
              <span className="card__meta-value">{lifeSpan} years</span>
            </div>
          </div>
 
          {description && (
            <p className="card__description">{description}</p>
          )}
 
          {wikipedia && (
            <a className="card__wiki" href={wikipedia} target="_blank" rel="noopener noreferrer">
              Read on Wikipedia →
            </a>
          )}
        </div>
      </div>
    </>
  );
}
 
export default Card;