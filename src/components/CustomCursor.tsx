import { useEffect, useState } from 'react';

const CustomCursor = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isClicking, setIsClicking] = useState(false);
    const [isHovering, setIsHovering] = useState(false);

    useEffect(() => {
        const updatePosition = (e: MouseEvent) => {
            setPosition({ x: e.clientX, y: e.clientY });
        };

        const handleMouseDown = () => setIsClicking(true);
        const handleMouseUp = () => setIsClicking(false);

        const handleMouseOver = (e: MouseEvent) => {
            if ((e.target as HTMLElement).tagName === 'A' || (e.target as HTMLElement).tagName === 'BUTTON' || (e.target as HTMLElement).closest('a') || (e.target as HTMLElement).closest('button')) {
                setIsHovering(true);
            } else {
                setIsHovering(false);
            }
        };

        window.addEventListener('mousemove', updatePosition);
        window.addEventListener('mousedown', handleMouseDown);
        window.addEventListener('mouseup', handleMouseUp);
        window.addEventListener('mouseover', handleMouseOver);

        return () => {
            window.removeEventListener('mousemove', updatePosition);
            window.removeEventListener('mousedown', handleMouseDown);
            window.removeEventListener('mouseup', handleMouseUp);
            window.removeEventListener('mouseover', handleMouseOver);
        };
    }, []);

    return (
        <div
            className="fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-difference hidden md:block"
            style={{
                transform: `translate(${position.x}px, ${position.y}px)`,
            }}
        >
            {/* Clapperboard Icon */}
            <div
                className={`relative transition-all duration-150 ease-out ${isHovering ? 'scale-125' : 'scale-100'}`}
                style={{ marginLeft: '-11px', marginTop: '-11px' }} // Center the cursor (22px / 2)
            >
                <svg
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="drop-shadow-sm"
                >
                    {/* Clapperboard Top (The "Clapper") */}
                    <g
                        className={`origin-bottom-left transition-transform duration-100 ${isClicking ? 'rotate-[-15deg]' : 'rotate-[-35deg]'}`}
                        style={{ transformOrigin: '2px 10px' }}
                    >
                        <rect x="2" y="6" width="20" height="4" rx="1" fill="white" />
                        {/* Stripes */}
                        <path d="M6 6L4 10H7L9 6H6Z" fill="black" />
                        <path d="M11 6L9 10H12L14 6H11Z" fill="black" />
                        <path d="M16 6L14 10H17L19 6H16Z" fill="black" />
                    </g>

                    {/* Clapperboard Bottom (Static) */}
                    <rect x="2" y="10" width="20" height="12" rx="2" fill="white" />

                    {/* Details on Bottom */}
                    <path d="M4 12H20" stroke="black" strokeWidth="0.5" strokeOpacity="0.5" />
                    <path d="M12 14V20" stroke="black" strokeWidth="0.5" strokeOpacity="0.5" />
                </svg>
            </div>
        </div>
    );
};

export default CustomCursor;
