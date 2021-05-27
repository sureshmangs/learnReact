import React, { useState } from 'react'

function HookCounter() {
    const [count, setCount] = useState(0);
    return (
        <div>
            <button onClick={() => setCount(count + 1)}>Clicked {count} times</button>
        </div>
    )
}

export default HookCounter


// Rules of Hooks

// 1. "Only call hooks at the top level"
// Don't call hooks inside loops, conditions or nested functions

// 2. "Only call hooks from React functions"
// Call them within React functional component and  not just any regular JS function