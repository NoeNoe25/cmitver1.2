// src/components/Header.jsx
import React, { useState, useRef, useEffect } from 'react';
import '../styles/theme.css';
import '../styles/header.css';
// Import your logo image
import logoImage from '../assets/siiteclogo (1).png'; // Adjust path as needed

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [language, setLanguage] = useState('EN');
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);
  const navRef = useRef(null);

  // Handle responsive behavior
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
      // Close menu when resizing to desktop if it was open
      if (window.innerWidth >= 1024 && menuOpen) {
        setMenuOpen(false);
        setActiveDropdown(null);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [menuOpen]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const toggleDropdown = (dropdownName) => {
    setActiveDropdown(activeDropdown === dropdownName ? null : dropdownName);
  };

  const toggleLanguage = () => {
    setLanguage(language === 'EN' ? 'TH' : 'EN');
  };

  // Menu Items with EN + TH versions
  const menuItems = [
    { name: language === 'EN' ? 'Home' : 'หน้าหลัก', link: '#home' },
    { 
      name: language === 'EN' ? 'Academics' : 'การศึกษา',
      submenu: [
        { name: language === 'EN' ? 'Undergraduate' : 'ปริญญาตรี', link: '#undergrad' },
        { name: language === 'EN' ? 'Graduate' : 'บัณฑิตศึกษา', link: '#grad' },
        { name: language === 'EN' ? 'Online Programs' : 'หลักสูตรออนไลน์', link: '#online' }
      ]
    },
    { 
      name: language === 'EN' ? 'Research' : 'งานวิจัย',
      submenu: [
        { name: language === 'EN' ? 'Research Centers' : 'ศูนย์วิจัย', link: '#centers' },
        { name: language === 'EN' ? 'Projects' : 'โครงการวิจัย', link: '#projects' },
        { name: language === 'EN' ? 'Publications' : 'สิ่งตีพิมพ์', link: '#pubs' }
      ]
    },
    { 
      name: language === 'EN' ? 'Student Life' : 'ชีวิตนักศึกษา',
      submenu: [
        { name: language === 'EN' ? 'Clubs & Activities' : 'ชมรมและกิจกรรม', link: '#clubs' },
        { name: language === 'EN' ? 'Housing' : 'หอพัก', link: '#housing' },
        { name: language === 'EN' ? 'Events' : 'กิจกรรมพิเศษ', link: '#events' },
        { name: language === 'EN' ? 'News & Events' : 'ข่าวและกิจกรรม', link: '#news' }
      ]
    },
    { name: language === 'EN' ? 'Admissions' : 'การรับสมัคร', link: '#admissions' },
    { name: language === 'EN' ? 'About Us' : 'เกี่ยวกับเรา', link: '#about' },
    { name: language === 'EN' ? 'Contact' : 'ติดต่อ', link: '#contact' }
  ];

  // Smart description text that adapts to screen size
  const getDescriptionText = () => {
    if (isMobile) {
      return language === 'EN' ? 'SII Tech' : 'สาขาเทคโนโลยี';
    }
    
    return language === 'EN' 
      ? 'School of Integrated Innovative Technology' 
      : 'คณะเทคโนโลยีบูรณาการนวัตกรรม';
  };

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          {/* Replace text with logo image */}
          <a href="/" className="logo-link">
            <img 
              src={logoImage} 
              alt="SiiTec - School of Integrated Innovative Technology" 
              className="logo-image"
            />
          </a>
          
        </div>
        
        <button 
          className={`menu-toggle ${menuOpen ? 'active' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span></span><span></span><span></span>
        </button>
        
        <nav className={`nav ${menuOpen ? 'active' : ''}`} ref={navRef}>
          <ul className="nav-list">
            {menuItems.map((item, index) => (
              <li 
                key={index} 
                className={`nav-item ${item.submenu ? 'has-dropdown' : ''}`}
              >
                {item.submenu ? (
                  <>
                    <button 
                      className="nav-link dropdown-toggle"
                      onClick={() => toggleDropdown(item.name)}
                      aria-expanded={activeDropdown === item.name}
                    >
                      {item.name} &nbsp;
                      <svg width="12" height="8" viewBox="0 0 12 8" fill="none">
                        <path d="M1 1L6 6L11 1" stroke="currentColor" strokeWidth="2"/>
                      </svg>
                    </button>
                    <ul className={`dropdown-menu vertical ${activeDropdown === item.name ? 'show' : ''}`}>
                      {item.submenu.map((subItem, subIndex) => (
                        <li key={subIndex}>
                          <a 
                            className="dropdown-item" 
                            href={subItem.link}
                            onClick={() => {
                              setMenuOpen(false);
                              setActiveDropdown(null);
                            }}
                          >
                            {subItem.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </>
                ) : (
                  <a 
                    className="nav-link"
                    href={item.link}
                    onClick={() => {
                      setMenuOpen(false);
                      setActiveDropdown(null);
                    }}
                  >
                    {item.name}
                  </a>
                )}
              </li>
            ))}
          </ul>
          <div className="mobile-actions">
            <button className="apply-button mobile-apply">{language === 'EN' ? 'Apply Now' : 'สมัครเรียน'}</button>
            <button className="language-switcher" onClick={toggleLanguage}>
              {language === 'EN' ? 'TH' : 'EN'}
            </button>
          </div>
        </nav>
        
        <div className="header-actions">
          <button className="apply-button desktop-apply">{language === 'EN' ? 'Apply Now' : 'สมัครเรียน'}</button>
          <button className="language-switcher" onClick={toggleLanguage}>
            {language === 'EN' ? 'TH' : 'EN'}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;