import React, { useState } from 'react';
import './ChemistryVideoPage.css';
import Footer from '../Footer';
import Header from '../Header';

const lectureVideos = {
  1: 'https://www.youtube.com/embed/Uv7cKlZFXU8', // Update with actual links
  2: 'https://www.youtube.com/embed/Uv7cKlZFXU8',
  3: 'https://www.youtube.com/embed/Uv7cKlZFXU8',
  4: 'https://www.youtube.com/embed/Uv7cKlZFXU8',
  5: 'https://www.youtube.com/embed/Uv7cKlZFXU8',
  6: 'https://www.youtube.com/embed/Uv7cKlZFXU8',
  7: 'https://www.youtube.com/embed/Uv7cKlZFXU8',
};

const lectureTitles = {
  1: 'Lecture 01: Introduction to Chemistry',
  2: 'Lecture 02: Chemical Reactions and Stoichiometry',
  3: 'Lecture 03: Atomic and Molecular Structure',
  4: 'Lecture 04: Thermodynamics',
  5: 'Lecture 05: Chemical Equilibrium',
  6: 'Lecture 06: Organic Chemistry Fundamentals',
  7: 'Lecture 07: Analytical Chemistry Techniques',
};

const lectureDescriptions = {
  1: 'An overview of fundamental chemistry concepts and laboratory techniques.',
  2: 'Understanding how chemical reactions occur and how to calculate reaction quantities.',
  3: 'Study of atomic structures and chemical bonding principles.',
  4: 'Principles of energy changes and chemical reaction dynamics.',
  5: 'Exploration of reversible reactions and dynamic equilibrium concepts.',
  6: 'Introduction to organic compounds and reactions.',
  7: 'Methods for analyzing and characterizing chemical substances.',
};

const ChemistryVideoPage = () => {
  const [activeLecture, setActiveLecture] = useState(1);

  return (
    <div>
      <Header />
      <div className='chemistry-video-page-container'>
        <div className="chemistry-video-main-content">
          <div className="chemistry-video-sidebar">
            <div className="chemistry-video-course-outline">
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
          <div className="chemistry-video-section">
            <h2>{lectureTitles[activeLecture]}</h2>
            <div className="chemistry-video-container">
              <iframe
                src={lectureVideos[activeLecture]}
                title={lectureTitles[activeLecture]}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                frameBorder="0"
              ></iframe>
            </div>
            <p className="chemistry-video-description">
              {lectureDescriptions[activeLecture]}
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ChemistryVideoPage;
