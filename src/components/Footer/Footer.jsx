import React, { useState } from 'react';
import './Footer.css';

const Footer = () => {
    const [activeSection, setActiveSection] = useState('All');

    const footerSections = [
        {
            id: 1,
            title: "Quick Links",
            category: "Navigation",
            links: [
                { name: "Home", href: "#home" },
                { name: "About Us", href: "#about" },
                { name: "What We Do", href: "#what-we-do" },
                { name: "Publications", href: "#publications" },
                { name: "Events", href: "#events" }
            ]
        },
        {
            id: 2,
            title: "Publications",
            category: "Resources",
            links: [
                { name: "Research Articles", href: "#articles" },
                { name: "Books & Manuscripts", href: "#books" },
                { name: "Conference Papers", href: "#papers" },
                { name: "Digital Archives", href: "#archives" }
            ]
        },
        {
            id: 3,
            title: "Get Involved",
            category: "Community",
            links: [
                { name: "Become a Member", href: "#membership", cta: true },
                { name: "Donate Now", href: "#donate", cta: true },
                { name: "Volunteer", href: "#volunteer" },
                { name: "Newsletter", href: "#newsletter" }
            ]
        }
    ];

    const categories = ["All", "Navigation", "Resources", "Community"];

    const filteredSections = activeSection === 'All' 
        ? footerSections 
        : footerSections.filter(section => section.category === activeSection);

    const handleCategoryFilter = (category) => {
        setActiveSection(category);
    };

    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-header">
                    <div className="footer-logo-section">
                        <img src="/logo_b.png" alt="The Indic Belt Society Logo" className="footer-logo" />
                        <h3>The Indic Belt Society</h3>
                        <p>Promoting cultural heritage and academic excellence across the Indic Belt region through research, education, and community engagement.</p>
                        
                        <div className="social-links">
                            <a href="#facebook" aria-label="Facebook">📘</a>
                            <a href="#twitter" aria-label="Twitter">🐦</a>
                            <a href="#linkedin" aria-label="LinkedIn">💼</a>
                            <a href="#youtube" aria-label="YouTube">📺</a>
                        </div>
                    </div>
                    
                    <div className="contact-section">
                        <h4>Contact Info</h4>
                        <div className="contact-info">
                            <p><i className="icon">📧</i> info@theindicbeltsociety.org</p>
                            <p><i className="icon">📞</i> +91 XXX XXX XXXX</p>
                            <p><i className="icon">📍</i> Address Line 1<br />City, State - Pincode</p>
                        </div>
                    </div>
                </div>

                <div className="footer-sections">
                    <div className="section-header">
                        <h4>Explore Our Resources</h4>
                        <div className="category-filters">
                            {categories.map(category => (
                                <button 
                                    key={category} 
                                    className={`filter-btn ${activeSection === category ? 'active' : ''}`}
                                    onClick={() => handleCategoryFilter(category)}
                                >
                                    {category}
                                </button>
                            ))}
                        </div>
                    </div>
                    
                    <div className="footer-sections-grid">
                        {filteredSections.map((section) => (
                            <div key={section.id} className="footer-section-card">
                                <div className="section-meta">
                                    <span className="section-category">{section.category}</span>
                                </div>
                                <h4 className="section-title">{section.title}</h4>
                                <ul className="footer-links">
                                    {section.links.map((link, index) => (
                                        <li key={index}>
                                            <a 
                                                href={link.href} 
                                                className={link.cta ? 'cta-link' : ''}
                                            >
                                                {link.name}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
                
                <div className="footer-bottom">
                    <div className="footer-bottom-content">
                        <p>&copy; {new Date().getFullYear()} The Indic Belt Society. All rights reserved.</p>
                        <div className="footer-legal-links">
                            <a href="#privacy">Privacy Policy</a>
                            <span className="separator">|</span>
                            <a href="#terms">Terms of Service</a>
                            <span className="separator">|</span>
                            <a href="#sitemap">Site Map</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;