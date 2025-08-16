// src/components/Departments.jsx
import React from 'react';
import '../styles/theme.css';
import '../styles/departments.css';
// Import your logo images - make sure these paths are correct for your project


const Departments = () => {
  return (
    <section className="departments" id="departments">
      <div className="tech-pattern"></div>
      <div className="section-header">
        <h2>Collaborative <span>Faculties</span></h2>
        <p>Strategic partnership between our leading technology departments</p>
      </div>
      
      <div className="departments-showcase">
        <div className="department-card cmit">
          <div className="dept-content">
            <h3>College of Manufacturing Integrated Technology</h3>
            <p className="dept-acronym">CMIT</p>
            <p className="dept-description">
              Pioneering integrated solutions for modern manufacturing challenges through interdisciplinary approaches.
            </p>
          </div>
          <div className="dept-glow" style={{ background: "var(--copper-dark)" }}></div>
        </div>

        <div className="collab-symbol">
          <div className="symbol-circle">+</div>
          <p className="symbol-text">Collaboration</p>
        </div>

        <div className="department-card amt">
          <div className="dept-content">
            <h3>Advanced Manufacturing Technology</h3>
            <p className="dept-acronym">AMT</p>
            <p className="dept-description">
              Driving innovation in manufacturing processes through cutting-edge technologies and automation.
            </p>
          </div>
          <div className="dept-glow" style={{ background: "var(--copper-light)" }}></div>
        </div>
      </div>
    </section>
  );
};

export default Departments;