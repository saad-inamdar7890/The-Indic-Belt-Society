import React, { useState, useEffect } from 'react';
import './PhotoSlider.css';

const PhotoSlider = () => {
    const photos = [
        { 
            id: 1, 
            src: 'p1.jpg', 
            alt: 'Cultural Heritage Event',
            caption: 'Annual Cultural Heritage Conference 2024',
            location: 'New Delhi'
        },
        { 
            id: 2, 
            src: 'p2.jpg', 
            alt: 'Academic Research Symposium',
            caption: 'International Research Symposium',
            location: 'Mumbai'
        },
        { 
            id: 3, 
            src: 'p3.jpg', 
            alt: 'Community Outreach Program',
            caption: 'Community Engagement Program',
            location: 'Bangalore'
        },
        { 
            id: 4, 
            src: 'p4.jpg', 
            alt: 'Educational Workshop',
            caption: 'Educational Workshop Series',
            location: 'Chennai'
        },        
        { 
            id: 5, 
            src: 'p5.jpg', 
            alt: 'Cultural Festival',
            caption: 'Annual Cultural Festival',
            location: 'Kolkata'
        },
        { 
            id: 6, 
            src: 'p1.jpg', 
            alt: 'Research Conference',
            caption: 'Research Conference 2024',
            location: 'Pune'
        },
        { 
            id: 7, 
            src: 'p2.jpg', 
            alt: 'Heritage Seminar',
            caption: 'Heritage Preservation Seminar',
            location: 'Hyderabad'
        },
        { 
            id: 8, 
            src: 'p3.jpg', 
            alt: 'Academic Summit',
            caption: 'Academic Excellence Summit',
            location: 'Ahmedabad'
        },
    ];

    const [currentSlide, setCurrentSlide] = useState(0);
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
            }, 4000);
            return () => clearInterval(interval);
        }
    }, [isPaused]);

    const handleMouseEnter = () => setIsPaused(true);
    const handleMouseLeave = () => setIsPaused(false);

    return (
        <section className="photo-slider-section">
            <div className="container-wrapper">
                <div className="section-header">
                    <div className="text-f-14-w">
                        <div className="divider"></div>
                        <div className="text-f-14">explore our journey</div>
                        <div className="divider left-margin"></div>
                    </div>
                    <h1 className="heading">Gallery</h1>
                </div>
                
                <div className="slider">
                    <div 
                        className="swiper first-swiper"
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                    >
                        <div className="swiper-wrapper first-swiper-wrapper">
                            {photos.map((photo, index) => {
                                const isActive = index === currentSlide;
                                const distance = Math.abs(index - currentSlide);
                                const scale = isActive ? 1 : 0.8; // Active slide full size, others 80%
                                const opacity = distance > 3 ? 0 : (isActive ? 1 : 0.75);
                                const translateX = (index - currentSlide) * 280; // Reduced spacing for better scaling effect
                                
                                return (
                                <div 
                                    key={photo.id} 
                                    className={`swiper-slide ${isActive ? 'swiper-slide-active' : ''}`}
                                    style={{ 
                                        transform: `translateX(${translateX}px) scale(${scale})`,
                                        opacity: opacity,
                                        zIndex: isActive ? 3 : (distance > 2 ? 1 : 2),
                                        filter: isActive ? 'grayscale(0%) brightness(1)' : 'grayscale(60%) brightness(0.8)'
                                    }}
                                >
                                    <div className="slide">
                                        <div className="slide-content">
                                            <div className="location">
                                                <div className="text-f-13 all-caps light-grey-font">{photo.location}</div>
                                            </div>
                                            <h2 className="heading-2">{photo.caption}</h2>
                                            <div className="slide-divider"></div>
                                        </div>
                                        <div className="slide-img-overlay"></div>
                                        <img src={photo.src} alt={photo.alt} className="slide-img" />
                                    </div>
                                </div>
                                );
                            })}
                        </div>

                        {/* Carousel Arrows Container */}
                        <div className="carousel-arrows">
                            <div className="carousel-arrow-w arrow-previous">
                                <div className="carousel-arrow" onClick={prevSlide}>
                                    <div className="carousel-arrow-icon">‹</div>
                                    <div className="carousel-arrow-oval"></div>
                                </div>
                            </div>
                            <div className="carousel-arrow-w arrow-next">
                                <div className="carousel-arrow arrow-next" onClick={nextSlide}>
                                    <div className="carousel-arrow-icon">›</div>
                                    <div className="carousel-arrow-oval next-arrow"></div>
                                </div>
                            </div>
                        </div>

                        {/* Hidden Default Navigation (as per Swiper structure) */}
                        <div className="swiper-button-prev" style={{ display: 'none' }}></div>
                        <div className="swiper-button-next" style={{ display: 'none' }}></div>

                        {/* Swiper Pagination */}
                        <div className="swiper-pagination">
                            {photos.map((_, index) => (
                                <div
                                    key={index}
                                    className={`swiper-pagination-bullet ${index === currentSlide ? 'swiper-pagination-bullet-active' : ''}`}
                                    onClick={() => goToSlide(index)}
                                />
                            ))}
                        </div>

                        {/* Swiper Notification for Accessibility */}
                        <span className="swiper-notification" aria-live="assertive" aria-atomic="true"></span>

                        {/* Play/Pause indicator */}
                        {/* <div className="play-pause-indicator">
                            {isPaused ? '▶️' : '⏸️'}
                        </div> */}
                    </div>
                    
                    {/* Background gradient similar to the original */}
                    
                </div>
            </div>
        </section>
    );
};

export default PhotoSlider;