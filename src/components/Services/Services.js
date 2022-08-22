import React from 'react';
import AllServices from '../AllServices/AllServices'
import TopServices from '../TopServices/TopServices'

const Services = () => {
    return (
        <div>
            <h3>Top Services</h3>
            <TopServices></TopServices>

            <h3>All Services</h3>
            <AllServices></AllServices>
        </div>
    );
};

export default Services;