import React from 'react';
import '../../public/styles/index.css';

const Card = ({ children, className, ...props }: any) => {
    return (
        <div className={`card ${className}`} {...props}>
            {children}
        </div>
    );
};

export default Card;