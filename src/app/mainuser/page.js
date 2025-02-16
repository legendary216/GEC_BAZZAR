import React from 'react'
import Link from 'next/link'

"use client"

const slider= [
    {
        id: 1,
        title: "Workshop Essentials",
        description: "Boiler suits, Lab coats, Shoes",
        img: "/img/wk.jpg",
        url: "#section-1", 
        
      },
      {
        id: 2,
        title: "Books",
        description: "Textbooks, printed notes",
        img: "/img/bks.webp",
        url: "#section-2",
    
      },
      {
        id: 3,
        title: "EG Matter",
        description: "Mini drafter, Sheets holder, clips,..",
        img: "/img/eg.jpg",
        url: "#section-3",
      
      },
      {
        id: 4,
        title: "Others",
        description: "Calculators, etc.",
        img: "/img/k.png",
        url: "#section-4",
    
      },

]
export function Slider() {
    const [currentIndex, setCurrentIndex] = useState(0);
  
    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) =>
          prevIndex === slides.length - 1 ? 0 : prevIndex + 1
        );
      }, 4000);
  
      return () => clearInterval(interval);
    }, []);
  
    const goToSlide = (index) => {
      setCurrentIndex(index);
    };
  
    const nextSlide = () => {
      setCurrentIndex((prevIndex) =>
        prevIndex === slides.length - 1 ? 0 : prevIndex + 1
      );
    };
  
    const prevSlide = () => {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? slides.length - 1 : prevIndex - 1
      );
    };
  
    const scrollToSection = (id) => {
      const element = document.querySelector(id);
      if (element) {
        window.scrollTo({
          top: element.offsetTop,
          behavior: "smooth",
        });
      }
    };
    return (
        <div className="relative w-full max-w-6xl mx-auto overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-[70vh]">
            {slides.map((slide, index) => (
              <div
                key={slide.id}
                className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
                  index === currentIndex ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <img
                  src={slide.img}
                  alt={`Slide ${index + 1}`}
                  className="w-full h-full object-cover rounded-lg shadow-lg"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-white text-center p-6">
                  <h2 className="text-3xl font-bold mb-3">{slide.title}</h2>
                  <p className="text-lg mb-5">{slide.description}</p>
                  <button
                    onClick={() => scrollToSection(slide.url)}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded"
                  >
                    Shop
                  </button>
                </div>
              </div>
            ))}
    
            <button
              onClick={prevSlide}
              className="absolute top-1/2 left-6 transform -translate-y-1/2 bg-white bg-opacity-60 hover:bg-opacity-80 text-black rounded-full p-3 shadow-lg"
            >
              Prev
            </button>
            <button
              onClick={nextSlide}
              className="absolute top-1/2 right-6 transform -translate-y-1/2 bg-white bg-opacity-60 hover:bg-opacity-80 text-black rounded-full p-3 shadow-lg"
            >
              Next
            </button>
    
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full ${
                    index === currentIndex ? 'bg-white' : 'bg-gray-500'
                  }`}
                />
              ))}
            </div>
          </div>
    
          <div id="section-1" className="mt-[70vh] min-h-screen bg-gray-100 p-10">
            <h2 className="text-2xl">Section 1</h2>
            <p>Content for Section 1</p>
          </div>
          <div id="section-2" className="min-h-screen bg-gray-200 p-10">
            <h2 className="text-2xl">Section 2</h2>
            <p>Content for Section 2</p>
          </div>
          <div id="section-3" className="min-h-screen bg-gray-300 p-10">
            <h2 className="text-2xl">Section 3</h2>
            <p>Content for Section 3</p>
          </div>
          <div id="section-4" className="min-h-screen bg-gray-400 p-10">
            <h2 className="text-2xl">Section 4</h2>
            <p>Content for Section 4</p>
          </div>
        </div>
      )
}

export default page