import React from 'react'

function Title() {
    console.log('rendering title')
    return (
        <div>
            <h3>useCakkback Hook</h3>
        </div>
    )
}

export default React.memo(Title)
