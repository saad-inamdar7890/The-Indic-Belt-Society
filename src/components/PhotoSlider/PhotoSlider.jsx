import React, { useState, useEffect, useRef } from 'react';
import './PhotoSlider.css';

const PhotoSlider = () => {
    const photos = [
        { 
            id: 1, 
            src: 'p1.jpg', 
            alt: 'Cultural Heritage Event',
            caption: 'Annual Cultural Heritage Conference 2024'
        },
        { 
            id: 2, 
            src: 'p2.jpg', 
            alt: 'Academic Research Symposium',
            caption: 'International Research Symposium on Indic Studies'
        },
        { 
            id: 3, 
            src: 'p3.jpg', 
            alt: 'Community Outreach Program',
            caption: 'Community Engagement and Educational Outreach'
        },
        { 
            id: 4, 
            src: 'p4.jpg', 
            alt: 'Community Outreach Program',
            caption: 'Community Engagement and Educational Outreach'
        },        { 
            id: 5, 
            src: 'p5.jpg', 
            alt: 'Community Outreach Program',
            caption: 'Community Engagement and Educational Outreach'
        },
    ];

    const [currentSlide, setCurrentSlide] = useState(0); // Start from 0
    const [isPaused, setIsPaused] = useState(false);

    const nextSlide = () => {
        setCurrentSlide(prev => (prev + 1) % photos.length);
    };

    const prevSlide = () => {
        setCurrentSlide(prev => (prev - 1 + photos.length) % photos.length);
    };

    const goToSlide = (index) => {
        setCurrentSlide(index);
    };

    // Auto-play functionality
    useEffect(() => {
        if (!isPaused) {
            const interval = setInterval(() => {
                nextSlide();
            }, 3000); // Change slide every 3 seconds
            return () => clearInterval(interval);
        }
    }, [isPaused]);

    const handleMouseEnter = () => setIsPaused(true);
    const handleMouseLeave = () => setIsPaused(false);

    // Get visible slides (3 at a time: previous, current, next)
    const getVisibleSlides = () => {
        const slides = [];
        for (let i = -1; i <= 1; i++) {
            const index = (currentSlide + i + photos.length) % photos.length;
            slides.push({
                ...photos[index],
                position: i, // -1 (left), 0 (center), 1 (right)
                originalIndex: index
            });
        }
        return slides;
    };

    return (
        <section className="photo-slider-section">
            <div className="container-wrapper">
                <div className="section-header">
                    <h2>Gallery</h2>
                    <p>Capturing moments from our events, conferences, and community initiatives</p>
                </div>
                
                <div 
                    className="photo-slider-container"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    <div className="slider">
                        {getVisibleSlides().map((slide) => {
                            const isCenter = slide.position === 0;
                            const isLeft = slide.position === -1;
                            const isRight = slide.position === 1;
                            
                            return (
                                <div 
                                    key={`${slide.id}-${slide.position}`} 
                                    className={`slide ${isCenter ? 'center' : ''} ${isLeft ? 'left' : ''} ${isRight ? 'right' : ''}`}
                                >
                                    <img src={slide.src} alt={slide.alt} />
                                    {isCenter && (
                                        <div className="slide-caption">
                                            {slide.caption}
                                        </div>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                    
                    {/* Navigation Arrows */}
                    <div className="navigation">
                        <button className="nav-btn prev" onClick={prevSlide} aria-label="Previous slide">
                            <span>‹</span>
                        </button>
                        <button className="nav-btn next" onClick={nextSlide} aria-label="Next slide">
                            <span>›</span>
                        </button>
                    </div>
                    
                    {/* Slide Indicators */}
                    <div className="slide-indicators">
                        {photos.map((_, index) => (
                            <button
                                key={index}
                                className={`indicator ${index === currentSlide ? 'active' : ''}`}
                                onClick={() => goToSlide(index)}
                                aria-label={`Go to slide ${index + 1}`}
                            />
                        ))}
                    </div>

                    {/* Play/Pause indicator */}
                    <div className="play-pause-indicator">
                        {isPaused ? '▶️' : '⏸️'}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PhotoSlider;