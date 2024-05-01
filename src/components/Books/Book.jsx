import { useState } from "react";
import BookModal from "./BookModal";

const Book = ({ book }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="w-full group ">
      <div className="h-56 sm:h-60 md:h-64 lg:h-72 w-40 sm:w-44 md:w-48 lg:w-56 transform rotate-0 group-hover:scale-105 group-hover:rotate-3 transition-transform duration-300">
        <img
          src={book?.image}
          className="w-full h-full rounded-lg border-b-2 border-l border-r-2 border-t border-b-[#0084ff] border-l-[#005eb6] border-r-[#0084ff] border-t-[#005eb6] bg-white shadow-md dark:bg-[#18181B]"
          alt=""
        />
      </div>
      <div className="flex-1 space-y-4">
        <button onClick={openModal} className="mt-6 group relative flex w-36 items-center rounded-lg border-2 border-sky-400 p-3 text-sky-300">
          <span>View Details</span>
          <span className="absolute right-3 box-content flex w-1/6 justify-center rounded-md bg-sky-400 duration-300 group-hover:w-5/6">
            <svg viewBox="0 0 24 24" fill="none" className="w-8" xmlns="http://www.w3.org/2000/svg">
              <g strokeWidth="0"></g>
              <g strokeLinecap="round" strokeLinejoin="round"></g>
              <g>
                <path d="M4 12H20M20 12L14 6M20 12L14 18" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
              </g>
            </svg>
          </span>
        </button>
        <h1 className="text-2xl font-bold mb-2">{book?.title}</h1>
        <p className="text-gray-900">{book?.description?.split(" ").slice(0, 10).join(" ")} ...</p>
        <BookModal isOpen={isModalOpen} onClose={closeModal} book={book} />
      </div>
    </div>
  );
};

export default Book;
