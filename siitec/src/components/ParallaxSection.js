import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import '../styles/ParallaxSection.css';

const ParallaxSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.2 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  };

  return (
      <section className="parallax-section" ref={sectionRef}>
        <div className="parallax-banner" style={{ height: '80vh' }}>
          <div className="parallax-background" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80)' }}></div>
          
          <div className="overlay">
            <div className="tech-grid-overlay"></div>
          </div>
          
          <div className="content-container">
            <motion.div
              className="parallax-content"
              variants={textVariants}
              initial="hidden"
              animate={isVisible ? "visible" : "hidden"}
            >
              <h2 className="parallax-title">Innovate. Integrate. Inspire.</h2>
              <p className="parallax-subtitle">
                At the School of Integrated Innovative Technology, we're shaping the future through
                cutting-edge research and interdisciplinary education.
              </p>
              <motion.button 
                className="tech-button"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Discover Our Programs
                <span className="button-glow"></span>
              </motion.button>
            </motion.div>
          </div>
        </div>
        
        <div className="tech-stats-container">
          <motion.div 
            className="tech-stat"
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="stat-value">15+</div>
            <div className="stat-label">Research Labs</div>
            <div className="stat-circle"></div>
          </motion.div>
          
          <motion.div 
            className="tech-stat"
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="stat-value">50+</div>
            <div className="stat-label">Industry Partners</div>
            <div className="stat-circle"></div>
          </motion.div>
          
          <motion.div 
            className="tech-stat"
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <div className="stat-value">200+</div>
            <div className="stat-label">Publications</div>
            <div className="stat-circle"></div>
          </motion.div>
          
          <motion.div 
            className="tech-stat"
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <div className="stat-value">95%</div>
            <div className="stat-label">Graduate Employment</div>
            <div className="stat-circle"></div>
          </motion.div>
        </div>
      </section>
  );
};

export default ParallaxSection;