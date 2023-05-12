import React from 'react';
import { useSpring, animated } from 'react-spring';

const Button = () => {
    const [{ xy }, set] = useSpring(() => ({ xy: [0, 0] }));

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        set({ xy: [e.clientX, e.clientY] });
    }

    return (
        <div onMouseMove={handleMouseMove}>
            <animated.button
                style={{
                    transform: xy.to((x, y) => `translate3d(${x}px,${y}px,0)`),
                    position: 'fixed'
                }}
            >
                Follow Me
            </animated.button>
        </div>
    );
}

export default Button;
