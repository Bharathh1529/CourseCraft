import React, { useState } from 'react';
import './PsychologyFundamentalsLectures.css'; // Ensure this path is correct
import Footer from '../Footer';
import Header from '../Header';

const lectureVideos = {
  1: 'https://www.youtube.com/embed/Uv7cKlZFXU8', // Update with actual URLs
  2: 'https://www.youtube.com/embed/Uv7cKlZFXU8',
  3: 'https://www.youtube.com/embed/Uv7cKlZFXU8',
  4: 'https://www.youtube.com/embed/Uv7cKlZFXU8',
  5: 'https://www.youtube.com/embed/Uv7cKlZFXU8',
  6: 'https://www.youtube.com/embed/Uv7cKlZFXU8',
  7: 'https://www.youtube.com/embed/Uv7cKlZFXU8',
};

const lectureTitles = {
  1: 'Lecture 01: Introduction to Psychology',
  2: 'Lecture 02: Cognitive Processes',
  3: 'Lecture 03: Behavioral Psychology',
  4: 'Lecture 04: Developmental Psychology',
  5: 'Lecture 05: Emotional and Social Psychology',
  6: 'Lecture 06: Research Methods in Psychology',
  7: 'Lecture 07: Clinical and Counseling Psychology',
};

const lectureDescriptions = {
  1: 'This lecture provides an overview of the fundamental concepts in psychology, including the history, major theories, and applications.',
  2: 'In this lecture, we explore cognitive processes such as perception, memory, and decision-making, and how they influence behavior.',
  3: 'This lecture focuses on behavioral psychology, examining how behaviors are learned and reinforced through conditioning.',
  4: 'An exploration of developmental psychology, this lecture covers the psychological changes that occur throughout the lifespan.',
  5: 'This lecture delves into emotional and social psychology, looking at how emotions and social interactions shape behavior.',
  6: 'In this lecture, we discuss research methods in psychology, including experimental design, data collection, and analysis.',
  7: 'This lecture provides an introduction to clinical and counseling psychology, focusing on therapeutic techniques and mental health issues.',
};

const PsychologyFundamentalsLectures = () => {
  const [activeLecture, setActiveLecture] = useState(1);

  return (
    <div>
      <Header />
      <div className='psychology-video-page-container'>
        <div className="psychology-video-main-content">
          <div className="psychology-video-sidebar">
            <div className="psychology-video-course-outline">
              <h3>Course Outline</h3>
              <ul>
                {Object.keys(lectureTitles).map((key) => (
                  <li
                    key={key}
                    className={activeLecture === parseInt(key) ? 'active' : ''}
                    onClick={() => setActiveLecture(parseInt(key))}
                    role="button"
                    tabIndex="0"
                    aria-selected={activeLecture === parseInt(key)}
                  >
                    {lectureTitles[key]}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="psychology-video-section">
            <h2>{lectureTitles[activeLecture]}</h2>
            <div className="psychology-video-container">
              <iframe
                src={lectureVideos[activeLecture]}
                title={lectureTitles[activeLecture]}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                frameBorder="0"
              ></iframe>
            </div>
            <p className="psychology-video-description">
              This is a placeholder description for {lectureTitles[activeLecture]}.
              <br /><br />
              {lectureDescriptions[activeLecture]}
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PsychologyFundamentalsLectures;
