import React from 'react';
import './About.css'; 
import videoSrc from './backgroundVideoAbout.mp4'; 
import Header from './Header';
import Footer from './Footer';
import quote from './Quote.webp'

const About = () => {
    return (
        <div>
            <Header />
            <div className="about-section">
                <video className="background-video" autoPlay loop muted>
                    <source src={videoSrc} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <div className="about-content">
                    <h2>Our Vision</h2>
                    <h1>We envision a world where anyone, anywhere has the power to transform their lives through learning.</h1>
                    <a href="/community" className="about-button">Hear from our community</a>
                </div>
            </div>
            
            <div className="about-details">
                <h2>Our Vision</h2>
                <p>At CourseCraft, we envision a world where anyone, anywhere can transform their lives through learning. Our mission is to bridge the gap between traditional education and skill-based training, empowering individuals to achieve their goals.</p>

                <h2>Our Mission</h2>
                <p>We believe learning is the foundation of human progress, with the power to transform our world in many ways. CourseCraft partners with leading educational institutions and industry experts to offer accessible, high-quality courses across various fields.</p>

                <h2>Why Choose CourseCraft?</h2>
                <ul>
                    <li><strong>Comprehensive Courses:</strong> Explore a wide range of courses in Arts, Engineering, Agriculture, and more, designed for practical application in the workplace.</li>
                    <li><strong>Expert Instructors:</strong> Gain insights from experienced instructors who combine theoretical knowledge with hands-on practice.</li>
                    <li><strong>Flexible Learning:</strong> Learn at your own pace with our online courses, designed for convenience and flexibility.</li>
                    <li><strong>Certification:</strong> Earn certificates upon course completion to validate your skills and enhance your professional profile.</li>
                </ul>

                <h2>Our Commitment</h2>
                <p>CourseCraft is dedicated to providing an inclusive learning environment. Whether you're looking to upskill, reskill, or explore new fields, we're here to support your learning journey.</p>

                <p>Join us in this journey of lifelong learning and personal growth. Transform your future with CourseCraft today.</p>
            </div>
            <div className="about-quote">
                <h2>We believe</h2>
                <p>
                    Learning is the source of human progress.<br />
                    It has the power to transform our world<br />
                    from illness to health,<br />
                    from poverty to prosperity,<br />
                    from conflict to peace.<br /><br />
                    It has the power to transform our lives<br />
                    for ourselves,<br />
                    for our families,<br />
                    for our communities.<br /><br />
                    No matter who we are or where we are,<br />
                    learning empowers us to change and grow<br />
                    and redefine what’s possible.<br />
                    That’s why access to the best learning is a right, not a privilege.<br /><br />
                    And that’s why CourseCraft is here.<br />
                    We partner with the best institutions<br />
                    to bring the best learning<br />
                    to every corner of the world.<br /><br />
                    So that anyone, anywhere has the power to<br />
                    transform their lives through learning.
                </p>
            </div>
            <div className='about-photo'>
                <img src={quote} alt='Quote'/>
            </div>   
            <Footer/> 
        </div>
    );
}

export default About;
