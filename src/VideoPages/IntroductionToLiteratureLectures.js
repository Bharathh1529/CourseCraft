import React, { useState } from 'react';
import './IntroductionToLiteratureLectures.css'; // Ensure the correct import path
import Header from '../Header';
import Footer from '../Footer';

const literatureLectureVideos = {
  1: 'https://www.youtube.com/embed/link_to_literature_video_1',
  2: 'https://www.youtube.com/embed/link_to_literature_video_2',
  3: 'https://www.youtube.com/embed/link_to_literature_video_3',
  4: 'https://www.youtube.com/embed/link_to_literature_video_4',
  5: 'https://www.youtube.com/embed/link_to_literature_video_5',
};

const literatureLectureTitles = {
  1: 'Lecture 01: Introduction to Literary Analysis',
  2: 'Lecture 02: Exploring Poetry',
  3: 'Lecture 03: Understanding Prose',
  4: 'Lecture 04: Drama and Performance',
  5: 'Lecture 05: World Literature Overview',
};

const literatureLectureDescriptions = {
  1: 'An introduction to the basics of literary analysis, focusing on critical reading and writing skills. We will explore various methods and approaches to analyzing literary texts.',
  2: 'This lecture dives into the world of poetry, examining different forms, structures, and themes. We will discuss how to interpret and appreciate poetic works.',
  3: 'An overview of prose, both fiction and non-fiction. We will analyze narrative techniques, styles, and the impact of prose on readers.',
  4: 'Exploring drama from text to stage, this lecture covers the key elements of playwriting, performance, and the interpretation of dramatic works.',
  5: 'A survey of world literature, highlighting diverse perspectives and traditions. We will explore significant literary works from various cultures and their impact on global literature.',
};

const IntroductionToLiteratureLectures = () => {
  const [activeLecture, setActiveLecture] = useState(1);

  return (
    <div>
      <Header />
      <div className='literature-lectures-page-container'>
        <div className="literature-lectures-main-content">
          <div className="literature-lectures-sidebar">
            <div className="literature-lectures-course-outline">
              <h3>Course Outline</h3>
              <ul>
                {Object.keys(literatureLectureTitles).map((key) => (
                  <li
                    key={key}
                    className={activeLecture === parseInt(key) ? 'active' : ''}
                    onClick={() => setActiveLecture(parseInt(key))}
                    role="button"
                    tabIndex="0"
                    aria-selected={activeLecture === parseInt(key)}
                  >
                    {literatureLectureTitles[key]}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="literature-lectures-section">
            <h2>{literatureLectureTitles[activeLecture]}</h2>
            <div className="literature-lectures-video-container">
              <iframe
                src={literatureLectureVideos[activeLecture]}
                title={literatureLectureTitles[activeLecture]}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                frameBorder="0"
              ></iframe>
            </div>
            <p className="literature-lectures-description">
              {literatureLectureDescriptions[activeLecture]}
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default IntroductionToLiteratureLectures;
