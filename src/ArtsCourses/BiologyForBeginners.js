import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../Header';
import Footer from '../Footer';
import '../CourseDetail.css';
import img from '../Photos/biologyImage.jpeg'; // Update with the correct path

const BiologyOverview = () => {
  const navigate = useNavigate();
  const courseKey = 'enrolledBiologyOverview'; // Unique key for this course
  const [enrolled, setEnrolled] = useState(false);

  useEffect(() => {
    const enrollmentStatus = sessionStorage.getItem(courseKey);
    if (enrollmentStatus === 'true') {
      setEnrolled(true);
    }
  }, []);

  const handleEnrollClick = () => {
    navigate('/Payment', { state: { from: '/BiologyForBeginners', courseKey } });
  };

  const handleExploreNowClick = () => {
    navigate('/BiologyVideoPage');
  };

  return (
    <div className='CourseDetail'>
      <Header />
      <div className="course-detail-page">
        <div className="course-header">
          <div className="course-header-content">
            <h1>Biology For Beginners</h1>
            <p className="course-description">
              Dive into the world of biology with this comprehensive overview. Understand the basics of life sciences, from cellular structures to ecosystems, and explore the intricate workings of living organisms.
            </p>
            <p className="course-instructor">
              Instructor: <a href="#">Dr. Alice Thompson</a>, renowned biologist and educator.
            </p>
            {!enrolled ? (
              <button onClick={handleEnrollClick} className='EnrollButton'>Enroll</button>
            ) : (
              <button onClick={handleExploreNowClick} className='ExploreButton'>Explore Now</button>
            )}
            <p className="start-date">Starts Sep 20</p>
            <p className="enrolled-count">120,000 already enrolled</p>
          </div>
        </div>
        <div className="course-sidebar">
          <p><strong>Specialization - Introduction to Biology</strong></p>
          <p>Gain a broad understanding of biological concepts and systems</p>
          <p className="rating">4.8 ★ (78,901 reviews)</p>
          <p>Beginner to Intermediate level</p>
          <p>No prior biology knowledge required</p>
          <p>3 months at 4 hours a week</p>
          <p>Flexible schedule</p>
          <p>Learn at your own pace</p>
          <a href="#" className="view-all-courses">View all courses</a>
        </div>
      </div>

      <div className="tabs">
        <button className='active'>About</button>
        <button>Outcomes</button>
        <button>Courses</button>
      </div>

      <div className="content">
        <div id="About" className="tab-content">
          <h2>Skills You'll Gain</h2>
          <p>
            This course provides an introduction to essential biological concepts. You will develop skills in:
          </p>
          <div className="skills">
            <span>Scientific Method</span>
            <span>Cell Biology</span>
            <span>Ecology</span>
            <span>Genetics</span>
            <span>Evolution</span>
            <span>Human Anatomy</span>
            <span>Microbiology</span>
            <span>Botany</span>
          </div>
          <h2>Details to Know</h2>
          <p>
            By completing this course, you will gain a certificate showcasing your understanding of fundamental biological concepts. This will enhance your analytical skills and prepare you for more advanced studies in biology or related fields.
          </p>
          <p>
            You'll explore biological texts, engage in experiments, and apply scientific methods to various topics.
          </p>
        </div>

        <div id="Outcomes" className="tab-content">
          <div className="outcome-container">
            <div className="outcome-details">
              <h2>Expand Your Biological Knowledge</h2>
              <p>
                Completing this course will help you develop a strong foundation in biology. The course aims to:
              </p>
              <ul>
                <li>Introduce major biological concepts and researchers.</li>
                <li>Enhance your ability to think scientifically and analyze data.</li>
                <li>Provide a broad understanding of key biological issues.</li>
                <li>Prepare you for further study or careers in fields requiring scientific skills.</li>
              </ul>
              <p>
                These outcomes will enable you to engage more deeply with biological discussions and contribute meaningfully to scientific research and debates.
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
            This specialization includes several courses that provide a comprehensive overview of biology. The included courses are:
          </p>
          <ul>
            <li>Introduction to Biology: Explore the basic concepts and historical development of biological sciences.</li>
            <li>Cell Biology: Study the structure and function of cells.</li>
            <li>Genetics: Understand the principles of heredity and genetic variation.</li>
            <li>Human Anatomy: Examine the structure and function of the human body.</li>
            <li>Ecology: Investigate the relationships between organisms and their environment.</li>
            <li>Microbiology: Explore microorganisms and their roles in the environment and human health.</li>
            <li>Botany: Study plant biology, including structure, growth, and reproduction.</li>
          </ul>
          <p>
            Each course combines lectures, readings, and discussions to ensure a thorough understanding of biological concepts. Engage with interactive content and collaborate with peers and instructors.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default BiologyOverview;
