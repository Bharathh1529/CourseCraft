import React, { useEffect, useState } from 'react';
import '../CourseDetail.css'; 
import img from '../Photos/Introduction To Literature.jpeg.jpg'; // Replace with the correct image path
import Header from '../Header';
import Footer from '../Footer';
import { Link, useNavigate } from 'react-router-dom';

function IntroductionToLiterature() {
  const [activeTab, setActiveTab] = useState('About');
  const [enrolled, setEnrolled] = useState(false);
  const navigate = useNavigate();
  const courseKey = 'introductionToLiterature'; // Unique identifier for this course

  useEffect(() => {
    const enrollmentStatus = sessionStorage.getItem(courseKey);
    setEnrolled(enrollmentStatus === 'true');
  }, []);

  const scrollToSection = (section) => {
    setActiveTab(section);
    document.getElementById(section).scrollIntoView({ behavior: 'smooth' });
  };

  const handleEnrollClick = () => {
    navigate('/Payment', { state: { from: '/IntroductionToLiteratrue', courseKey } });
  };

  const handleExploreNowClick = () => {
    navigate('/IntroductionToLiteratureLectures'); // Update this route as needed
  };

  return (
    <div className='CourseDetail'>
      <Header/>
        <div className="course-detail-page">
          <div className="course-header">
            <div className="course-header-content">
              <h1>Introduction to Literature</h1>
              <p className="course-description">
                Dive into the world of literature and explore a range of genres and styles. This course covers foundational aspects of literary analysis, helping you develop critical reading and writing skills.
              </p>
              <p className="course-instructor">
                Instructor: <a href="#">Dr. Emily Brown</a>, experienced literature professor and author.
              </p>
              {!enrolled ? (
                <button className="enroll-button" onClick={handleEnrollClick}>
                  Enroll 
                </button>
              ) : (
                <button className="enroll-button" onClick={handleExploreNowClick}>
                  Explore Now
                </button>
              )}
              <p className="start-date">Starts Aug 1</p>
              <p className="enrolled-count">500,000 already enrolled</p>
            </div>
          </div>
          <div className="course-sidebar">
            <p><strong>Specialization - Comprehensive Course</strong></p>
            <p>Develop a deep understanding of literary studies</p>
            <p className="rating">4.8 ★ (100,000 reviews)</p>
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
              This course will help you develop a range of skills essential for understanding and analyzing literature. You'll gain:
            </p>
            <div className="skills">
              <span>Literary Analysis</span>
              <span>Critical Thinking</span>
              <span>Writing Skills</span>
              <span>Textual Interpretation</span>
              <span>Research Skills</span>
              <span>Cultural Context</span>
              <span>Genre Understanding</span>
              <span>Comparative Literature</span>
            </div>
            <h2>Details to Know</h2>
            <p>
              Earn a shareable certificate to showcase your literary knowledge. Enhance your resume and LinkedIn profile, and gain the skills needed for further studies or careers in literature, education, and more.
            </p>
            <p>
              By the end of the course, you will have a solid foundation in literary studies, capable of analyzing and interpreting various literary texts.
            </p>
          </div>

          <div id="Outcomes" className="tab-content">
            <div className="outcome-container">
              <div className="outcome-details">
                <h2>Advance Your Subject-Matter Expertise</h2>
                <p>
                  By completing this course, you will enhance your understanding of literature and develop skills that are valuable in a range of professional contexts.
                </p>
                <ul>
                  <li>Learn key concepts from experienced professors and experts.</li>
                  <li>Engage with diverse literary texts and genres.</li>
                  <li>Develop analytical and interpretive skills.</li>
                  <li>Earn a certificate to boost your academic and professional profile.</li>
                </ul>
                <p>
                  These outcomes aim to prepare you for advanced studies or careers in literature, writing, and education.
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
              This specialization includes a series of courses designed to provide a comprehensive understanding of literature. Each course covers different aspects and genres:
            </p>
            <ul>
              <li>Introduction to Literary Analysis: Foundations of critical reading and writing.</li>
              <li>Poetry: Forms and Functions: Explore the structures and themes of poetry.</li>
              <li>Prose: Fiction and Non-Fiction: Understanding narrative techniques and styles.</li>
              <li>Drama: Text and Performance: Analyzing plays from text to stage.</li>
              <li>World Literature: Diverse Perspectives: Discover literature from around the world.</li>
              <li>Literary Theory and Criticism: Frameworks for textual interpretation.</li>
            </ul>
            <p>
              Each course is designed to be engaging and informative, with a mix of video lectures, readings, and interactive assignments. You'll also have the opportunity to discuss the material with peers and instructors in online forums.
            </p>
          </div>
        </div>
      <Footer/>
    </div>
  );
}

export default IntroductionToLiterature;
