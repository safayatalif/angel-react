import BookInsideCarousel from "./BookInsideCarousel";

const BooksInside = () => {
  return (
    <div className="container mx-auto my-16 p-8">
      <h1 className="text-center font-bold text-4xl text-sky-500 mb-16">Books Inside</h1>
      <BookInsideCarousel></BookInsideCarousel>
    </div>
  );
};

export default BooksInside;
