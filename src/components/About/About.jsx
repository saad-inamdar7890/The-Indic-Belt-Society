import React from 'react';
import './About.css';

const About = () => {
    return (
        <div className="about-section">
            <div className="container">
                <div className="about-header">
                    <h2>About The Indic Belt Society</h2>
                    <div className="header-divider"></div>
                </div>
                
                <div className="about-content">
                    <div className="intro-section">
                        <p className="lead-text">
                            We are a dynamic cultural organization dedicated to preserving, promoting, and celebrating the rich heritage of the Indic civilization. Our mission extends beyond traditional boundaries to create meaningful connections between ancient wisdom and contemporary progress.
                        </p>
                    </div>

                    <div className="story-grid">
                        <div className="story-card">
                            <div className="card-icon">🏛️</div>
                            <h3>Our Foundation</h3>
                            <p>
                                Established with the vision of bridging cultural gaps, we recognize that the Indic belt represents one of humanity's most diverse and intellectually rich regions. From the philosophical traditions of ancient universities to the vibrant artistic expressions that continue to flourish today, our work encompasses the entire spectrum of cultural preservation.
                            </p>
                        </div>

                        <div className="story-card">
                            <div className="card-icon">🌟</div>
                            <h3>Our Mission</h3>
                            <p>
                                Through innovative research methodologies and community engagement programs, we strive to make ancient knowledge accessible to modern audiences. Our interdisciplinary approach combines traditional scholarship with cutting-edge digital technologies, ensuring that cultural treasures are not only preserved but actively shared with future generations.
                            </p>
                        </div>

                        <div className="story-card">
                            <div className="card-icon">🤝</div>
                            <h3>Our Community</h3>
                            <p>
                                Our diverse team includes historians, anthropologists, digital archivists, community organizers, and passionate volunteers who believe in the transformative power of cultural understanding. We work collaboratively with local communities, academic institutions, and international partners to create lasting impact.
                            </p>
                        </div>

                        {/* <div className="story-card">
                            <div className="card-icon">🚀</div>
                            <h3>Looking Forward</h3>
                            <p>
                                As we navigate the complexities of globalization, we remain committed to fostering dialogue between tradition and innovation. Our upcoming initiatives include digital heritage mapping, youth engagement programs, and collaborative research projects that will shape the future of cultural preservation in the digital age.
                            </p>
                        </div> */}
                    </div>

                    <div className="values-section">
                        <h3>Our Core Values</h3>
                        <div className="values-grid">
                            <div className="value-item">
                                <span className="value-icon">📚</span>
                                <h4>Knowledge Preservation</h4>
                                <p>Safeguarding cultural wisdom for future generations through innovative documentation and archival practices.</p>
                            </div>
                            <div className="value-item">
                                <span className="value-icon">🌍</span>
                                <h4>Global Connectivity</h4>
                                <p>Building bridges between diverse communities while respecting local traditions and unique cultural identities.</p>
                            </div>
                            <div className="value-item">
                                <span className="value-icon">💡</span>
                                <h4>Innovation</h4>
                                <p>Embracing modern technologies and methodologies to enhance traditional approaches to cultural preservation.</p>
                            </div>
                            <div className="value-item">
                                <span className="value-icon">🎯</span>
                                <h4>Impact</h4>
                                <p>Creating measurable positive change through evidence-based programs and community-centered initiatives.</p>
                            </div>
                        </div>
                    </div>

                    {/* <div className="call-to-action">
                        <p className="cta-text">
                            Join us in our journey to preserve, celebrate, and share the incredible heritage of the Indic belt. Together, we can ensure that these cultural treasures continue to inspire and educate people around the world for generations to come.
                        </p>
                        <div className="cta-buttons">
                            <a href="#contact" className="btn-primary">Get Involved</a>
                            <a href="#publications" className="btn-secondary">Learn More</a>
                        </div>
                    </div> */}
                </div>
            </div>
        </div>
    );
};

export default About;