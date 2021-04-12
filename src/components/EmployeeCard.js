import React from 'react';

function EmployeeCard(props) {
    return (
        <tr>
            <th scope="row"><img style={{maxHeight: "60px"}}src={props.picture} alt={props.firstName} /></th>
            <th scope="row">{props.firstName}</th>
            <th scope="row">{props.lastName}</th>
            <th scope="row">{props.email}</th>
            <th scope="row">{props.phone}</th>
        </tr>
    )
}

export default EmployeeCard;