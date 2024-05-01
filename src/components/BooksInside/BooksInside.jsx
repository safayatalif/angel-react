import React from 'react';
import BookInsideCarousel from './BookInsideCarousel';

const BooksInside = () => {
    return (
        <div className='container mx-auto my-16 p-8'>
            <h1 className="text-center font-bold text-4xl  mb-16">Our All Books</h1>
            <BookInsideCarousel></BookInsideCarousel>
        </div>
    );
};

export default BooksInside;