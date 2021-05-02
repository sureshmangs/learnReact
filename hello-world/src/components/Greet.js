import React from 'react';



/*
const Greet = ({ name, hero, children }) => {
    return (
        <div>
            <h1>Hello {name} a.k.a {hero}</h1>
            {children}
        </div>
    )
}
*/



const Greet = props => {
    const { name, hero, children } = props;
    return (
        <div>
            <h1>Hello {name} a.k.a {hero}</h1>
            {children}
        </div>
    )
}

export default Greet;