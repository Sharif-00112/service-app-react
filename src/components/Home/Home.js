import React from 'react';
import About from '../About/About';
import Contact from '../Contact/Contact';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <h2>This is Home Page</h2>

            <div className="services">
                <Services></Services>
            </div>

            <div className="about">
                <About></About>
            </div>
            
            <div className="contact">
                <Contact></Contact>
            </div>
        </div>
    );
};

export default Home;