import React from 'react';

interface Props {
  icon: string;
  text: string;
}

// ScrollingCard Component
export default function ScrollingCard({ icon, text }: Props) {
  return (
    <div className="w-full max-w-[300px] sm:max-w-[240px] md:max-w-[280px] lg:max-w-[280px] rounded-xl bg-[#39B0D9] p-4 gap-6 flex items-center mx-4">
      <img src={icon} alt={text} className="w-12 h-12 sm:w-10 sm:h-10" />
      <p className="font-black text-white text-lg sm:text-base md:text-xl lg:text-2xl">
        {text}
      </p>
    </div>
  );
}
