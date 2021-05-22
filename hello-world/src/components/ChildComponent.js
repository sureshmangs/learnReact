import React from 'react'

function ChildComponent(props) {
    return (
        <div>
            {/* Method 1
            <button onClick={props.greetParent}>Greet Parent</button> */}


            {/* Method 2
                Sending paremeters from child to parent component*/}
            <button onClick={() => props.greetParent('child')}>Greet Parent</button>

        </div>
    )
}

export default ChildComponent
