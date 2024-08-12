import React, { useState, useEffect } from 'react';
import '../CourseDetail.css'; 
import img from '../Photos/chemistryImage.jpg'; // Update with the correct path
import Header from '../Header';
import Footer from '../Footer';
import { useNavigate } from 'react-router-dom';

function ChemistryEssentials() {
  const [activeTab, setActiveTab] = useState('About');
  const [enrolled, setEnrolled] = useState(false);
  const navigate = useNavigate();
  
  // Unique key for the course
  const courseKey = 'chemistryEssentials'; // Unique identifier for this course

  // Function to scroll to a specific section
  const scrollToSection = (section) => {
    setActiveTab(section);
    document.getElementById(section).scrollIntoView({ behavior: 'smooth' });
  };
  
  // Check enrollment status when component mounts
  useEffect(() => {
    const enrollmentStatus = sessionStorage.getItem(courseKey);
    setEnrolled(enrollmentStatus === 'true');
  }, []);
  
  // Handle enrollment click
  const handleEnrollClick = () => {
    navigate('/Payment', { state: { from: '/ChemistryEssentials', courseKey } });
  };
  
  // Handle explore now click
  const handleExploreNowClick = () => {
    navigate('/ChemistryVideoPage'); // Replace with the appropriate path
  };

  return (
    <div className='CourseDetail'>
      <Header />
      <div className="course-detail-page">
        <div className="course-header">
          <div className="course-header-content">
            <h1>Chemistry Essentials</h1>
            <p className="course-description">
              Delve into the fundamentals of chemistry with this introductory course. Learn about chemical reactions, atomic structure, and the principles that govern the behavior of matter.
            </p>
            <p className="course-instructor">
              Instructor: <a href="#">Dr. Emily Johnson</a>, experienced chemist and educator.
            </p>
            {!enrolled ? (
              <button onClick={handleEnrollClick} className='EnrollButton'>Enroll</button>
            ) : (
              <button onClick={handleExploreNowClick} className='ExploreButton'>Explore Now</button>
            )}
            <p className="start-date">Starts Oct 1</p>
            <p className="enrolled-count">200,000 already enrolled</p>
          </div>
        </div>
        <div className="course-sidebar">
          <p><strong>Specialization - Fundamental Chemistry</strong></p>
          <p>Build a strong foundation in chemistry</p>
          <p className="rating">4.6 ★ (65,432 reviews)</p>
          <p>Beginner to Intermediate level</p>
          <p>No prior chemistry knowledge required</p>
          <p>4 months at 6 hours a week</p>
          <p>Flexible schedule</p>
          <p>Learn at your own pace</p>
          <a href="#" className="view-all-courses">View all courses</a>
        </div>
      </div>

      <div className="tabs">
        <button onClick={() => scrollToSection('About')} className={activeTab === 'About' ? 'active' : ''}>About</button>
        <button onClick={() => scrollToSection('Outcomes')} className={activeTab === 'Outcomes' ? 'active' : ''}>Outcomes</button>
        <button onClick={() => scrollToSection('Courses')} className={activeTab === 'Courses' ? 'active' : ''}>Courses</button>
      </div>

      <div className="content">
        <div id="About" className="tab-content">
          <h2>Skills You'll Gain</h2>
          <p>This course provides a comprehensive introduction to chemistry. You will develop skills in:</p>
          <div className="skills">
            <span>Chemical Reactions</span>
            <span>Atomic Structure</span>
            <span>Stoichiometry</span>
            <span>Chemical Bonding</span>
            <span>Thermodynamics</span>
            <span>Equilibrium</span>
            <span>Organic Chemistry Basics</span>
            <span>Analytical Techniques</span>
          </div>
          <h2>Details to Know</h2>
          <p>Gain a certificate of completion to demonstrate your understanding of chemistry principles. This course is perfect for anyone looking to build a solid foundation in chemistry for further study or career development.</p>
          <p>By the end of the course, you'll have a solid grasp of essential chemistry concepts, which can be applied in academic and professional settings.</p>
        </div>

        <div id="Outcomes" className="tab-content">
          <div className="outcome-container">
            <div className="outcome-details">
              <h2>Enhance Your Chemical Knowledge</h2>
              <p>Completing this course will provide you with a thorough understanding of chemistry fundamentals. The course will help you:</p>
              <ul>
                <li>Learn core chemistry concepts and principles.</li>
                <li>Apply chemical knowledge to real-world problems.</li>
                <li>Prepare for more advanced studies in chemistry or related fields.</li>
                <li>Earn a certificate to boost your resume and career prospects.</li>
              </ul>
              <p>These outcomes are designed to equip you with the knowledge and skills needed for further academic pursuits or entry-level positions in the field of chemistry.</p>
            </div>
            <div className="outcome-image">
              <img src={img} alt="Outcome Illustration" />
            </div>
          </div>
        </div>

        <div id="Courses" className="tab-content">
          <h2>Courses Included in the Specialization</h2>
          <p>This specialization offers a series of courses that cover the essentials of chemistry. The included courses are:</p>
          <ul>
            <li>Introduction to Chemistry: Basics of chemical principles and lab techniques.</li>
            <li>Chemical Reactions and Stoichiometry: Understanding chemical reactions and calculations.</li>
            <li>Atomic and Molecular Structure: Study of atoms, molecules, and chemical bonding.</li>
            <li>Thermodynamics: Principles of energy changes and chemical reactions.</li>
            <li>Chemical Equilibrium: Exploration of reversible reactions and dynamic equilibria.</li>
            <li>Organic Chemistry Fundamentals: Introduction to organic compounds and reactions.</li>
            <li>Analytical Chemistry Techniques: Methods for analyzing chemical substances.</li>
          </ul>
          <p>Each course combines lectures, readings, and hands-on assignments to ensure a comprehensive understanding of chemistry concepts. Engage with interactive content and participate in discussions with peers and instructors.</p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ChemistryEssentials;
