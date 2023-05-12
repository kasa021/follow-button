import React, { useState } from 'react'

const Button = () => {
    const [position, setPosition] = useState({ top: 0, left: 0 });

    const handleMousseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
        setPosition({
            top: e.clientY,
            left: e.clientX
        });
    }

    return (
        <button
            onMouseMove={handleMousseMove}
            style={{
                position: 'fixed',
                top: position.top,
                left: position.left
            }}
        >
            Follow me!
        </button>
    )
}

export default Button