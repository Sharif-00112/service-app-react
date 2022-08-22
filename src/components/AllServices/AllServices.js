import React, { useState , useEffect} from 'react';
import Service from '../Service/Service'

const AllServices = () => {
    const [services, setServices] = useState([]);

    useEffect(()=>{
        fetch('./services.JSON')
        .then(res => res.json())
        .then(data => setServices(data))
    },[])

    // console.log(services);
    return (
        <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4 m-3">
            {
                services.map(service => <Service key={service.serviceKey} service={service}></Service>)
            }
        </div>
    );
};

export default AllServices;