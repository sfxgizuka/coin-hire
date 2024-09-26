// components/LayoutWithCarousel.tsx
import { motion } from 'framer-motion';
import { useState } from 'react';

// Left Description Component
const Description = () => {
    return (
        <div className="space-y-4">
            <h1 className="text-3xl font-bold text-white">
                최고의 실력을 가진 <br /> 외국인 인재를 찾고 계신가요?
            </h1>
            <p className="text-lg text-white">
                법률 및 인사관리 부담없이 1억에 인재를 고용하세요. 개발자가 필요하신가요?
            </p>
        </div>
    );
};

export default Description;