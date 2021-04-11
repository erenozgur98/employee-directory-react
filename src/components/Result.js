import React from 'react';

function Result(props) {
    return (
        <table className="table">
            {props.result.map(result => (
                <table>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Age</th>
                    </tr>
                </table>
            ))}
        </table>
    )
}

export default Result;