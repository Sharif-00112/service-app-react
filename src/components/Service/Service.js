import React  from 'react';
import './Service.css'

const Service = (props) => {
    const {serviceCost, serviceDetails, serviceDuration, serviceImg, serviceTaken, serviceTitle} = props.service;
    return (
        <div className="col ">
            <div className="card h-100">
                <img src={serviceImg} className="card-img-top p-3" alt="..."/>
                <div className="card-body">
                    <hr />
                    <h3 className="card-title">{serviceTitle}</h3>
                    <hr />
                    <p class="card-text">{serviceDetails}</p>
                </div>
                <div className="card-footer">
                    <h6 className=''>Course Fee ${serviceCost}</h6>
                    <p>Course Duration: {serviceDuration} months</p>
                    <small className="text-muted">Current Students: {serviceTaken}</small>
                </div>
            </div>
        </div>
    );
};

export default Service;