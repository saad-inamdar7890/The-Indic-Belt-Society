import React from 'react';
import './PhotoSlider.css';

const PhotoSlider = () => {
    const photos = [
        { id: 1, src: 'path/to/photo1.jpg', alt: 'Description of photo 1' },
        { id: 2, src: 'path/to/photo2.jpg', alt: 'Description of photo 2' },
        { id: 3, src: 'path/to/photo3.jpg', alt: 'Description of photo 3' },
        // Add more photos as needed
    ];

    return (
        <div className="photo-slider">
            {photos.map(photo => (
                <div key={photo.id} className="slide">
                    <img src={photo.src} alt={photo.alt} />
                </div>
            ))}
        </div>
    );
};

export default PhotoSlider;