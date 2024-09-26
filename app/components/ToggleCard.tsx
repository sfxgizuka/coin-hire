'use client';
import React from 'react';

interface Props {
  pix?: string; // Expecting pix as a string path
  name: string;
  age: string;
  detail1: string;
  detail2: string;
  detail3: string;
  detail4: string;
}

export default function ToggleCard({ pix, name, age, detail1, detail2, detail3, detail4 }: Props) {
  return (
    <div className="flex items-center justify-center gap-2 py-6 h-[300px] bg-white rounded-xl flex-col px-5 sm:h-[350px] md:h-[408px]">
      {pix && <img src={pix} alt={name} className="w-16 h-16 rounded-full sm:w-20 sm:h-20" />} {/* Responsive image size */}
      <div className="flex flex-col gap-1">
        <div className="flex font-bold text-lg sm:text-xl">{name}</div> {/* Responsive font size */}
        <div className="flex items-center justify-center font-bold text-[#4A77FF] text-sm sm:text-base">{age}</div> {/* Responsive font size */}
      </div>

      {/* Hide detail texts on small screens */}
      <div className="hidden sm:flex flex-col gap-1">
        <div className="">
          <p className="rounded-md border py-1 px-2 text-center text-sm sm:text-base">{detail1}</p> {/* Responsive font size */}
        </div>
        <div className="">
          <p className="rounded-md border py-1 px-2 text-center text-sm sm:text-base">{detail2}</p> {/* Responsive font size */}
        </div>
        <div className="flex items-center justify-center gap-1">
          <p className="rounded-md border py-1 px-2 text-sm sm:text-base">{detail3}</p> {/* Responsive font size */}
          <p className="rounded-md border py-1 px-2 text-sm sm:text-base">{detail4}</p> {/* Responsive font size */}
        </div>
      </div>
    </div>
  );
}
