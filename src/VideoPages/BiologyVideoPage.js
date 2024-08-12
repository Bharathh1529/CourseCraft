import React, { useState } from 'react';
import './BiologyVideoPage.css';
import Footer from '../Footer';
import Header from '../Header';

const lectureVideos = {
  1: 'https://www.youtube.com/embed/example1',
  2: 'https://www.youtube.com/embed/example2',
  3: 'https://www.youtube.com/embed/example3',
  4: 'https://www.youtube.com/embed/example4',
  5: 'https://www.youtube.com/embed/example5',
  6: 'https://www.youtube.com/embed/example6',
  7: 'https://www.youtube.com/embed/example7',
};

const lectureTitles = {
  1: 'Lecture 01: Introduction to Biology',
  2: 'Lecture 02: The Cell Structure',
  3: 'Lecture 03: Genetics and DNA',
  4: 'Lecture 04: Evolution and Natural Selection',
  5: 'Lecture 05: Ecology and Ecosystems',
  6: 'Lecture 06: Human Anatomy',
  7: 'Lecture 07: Plant Biology',
};

const lectureDescriptions = {
  1: 'This introductory lecture covers the basics of biology, including the scientific method and the key themes in biology such as evolution, energy transfer, and the relationship between structure and function.',
  2: 'This lecture delves into the structure and function of cells, the basic units of life. Topics include cell theory, cell organelles, and the differences between prokaryotic and eukaryotic cells.',
  3: 'An exploration of genetics, focusing on the molecular structure of DNA, how genes are expressed, and the principles of heredity and genetic variation.',
  4: 'This lecture covers the principles of evolution by natural selection, including the history of evolutionary thought, the evidence for evolution, and the mechanisms by which evolution occurs.',
  5: 'An introduction to ecology, the study of interactions between organisms and their environments. Topics include ecosystems, energy flow, and nutrient cycles.',
  6: 'A comprehensive look at human anatomy, including the major organ systems and their functions. Topics include the skeletal, muscular, and nervous systems.',
  7: 'This lecture focuses on plant biology, covering topics such as plant structure, growth, and reproduction, as well as the role of plants in ecosystems.',
};

const BiologyVideoPage = () => {
  const [activeLecture, setActiveLecture] = useState(1);

  return (
    <div>
      <Header/>
      <div className='biology-video-page-container'>
        <div className="biology-video-main-content">
          <div className="biology-video-sidebar">
            <div className="biology-video-course-outline">
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
          <div className="biology-video-section">
            <h2>{lectureTitles[activeLecture]}</h2>
            <div className="biology-video-container">
              <iframe
                src={lectureVideos[activeLecture]}
                title={lectureTitles[activeLecture]}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                frameBorder="0"
              ></iframe>
            </div>
            <p className="biology-video-description">
              {lectureDescriptions[activeLecture]}
            </p>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default BiologyVideoPage;
