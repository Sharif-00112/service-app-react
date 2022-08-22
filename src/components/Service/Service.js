import React  from 'react';
import './Service.css'
import img from '../../images/services/service-1.jpg'

const Service = (props) => {
    const {serviceKey, serviceCost, serviceDetails, serviceDuration, serviceImg, serviceTaken, serviceTitle, topService} = props.service;
    return (
        <div className='container'>
            <div className="image">
                <img src={img} alt="" />
            </div>
            <div className="details">
                <h3>Course Title: {serviceTitle}</h3>
            </div>
        </div>
    );
};

export default Service;