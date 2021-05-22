import React from 'react'

function Person(props) {
    const {person} = props;
    return (
      
            <h2>I'm no. {person.id}, aka {person.name} & i know {person.skill}</h2>
        
    )
}

export default Person
