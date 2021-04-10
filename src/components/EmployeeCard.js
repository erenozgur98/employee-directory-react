import React from 'react';

function Employeecard({ image, name, department, phone, email }) { 
    return (
        <div className="">
            <img 
                style={{ maxWidth: "60px" }}
                className=""
                src={image}
                alt="employee picture"
            
            />
            <p className="">{name}</p>
            <p>{department}</p>
            <p>{email}</p>
            <p>{phone}</p>
        </div>
    )
}

export default Employeecard;