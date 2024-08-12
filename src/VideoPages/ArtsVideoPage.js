import React, { useState } from 'react';
import './ArtsVideoPage.css';
import Footer from '../Footer';
import Header from '../Header';

const lectureVideos = {
  1: 'https://www.youtube.com/embed/Uv7cKlZFXU8',
  2: 'https://www.youtube.com/embed/Uv7cKlZFXU8',
  3: 'https://www.youtube.com/embed/Uv7cKlZFXU8',
  4: 'https://www.youtube.com/embed/Uv7cKlZFXU8',
  5: 'https://www.youtube.com/embed/Uv7cKlZFXU8',
  6: 'https://www.youtube.com/embed/Uv7cKlZFXU8',
  7: 'https://www.youtube.com/embed/Uv7cKlZFXU8',
};

const lectureTitles = {
  1: 'Course 01: Introduction to Art History',
  2: 'Course 02: Renaissance Art Overview',
  3: 'Course 03: Modern Art Movements',
  4: 'Course 04: Non-Western Art Studies',
  5: 'Course 05: Art Criticism and Theory',
  6: 'Course 06: Contemporary Art Trends',
  7: 'Course 07: Art and Technology',
};

const lectureDescriptions = {
  1: 'In this foundational lecture, we delve into the origins of art, tracing its development from prehistoric cave paintings to the art of ancient civilizations. Topics include the evolution of artistic techniques, the role of art in early societies, and how ancient cultures such as the Egyptians, Greeks, and Romans influenced subsequent artistic traditions. We will also explore how art served as a form of communication and documentation in these early periods.',
  2: 'This lecture provides an in-depth look at the Renaissance, a period marked by a revival of classical knowledge and artistic innovation. We will examine the contributions of key figures such as Leonardo da Vinci, Michelangelo, and Raphael, and analyze their masterpieces. The discussion will cover advancements in perspective, anatomical accuracy, and the use of light and shadow. We will also explore the cultural and philosophical shifts that influenced Renaissance art and how it shaped the course of Western art history.',
  3: 'In this lecture, we explore the major movements of modern art, including Impressionism, Expressionism, Cubism, and Surrealism. We will discuss how these movements emerged as responses to industrialization, urbanization, and changing social norms. Key artists such as Claude Monet, Vincent van Gogh, Pablo Picasso, and Salvador Dalí will be highlighted. The lecture will also address how these movements challenged traditional artistic conventions and introduced new ways of seeing and representing the world.',
  4: 'This lecture focuses on non-Western art traditions, offering a comparative analysis of art from diverse cultures around the world. We will explore African art forms such as masks and sculptures, Asian art including Chinese scrolls and Japanese woodblock prints, and indigenous art from the Americas. The discussion will emphasize the cultural significance of these artworks, their role in rituals and ceremonies, and how they reflect the values and beliefs of their respective societies. We will also consider how these art forms have influenced and been influenced by Western art traditions.',
  5: 'This lecture provides a comprehensive overview of art criticism and theory, equipping you with the tools to analyze and interpret artworks effectively. We will cover various approaches to art criticism, including formalism, iconography, and contextual analysis. The lecture will explore key theoretical frameworks and methodologies used by critics and scholars, and provide practical examples of how these methods are applied in evaluating different art forms. We will also discuss the role of subjectivity and cultural context in art criticism.',
  6: 'In this lecture, we examine contemporary art practices and trends, focusing on how artists address current social, political, and technological issues through their work. Topics include postmodernism, conceptual art, and the impact of globalization on art. We will highlight prominent contemporary artists and their contributions, and explore how contemporary art challenges traditional boundaries and engages with new media and technologies. The lecture will also address the role of art institutions and the art market in shaping contemporary art.',
  7: 'This lecture explores the intersection of art and technology, examining how digital tools and innovations are transforming the creation and perception of art. We will discuss digital art forms, including virtual reality, augmented reality, and interactive installations. The lecture will also cover the implications of these technologies for artists, audiences, and the art world at large. We will consider how technology is influencing artistic practices, changing the way art is experienced, and expanding the possibilities for creative expression.',
};

const ArtsVideoPage = () => {
  const [activeLecture, setActiveLecture] = useState(1);

  return (
    <div>
      <Header/>
      <div className='arts-video-page-container'>
        <div className="arts-video-main-content">
          <div className="arts-video-sidebar">
            <div className="arts-video-course-outline">
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
          <div className="arts-video-section">
            <h2>{lectureTitles[activeLecture]}</h2>
            <div className="arts-video-container">
              <iframe
                src={lectureVideos[activeLecture]}
                title={lectureTitles[activeLecture]}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                frameBorder="0"
              ></iframe>
            </div>
            <p className="arts-video-description">
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

export default ArtsVideoPage;
