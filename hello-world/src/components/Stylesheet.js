import React from 'react'

import './myStyle.css';

function Stylesheet(props) {
    const primary = props.primary ? 'primary' : '';
    return (
        <div>
            <p className={`${primary} font-xl`}>Stylesheet</p>
        </div>
    )
}

export default Stylesheet
