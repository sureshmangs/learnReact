import React, { useState } from 'react'

function UserFormOne() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    const submitHandler = (e) => {
        e.preventDefault();
        alert(`Hello ${firstName} ${lastName}`);
        setFirstName('');
        setLastName('');
    }

    return (
        <div>
            <form onSubmit={submitHandler}>
                <div>
                    <label>First name: </label>
                    <input typt="text" value={firstName} onChange={e => setFirstName(e.target.value)} />
                </div>
                <div>
                    <label>Last name: </label>
                    <input typt="text" value={lastName} onChange={e => setLastName(e.target.value)} />
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default UserFormOne
