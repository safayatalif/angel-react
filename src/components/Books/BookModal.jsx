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
              <div className="mt-3  sm:mt-0 sm:ml-4">
                <h3 className="text-lg leading-6 font-medium text-gray-900">{book.description}</h3>
                <div className="mt-2">
                <p className="font-bold text-gray-500">Features:</p>
                  {book.details.features.map((feature, index) => (
                    <ui key={index} className="text-sm text-gray-500">
                      <li>{feature}</li>
                    </ui>
                  ))}
                </div>
                <div className="mt-4 text-sm text-gray-500 space-y-2">
                  <p className="font-bold">Description:</p>
                  {book.details.description_long.map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                </div>
               
                <div className="mt-4">
                  <p className="font-bold text-gray-500">Order Now:</p>
                  <div className="flex my-2 gap-2">
                    <a href={book.details.uk_link} target="_blank" rel="noopener noreferrer" className="rounded-md border border-transparent shadow-sm px-2 py-1 bg-sky-400 text-base font-medium text-white hover:bg-sky-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500  sm:w-auto sm:text-sm">
                      UK Version
                    </a>
                    <a href={book.details.usa_link} target="_blank" rel="noopener noreferrer" className="rounded-md border border-transparent shadow-sm px-2 py-1 bg-sky-400 text-base font-medium text-white hover:bg-sky-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500  sm:w-auto sm:text-sm">
                      USA Version
                    </a>
                  </div>
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
