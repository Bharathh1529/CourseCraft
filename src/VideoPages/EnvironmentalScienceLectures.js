import React, { useState } from 'react';
import './EnvironmentalScienceLectures.css';
import Footer from '../Footer';
import Header from '../Header';

const lectureVideos = {
  1: 'https://www.youtube.com/embed/Uv7cKlZFXU8', // Replace with actual video URLs
  2: 'https://www.youtube.com/embed/Uv7cKlZFXU8',
  3: 'https://www.youtube.com/embed/Uv7cKlZFXU8',
  4: 'https://www.youtube.com/embed/Uv7cKlZFXU8',
  5: 'https://www.youtube.com/embed/Uv7cKlZFXU8',
  6: 'https://www.youtube.com/embed/Uv7cKlZFXU8',
  7: 'https://www.youtube.com/embed/Uv7cKlZFXU8',
};

const lectureTitles = {
  1: 'Lecture 01: Introduction to Environmental Science',
  2: 'Lecture 02: Ecology and Ecosystems',
  3: 'Lecture 03: Environmental Policies and Regulations',
  4: 'Lecture 04: Climate Change and Mitigation',
  5: 'Lecture 05: Resource Management',
  6: 'Lecture 06: Conservation Strategies',
  7: 'Lecture 07: Environmental Data Analysis',
};

const lectureDescriptions = {
  1: 'In this foundational lecture, we delve into the basics of environmental science and sustainability.',
  2: 'Understanding ecosystems, species interactions, and biodiversity.',
  3: 'Study of environmental laws and policy frameworks.',
  4: 'Examination of climate change impacts and strategies for mitigation.',
  5: 'Principles of managing natural resources sustainably.',
  6: 'Techniques and strategies for environmental conservation.',
  7: 'Methods for analyzing and interpreting environmental data.',
};

const EnvironmentalScienceLectures = () => {
  const [activeLecture, setActiveLecture] = useState(1);

  return (
    <div>
      <Header/>
      <div className='environmental-science-lectures-page-container'>
        <div className="environmental-science-lectures-main-content">
          <div className="environmental-science-lectures-sidebar">
            <div className="environmental-science-lectures-course-outline">
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
          <div className="environmental-science-lectures-video-section">
            <h2>{lectureTitles[activeLecture]}</h2>
            <div className="environmental-science-lectures-video-container">
              <iframe
                src={lectureVideos[activeLecture]}
                title={lectureTitles[activeLecture]}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                frameBorder="0"
              ></iframe>
            </div>
            <p className="environmental-science-lectures-description">
              This is a placeholder description for {lectureTitles[activeLecture]}.
              <br/><br/>
              {lectureDescriptions[activeLecture]}
            </p>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default EnvironmentalScienceLectures;
