import React from 'react';
import './Hero.css';

const Hero = () => {
    return (
        <section className="hero">
            <div className="hero-overlay"></div>
            <div className="hero-content">
                <div className="hero-text">
                    <h1 className="hero-title">The Indic Belt Society</h1>
                    <h2 className="hero-subtitle">Promoting Cultural Heritage & Academic Excellence</h2>
                    <p className="hero-description">
                        Dedicated to fostering research, dialogue, and cultural preservation across the Indic Belt region. 
                        Join us in our mission to bridge traditional wisdom with contemporary scholarship.
                    </p>
                    <div className="hero-buttons">
                        <a href="#about" className="cta-button primary">Learn About Us</a>
                        <a href="#membership" className="cta-button secondary">Become a Member</a>
                    </div>
                </div>
            </div>
            
            {/* Key Statistics */}
            {/* <div className="hero-stats">
                <div className="stat-item">
                    <span className="key-stat">500+</span>
                    <span className="stat-label">Research Papers</span>
                </div>
                <div className="stat-item">
                    <span className="key-stat">25+</span>
                    <span className="stat-label">Countries Reached</span>
                </div>
                <div className="stat-item">
                    <span className="key-stat">15</span>
                    <span className="stat-label">Years of Impact</span>
                </div>
                <div className="stat-item">
                    <span className="key-stat">1000+</span>
                    <span className="stat-label">Community Members</span>
                </div>
            </div> */}
        </section>
    );
};

export default Hero;
