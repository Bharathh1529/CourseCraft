import React, { useState, useEffect } from 'react';
import '../CourseDetail.css'; 
import img from '../Photos/psychologyImage.jpg'; // Update with the correct path
import { Link, useNavigate } from 'react-router-dom';
import Header from '../Header';
import Footer from '../Footer';

function PsychologyFundamentals() {
  const [activeTab, setActiveTab] = useState('About');
  const [enrolled, setEnrolled] = useState(false);
  const navigate = useNavigate();
  const courseKey = 'psychologyFundamentals'; // Unique identifier for this course

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
    navigate('/Payment', { state: { from: '/PsychologyFundamentals', courseKey } });
  };

  const handleExploreNowClick = () => {
    navigate('/PsychologyFundamentalsLectures'); // Update this route as needed
  };

  return (
    <div className='CourseDetail'>
      <Header />
      <div className="course-detail-page">
        <div className="course-header">
          <div className="course-header-content">
            <h1>Psychology Fundamentals</h1>
            <p className="course-description">
              Discover the foundational principles of psychology with this introductory course. Explore topics such as cognitive processes, emotional responses, and human behavior to gain a deep understanding of the human mind.
            </p>
            <p className="course-instructor">
              Instructor: <a href="#">Dr. Sarah Lee</a>, clinical psychologist and researcher.
            </p>
            {!enrolled ? (
              <button className="enroll-button" onClick={handleEnrollClick}>Enroll</button>
            ) : (
              <button className="enroll-button" onClick={handleExploreNowClick}>Explore Now</button>
            )}
            <p className="start-date">Starts Dec 1</p>
            <p className="enrolled-count">180,000 already enrolled</p>
          </div>
        </div>
        <div className="course-sidebar">
          <p><strong>Specialization - Introduction to Psychology</strong></p>
          <p>Build a solid foundation in psychological principles</p>
          <p className="rating">4.8 ★ (52,789 reviews)</p>
          <p>Beginner to Intermediate level</p>
          <p>No prior psychology knowledge required</p>
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
        <button onClick={() => scrollToSection('Feedback')} className={activeTab === 'Feedback' ? 'active' : ''}>Feedback</button>
      </div>

      <div className="content">
        <div id="About" className="tab-content">
          <h2>Skills You'll Gain</h2>
          <p>This course provides a comprehensive introduction to psychology. You will develop skills in:</p>
          <div className="skills">
            <span>Cognitive Psychology</span>
            <span>Behavioral Theories</span>
            <span>Emotional and Social Processes</span>
            <span>Developmental Psychology</span>
            <span>Research Methods</span>
            <span>Psychopathology</span>
            <span>Therapeutic Techniques</span>
            <span>Ethical Considerations</span>
          </div>
          <h2>Details to Know</h2>
          <p>Obtain a certificate of completion to demonstrate your understanding of key psychological concepts. This course is ideal for anyone interested in psychology, whether for academic purposes or personal enrichment.</p>
          <p>By the end of the course, you'll have a solid grasp of fundamental psychological principles that can be applied in various fields or as a basis for advanced studies in psychology.</p>
        </div>

        <div id="Outcomes" className="tab-content">
          <div className="outcome-container">
            <div className="outcome-details">
              <h2>Enhance Your Understanding of Psychology</h2>
              <p>Completing this course will provide you with a thorough understanding of psychology fundamentals. The course will help you:</p>
              <ul>
                <li>Learn core psychological concepts and theories.</li>
                <li>Apply psychological principles to everyday situations.</li>
                <li>Prepare for advanced studies or careers in psychology.</li>
                <li>Earn a certificate to enhance your resume and career prospects.</li>
              </ul>
              <p>These outcomes are designed to equip you with the knowledge and skills needed for further academic pursuits or entry-level positions in psychology or related fields.</p>
            </div>
            <div className="outcome-image">
              <img src={img} alt="Outcome Illustration" />
            </div>
          </div>
        </div>

        <div id="Courses" className="tab-content">
          <h2>Courses Included in the Specialization</h2>
          <p>This specialization covers a series of courses that lay the groundwork in psychology. The included courses are:</p>
          <ul>
            <li>Introduction to Psychology: Basics of psychological principles and theories.</li>
            <li>Cognitive Processes: Study of mental processes such as perception, memory, and decision-making.</li>
            <li>Behavioral Psychology: Examination of behavior and learning through conditioning.</li>
            <li>Developmental Psychology: Understanding psychological development across the lifespan.</li>
            <li>Emotional and Social Psychology: Exploration of emotions, social interactions, and group behavior.</li>
            <li>Research Methods in Psychology: Techniques and methods for conducting psychological research.</li>
            <li>Clinical and Counseling Psychology: Overview of therapeutic techniques and mental health issues.</li>
          </ul>
          <p>Each course includes lectures, readings, and interactive assignments to ensure a comprehensive understanding of psychology. Engage with interactive content and participate in discussions to deepen your knowledge.</p>
        </div>

        <div id="Feedback" className="tab-content">
          <h2>Course Feedback</h2>
          <p>We value your feedback! Please let us know your thoughts on the course:</p>
          <form>
            <label htmlFor="rating">Rating:</label>
            <select id="rating" name="rating">
              <option value="5">5 ★</option>
              <option value="4">4 ★</option>
              <option value="3">3 ★</option>
              <option value="2">2 ★</option>
              <option value="1">1 ★</option>
            </select>
            <br />
            <label htmlFor="comment">Comments:</label>
            <textarea id="comment" name="comment" rows="4" cols="50"></textarea>
            <br />
            <button type="submit" className="submit-feedback-button">Submit Feedback</button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default PsychologyFundamentals;
