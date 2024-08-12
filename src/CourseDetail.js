import React, { useEffect, useState } from 'react';
import './CourseDetail.css'; 
import img from './Photos/Course Outcome.jpeg.jpg';
import Header from './Header';
import Footer from './Footer';
import { useNavigate } from 'react-router-dom';

function CourseDetail() {
  const [activeTab, setActiveTab] = useState('About');
  const [enrolled, setEnrolled] = useState(false);
  const navigate = useNavigate();
  
  // Unique key for the course
  const courseKey = 'historyOfArt'; // Unique identifier for this course

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
  
  
  const handleEnrollClick = () => {
    const email = "user@example.com"; // Replace this with the actual user's email from your context or state
    navigate('/Payment', { state: { from: '/HistoryOfArts', courseKey, email } });
  };
  
  
  // Handle explore now click
  const handleExploreNowClick = () => {
    navigate('/HistroyOfArtsLectures');
  };

  return (
    <div className='CourseDetail'>
      <Header />
      <div className="course-detail-page">
        <div className="course-header">
          <div className="course-header-content">
            <h1>History of Art</h1>
            <p className="course-description">
              Explore the history of art from ancient times to the modern era. This course offers a comprehensive overview of key periods, movements, and figures in art history, providing students with a deeper understanding of cultural and historical contexts.
            </p>
            <p className="course-instructor">
              Instructor: <a href="#">Dr. Jane Smith</a>, renowned art historian and author.
            </p>
            {!enrolled ? (
              <button onClick={handleEnrollClick} className='EnrollButton'>Enroll</button>
            ) : (
              <button onClick={handleExploreNowClick} className='ExploreButton'>Explore Now</button>
            )}
            <p className="start-date">Starts Aug 1</p>
            <p className="enrolled-count">750,000 already enrolled</p>
          </div>
        </div>
        <div className="course-sidebar">
          <p><strong>Specialization - Comprehensive Course</strong></p>
          <p>Gain a deep understanding of art history</p>
          <p className="rating">4.9 ★ (123,456 reviews)</p>
          <p>Beginner to Intermediate level</p>
          <p>No prior experience required</p>
          <p>3 months at 8 hours a week</p>
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
            This course equips you with a variety of skills that are essential for understanding and appreciating art. Through the study of various art forms, you'll develop:
          </p>
          <div className="skills">
            <span>Art History</span>
            <span>Critical Analysis</span>
            <span>Historical Context</span>
            <span>Visual Literacy</span>
            <span>Research Skills</span>
            <span>Interpretive Skills</span>
            <span>Art Critique</span>
            <span>Comparative Analysis</span>
          </div>
          <h2>Details to Know</h2>
          <p>
            Earn a shareable certificate to showcase your knowledge in art history. Enhance your resume and LinkedIn profile, and gain the skills needed to pursue further education or a career in the arts. You'll engage with interactive content, participate in forums, and complete assignments that test your understanding of the material.
          </p>
          <p>
            By the end of the course, you will have a comprehensive understanding of the development of art across different cultures and eras. This knowledge can be applied in various fields such as museum curation, art education, and cultural heritage management.
          </p>
        </div>

        <div id="Outcomes" className="tab-content">
          <div className="outcome-container">
            <div className="outcome-details">
              <h2>Advance Your Subject-Matter Expertise</h2>
              <p>
                By completing this course, you will advance your expertise in art history and related disciplines. The course is designed to help you:
              </p>
              <ul>
                <li>Learn in-demand skills from university and industry experts.</li>
                <li>Master a subject or tool with hands-on projects and practical examples.</li>
                <li>Develop a deep understanding of key concepts in art history and criticism.</li>
                <li>Earn a career certificate to boost your credentials and employability.</li>
              </ul>
              <p>
                These outcomes are aimed at providing you with the knowledge and skills to pursue advanced studies or careers in the arts, education, and cultural sectors.
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
            This specialization includes a series of courses designed to provide a comprehensive understanding of art history. Each course covers different aspects and periods, allowing you to build a broad and deep knowledge base:
          </p>
          <ul>
            <li>Introduction to Art History: Explore the foundations of art history, from prehistoric to classical times.</li>
            <li>Renaissance Art: An Overview: Dive into the Renaissance period, studying key artists and masterpieces.</li>
            <li>Modern Art: Movements and Themes: Understand the development of modern art from the 19th to the 21st centuries.</li>
            <li>Non-Western Art: Cultures and Histories: Learn about art from diverse cultures, including Asia, Africa, and the Americas.</li>
            <li>Art Criticism and Theory: Gain insights into the theoretical frameworks and methods used in art criticism.</li>
            <li>Contemporary Art: Analyze the trends and movements shaping the art world today.</li>
            <li>Art and Technology: Discover how technology is transforming the creation and perception of art.</li>
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

export default CourseDetail;
