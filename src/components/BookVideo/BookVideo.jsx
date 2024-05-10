const VIDEO_URL = "https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2F61555039101915%2Fvideos%2F1039600320587193%2F&show_text=false&width=560&t=0";

const BookVideo = () => {
  return (
    <div className="bg-gradient-to-r from-violet-900 to-fuchsia-900 my-12">
      <div className="container mx-auto flex flex-col lg:flex-row justify-between p-8 lg:p-0">
        <div className="w-full lg:w-1/2 lg:px-4 p-6 text-white">
          <h3 className="text-lg md:text-xl lg:text-xl xl:text-3xl font-semibold leading-[34px] text-white mb-6">
            We`re the Angels of Angel Publishers. We make colors come alive in your world. With our crayons and paints so bright, you can create masterpieces, day and night.
          </h3>
          <h3 className="text-lg md:text-xl lg:text-xl xl:text-3xl font-semibold leading-[34px] text-white">
            Angel Publishers, spreading joy and fun. In every coloring adventure, we`ve just begun. Let your imagination fly up high. With Angel Publishers, your dreams touch the sky.
          </h3>
        </div>
        <div className="w-full lg:w-1/2 p-6">
          <div className="overflow-hidden relative" style={{ paddingTop: "56.25%" }}>
            {/* 16:9 aspect ratio padding-top trick */}
            <iframe
              src={VIDEO_URL}
              className="absolute top-0 left-0 w-full h-full"
              style={{ border: "none" }}
              scrolling="no"
              frameBorder="0"
              allowFullScreen={true}
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookVideo;
