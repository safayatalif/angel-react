const BookInsideModal = ({ setOpenModal, image }) => {

    return (
        <div onClick={() => setOpenModal(false)} className="fixed z-[100] flex items-center justify-center inset-0 bg-black/20 backdrop-blur-sm duration-100 dark:bg-transparent">
            <div onClick={(e_) => e_.stopPropagation()} className="max-w-md rounded-lg bg-white p-1 drop-shadow-lg dark:bg-sky-400 dark:text-white scale-1 opacity-1 duration-300 m-10">
                <button  onClick={() => setOpenModal(false)} className="ml-[97%]">
                    X
                </button>
                <img className="" src={image} width="100%" alt="" />
            </div>
        </div>

    );
};

export default BookInsideModal;
