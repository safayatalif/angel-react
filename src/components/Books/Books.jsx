import { useEffect, useState } from "react";
import Book from "./Book";

const Books = () => {
  const [books, setBooks] = useState([]);
  const [showAll, setShowAll] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

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

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredBooks = books.filter((book) => {
    return book.title.toLowerCase().includes(searchQuery.toLowerCase()) || book.description.toLowerCase().includes(searchQuery.toLowerCase());
  });

  const visibleBooks = showAll ? filteredBooks : filteredBooks.slice(0, 8);

  return (
    <div id="books" className="container mx-auto my-16 p-8 border-y-2">
      <h1 className="text-center font-bold text-4xl text-sky-500 mb-16">Our All Books</h1>

      <div className="relative w-max rounded-lg my-8">
        <input
          type="text"
          placeholder=""
          id="navigate_ui_input_33"
          value={searchQuery}
          onChange={handleSearch}
          className="peer rounded-lg border border-[#1B8EF8] bg-transparent px-4 py-2 text-[#1B8EF8] focus:outline-none"
        />
        <label
          className="absolute -top-2 left-[10px] rounded-md px-2 text-xs text-slate-400 duration-300 peer-placeholder-shown:left-[14px] peer-placeholder-shown:top-3  peer-placeholder-shown:bg-transparent peer-placeholder-shown:text-sm peer-focus:-top-2 peer-focus:left-[10px] peer-focus:bg-sky-300 peer-focus:text-xs peer-focus:text-sky-800 dark:peer-focus:text-sky-400 dark:peer-focus:bg-[#0F172A]"
          htmlFor="navigate_ui_input_33"
        >
          Search books...
        </label>
      </div>
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
