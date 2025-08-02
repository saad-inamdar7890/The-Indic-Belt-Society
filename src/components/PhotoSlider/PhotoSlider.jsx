import React, { useState, useEffect, useRef } from 'react';
import './PhotoSlider.css';

const PhotoSlider = () => {
    const photos = [
        { 
            id: 1, 
            src: '/p1.jpg', 
            alt: 'Cultural Heritage Event',
            caption: 'Annual Cultural Heritage Conference 2024'
        },
        { 
            id: 2, 
            src: '/p2.jpg', 
            alt: 'Academic Research Symposium',
            caption: 'International Research Symposium on Indic Studies'
        },
        { 
            id: 3, 
            src: '/p3.jpg', 
            alt: 'Community Outreach Program',
            caption: 'Community Engagement and Educational Outreach'
        },
    ];

    const [currentSlide, setCurrentSlide] = useState(1); // Start from 1 (first real slide)
    const [isTransitioning, setIsTransitioning] = useState(false);
    const [isPaused, setIsPaused] = useState(false);
    const sliderRef = useRef(null);

    // Create infinite loop by duplicating first and last slides
    const infinitePhotos = [
        photos[photos.length - 1], // Last slide at the beginning
        ...photos,
        photos[0] // First slide at the end
    ];

    const nextSlide = () => {
        if (isTransitioning) return;
        setIsTransitioning(true);
        setCurrentSlide(prev => prev + 1);
    };

    const prevSlide = () => {
        if (isTransitioning) return;
        setIsTransitioning(true);
        setCurrentSlide(prev => prev - 1);
    };

    const goToSlide = (index) => {
        if (isTransitioning) return;
        setIsTransitioning(true);
        setCurrentSlide(index + 1); // +1 because of the duplicate slide at the beginning
    };

    // Handle infinite loop transitions
    useEffect(() => {
        if (isTransitioning) {
            const timer = setTimeout(() => {
                setIsTransitioning(false);
                
                // If we're at the duplicate last slide, jump to the real last slide
                if (currentSlide === 0) {
                    setCurrentSlide(photos.length);
                }
                // If we're at the duplicate first slide, jump to the real first slide
                else if (currentSlide === photos.length + 1) {
                    setCurrentSlide(1);
                }
            }, 600); // Match the CSS transition duration

            return () => clearTimeout(timer);
        }
    }, [currentSlide, isTransitioning, photos.length]);

    // Auto-play functionality
    useEffect(() => {
        if (!isPaused) {
            const interval = setInterval(() => {
                nextSlide();
            }, 3000); // Change slide every 3 seconds
            return () => clearInterval(interval);
        }
    }, [isPaused, isTransitioning]);

    const handleMouseEnter = () => setIsPaused(true);
    const handleMouseLeave = () => setIsPaused(false);

    // Get the real slide index for indicators
    const getRealSlideIndex = () => {
        if (currentSlide === 0) return photos.length - 1;
        if (currentSlide === photos.length + 1) return 0;
        return currentSlide - 1;
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
                    <div 
                        ref={sliderRef}
                        className="slider" 
                        style={{ 
                            transform: `translateX(-${currentSlide * 100}%)`,
                            transition: isTransitioning ? 'transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)' : 'none'
                        }}
                    >
                        {infinitePhotos.map((photo, index) => (
                            <div key={`${photo.id}-${index}`} className={`slide ${index === currentSlide ? 'active' : ''}`}>
                                <img src={photo.src} alt={photo.alt} />
                                <div className="slide-caption">
                                    {photo.caption}
                                </div>
                            </div>
                        ))}
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
                                className={`indicator ${index === getRealSlideIndex() ? 'active' : ''}`}
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