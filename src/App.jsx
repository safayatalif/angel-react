import React, { useEffect, useState } from "react";
import BookVideo from "./components/BookVideo/BookVideo";
import Books from "./components/Books/Books";
import BooksInside from "./components/BooksInside/BooksInside";
import Footer from "./components/Footer/Footer";
import { Home } from "./components/Home/Home";
import { Navbar } from "./components/Navbar/Navbar";
import Welcome from "./components/Welcome/Welcome";

const App = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isNavbarFixed, setIsNavbarFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      setScrollPosition(position);
      setIsNavbarFixed(position > 400);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <div className="">
        <Home></Home>
      </div>
      <Navbar isFixed={isNavbarFixed}></Navbar>
      <Welcome></Welcome>
      <Books></Books>
      <BooksInside></BooksInside>
      <BookVideo></BookVideo>
      <Footer></Footer>
    </div>
  );
};

export default App;
