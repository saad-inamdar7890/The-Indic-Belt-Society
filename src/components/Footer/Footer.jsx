import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-top">
                    <div className="footer-section footer-logo-section">
                        <img src="/logo_b.png" alt="The Indic Belt Society Logo" className="footer-logo" />
                        <h3>The Indic Belt Society</h3>
                        <p>Promoting cultural heritage and academic excellence across the Indic Belt region.</p>
                    </div>
                    
                    <div className="footer-section">
                        <h4>Quick Links</h4>
                        <ul className="footer-links">
                            <li><a href="#home">Home</a></li>
                            <li><a href="#about">About Us</a></li>
                            <li><a href="#publications">Publications</a></li>
                            <li><a href="#events">Events</a></li>
                            <li><a href="#journals">Journals</a></li>
                        </ul>
                    </div>
                    
                    <div className="footer-section">
                        <h4>Publications</h4>
                        <ul className="footer-links">
                            <li><a href="#articles">Articles</a></li>
                            <li><a href="#books">Books</a></li>
                            <li><a href="#seminar-reports">Seminar Reports</a></li>
                            <li><a href="#research-papers">Research Papers</a></li>
                        </ul>
                    </div>
                    
                    <div className="footer-section">
                        <h4>Get Involved</h4>
                        <ul className="footer-links">
                            <li><a href="#membership" className="cta-link">Become a Member</a></li>
                            <li><a href="#donate" className="cta-link">Donate Now</a></li>
                            <li><a href="#volunteer">Volunteer</a></li>
                            <li><a href="#newsletter">Newsletter</a></li>
                        </ul>
                    </div>
                    
                    <div className="footer-section">
                        <h4>Contact Info</h4>
                        <div className="contact-info">
                            <p><i className="icon">📧</i> info@theindicbeltsociety.org</p>
                            <p><i className="icon">📞</i> +91 XXX XXX XXXX</p>
                            <p><i className="icon">📍</i> Address Line 1<br />City, State - Pincode</p>
                        </div>
                        <div className="social-links">
                            <a href="#facebook" aria-label="Facebook">📘</a>
                            <a href="#twitter" aria-label="Twitter">🐦</a>
                            <a href="#linkedin" aria-label="LinkedIn">💼</a>
                            <a href="#youtube" aria-label="YouTube">📺</a>
                        </div>
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