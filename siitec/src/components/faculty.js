// src/components/Faculty.jsx
import React from 'react';
import '../styles/theme.css';
import '../styles/faculty.css';
import professor1 from '../assets/professor1.jpg';
import professor2 from '../assets/professor2.jpg';
import professor3 from '../assets/professor3.jpg';

const Faculty = () => {
  const facultyMembers = [
    {
      id: 1,
      name: "ผู้ช่วยศาสตราจารย์ ดร. วิภู ศรีสืบสาย",
      position: "Dean",
      expertise: "AI & Systems Integration",
      image: professor1,
      social: {
        linkedin: "#",
        twitter: "#",
        email: "#"
      }
    },
    {
      id: 2,
      name: "ผู้ช่วยศาสตราจารย์ ดร. ปิติพร ถนอมงาม",
      position: "Vice Dean",
      expertise: "Autonomous Systems",
      image: professor2,
      social: {
        linkedin: "#",
        twitter: "#",
        email: "#"
      }
    },
    {
      id: 3,
      name: "รองศาสตราจารย์ ดร. วินัดดา วงศ์วิริยะพันธ์",
      position: "Vice Dean",
      expertise: "Convergent Data Systems",
      image: professor3,
      social: {
        linkedin: "#",
        twitter: "#",
        email: "#"
      }
    }
  ];

  return (
    <section className="faculty" id="faculty">
      <div className="section-header">
        <h2>World-Class <span>Faculty</span></h2>
        <p>Learn from industry pioneers and academic leaders</p>
      </div>
      <div className="faculty-grid">
        {facultyMembers.map(member => (
          <div className="faculty-card" key={member.id}>
            <div className="faculty-image">
              <img src={member.image} alt={member.name} />
              <div className="expertise-badge">{member.expertise}</div>
              <div className="tech-overlay"></div>
            </div>
            <div className="faculty-card-content">
              <h3>{member.name}</h3>
              <p className="position">{member.position}</p>
              <div className="faculty-social">
                <a href={member.social.linkedin} aria-label="LinkedIn">
                  <i className="fab fa-linkedin-in"></i>
                </a>
                <a href={member.social.twitter} aria-label="Twitter">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href={member.social.email} aria-label="Email">
                  <i className="fas fa-envelope"></i>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Faculty;