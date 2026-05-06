import { useState } from "react";
import useBookInfo from "./hooks/useBookInfo";
import Card from "./components/Card";
import "./index.css";

function App() {
  const [limit, setLimit] = useState("");
  const [triggerLimit, setTriggerLimit] = useState(0);

  const books = useBookInfo(triggerLimit);

  function getBooks() {
    setTriggerLimit(Number(limit));
  }

  return (
    <div className="app-container">
      <div className="heading">
        <h1>📚 Book Finder</h1>

        <div className="controls">
          <input
            type="number"
            placeholder="Enter limit (e.g. 5)"
            value={limit}
            onChange={(e) => setLimit(e.target.value)}
          />
          <button disabled={!limit} onClick={getBooks}>Get Books</button>
        </div>
      </div>

      <div className="books-container">
        {books.length === 0 ? (
          <p className="empty-state">No books loaded</p>
        ) : (
          books.map((book) => {
            const info = book.volumeInfo || {};

            return (
              <Card
                key={book.id}
                title={info.title || "No Title"}
                subtitle={info.subtitle || ""}
                author={info.authors?.[0] || "Unknown Author"}
                description={info.description || "No description available"}
                publishDate={info.publishedDate || "N/A"}
                category={info.categories?.[0] || "General"}
                previewLink={info.previewLink || "#"}
                thumbnail={info.imageLinks.thumbnail || ""}
              />
            );
          })
        )}
      </div>
    </div>
  );
}

export default App;