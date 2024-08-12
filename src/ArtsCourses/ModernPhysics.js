import React, { useEffect, useState } from 'react';
import '../CourseDetail.css'; 
import img from '../Photos/ModernPhysics.jpg';
import { Link, useNavigate } from 'react-router-dom';
import Header from '../Header';
import Footer from '../Footer';

function ModernPhysics() {
  const [activeTab, setActiveTab] = useState('About');
  const [enrolled, setEnrolled] = useState(false);
  const navigate = useNavigate();
  const courseKey = 'modernPhysics'; // Unique identifier for this course

  useEffect(() => {
    const enrollmentStatus = sessionStorage.getItem(courseKey);
    setEnrolled(enrollmentStatus === 'true');
  }, []);

  const scrollToSection = (section) => {
    setActiveTab(section);
    document.getElementById(section).scrollIntoView({ behavior: 'smooth' });
  };

  const handleEnrollClick = () => {
    navigate('/Payment', { state: { from: '/ModernPhysics', courseKey } });
  };

  const handleExploreNowClick = () => {
    navigate('/ModernPhysicsLectures'); // Update this route as needed
  };

  return (
    <div className='CourseDetail'>
      <Header />
        <div className="course-detail-page">
          <div className="course-header">
            <div className="course-header-content">
              <h1>Modern Physics</h1>
              <p className="course-description">
                Dive into the world of modern physics, exploring groundbreaking concepts and theories that have shaped our understanding of the universe. This course covers topics such as relativity, quantum mechanics, and particle physics.
              </p>
              <p className="course-instructor">
                Instructor: <a href="#">Dr. John Doe</a>, leading physicist and researcher.
              </p>
              {!enrolled ? (
                <button className="enroll-button" onClick={handleEnrollClick}>Enroll</button>
              ) : (
                <button className="enroll-button" onClick={handleExploreNowClick}>Explore Now</button>
              )}
              <p className="start-date">Starts Aug 15</p>
              <p className="enrolled-count">300,000 already enrolled</p>
            </div>
          </div>
          <div className="course-sidebar">
            <p><strong>Specialization - Advanced Concepts</strong></p>
            <p>Deepen your understanding of modern physics</p>
            <p className="rating">4.8 ★ (98,765 reviews)</p>
            <p>Intermediate to Advanced level</p>
            <p>Basic physics knowledge required</p>
            <p>6 months at 10 hours a week</p>
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
            <p>
              This course equips you with a variety of skills that are essential for understanding and applying modern physics concepts. You'll develop:
            </p>
            <div className="skills">
              <span>Relativity</span>
              <span>Quantum Mechanics</span>
              <span>Particle Physics</span>
              <span>Mathematical Modeling</span>
              <span>Experimental Techniques</span>
              <span>Problem-Solving</span>
              <span>Critical Thinking</span>
              <span>Research Skills</span>
            </div>
            <h2>Details to Know</h2>
            <p>
              Earn a shareable certificate to showcase your knowledge in modern physics. Enhance your resume and LinkedIn profile, and gain the skills needed to pursue further education or a career in the field of physics. Engage with interactive content, participate in forums, and complete assignments that test your understanding of the material.
            </p>
            <p>
              By the end of the course, you will have a comprehensive understanding of key concepts and theories in modern physics. This knowledge can be applied in various fields such as research, academia, and industry.
            </p>
          </div>

          <div id="Outcomes" className="tab-content">
            <div className="outcome-container">
              <div className="outcome-details">
                <h2>Advance Your Subject-Matter Expertise</h2>
                <p>
                  By completing this course, you will advance your expertise in modern physics and related disciplines. The course is designed to help you:
                </p>
                <ul>
                  <li>Learn advanced concepts from university and industry experts.</li>
                  <li>Master complex theories with hands-on projects and practical examples.</li>
                  <li>Develop a deep understanding of modern physics and its applications.</li>
                  <li>Earn a career certificate to boost your credentials and employability.</li>
                </ul>
                <p>
                  These outcomes are aimed at providing you with the knowledge and skills to pursue advanced studies or careers in physics, engineering, and technology sectors.
                </p>
              </div>
              <div className="outcome-image">
                <img src={img} alt="Outcome Illustration" />
              </div>
            </div>
          </div>

          <div id="Courses" className="tab-content">
            <h2>Courses Included in the Specialization</h2>
            <p>
              This specialization includes a series of courses designed to provide a comprehensive understanding of modern physics. Each course covers different aspects and theories, allowing you to build a broad and deep knowledge base:
            </p>
            <ul>
              <li>Introduction to Modern Physics: Explore the foundations and key concepts of modern physics.</li>
              <li>Relativity: Special and General: Dive into Einstein's theory of relativity and its implications.</li>
              <li>Quantum Mechanics: Principles and Applications: Understand the fundamental principles of quantum mechanics.</li>
              <li>Particle Physics: Discovering the Fundamental Particles: Learn about the particles that make up the universe.</li>
              <li>Advanced Mathematical Methods for Physics: Gain insights into the mathematical tools used in physics.</li>
              <li>Experimental Physics: Techniques and Methods: Analyze the experimental techniques used in modern physics research.</li>
              <li>Applications of Modern Physics: Explore the practical applications of modern physics in various industries.</li>
            </ul>
            <p>
              Each course is designed to be engaging and informative, with a mix of video lectures, readings, and interactive assignments. You'll also have the opportunity to discuss the material with peers and instructors in online forums.
            </p>
          </div>
        </div>
        <Footer />
    </div>
  );
}

export default ModernPhysics;
