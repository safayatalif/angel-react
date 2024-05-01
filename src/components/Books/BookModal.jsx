const BookModal = ({ isOpen, onClose, book }) => {
  if (!isOpen || !book) return null;

  return (
    <div className="fixed z-50 inset-0 overflow-y-auto">
      <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 transition-opacity" aria-hidden="true">
          <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>

        <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
          &#8203;
        </span>

        <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-5xl sm:w-full">
          <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <div className="sm:flex sm:items-start">
              <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                <h3 className="text-lg leading-6 font-medium text-gray-900">{book.title}</h3>
                <div className="mt-2">
                  {book.details.features.map((feature, index) => (
                    <p key={index} className="text-sm text-gray-500">
                      {feature}
                    </p>
                  ))}
                </div>
                <div className="mt-4 text-sm text-gray-500">
                  {book.details.description_long.map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                </div>
                <div className="mt-4">
                  <p className="text-sm text-gray-500 font-semibold">UK Version:</p>
                  <a href={book.details.uk_link} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">
                    {book.details.uk_version}
                  </a>
                  <p className="text-sm text-gray-500 font-semibold mt-2">USA Version:</p>
                  <a href={book.details.usa_link} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">
                    {book.details.usa_version}
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
            <button
              onClick={onClose}
              type="button"
              className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-sky-400 text-base font-medium text-white hover:bg-sky-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500 sm:ml-3 sm:w-auto sm:text-sm"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookModal;
