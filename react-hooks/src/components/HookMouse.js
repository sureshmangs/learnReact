import React, { useState, useEffect } from 'react'

function HookMouse() {
    const [x, setX] = useState(0);
    const [y, setY] = useState(0);

    useEffect(() => {
        window.addEventListener('mousemove', logMousePosition);

        return () => {
            console.log('Component unmount code');
            window.removeEventListener('mousemove', logMousePosition);
        }
    }, [])

    const logMousePosition = (e) => {
        setX(e.clientX);
        setY(e.clientY);
    }

    return (
        <div>
            X - {x} Y - {y}
        </div>
    )
}

export default HookMouse
