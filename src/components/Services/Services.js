import React from 'react';
import AllServices from '../AllServices/AllServices'
import TopServices from '../TopServices/TopServices'

const Services = () => {
    return (
        <div>
            <h3 className='pt-5'>Top Courses</h3> <hr className='w-25 mx-auto'/>
            <TopServices></TopServices>

            <h3 className='pt-5'>All Courses</h3> <hr className='w-25 mx-auto'/>
            <AllServices></AllServices>
        </div>
    );
};

export default Services;