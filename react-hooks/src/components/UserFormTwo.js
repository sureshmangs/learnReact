import React from 'react'
import useInput from './hooks/useInput';

function UserFormTwo() {
    const [firstName, bindFirstName, resetFirstName] = useInput('');
    const [lastName, bindLastName, resetLastName] = useInput('');

    const submitHandler = (e) => {
        e.preventDefault();
        alert(`Hello ${firstName} ${lastName}`);
        resetFirstName();
        resetLastName();
    }

    return (
        <div>
            <form onSubmit={submitHandler}>
                <div>
                    <label>First name: </label>
                    <input typt="text" {...bindFirstName} />
                </div>
                <div>
                    <label>Last name: </label>
                    <input typt="text" {...bindLastName} />
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default UserFormTwo
