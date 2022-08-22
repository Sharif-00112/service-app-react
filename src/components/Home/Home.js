import React from 'react';
import About from '../About/About';
import Contact from '../Contact/Contact';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <h2 className='pt-5 pb-5'>--Explore the trendy and exciting courses with <span style={{color: 'tomato', fontSize: '35px'}}>LearnEasy</span>--</h2>

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