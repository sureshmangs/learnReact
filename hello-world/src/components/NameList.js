import React from 'react';

function NameList() {
    const names = ["Bruce", "Clark", "Diana"];
    const nameList = names.map((name, index) => <h2 key={index}>{name}</h2>)
    return (
        <div>{nameList}</div>
    )
}

export default NameList;


// Index as a key
// When to use inde as a key...?

// 1. The items in your list doesn't have a unique id
// 2. The list is static and won't be changed
// 3. The list will never be filtered or reordered

