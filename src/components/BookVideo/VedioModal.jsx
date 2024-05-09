const VideoModal = ({ setOpenModal }) => {
  return (
    <div onClick={() => setOpenModal(false)} className="fixed z-[100] flex items-center justify-center inset-0 bg-black/20 backdrop-blur-sm duration-100 dark:bg-transparent">
      <div className="relative">
        <iframe
          src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2F61555039101915%2Fvideos%2F1039600320587193%2F&show_text=false&width=560&t=0"
          width="100%"
          height="auto"
          style={{ border: "none", overflow: "hidden" }}
          scrolling="no"
          frameBorder="0"
          allowFullScreen={true} // Use camelCase for boolean attributes
          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
        ></iframe>
      </div>
    </div>
  );
};

export default VideoModal;
