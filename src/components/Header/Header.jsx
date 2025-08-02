import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <header className="header">
            <div className="header-container">
                <div className="header-logo-section">
                    <img src="/logo_b.png" alt="The Indic Belt Society Logo" className="header-logo" />
                </div>
                
                <nav className="header-nav">
                    <ul className="nav-list">
                        <li className="nav-item"><a href="#home">Home</a></li>
                        <li className="nav-item"><a href="#about">About Us</a></li>
                        
                        {/* Publications Dropdown */}
                        <li className="nav-item dropdown">
                            <a href="#publications" className="dropbtn">
                                Publications <span className="dropdown-arrow">▼</span>
                            </a>
                            <div className="dropdown-content">
                                <a href="#articles">Articles</a>
                                <a href="#books">Books</a>
                                <a href="#seminar-reports">Seminar Reports</a>
                            </div>
                        </li>
                        
                        {/* Events Dropdown */}
                        <li className="nav-item dropdown">
                            <a href="#events" className="dropbtn">
                                Events <span className="dropdown-arrow">▼</span>
                            </a>
                            <div className="dropdown-content">
                                <a href="#upcoming-events">Upcoming Events</a>
                                <a href="#event-reports">Event Reports</a>
                            </div>
                        </li>
                        
                        <li className="nav-item"><a href="#gallery">Gallery</a></li>
                        <li className="nav-item"><a href="#contact">Contact</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;