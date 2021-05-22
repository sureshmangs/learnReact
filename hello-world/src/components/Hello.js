import React from 'react'

// With JSX

/*
const Hello = () => {
    return (
        <div>
            <h1 id="hello" className="text-primary">Hello Suresh</h1>
        </div>
    )
}
*/



// Without JSX

const Hello = () => {
    return (
        React.createElement('div', null, React.createElement('h1', { id: 'hello', className: 'text-primary' }, "Hello Suresh"))
    )
}

export default Hello;
