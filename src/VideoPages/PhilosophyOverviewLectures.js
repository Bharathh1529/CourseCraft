import React, { useState } from 'react';
import Header from '../Header';
import Footer from '../Footer';
import './PhilosophyOverviewLectures.css'; // Ensure the correct path

const philosophyLectureVideos = {
  1: 'https://www.youtube.com/embed/link_to_philosophy_video_1',
  2: 'https://www.youtube.com/embed/link_to_philosophy_video_2',
  3: 'https://www.youtube.com/embed/link_to_philosophy_video_3',
  4: 'https://www.youtube.com/embed/link_to_philosophy_video_4',
  5: 'https://www.youtube.com/embed/link_to_philosophy_video_5',
};

const philosophyLectureTitles = {
  1: 'Lecture 01: Introduction to Philosophy',
  2: 'Lecture 02: Ethical Theories',
  3: 'Lecture 03: Logic and Reasoning',
  4: 'Lecture 04: Philosophy of Mind',
  5: 'Lecture 05: Political Philosophy',
};

const philosophyLectureDescriptions = {
  1: 'An introduction to the fundamental concepts of philosophy, covering the historical development and key ideas of major philosophers.',
  2: 'Exploration of various ethical theories and their applications to real-world moral issues.',
  3: 'Developing skills in logical thinking and argumentation through the study of formal logic.',
  4: 'Examination of theories related to consciousness, mental states, and the nature of the mind.',
  5: 'Investigation of philosophical ideas about government, justice, rights, and political structures.',
};

const PhilosophyOverviewLectures = () => {
  const [activeLecture, setActiveLecture] = useState(1);

  return (
    <div style={{ marginTop: '60px' }}>
      <Header />
      <div className='philosophy-lectures-page-container'>
        <div className="philosophy-lectures-main-content">
          <div className="philosophy-lectures-sidebar">
            <div className="philosophy-lectures-course-outline">
              <h3>Course Outline</h3>
              <ul>
                {Object.keys(philosophyLectureTitles).map((key) => (
                  <li
                    key={key}
                    className={activeLecture === parseInt(key) ? 'active' : ''}
                    onClick={() => setActiveLecture(parseInt(key))}
                    role="button"
                    tabIndex="0"
                    aria-selected={activeLecture === parseInt(key)}
                  >
                    {philosophyLectureTitles[key]}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="philosophy-lectures-section">
            <h2>{philosophyLectureTitles[activeLecture]}</h2>
            <div className="philosophy-lectures-video-container">
              <iframe
                src={philosophyLectureVideos[activeLecture]}
                title={philosophyLectureTitles[activeLecture]}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                frameBorder="0"
              ></iframe>
            </div>
            <p className="philosophy-lectures-description">
              {philosophyLectureDescriptions[activeLecture]}
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PhilosophyOverviewLectures;
