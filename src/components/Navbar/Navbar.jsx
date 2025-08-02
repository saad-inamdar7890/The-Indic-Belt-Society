import React from 'react';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <ul className="navbar-list">
                <li className="navbar-item"><a href="#home">Home</a></li>
                <li className="navbar-item"><a href="#about">About Us</a></li>
                
                {/* Publications Dropdown */}
                <li className="navbar-item dropdown">
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
                <li className="navbar-item dropdown">
                    <a href="#events" className="dropbtn">
                        Events <span className="dropdown-arrow">▼</span>
                    </a>
                    <div className="dropdown-content">
                        <a href="#upcoming-events">Upcoming Events</a>
                        <a href="#event-reports">Event Reports</a>
                    </div>
                </li>
                
                <li className="navbar-item"><a href="#journals">Journals</a></li>
                <li className="navbar-item"><a href="#sea.theindicbeltsociety">Sea at a Glance</a></li>
                <li className="navbar-item"><a href="#contact">Contact Us</a></li>
            </ul>
        </nav>
    );
};

export default Navbar;