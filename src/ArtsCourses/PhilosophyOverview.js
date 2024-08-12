import React, { useState, useEffect } from 'react';
import '../CourseDetail.css'; 
import img from '../Photos/Philosophy.jpg'; // Update with the correct path
import { Link, useNavigate } from 'react-router-dom';
import Header from '../Header';
import Footer from '../Footer';

function PhilosophyOverview() {
  const [activeTab, setActiveTab] = useState('About');
  const [enrolled, setEnrolled] = useState(false);
  const navigate = useNavigate();
  const courseKey = 'philosophyOverview'; // Unique identifier for this course

  useEffect(() => {
    // Check enrollment status on component mount
    const enrollmentStatus = sessionStorage.getItem(courseKey);
    setEnrolled(enrollmentStatus === 'true');
  }, []);

  const scrollToSection = (section) => {
    setActiveTab(section);
    document.getElementById(section).scrollIntoView({ behavior: 'smooth' });
  };

  const handleEnrollClick = () => {
    // Set the enrollment status in sessionStorage
    sessionStorage.setItem(courseKey, 'true');
    setEnrolled(true);
    navigate('/Payment', { state: { from: '/PhilosophyOverview', courseKey } });
  };

  const handleExploreNowClick = () => {
    navigate('/PhilosophyOverviewLectures'); // Update this route as needed
  };

  return (
    <div className='CourseDetail'>
      <Header />
      <div className="course-detail-page">
        <div className="course-header">
          <div className="course-header-content">
            <h1>Philosophy: An Overview</h1>
            <p className="course-description">
              Explore the fundamental questions and theories of philosophy with this comprehensive overview. Engage with key philosophical ideas, from ancient to modern times, and understand how they have shaped human thought.
            </p>
            <p className="course-instructor">
              Instructor: <a href="#">Dr. Alice Thompson</a>, distinguished philosopher and educator.
            </p>
            {!enrolled ? (
              <button className="enroll-button" onClick={handleEnrollClick}>Enroll</button>
            ) : (
              <button className="enroll-button" onClick={handleExploreNowClick}>Explore Now</button>
            )}
            <p className="start-date">Starts Sep 20</p>
            <p className="enrolled-count">120,000 already enrolled</p>
          </div>
        </div>
        <div className="course-sidebar">
          <p><strong>Specialization - Introduction to Philosophy</strong></p>
          <p>Gain a broad understanding of philosophical concepts and debates</p>
          <p className="rating">4.8 ★ (78,901 reviews)</p>
          <p>Beginner to Intermediate level</p>
          <p>No prior philosophy knowledge required</p>
          <p>3 months at 4 hours a week</p>
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
            This course provides an introduction to essential philosophical concepts. You will develop skills in:
          </p>
          <div className="skills">
            <span>Critical Thinking</span>
            <span>Logical Reasoning</span>
            <span>Ethical Analysis</span>
            <span>Historical Understanding</span>
            <span>Philosophical Debate</span>
            <span>Textual Analysis</span>
            <span>Conceptual Clarity</span>
            <span>Argumentation</span>
          </div>
          <h2>Details to Know</h2>
          <p>
            By completing this course, you will gain a certificate showcasing your understanding of fundamental philosophical ideas. This will enhance your analytical skills and prepare you for more advanced studies in philosophy or related fields.
          </p>
          <p>
            You'll explore philosophical texts, engage in debates, and apply philosophical methods to various topics.
          </p>
        </div>

        <div id="Outcomes" className="tab-content">
          <div className="outcome-container">
            <div className="outcome-details">
              <h2>Deepen Your Philosophical Knowledge</h2>
              <p>
                Completing this course will help you develop a strong foundation in philosophy. The course aims to:
              </p>
              <ul>
                <li>Introduce major philosophical concepts and thinkers.</li>
                <li>Enhance your ability to think critically and argue effectively.</li>
                <li>Provide a broad understanding of key philosophical issues.</li>
                <li>Prepare you for further study or careers in fields requiring analytical skills.</li>
              </ul>
              <p>
                These outcomes will enable you to engage more deeply with philosophical discussions and contribute meaningfully to debates on important issues.
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
            This specialization includes several courses that provide a comprehensive overview of philosophy. The included courses are:
          </p>
          <ul>
            <li>Introduction to Philosophy: Explore the basic concepts and historical development of philosophy.</li>
            <li>Ethics: Study moral philosophy and various ethical theories.</li>
            <li>Logic and Reasoning: Develop skills in logical thinking and argumentation.</li>
            <li>Philosophy of Mind: Examine theories related to consciousness and mental states.</li>
            <li>Political Philosophy: Investigate philosophical ideas about government, justice, and rights.</li>
            <li>Metaphysics: Explore questions about existence, reality, and the nature of objects.</li>
            <li>Philosophy of Science: Understand philosophical questions related to scientific methods and theories.</li>
          </ul>
          <p>
            Each course combines lectures, readings, and discussions to ensure a thorough understanding of philosophical ideas. Engage with interactive content and collaborate with peers and instructors.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default PhilosophyOverview;
