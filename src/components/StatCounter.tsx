import { useRef } from 'react';
import { useCountUp } from '../hooks/useCountUp';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

interface StatCounterProps {
    end: number;
    duration?: number;
    suffix?: string;
    label: string;
    gradientFrom: string;
    gradientTo: string;
}

const StatCounter = ({ end, duration = 2000, suffix = '', label, gradientFrom, gradientTo }: StatCounterProps) => {
    const ref = useRef<HTMLDivElement>(null);
    const { hasIntersected } = useIntersectionObserver(ref, { threshold: 0.3 });
    const count = useCountUp(end, duration, hasIntersected);

    const formatNumber = (num: number) => {
        if (num >= 10000000) return `${(num / 10000000).toFixed(1)}Cr`; // Special case for 10M+ (Crores) if desired, or keep standard
        if (num >= 1000000) return `${(num / 1000000).toFixed(1)}M`;
        if (num >= 1000) return `${(num / 1000).toFixed(0)}K`;
        return num.toString();
    };

    // Override format for specific large numbers if needed to match previous behavior exactly
    // The previous Hero.tsx had specific logic. Let's replicate the display logic.
    const displayValue = () => {
        // Replicating the exact logic from Hero.tsx for consistency
        if (end === 10000000) return formatNumber(count); // Views
        if (end === 100000) return formatNumber(count);   // Subscribers
        if (end === 800) return count.toString();         // Videos

        return formatNumber(count);
    };

    return (
        <div
            ref={ref}
            className={`p-6 bg-gradient-to-br from-${gradientFrom}/10 to-transparent rounded-2xl border border-${gradientFrom}/20 backdrop-blur-sm hover:scale-105 transition-transform duration-300`}
        >
            <div className={`text-4xl md:text-5xl font-bold bg-gradient-to-r from-${gradientFrom} to-${gradientTo} bg-clip-text text-transparent mb-2`}>
                {displayValue()}{suffix}
            </div>
            <div className="text-gray-400 text-sm md:text-base">{label}</div>
        </div>
    );
};

export default StatCounter;
