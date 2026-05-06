import { useState, useEffect } from "react";

function useBookInfo(limit) {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    
    fetch(
      `https://api.freeapi.app/api/v1/public/books?page=1&limit=${limit}&inc=kind%2Cid%2Cetag%2CvolumeInfo&query=tech`,
    )
      .then((res) => res.json())
      .then((result) => setBooks(result.data.data))
      .catch((err) => console.log(err));
  }, [limit]);

  return books;
}

export default useBookInfo;
