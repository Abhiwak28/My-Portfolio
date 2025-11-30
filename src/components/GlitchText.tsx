import React from 'react';

interface GlitchTextProps {
    text: string;
    className?: string;
}

const GlitchText: React.FC<GlitchTextProps> = ({ text, className = '' }) => {
    return (
        <div className={`relative inline-block group ${className}`}>
            <span className="relative z-10">{text}</span>
            <span
                className="absolute top-0 left-0 -z-10 w-full h-full text-red-500 opacity-0 group-hover:opacity-70 animate-none group-hover:animate-[glitchTop_1s_infinite] transition-opacity duration-300"
                aria-hidden="true"
            >
                {text}
            </span>
            <span
                className="absolute top-0 left-0 -z-10 w-full h-full text-blue-500 opacity-0 group-hover:opacity-70 animate-none group-hover:animate-[glitchBottom_1.5s_infinite] transition-opacity duration-300"
                aria-hidden="true"
            >
                {text}
            </span>
        </div>
    );
};

export default GlitchText;
