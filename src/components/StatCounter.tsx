import { useRef } from 'react';
import { useCountUp } from '../hooks/useCountUp';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

interface StatCounterProps {
    end: number;
    decimals?: number;
    duration?: number;
    prefix?: string;
    suffix?: string;
    label: string;
    gradientFrom: string;
    gradientTo: string;
}

const StatCounter = ({ end, decimals = 0, duration = 2000, prefix = '', suffix = '', label, gradientFrom, gradientTo }: StatCounterProps) => {
    const ref = useRef<HTMLDivElement>(null);
    const { hasIntersected } = useIntersectionObserver(ref, { threshold: 0.3 });
    const count = useCountUp(end, duration, hasIntersected);

    return (
        <div
            ref={ref}
            className={`p-2 md:p-6 bg-gradient-to-br from-${gradientFrom}/20 md:from-${gradientFrom}/10 to-transparent rounded-2xl border border-${gradientFrom}/20 md:backdrop-blur-sm hover:scale-105 transition-transform duration-300`}
        >
            <div className={`text-xl md:text-5xl font-bold bg-gradient-to-r from-${gradientFrom} to-${gradientTo} bg-clip-text text-transparent mb-1 md:mb-2`}>
                {prefix}{count.toFixed(decimals)}{suffix}
            </div>
            <div className="text-gray-400 text-[10px] md:text-base leading-tight">{label}</div>
        </div>
    );
};

export default StatCounter;
