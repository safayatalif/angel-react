import { useState } from "react";

const AskAccordion = () => {

    // add your question of object data 
    const question = [
        {
            "id": "1",
            "question": " Are your books suitable for children of all ages?",
            "answer": "Absolutely! Our collection features a diverse range of books tailored to various age groups and interests. Whether you're looking for colorful picture books to engage toddlers or stimulating stories for older children, we have something for every young reader. Each book is thoughtfully crafted to inspire imagination, foster learning, and spark a love for reading in children of all ages."
        },
        {
            "id": "2",
            "question": "What makes your books unique compared to others?",
            "answer": "Our books are distinguished by their exceptional quality, engaging content, and dedication to nurturing young minds. From captivating illustrations to heartwarming stories, every aspect of our books is carefully curated to captivate and inspire young readers. Moreover, our commitment to excellence extends beyond the pages, as evidenced by the positive feedback from parents, educators, and children alike."
        },
        {
            "id": "3",
            "question": "Where can I purchase your books?",
            "answer": "Purchasing our books is quick and convenient. You can find our titles available for purchase on leading online platforms such as Amazon. Simply visit our author page on Amazon to browse our entire collection and place your order with ease. With just a few clicks, you can bring the joy of reading into your child's life and embark on unforgettable literary adventures together."
        }
    ]


    // toggle state and function 
    const [isOpen, setIsOpen] = useState(null);
    const handleToggle = (idx) => setIsOpen((prevIdx) => (prevIdx === idx ? null : idx));

    return (
        <div className="flex justify-center">
            <div className=" max-w-[550px] rounded-lg py-12 space-y-6 cursor-pointer">
                {/* maping each accordion  */}
                {question.map((arr, idx) => (
                    <div key={idx} onClick={() => handleToggle(idx)} className="flex items-center">
                        {/* the index div  */}
                        <div className="w-16 h-16 bg-[#355E72] flex justify-center items-center text-white text-2xl font-semibold rounded-xl font-sans">
                            <span>0{idx + 1}</span>
                        </div>
                        <div className="w-10 h-[2px] bg-[#355E72] relative">
                            <span className="w-3 h-3 bg-white absolute -left-2 -top-[5px] z-40 rounded-full border-2 border-[#355E72]"></span>
                            <span className="bg-[#355E72] w-10 h-1"></span>
                        </div>
                        {/* main accordion div  */}
                        <div>
                            <div className="max-w-[450px] bg-sky-50 shadow-md border-t-[12px] p-4 border-[#355E72] relative">
                                <span className="h-0 w-0 border-b-[40px] border-b-transparent border-r-[40px] border-r-[#355E72] absolute top-0 right-0"></span>
                                <h1 className="text-[#355E72] text-xl text-center">{arr?.question}</h1>
                            </div>
                            <div
                                className={`grid overflow-hidden transition-all duration-300 ease-in-out text-slate-600  ${isOpen === idx ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                                    }`}
                            >
                                <div className="overflow-hidden">
                                    <div className=" max-w-[450px] rounded-br-xl rounded-bl-xl bg-[#355E72] text-white p-4 text-center text-sm">
                                        {arr?.answer}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AskAccordion;