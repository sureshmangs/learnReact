import React, { useState, useEffect } from 'react'

function HookCounterOne() {
    const [count, setCount] = useState(0);
    const [name, setName] = useState('');

    useEffect(() => {
        console.log('Updating the title')
        document.title = `Clicked ${count} times`
    }, [count])
    return (
        <div>
            <input type="text" name="name" value={name}
                onChange={(e) => setName(e.target.value)} />
            <button onClick={() => setCount(count + 1)}>Increment Count</button>
        </div>
    )
}

export default HookCounterOne
