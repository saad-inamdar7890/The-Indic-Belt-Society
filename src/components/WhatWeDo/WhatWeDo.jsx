import React, { useState } from 'react';
import './WhatWeDo.css';

const WhatWeDo = () => {
    const [activeCategory, setActiveCategory] = useState('All');

    const focusAreas = [
        {
            id: 1,
            title: 'Cultural Heritage Studies',
            description: 'Preserving and promoting the rich cultural traditions of the Indic Belt through research and documentation.',
            icon: '🏛️',
            category: 'Research',
            image: '/p1.jpg',
            type: 'Core Focus'
        },
        {
            id: 2,
            title: 'Academic Research',
            description: 'Supporting scholarly research in history, philosophy, literature, and social sciences across South Asia.',
            icon: '📚',
            category: 'Research',
            image: '/p2.jpg',
            type: 'Academic'
        },
        {
            id: 3,
            title: 'Interfaith Dialogue',
            description: 'Fostering understanding and dialogue between different religious and philosophical traditions.',
            icon: '🕊️',
            category: 'Community',
            image: '/p3.jpg',
            type: 'Outreach'
        },
        {
            id: 4,
            title: 'Language Preservation',
            description: 'Documenting and revitalizing endangered languages and scripts of the Indic region.',
            icon: '📜',
            category: 'Cultural',
            image: '/p4.jpg',
            type: 'Preservation'
        },
        {
            id: 5,
            title: 'Educational Outreach',
            description: 'Developing educational programs and resources for schools and universities.',
            icon: '🎓',
            category: 'Education',
            image: '/p5.jpg',
            type: 'Program'
        },
        {
            id: 6,
            title: 'Digital Archive',
            description: 'Creating comprehensive digital repositories of cultural artifacts and scholarly works.',
            icon: '💻',
            category: 'Technology',
            image: '/p1.jpg',
            type: 'Digital'
        }
    ];

    const categories = ["All", "Research", "Community", "Cultural", "Education", "Technology"];

    const filteredAreas = activeCategory === 'All' 
        ? focusAreas 
        : focusAreas.filter(area => area.category === activeCategory);

    const handleCategoryFilter = (category) => {
        setActiveCategory(category);
    };

    return (
        <section className="what-we-do-section">
            <div className="container">
                <div className="section-header">
                    <h2>What We Do</h2>
                    <div className="category-filters">
                        {categories.map(category => (
                            <button 
                                key={category} 
                                className={`filter-btn ${activeCategory === category ? 'active' : ''}`}
                                onClick={() => handleCategoryFilter(category)}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </div>
                
                <div className="focus-areas-grid">
                    {filteredAreas.map((area) => (
                        <article key={area.id} className="focus-area-card">
                            <div className="area-image">
                                <img src={area.image} alt={area.title} />
                                <div className="area-type">{area.type}</div>
                            </div>
                            <div className="area-content">
                                <div className="area-meta">
                                    <span className="area-category">{area.category}</span>
                                    <span className="area-number">{area.id.toString().padStart(2, '0')}</span>
                                </div>
                                <h3 className="area-title">{area.title}</h3>
                                <p className="area-description">{area.description}</p>
                                <a href={`#${area.title.toLowerCase().replace(/\s+/g, '-')}`} className="area-link">
                                    Learn More →
                                </a>
                            </div>
                        </article>
                    ))}
                </div>
                
                <div className="what-we-do-footer">
                    <a href="#all-initiatives" className="cta-button">View All Initiatives</a>
                </div>
            </div>
        </section>
    );
};

export default WhatWeDo;
