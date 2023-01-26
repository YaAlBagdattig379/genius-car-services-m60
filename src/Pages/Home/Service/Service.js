import React from 'react';
import './Service.css';

const Service = ({service}) => {
    const {name,price,description,img} = service;
    return (
        <div>
            <img src={img} alt="" />
            <h3>{name}</h3>
        </div>
    );
};

export default Service;