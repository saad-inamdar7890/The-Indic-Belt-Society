import React from 'react';
import './WhatWeDo.css';

const WhatWeDo = () => {
    const focusAreas = [
        {
            id: '01',
            title: 'Cultural Heritage Studies',
            description: 'Preserving and promoting the rich cultural traditions of the Indic Belt through research and documentation.',
            icon: '🏛️'
        },
        {
            id: '02',
            title: 'Academic Research',
            description: 'Supporting scholarly research in history, philosophy, literature, and social sciences across South Asia.',
            icon: '📚'
        },
        {
            id: '03',
            title: 'Interfaith Dialogue',
            description: 'Fostering understanding and dialogue between different religious and philosophical traditions.',
            icon: '🕊️'
        },
        {
            id: '04',
            title: 'Language Preservation',
            description: 'Documenting and revitalizing endangered languages and scripts of the Indic region.',
            icon: '📜'
        },
        {
            id: '05',
            title: 'Educational Outreach',
            description: 'Developing educational programs and resources for schools and universities.',
            icon: '🎓'
        },
        {
            id: '06',
            title: 'Digital Archive',
            description: 'Creating comprehensive digital repositories of cultural artifacts and scholarly works.',
            icon: '💻'
        }
    ];

    return (
        <section className="what-we-do-section">
            <div className="container">
                <div className="section-header">
                    <h2>What We Do</h2>
                    <p>
                        Dive into our comprehensive research and cultural preservation initiatives, 
                        exploring heritage studies, academic research, interfaith dialogue, 
                        language preservation, educational outreach, and digital archiving.
                    </p>
                </div>
                
                <div className="focus-areas-grid">
                    {focusAreas.map((area, index) => (
                        <div key={area.id} className="focus-area-card">
                            <div className="area-number">
                                {area.id}
                            </div>
                            <div className="area-icon">
                                {area.icon}
                            </div>
                            <h3 className="area-title">{area.title}</h3>
                            <p className="area-description">{area.description}</p>
                            <a href={`#${area.title.toLowerCase().replace(/\s+/g, '-')}`} className="area-link">
                                Learn More →
                            </a>
                        </div>
                    ))}
                </div>
                
                <div className="what-we-do-features">
                    <div className="feature-item">
                        <div className="feature-number">01</div>
                        <div className="feature-content">
                            <h3>Research & Publications</h3>
                            <p>Explore our insightful publications, featuring in-depth analysis and research on diverse cultural, historical, and philosophical issues.</p>
                        </div>
                    </div>
                    
                    <div className="feature-item">
                        <div className="feature-number">02</div>
                        <div className="feature-content">
                            <h3>Events & Conferences</h3>
                            <p>Stay updated on our foundation's informative events, discussions, and seminars covering various critical cultural topics.</p>
                        </div>
                    </div>
                    
                    <div className="feature-item">
                        <div className="feature-number">03</div>
                        <div className="feature-content">
                            <h3>Digital Resources</h3>
                            <p>Access our comprehensive digital library featuring manuscripts, recordings, and educational materials.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhatWeDo;
