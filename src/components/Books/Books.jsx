import { useEffect, useState } from "react";
import Book from "./Book";

const Books = () => {
  const [books, setBooks] = useState([]);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await fetch("books.json");
        if (!response.ok) {
          throw new Error("Failed to fetch books");
        }
        const data = await response.json();
        setBooks(data);
      } catch (error) {
        console.error("Error fetching books:", error);
      }
    };

    fetchBooks();
  }, []);

  const handleSeeMore = () => {
    setShowAll(true);
  };

  const handleSeeLess = () => {
    setShowAll(false);
  };

  const visibleBooks = showAll ? books : books.slice(0, 8);

  return (
    <div id="books" className="container mx-auto my-16 p-8">
      <h1 className="text-center font-bold text-4xl text-sky-500 mb-16">Our All Books</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
        {visibleBooks.map((book, index) => (
          <Book key={index} book={book} />
        ))}
      </div>
      {!showAll && (
        <div className="flex justify-center mt-8">
          <button
            onClick={handleSeeMore}
            className="relative inline-block h-14 w-32 text-xl text-white duration-300 before:absolute before:inset-0 before:-z-10 before:block before:bg-sky-400 before:duration-500 after:absolute after:inset-0 after:-z-10 after:block after:bg-sky-700 after:duration-500 hover:before:skew-y-12 hover:after:-skew-y-12"
          >
            See More
          </button>
        </div>
      )}
      {showAll && (
        <div className="flex justify-center mt-8">
          <button
            onClick={handleSeeLess}
            className="relative inline-block h-14 w-32 text-xl text-white duration-300 before:absolute before:inset-0 before:-z-10 before:block before:bg-sky-400 before:duration-500 after:absolute after:inset-0 after:-z-10 after:block after:bg-sky-700 after:duration-500 hover:before:skew-y-12 hover:after:-skew-y-12"
          >
            See Less
          </button>

        </div>
      )}
    </div>
  );
};

export default Books;
