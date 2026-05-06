import { useState } from "react";
import "../card.css";

function Card({
  title,
  subtitle,
  author,
  description,
  publishDate,
  category,
  previewLink,
  thumbnail,
}) {
  const [expanded, setExpanded] = useState(false);

  const shortText =
    description?.length > 120 ? description.slice(0, 120) + "..." : description;

  return (
    <div className="card">
      <img className="card-image" src={thumbnail} alt="Book thumbnail" />
      <h2 className="card-title">{title}</h2>
      <p className="card-subtitle">{subtitle}</p>
      <p className="card-author">By: {author}</p>

      <p className="card-meta">Published: {publishDate}</p>
      <p className="card-meta">Category: {category}</p>

      <a
        href={previewLink}
        target="_blank"
        rel="noopener noreferrer"
        className="card-link"
      >
        Preview Book
      </a>

      <p className="card-description">{expanded ? description : shortText}</p>
      {description?.length > 120 && (
        <button onClick={() => setExpanded(!expanded)}>
          {expanded ? "Show less" : "Read more"}
        </button>
      )}
    </div>
  );
}

export default Card;
