import React, { useState } from 'react';
import './Events.css';

const Events = () => {
    const [activeCategory, setActiveCategory] = useState('All');

    const upcomingEvents = [
        {
            id: 1,
            title: '15th Annual Cultural Heritage Conference',
            date: '30',
            month: 'AUGUST',
            fullDate: 'August 30, 2025',
            category: 'Conference',
            description: 'Join us for an immersive exploration of rich cultural traditions and contemporary relevance of Indic heritage. Leading scholars and cultural experts will present their latest research.',
            location: 'India Habitat Centre, New Delhi',
            type: 'Conference',
            image: '/p1.jpg',
            time: '9:00 AM - 5:00 PM'
        },
        {
            id: 2,
            title: '10th International Dharma-Dhamma Symposium',
            date: '18',
            month: 'SEPTEMBER',
            fullDate: 'September 18, 2025',
            category: 'Symposium',
            description: 'An interfaith dialogue platform focusing on philosophical traditions across the Indic Belt region. Bringing together spiritual leaders and academic scholars.',
            location: 'Virtual & Physical Hybrid Event',
            type: 'Symposium',
            image: '/p2.jpg',
            time: '10:00 AM - 6:00 PM'
        },
        {
            id: 3,
            title: 'Young Scholars Research Meet 2025',
            date: '5',
            month: 'OCTOBER',
            fullDate: 'October 5, 2025',
            category: 'Research',
            description: 'Showcasing emerging research in South Asian studies and cultural preservation. A platform for young researchers to present their innovative work.',
            location: 'University Campus, Mumbai',
            type: 'Research Meet',
            image: '/p3.jpg',
            time: '11:00 AM - 4:00 PM'
        },
        {
            id: 4,
            title: 'Digital Humanities Workshop Series',
            date: '20',
            month: 'OCTOBER',
            fullDate: 'October 20, 2025',
            category: 'Workshop',
            description: 'Learn cutting-edge digital tools and techniques for humanities research. Hands-on sessions covering digitization, analysis, and presentation methods.',
            location: 'IIT Delhi Campus',
            type: 'Workshop',
            image: '/p4.jpg',
            time: '9:30 AM - 3:30 PM'
        },
        {
            id: 5,
            title: 'Ancient Manuscripts Exhibition & Seminar',
            date: '15',
            month: 'NOVEMBER',
            fullDate: 'November 15, 2025',
            category: 'Exhibition',
            description: 'Rare manuscripts display coupled with scholarly presentations on preservation techniques and historical significance of ancient texts.',
            location: 'National Museum, New Delhi',
            type: 'Exhibition',
            image: '/p5.jpg',
            time: '10:00 AM - 7:00 PM'
        },
        {
            id: 6,
            title: 'Language Preservation Summit',
            date: '2',
            month: 'DECEMBER',
            fullDate: 'December 2, 2025',
            category: 'Summit',
            description: 'Addressing challenges in preserving endangered languages of the Indic region. Featuring linguists, community leaders, and technology experts.',
            location: 'Bangalore International Centre',
            type: 'Summit',
            image: '/p1.jpg',
            time: '9:00 AM - 6:00 PM'
        }
    ];

    const categories = ["All", "Conference", "Symposium", "Research", "Workshop", "Exhibition", "Summit"];

    const filteredEvents = activeCategory === 'All' 
        ? upcomingEvents 
        : upcomingEvents.filter(event => event.category === activeCategory);

    const handleCategoryFilter = (category) => {
        setActiveCategory(category);
    };

    return (
        <section className="events-section">
            <div className="container">
                <div className="section-header">
                    <h2>Upcoming Events</h2>
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
                
                <div className="events-grid">
                    {filteredEvents.map((event) => (
                        <article key={event.id} className="event-card">
                            <div className="event-image">
                                <img src={event.image} alt={event.title} />
                                <div className="event-type">{event.type}</div>
                                <div className="event-date-overlay">
                                    <span className="event-day">{event.date}</span>
                                    <span className="event-month">{event.month}</span>
                                </div>
                            </div>
                            <div className="event-content">
                                <div className="event-meta">
                                    <span className="event-category">{event.category}</span>
                                    <span className="event-time">{event.time}</span>
                                </div>
                                <h3 className="event-title">{event.title}</h3>
                                <p className="event-location">📍 {event.location}</p>
                                <p className="event-description">{event.description}</p>
                                <div className="event-footer">
                                    <span className="event-full-date">📅 {event.fullDate}</span>
                                    <a href={`#event-${event.id}`} className="event-link">
                                        Register Now →
                                    </a>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
                
                <div className="events-footer">
                    <a href="#all-events" className="cta-button">View All Events</a>
                </div>
            </div>
        </section>
    );
};

export default Events;