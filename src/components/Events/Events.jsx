import React from 'react';
import './Events.css';

const Events = () => {
    const upcomingEvents = [
        {
            id: 1,
            title: '15th Annual Cultural Heritage Conference',
            date: '30',
            month: 'AUGUST',
            fullDate: '30-08-2025',
            description: 'Exploring the rich cultural traditions and contemporary relevance of Indic heritage.',
            location: 'India Habitat Centre, New Delhi',
            type: 'Conference'
        },
        {
            id: 2,
            title: '10th International Dharma-Dhamma Symposium',
            date: '18',
            month: 'SEPTEMBER',
            fullDate: '18-09-2025',
            description: 'Interfaith dialogue on philosophical traditions across the Indic Belt region.',
            location: 'Virtual & Physical',
            type: 'Symposium'
        },
        {
            id: 3,
            title: 'Young Scholars Research Meet 2025',
            date: '5',
            month: 'OCTOBER',
            fullDate: '05-10-2025',
            description: 'Showcasing emerging research in South Asian studies and cultural preservation.',
            location: 'University Campus, Mumbai',
            type: 'Research Meet'
        },
    ];

    return (
        <section className="events-section">
            <div className="container">
                <div className="section-header">
                    <h2>Upcoming Events</h2>
                    <p>Stay updated on our foundation's informative events, discussions, and seminars covering various critical cultural and academic topics.</p>
                </div>
                
                <div className="events-grid">
                    {upcomingEvents.map(event => (
                        <div key={event.id} className="event-card">
                            <div className="event-date">
                                <span className="event-day">{event.date}</span>
                                <span className="event-month">{event.month}</span>
                            </div>
                            <div className="event-content">
                                <div className="event-type">{event.type}</div>
                                <h3 className="event-title">{event.title}</h3>
                                <p className="event-description">{event.description}</p>
                                <div className="event-meta">
                                    <span className="event-location">📍 {event.location}</span>
                                    <span className="event-full-date">📅 {event.fullDate}</span>
                                </div>
                                <a href={`#event-${event.id}`} className="event-cta">
                                    VIEW EVENT
                                </a>
                            </div>
                        </div>
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