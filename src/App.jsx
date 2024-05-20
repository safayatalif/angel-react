import React, { useEffect, useState } from "react";
import BookVideo from "./components/BookVideo/BookVideo";
import Books from "./components/Books/Books";
import BooksInside from "./components/BooksInside/BooksInside";
import Footer from "./components/Footer/Footer";
import { Navbar } from "./components/Navbar/Navbar";
import { TopBanner } from "./components/TopBanner/TopBanner";
import Welcome from "./components/Welcome/Welcome";
import BookReviews from "./components/BookReviews/BookReviews";

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
    <div className="font-sans text-gray-700">
      <Navbar isFixed={isNavbarFixed}></Navbar>
      <div className="">
        <TopBanner></TopBanner>
        {/* <Home></Home> */}
      </div>
      <Welcome></Welcome>
      <Books></Books>
      <BooksInside></BooksInside>
      {/* <BookVideo></BookVideo> */}
      <BookReviews></BookReviews>
      <Footer></Footer>
    </div>
  );
};

export default App;
