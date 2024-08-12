import React from 'react';
import './Landing.css';
import Header from './Header';
import heroImage from './hero2.jpg';
import Footer from './Footer';
import InfoSection from './InfoSection';
import TestimonialPage from './Testimonial';
import { Link } from 'react-router-dom';

const Landing = () => {
    return (
        <div className='landing'>
            <Header />
            <div className='landing-page'>
                <div className='landing-content'>
                    <h1>For Every Student, Every Classroom</h1>
                    <p>At CourseCraft, we believe in providing accessible, world-class education for everyone. Whether you're looking to gain new skills or deepen your knowledge, our courses are designed to help you achieve your goals.</p>
                    <p className='mission'>Our mission is to make learning accessible, personalized, and engaging for all learners, everywhere.</p>
                    <div className='cta-buttons'>
                        <Link to='/signup' className='cta-button'>Get Started for Free</Link>
                        <Link to='/Profession' className='cta-button'>Browse Our Courses</Link>
                    </div>
                </div>
                <div className='landing-image'>
                    <img src={heroImage} alt='Learning at CourseCraft' />
                </div>
            </div>
            <TestimonialPage/>
            <InfoSection/>
            <Footer/>
        </div>
    );
}

export default Landing;
