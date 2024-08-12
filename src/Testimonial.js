import React from 'react';
import './Testimonial.css';
import image1 from './Photos/Person.jpg';
const Testimonial = ({ text, author, location, image }) => {
    return (
        <div className="testimonial-card">
            <div className="testimonial-content">
                <blockquote className="testimonial-text">
                    “{text}”
                </blockquote>
                <div className="testimonial-author-info">
                    {image && <img src={image1} alt={author} className="author-image" />}
                    <div>
                        <p className="author-name">{author}</p>
                        <p className="author-location">{location}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

const TestimonialPage = () => {
    return (
        <div style={{backgroundColor:'#f0f2f5'}}>
            <h1>What Our Students Say</h1>
            <Testimonial 
                text="The resources and guidance provided here have been invaluable in helping me prepare for my degree program."
                author="Arul Daniel"
                location="Banglore, India"
                image="path/to/image.jpg" // Optional image
            />
        </div>
    );
};

export default TestimonialPage;
