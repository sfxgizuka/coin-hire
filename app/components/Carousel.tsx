
"use client"
import { motion } from 'framer-motion';
import { useState } from 'react';

// Right Carousel Component
const CardCarousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const cards = [
        { title: 'Abhishek Gupta', description: '개발자 - 10년 경력', tooltip: 'Click for more details' },
        { title: 'Samantha Doe', description: '마케터 - 5년 경력', tooltip: 'Click for more details' },
        { title: 'James Lee', description: '디자이너 - 7년 경력', tooltip: 'Click for more details' }
    ];

    const handlePrev = () => {
        setCurrentIndex(currentIndex > 0 ? currentIndex - 1 : cards.length - 1);
    };

    const handleNext = () => {
        setCurrentIndex((currentIndex + 1) % cards.length);
    };

    return (
        <div className="relative">
            {/* Carousel with FadeIn Tooltip */}
            {cards.map((card, index) => (
                <motion.div
                    key={index}
                    className={`absolute w-full transition-opacity duration-500 ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}
                >
                    <div className="p-6 bg-white rounded-lg shadow-lg w-80">
                        <h2 className="text-xl font-semibold">{card.title}</h2>
                        <p>{card.description}</p>
                    </div>

                    {/* Tooltip on Hover */}
                    <motion.div
                        className="tooltip bg-black text-white p-2 rounded mt-2 text-sm absolute left-0"
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                    >
                        {card.tooltip}
                    </motion.div>
                </motion.div>
            ))}

            {/* Bottom card for extra info */}
            <div className="absolute bottom-[-50px] w-full p-4 bg-green-500 text-white text-center rounded-lg">
                Tap to learn more about {cards[currentIndex].title}
            </div>

            {/* Navigation Arrows */}
            <button onClick={handlePrev} className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-blue-500 text-white p-2 rounded-full">
                ←
            </button>
            <button onClick={handleNext} className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-blue-500 text-white p-2 rounded-full">
                →
            </button>
        </div>
    );
};

export default CardCarousel;