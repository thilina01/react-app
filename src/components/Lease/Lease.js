import React from 'react';

import './Lease.css';

const lease = (props) => {

    return (
        <div className="Lease" onClick={props.clicked}>
            <p>ID: {props.id}</p>
            <p>Tenant: <strong>{props.tenant}</strong></p>
        </div>
    );
};

export default lease;