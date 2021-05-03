import React from 'react'

function InlineStyle() {
    return (
        <div>
            <p style={{ color: 'red', fontSize: '50px' }}>Inline Style</p>
            <p style={heading}>Inline Style with Variable</p>
        </div>
    )
}

const heading = {
    color: 'blue',
    fontSize: '40px'
};

export default InlineStyle
