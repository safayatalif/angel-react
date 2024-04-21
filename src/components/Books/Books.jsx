import React from "react";
import Book from "./Book";

const Books = () => {
  return (
    <div className="container mx-auto my-16 p-8">
      <div className="grid grid-cols-3 gap-8">
        <Book></Book>
        <Book></Book>
        <Book></Book>
        <Book></Book>
        <Book></Book>
        <Book></Book>
      </div>
    </div>
  );
};

export default Books;
