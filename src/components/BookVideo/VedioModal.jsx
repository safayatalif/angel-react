import React from 'react';

const VideoModal = ({ setOpenModal }) => {
    return (
        <div onClick={() => setOpenModal(false)} className="fixed z-[100] flex items-center justify-center inset-0 bg-black/20 backdrop-blur-sm duration-100 dark:bg-transparent">
            <div className="relative" >
                <h1>aba dfdlk</h1>
                <video controls className="absolute top-0 left-0 w-96 h-full">
                    <source src='/angel_vedio.mp4' type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
        </div>
    );
};

export default VideoModal;
