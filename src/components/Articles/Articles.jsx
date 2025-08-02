import React from 'react';
import './Articles.css';

const Articles = () => {
    const publications = [
        {
            id: 1,
            title: "The Indic Belt's Cultural Continuity: A Study of Traditional Knowledge Systems",
            author: "Dr. Priya Sharma",
            date: "August 1, 2025",
            category: "Cultural Studies",
            summary: "An in-depth analysis of how traditional knowledge systems have evolved and persisted across the Indic Belt region, examining their contemporary relevance.",
            image: "/article1.jpg",
            type: "Research Article"
        },
        {
            id: 2,
            title: "Digital Preservation of Ancient Manuscripts: Challenges and Opportunities",
            author: "Prof. Rajesh Kumar",
            date: "July 30, 2025",
            category: "Digital Heritage",
            summary: "Exploring innovative approaches to digitizing and preserving ancient manuscripts while making them accessible to researchers worldwide.",
            image: "/article2.jpg",
            type: "Research Paper"
        },
        {
            id: 3,
            title: "Language Revival in the Digital Age: Case Studies from South Asia",
            author: "Dr. Meera Patel",
            date: "July 25, 2025",
            category: "Linguistics",
            summary: "Examining successful language revival initiatives and the role of digital technology in preserving endangered languages.",
            image: "/article3.jpg",
            type: "Journal Article"
        },
        {
            id: 4,
            title: "Interfaith Dialogue in Contemporary India: Building Bridges Across Communities",
            author: "Prof. Arjun Singh",
            date: "July 20, 2025",
            category: "Religious Studies",
            summary: "A comprehensive study of interfaith initiatives and their impact on community relations in modern India.",
            image: "/article4.jpg",
            type: "Research Article"
        },
        {
            id: 5,
            title: "Educational Philosophy in Ancient Indian Traditions",
            author: "Dr. Kavita Joshi",
            date: "July 15, 2025",
            category: "Education",
            summary: "Exploring ancient Indian educational philosophies and their potential applications in contemporary educational systems.",
            image: "/article5.jpg",
            type: "Scholarly Article"
        },
        {
            id: 6,
            title: "Art and Architecture of the Indic Belt: A Comparative Analysis",
            author: "Dr. Suresh Chandra",
            date: "July 10, 2025",
            category: "Art History",
            summary: "Analyzing architectural styles and artistic traditions across different regions of the Indic Belt.",
            image: "/article6.jpg",
            type: "Research Paper"
        }
    ];

    const categories = ["All", "Cultural Studies", "Digital Heritage", "Linguistics", "Religious Studies", "Education", "Art History"];

    return (
        <section className="publications-section">
            <div className="container">
                <div className="section-header">
                    <h2>Publications</h2>
                    <div className="category-filters">
                        {categories.map(category => (
                            <button key={category} className="filter-btn active">
                                {category}
                            </button>
                        ))}
                    </div>
                </div>
                
                <div className="publications-grid">
                    {publications.map((publication) => (
                        <article key={publication.id} className="publication-card">
                            <div className="publication-image">
                                <img src={publication.image} alt={publication.title} />
                                <div className="publication-type">{publication.type}</div>
                            </div>
                            <div className="publication-content">
                                <div className="publication-meta">
                                    <span className="publication-category">{publication.category}</span>
                                    <span className="publication-date">{publication.date}</span>
                                </div>
                                <h3 className="publication-title">{publication.title}</h3>
                                <p className="publication-author">By {publication.author}</p>
                                <p className="publication-summary">{publication.summary}</p>
                                <a href={`#publication-${publication.id}`} className="read-more-link">
                                    Read More →
                                </a>
                            </div>
                        </article>
                    ))}
                </div>
                
                <div className="publications-footer">
                    <a href="#all-publications" className="cta-button">View All Publications</a>
                </div>
            </div>
        </section>
    );
};

export default Articles;