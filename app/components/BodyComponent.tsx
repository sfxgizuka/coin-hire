"use client";
import React, { useState, useEffect } from 'react';
import ItemCard from './ItemCard';
import ScrollingCard from './ScrollingCard';
import ToggleCard from './ToggleCard';
import { BodyComponentProps } from '../interfaces/general';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function BodyComponent({ itemData, scrollingCardData, toggleCardData }: BodyComponentProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalSlides = scrollingCardData.length;
  const totalCards = toggleCardData.length;

  // Function to handle left arrow click
  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? totalCards - 1 : prevIndex - 1));
  };

  // Function to handle right arrow click
  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === totalCards - 1 ? 0 : prevIndex + 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 3000);

    AOS.init({
      duration: 500, 
      easing: 'ease-in-out',
      once: true, 
    });

    return () => clearInterval(interval);
  }, [totalSlides]);

  return (
    <>
      <div className='lg:p-0 mt-10 lg:mt-24 grid grid-cols-1 lg:grid-cols-5 p-4 gap-6 sm:gap-4'>
        {/* Heading Section */}
        <div className="col-span-5">
          <div className="relative w-[200px] bg-white p-4 text-center text-lg sm:text-base py-2 rounded-lg shadow-md text-[#40E2E8]" data-aos="fade-up" data-aos-delay="300">
            <p>풀타임, 파트타임</p>
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full w-0 h-0 border-l-8 border-l-transparent border-r-8 border-r-transparent border-t-8 border-t-white"></div>
          </div>
        </div>

        {/* Main Text Section */}
        <div className="col-span-5 lg:col-span-3" id="infos">
          <h1 className="text-4xl sm:text-3xl mt-4 text-white" data-aos="fade-up" data-aos-delay="500">
            최고의 실력을 가진 외국인 인재를 찾고 계신가요?
          </h1>
          <p className="text-xl sm:text-lg mt-4 text-white" data-aos="fade-up" data-aos-delay="500">
            법률 및 인사관리 부담없이 1주일 이내에 원격으로 채용해보세요.
          </p>

          {/* Item Cards */}
          <div className="lg:flex gap-12 items-center justify-between hidden" data-aos="fade-in" data-aos-delay="500">
            {itemData.map((item, i) => (
              <ItemCard key={i} title={item.title} description={item.description} />
            ))}
          </div>
        </div>

        {/* Cards Section */}
        <div className="col-span-5 lg:col-span-2 mt-8 lg:mt-0 lg:ml-16 hidden lg:block" id="profiles">
          {/* Left Arrow */}
          <div className="relative flex justify-center items-center flex-col">
            <button
              className="absolute left-0 p-2 bg-gray-200 rounded-full shadow-md hover:bg-gray-300 z-20"
              onClick={handlePrev}
            >
              ←
            </button>

            {/* Cards */}
            <div className="relative w-full flex justify-center items-center flex-col">
              {toggleCardData.map((item, i) => {
                const isPrev = (currentIndex === 0 && i === totalCards - 1) || i === currentIndex - 1;
                const isNext = (currentIndex === totalCards - 1 && i === 0) || i === currentIndex + 1;
                const isActive = i === currentIndex;

                return (
                  <div
                    key={i}
                    className={`absolute transition-all duration-300 ease-in-out ${isActive ? 'z-20' : 'z-10'}`}
                    style={{
                      transform: isActive
                        ? 'translateY(-20px)'
                        : isPrev
                        ? 'translateX(-20px)'
                        : isNext
                        ? 'translateX(20px)'
                        : 'translateX(0)',
                      opacity: isActive ? 1 : 0.6,
                      transition: 'transform 0.3s, opacity 0.3s',
                      zIndex: isActive ? 10 : i,
                    }}
                  >
                    <div className="w-36 h-36 lg:w-60 lg:h-60"> {/* Responsive size */}
                      <ToggleCard
                        pix={item.pix}
                        name={item.name}
                        age={item.age}
                        detail1={item.detail1}
                        detail2={item.detail2}
                        detail3={item.detail3}
                        detail4={item.detail4}
                      />
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Right Arrow */}
            <button
              className="absolute right-0 p-2 bg-gray-200 rounded-full shadow-md hover:bg-gray-300 z-20"
              onClick={handleNext}
            >
              →
            </button>
          </div>
        </div>
      </div>

      {/* Scrolling Card Section */}
      <div className="scrolling-card-container mt-14 relative w-full overflow-hidden">
        <div
          className="relative flex transition-transform ease-in-out duration-1000 gap-4"
          style={{
            transform: `translateX(-${currentSlide * (100 / totalSlides)}%)`,
            width: `${totalSlides * 240 + (totalSlides - 1) * 8}px`,
          }}
        >
          {scrollingCardData.map((item, i) => (
            <div
              key={i}
              className="flex-shrink-0 opacity-0 transition-opacity duration-500 hidden lg:block"
              style={{
                opacity: currentSlide === i ? 1 : 0.5,
              }}
            >
              <ScrollingCard icon={item.icon} text={item.text} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
