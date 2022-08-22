import React from 'react';
import AllServices from '../AllServices/AllServices';
import TopServices from '../TopServices/TopServices';

const Services = () => {
    return (
        <div>
            <h2>Services Page</h2>
            <TopServices></TopServices>
            <AllServices></AllServices>
        </div>
    );
};

export default Services;