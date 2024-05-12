import { useState } from "react";

const Footer = () => {
  const [currentYear] = useState(new Date().getFullYear());

  return (
    <footer className="bg-gradient-to-r from-sky-500 to-cyan-50 py-8 text-black">
      <div className="flex flex-col justify-around gap-5 container mx-auto p-2">
        <aside className="flex flex-col items-center justify-center gap-1 text-xl">
          <img className="w-16 sm:w-20 md:w-36 lg:w-40" src="/logo.png" alt="" />
          <p>Angel Publishers</p>
        </aside>
        <nav className="text-lg">
          <ul className="flex h-full flex-wrap items-center justify-center gap-3">
            <li>
              <a className="cursor-pointer hover:underline" href="#home">
                Home
              </a>
            </li>
            <li>
              <a className="cursor-pointer hover:underline" href="#about">
                About
              </a>
            </li>
            <li>
              <a className="cursor-pointer hover:underline" href="#books">
                Books
              </a>
            </li>
            <li>
              <a className="cursor-pointer hover:underline" href="#books_inside">
                Books Inside
              </a>
            </li>
            <li>
              <a className="cursor-pointer hover:underline" href="#book-reviews">
                Reviews
              </a>
            </li>
            <li>
              <a className="cursor-pointer hover:underline" href="#contact">
                Contacts
              </a>
            </li>
          </ul>
        </nav>
        <aside className="text-center text-sm">
          <p>&copy; {currentYear} Angel Publisher. All Rights Reserved.</p>
        </aside>
      </div>
    </footer>
  );
};

export default Footer;
