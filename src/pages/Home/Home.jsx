import React from 'react';
import Header from '../../components/Header/Header';
import Hero from '../../components/Hero/Hero';
import About from '../../components/About/About';
import WhatWeDo from '../../components/WhatWeDo/WhatWeDo';
import Articles from '../../components/Articles/Articles';
import Events from '../../components/Events/Events';
import PhotoSlider from '../../components/PhotoSlider/PhotoSlider';
import Footer from '../../components/Footer/Footer';
import './Home.css';

const Home = () => {
    return (
        <div className="home">
            <Header />
            <Hero />
             <About />
            <WhatWeDo />
            <Events />
            <Articles /> 
            <PhotoSlider />
            
            <Footer />
        </div>
    );
};

export default Home;