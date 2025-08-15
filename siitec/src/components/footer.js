
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
              <h4>Academics</h4>
              <ul>
                <li><a href="#">Programs</a></li>
                <li><a href="#">Admissions</a></li>
                <li><a href="#">Research</a></li>
              </ul>
            </div>
            
            <div className="link-group">
              <h4>About</h4>
              <ul>
                <li><a href="#">Our Story</a></li>
                <li><a href="#">Faculty</a></li>
                <li><a href="#">Facilities</a></li>
              </ul>
            </div>
            
            <div className="link-group">
              <h4>Connect</h4>
              <ul>
                <li><a href="#">Contact</a></li>
                <li><a href="#">News & Events</a></li>
                <li><a href="#">Careers</a></li>
              </ul>
            </div>
          </div>
          
          <div className="footer-social">
            <h4>Follow Us</h4>
            <div className="social-icons">
              <a href="#"><i className="fab fa-twitter"></i></a>
              <a href="#"><i className="fab fa-linkedin"></i></a>
              <a href="#"><i className="fab fa-instagram"></i></a>
              <a href="#"><i className="fab fa-youtube"></i></a>
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