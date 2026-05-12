function Favorites({ quotes }) {
  return (
    <div>
      <h2>{quotes.content}</h2>
      <p>{quotes.author}</p>
    </div>
  );
}
export default Favorites;
