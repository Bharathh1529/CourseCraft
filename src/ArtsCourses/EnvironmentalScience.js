import React, { useState, useEffect } from 'react';
import '../CourseDetail.css'; 
import img from '../Photos/EnvironmentalScience.webp'; // Update with the correct path
import Header from '../Header';
import Footer from '../Footer';
import { useNavigate } from 'react-router-dom';

const EnvironmentalScience = () => {
  const [activeTab, setActiveTab] = useState('About');
  const [enrolled, setEnrolled] = useState(false);
  const navigate = useNavigate();
  const courseKey = 'enrolledEnvironmentalScience'; // Unique key for this course

  const scrollToSection = (section) => {
    setActiveTab(section);
    document.getElementById(section).scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    const enrollmentStatus = sessionStorage.getItem(courseKey);
    if (enrollmentStatus === 'true') {
      setEnrolled(true);
    }
  }, []);

  const handleEnrollClick = () => {
    navigate('/Payment', { state: { from: '/EnvironmentalScience', courseKey } });
  };

  const handleExploreNowClick = () => {
    navigate('/EnvironmentalScienceLectures'); // Replace with the appropriate path
  };

  return (
    <div className='CourseDetail'>
      <Header />
      <div className="course-detail-page">
        <div className="course-header">
          <div className="course-header-content">
            <h1>Environmental Science</h1>
            <p className="course-description">
              Explore the critical issues facing our environment with this comprehensive course on environmental science. Study ecosystems, environmental policies, and sustainability practices to make a difference in the world.
            </p>
            <p className="course-instructor">
              Instructor: <a href="#">Dr. Laura Smith</a>, environmental scientist and policy expert.
            </p>
            {!enrolled ? (
              <button onClick={handleEnrollClick} className='EnrollButton'>Enroll</button>
            ) : (
              <button onClick={handleExploreNowClick} className='ExploreButton'>Explore Now</button>
            )}
            <p className="start-date">Starts Nov 1</p>
            <p className="enrolled-count">150,000 already enrolled</p>
          </div>
        </div>
        <div className="course-sidebar">
          <p><strong>Specialization - Environmental Science</strong></p>
          <p>Understand the impact of human activities on the environment</p>
          <p className="rating">4.7 ★ (45,321 reviews)</p>
          <p>Beginner to Intermediate level</p>
          <p>No prior environmental science knowledge required</p>
          <p>5 months at 5 hours a week</p>
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
          <p>This course offers a thorough understanding of environmental science. You will gain skills in:</p>
          <div className="skills">
            <span>Ecological Principles</span>
            <span>Environmental Policies</span>
            <span>Sustainability Practices</span>
            <span>Climate Change Mitigation</span>
            <span>Resource Management</span>
            <span>Environmental Impact Assessment</span>
            <span>Conservation Strategies</span>
            <span>Environmental Data Analysis</span>
          </div>
          <h2>Details to Know</h2>
          <p>Obtain a certificate of completion to showcase your expertise in environmental science. This course is ideal for those interested in environmental advocacy, policy-making, and sustainability.</p>
          <p>By the end of the course, you’ll be equipped with the knowledge to contribute to environmental conservation and sustainability efforts effectively.</p>
        </div>

        <div id="Outcomes" className="tab-content">
          <div className="outcome-container">
            <div className="outcome-details">
              <h2>Enhance Your Environmental Knowledge</h2>
              <p>Completing this course will provide you with a robust understanding of environmental science. The course will help you:</p>
              <ul>
                <li>Understand key environmental concepts and issues.</li>
                <li>Apply scientific principles to environmental challenges.</li>
                <li>Prepare for advanced studies or careers in environmental science.</li>
                <li>Earn a certificate to enhance your career prospects in the field.</li>
              </ul>
              <p>These outcomes are designed to empower you with the knowledge and skills required for careers in environmental science and related fields.</p>
            </div>
            <div className="outcome-image">
              <img src={img} alt="Outcome Illustration" />
            </div>
          </div>
        </div>

        <div id="Courses" className="tab-content">
          <h2>Courses Included in the Specialization</h2>
          <p>This specialization includes a series of courses that cover the essentials of environmental science. The included courses are:</p>
          <ul>
            <li>Introduction to Environmental Science: Basics of environmental science and sustainability.</li>
            <li>Ecology and Ecosystems: Understanding ecosystems, species interactions, and biodiversity.</li>
            <li>Environmental Policies and Regulations: Study of environmental laws and policy frameworks.</li>
            <li>Climate Change and Mitigation: Examination of climate change impacts and strategies for mitigation.</li>
            <li>Resource Management: Principles of managing natural resources sustainably.</li>
            <li>Conservation Strategies: Techniques and strategies for environmental conservation.</li>
            <li>Environmental Data Analysis: Methods for analyzing and interpreting environmental data.</li>
          </ul>
          <p>Each course incorporates lectures, practical assignments, and interactive content to provide a thorough understanding of environmental science concepts. Engage in discussions with peers and instructors to enhance your learning experience.</p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default EnvironmentalScience;
