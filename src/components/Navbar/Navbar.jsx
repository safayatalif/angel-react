import { useEffect, useRef, useState } from "react";

export const Navbar = ({ isFixed }) => {
  const [dropDownState, setDropDownState] = useState(false);
  const dropDownMenuRef = useRef();

  useEffect(() => {
    const closeDropDown = (e) => {
      if (!dropDownMenuRef?.current?.contains(e?.target)) {
        setDropDownState(false);
      }
    };

    document.addEventListener("mousedown", closeDropDown);

    return () => {
      document.removeEventListener("mousedown", closeDropDown);
    };
  }, []);

  return (
    <section
      className={`navbar ${
        isFixed
          ? "fixed top-0 w-full z-50 transform duration-1000 border-b-2 border-l border-r-2 border-t border-b-[#0084ff] border-l-[#005eb6] border-r-[#0084ff] border-t-[#005eb6] bg-white shadow-md dark:bg-gradient-to-r from-cyan-50 to-sky-500"
          : "border-b-2 border-l border-r-2 border-t border-b-[#0084ff] border-l-[#005eb6] border-r-[#0084ff] border-t-[#005eb6] bg-white shadow-md dark:bg-gradient-to-r from-cyan-50 to-sky-500"
      }`}
    >
      <nav className="flex items-center justify-between px-4 py-2 ">
        <div className="scale-100 cursor-pointer rounded-2xl px-3 text-xl font-semibold text-white transition-all duration-200 hover:scale-110">
          <img className="w-28 sm:w-28 md:w-28 lg:w-32" src="/logo.png" alt="" />
        </div>
        <ul className="hidden items-center justify-between gap-10 md:flex font-semibold text-white font-semibold">
          <li className="group flex  cursor-pointer flex-col">
            <a href="#home">Home</a>
            <span className="mt-[2px] h-[3px] w-[0px] rounded-full bg-sky-500 transition-all duration-300 group-hover:w-full"></span>
          </li>
          <li className="group flex  cursor-pointer flex-col">
            <a href="#about">About</a>
            <span className="mt-[2px] h-[3px] w-[0px] rounded-full bg-sky-500 transition-all duration-300 group-hover:w-full"></span>
          </li>
          <li className="group flex  cursor-pointer flex-col">
            <a href="#books">Books</a>
            <span className="mt-[2px] h-[3px] w-[0px] rounded-full bg-sky-500 transition-all duration-300 group-hover:w-full"></span>
          </li>
          <li className="group flex  cursor-pointer flex-col">
            <a href="#books_inside">Books Inside</a>
            <span className="mt-[2px] h-[3px] w-[0px] rounded-full bg-sky-500 transition-all duration-300 group-hover:w-full"></span>
          </li>
          <li className="group flex  cursor-pointer flex-col">
            <a href="#book-reviews">Reviews</a>
            <span className="mt-[2px] h-[3px] w-[0px] rounded-full bg-sky-500 transition-all duration-300 group-hover:w-full"></span>
          </li>
          <li className="group flex  cursor-pointer flex-col">
            <a href="#contact">Contacts</a>
            <span className="mt-[2px] h-[3px] w-[0px] rounded-full bg-sky-500 transition-all duration-300 group-hover:w-full"></span>
          </li>
        </ul>
        <div ref={dropDownMenuRef} onClick={() => setDropDownState(!dropDownState)} className="relative flex transition-transform md:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="cursor-pointer"
          >
            {" "}
            <line x1="4" x2="20" y1="12" y2="12" /> <line x1="4" x2="20" y1="6" y2="6" />
            <line x1="4" x2="20" y1="18" y2="18" />{" "}
          </svg>
          {dropDownState && (
            <ul className=" z-10  gap-2  bg-[#393E46]  absolute right-0 top-11 flex w-[200px] flex-col  rounded-lg   text-base ">
              <li className="cursor-pointer  px-6 py-2 text-white rounded-t-lg hover:bg-sky-600 ">Home</li>
              <li className="cursor-pointer  px-6 py-2 text-white hover:bg-sky-600 ">Services</li>
              <li className="cursor-pointer  px-6 py-2 text-white hover:bg-sky-600 ">About</li>
              <li className="cursor-pointer  px-6 py-2 text-white hover:bg-sky-600 ">Contact</li>
            </ul>
          )}
        </div>
      </nav>
    </section>
  );
};
