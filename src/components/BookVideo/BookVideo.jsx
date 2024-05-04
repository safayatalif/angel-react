import React from 'react';

const BookVideo = () => {
    return (
        <div className='bg-gradient-to-r from-violet-900 to-fuchsia-900'>
            <div className='container mx-auto flex justify-between p-8'>
                <div className='w-1/2  hidden md:block p-4 text-white'>
                    <h3 className='text-xl md:text-xl  lg:text-3xl font-semibold leading-[34px] text-white mb-6'>We're the Angels of Angel Publishers We make colors come alive in your world With our crayons and paints so bright You can create masterpieces, day and night.</h3>
                    <h3 className='text-xl md:text-xl  lg:text-3xl font-semibold leading-[34px] text-white'>Angel Publishers, spreading joy and fun In every coloring adventure, we've just begun Let your imagination fly up high With Angel Publishers, your dreams touch the sky.</h3>
                </div>
                <div className=' w-full md:w-1/2 p-4'>
                    <img src='book1/video.png' width="100%" height="100%" alt="" />
                </div>
            </div>
        </div>
    );
};

export default BookVideo;