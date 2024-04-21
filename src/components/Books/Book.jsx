const Book = () => {
  const book = {
    coverImage: "https://source.unsplash.com/300x300/?macbook",
    title: "Macbook",
    description: "description",
  };
  return (
    <div className="w-full group">
      <div className="w-full transform rotate-0 group-hover:scale-105 group-hover:rotate-3 transition-transform duration-300">
        <img
          src={book?.coverImage}
          className="w-full h-48 rounded-lg border-b-2 border-l border-r-2 border-t border-b-[#0084ff] border-l-[#005eb6] border-r-[#0084ff] border-t-[#005eb6] bg-white shadow-md dark:bg-[#18181B]"
          alt=""
        />
      </div>
      <div className="flex-1 text-white space-y-4">
        <h1 className="text-2xl font-semibold mb-2">{book?.title}</h1>
        <p className="text-gray-600">{book?.description}</p>
        <button className="group relative flex w-36 items-center rounded-lg border-2 border-sky-400 p-3 text-sky-300">
          <span>Get Start</span>
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
      </div>
    </div>
  );
};

export default Book;
