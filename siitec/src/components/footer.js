
import React from 'react';
import '../styles/theme.css';
import '../styles/footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-main-content">
          <div className="footer-logo">
            <h2>Sii<span>Tec</span></h2>
            <p>School of Integrated Innovative Technology</p>
          </div>
          
          <div className="footer-links-horizontal">
            <div className="link-group">
              <h4 class="name">Academics</h4>
              <ul>
                <li><a href="#departments">Programs</a></li>
                <li><a href="#admissions">Admissions</a></li>
                <li><a href="#centers">Research</a></li>
              </ul>
            </div>
            
            <div className="link-group">
              <h4 class="name">About</h4>
              <ul>
                <li><a href="#about">Our Story</a></li>
                <li><a href="#faculty">Faculty</a></li>
                <li><a href="#facilities">Facilities</a></li>
              </ul>
            </div>
            
            <div className="link-group">
             < h4 class="name">Connect</h4>
              <ul>
                <li><a href="#contact">Contact</a></li>
                <li><a href="#news">News & Events</a></li>
                <li><a href="#careers">Careers</a></li>
              </ul>
            </div>
          </div>
          
          <div className="footer-social">
            <h4 class="name">Follow Us</h4>
            <div className="social-icons">
              <a href="https://twitter.com/kmitl" target="_blank" rel="noopener noreferrer" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
              <a href="https://linkedin.com/school/kmitl" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><i className="fab fa-linkedin"></i></a>
              <a href="https://facebook.com/kmitlofficial" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><i className="fab fa-facebook"></i></a>
              <a href="https://youtube.com/c/KMITLChannel" target="_blank" rel="noopener noreferrer" aria-label="YouTube"><i className="fab fa-youtube"></i></a>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} SiiTec - School of Integrated Innovative Technology. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;