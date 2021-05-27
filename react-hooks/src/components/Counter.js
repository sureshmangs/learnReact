import React, { useState, useMemo } from 'react'

function Counter() {
    const [countOne, setCountOne] = useState(0);
    const [countTwo, setCountTwo] = useState(0);

    const incrementOne = () => {
        setCountOne(countOne + 1)
    }

    const incrementTwo = () => {
        setCountTwo(countTwo + 1)
    }
    const isEven = useMemo(() => {
        console.log('isEven running')
        let i = 0;
        while (i < 2000000000) i++;
        return countOne % 2 === 0
    }, [countOne])


    return (
        <div>
            <div>
                <button onClick={incrementOne}>Count 1 - {countOne}</button>
                <span>{isEven ? 'Even' : 'Odd'}</span>
            </div>
            <div>
                <button onClick={incrementTwo}>Count 2 - {countTwo}</button>
            </div>
        </div>
    )
}

export default Counter

// useCallback: Caches the provided function instance
// useMemo: Invokes the provided function & caches the result
