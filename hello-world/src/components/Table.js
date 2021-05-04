import React from 'react';

import Column from './Column';

function Table() {
    return (
        <div>
            <table border="2px">
                <tbody>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                    </tr>
                    <tr>
                        <Column />
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Table
