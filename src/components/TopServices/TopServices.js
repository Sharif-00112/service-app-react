import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';

const TopServices = (props) => {
    const [services, setServices] = useState([]);

    useEffect(()=>{
        fetch('./services.JSON')
        .then(res => res.json())
        .then(data => setServices(data))
    },[])

    const topServs = services.filter(service => service.topService === true);
    console.log(topServs);

    return (
        <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4 m-3">
            {
                topServs.map(service => <Service key={service.serviceKey} service={service}></Service>)
            }
        </div>
    );
};

export default TopServices;