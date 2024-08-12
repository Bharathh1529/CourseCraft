import React from 'react';
import './InfoSection.css'; // Ensure this path is correct
import Icon1 from './Photos/TrustedContent2.jpg'; // Replace with your image path
import Icon2 from './Photos/TrustedContent.jpg'; // Replace with your image path
import Icon3 from './Photos/ToolsToEmpower.jpg'; // Replace with your image path

const InfoSection = () => {
    return (
        <div className='Info'>
            <div className='why-it-works'>
                <h2>Why CourseCraft Works</h2>
            </div>
            <div className="info-section">
                <div className="info-box">
                    <img src={Icon1} alt="Personalized Learning" />
                    <h3>Personalized Learning</h3>
                    <p>Students practice at their own pace, first filling in gaps in their understanding and then accelerating their learning.</p>
                </div>
                <div className="info-box">
                    <img src={Icon2} alt="Trusted Content" />
                    <h3>Trusted Content</h3>
                    <p>Created by experts, our library of trusted, standards-aligned practice and lessons covers a wide range of subjects.</p>
                </div>
                <div className="info-box">
                    <img src={Icon3} alt="Tools to Empower Teachers" />
                    <h3>Tools to Empower Teachers</h3>
                    <p>With our tools, teachers can identify gaps in their students' understanding, tailor instruction, and meet the needs of every student.</p>
                </div>
            </div>
        </div>
    );
}

export default InfoSection;
