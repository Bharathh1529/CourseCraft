import React, { useState } from 'react';
import './ModernPhysicsVideoPage.css';  
import Footer from '../Footer';
import Header from '../Header';

const physicsLectureVideos = {
  1: 'https://www.youtube.com/embed/link_to_physics_video_1', 
  2: 'https://www.youtube.com/embed/link_to_physics_video_2',
  3: 'https://www.youtube.com/embed/link_to_physics_video_3',
  4: 'https://www.youtube.com/embed/link_to_physics_video_4',
  5: 'https://www.youtube.com/embed/link_to_physics_video_5',
  6: 'https://www.youtube.com/embed/link_to_physics_video_6',
  7: 'https://www.youtube.com/embed/link_to_physics_video_7',
};

const physicsLectureTitles = {
  1: 'Lecture 01: Introduction to Modern Physics',
  2: 'Lecture 02: Quantum Mechanics Fundamentals',
  3: 'Lecture 03: Special Theory of Relativity',
  4: 'Lecture 04: Particle Physics Basics',
  5: 'Lecture 05: Nuclear Physics and Applications',
  6: 'Lecture 06: Astrophysics and Cosmology',
  7: 'Lecture 07: Advanced Topics in Modern Physics',
};

const physicsLectureDescriptions = {
  1: 'This introductory lecture covers the basic concepts and developments that define modern physics. We will discuss the transition from classical to modern physics, highlighting the limitations of classical theories and the emergence of quantum mechanics and relativity. Key topics include wave-particle duality, uncertainty principle, and the fundamental forces of nature.',
  2: 'In this lecture, we delve into the core principles of quantum mechanics. Topics include the Schrödinger equation, quantum states, wave functions, and probability amplitudes. We will explore the concept of quantization, quantum superposition, and the role of observers in measurement. Key experiments, such as the double-slit experiment, will be discussed to illustrate quantum phenomena.',
  3: 'This lecture focuses on Einstein’s Special Theory of Relativity. We will cover the postulates of relativity, time dilation, length contraction, and the famous equation E=mc^2. The lecture also explores the implications of relativity for our understanding of space, time, and energy, and how it revolutionized physics.',
  4: 'An introduction to particle physics, this lecture covers the Standard Model, which describes the fundamental particles and their interactions. We will discuss quarks, leptons, gauge bosons, and the Higgs boson. The lecture also includes an overview of particle accelerators and detectors, and how they are used to explore the subatomic world.',
  5: 'This lecture explores the field of nuclear physics, including the structure and properties of atomic nuclei. Topics include nuclear decay, fusion and fission processes, and their applications in energy production and medicine. We will also discuss the role of nuclear physics in astrophysical phenomena.',
  6: 'Astrophysics and cosmology are the focus of this lecture, where we explore the large-scale structure of the universe. Topics include the Big Bang theory, cosmic microwave background radiation, dark matter, and dark energy. We will also discuss the lifecycle of stars, black holes, and the evolution of galaxies.',
  7: 'In this final lecture, we cover advanced topics in modern physics, including string theory, quantum field theory, and the quest for a unified theory. We will discuss current research frontiers and the challenges facing physicists today. The lecture aims to provide a glimpse into the ongoing efforts to understand the fundamental nature of reality.',
};

const ModernPhysicsVideoPage = () => {
  const [activePhysicsLecture, setActivePhysicsLecture] = useState(1);

  return (
    <div>
      <Header/>
      <div className='modern-physics-video-page-container'>
        <div className="modern-physics-video-main-content">
          <div className="modern-physics-video-sidebar">
            <div className="modern-physics-video-course-outline">
              <h3>Course Outline</h3>
              <ul>
                {Object.keys(physicsLectureTitles).map((key) => (
                  <li
                    key={key}
                    className={activePhysicsLecture === parseInt(key) ? 'active' : ''}
                    onClick={() => setActivePhysicsLecture(parseInt(key))}
                    role="button"
                    tabIndex="0"
                    aria-selected={activePhysicsLecture === parseInt(key)}
                  >
                    {physicsLectureTitles[key]}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="modern-physics-video-section">
            <h2>{physicsLectureTitles[activePhysicsLecture]}</h2>
            <div className="modern-physics-video-container">
              <iframe
                src={physicsLectureVideos[activePhysicsLecture]}
                title={physicsLectureTitles[activePhysicsLecture]}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                frameBorder="0"
              ></iframe>
            </div>
            <p className="modern-physics-video-description">
              {physicsLectureDescriptions[activePhysicsLecture]}
            </p>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default ModernPhysicsVideoPage;
