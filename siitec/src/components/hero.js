import React, { useRef, useEffect } from 'react';
import '../styles/theme.css';
import '../styles/hero.css';
import backgroundVideo from '../assets/video1.mp4';
import photo1 from '../assets/photo1.jpg';
import photo2 from '../assets/photo2.jpg';

const Hero = () => {
  const videoRef = useRef(null);
  const heroRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      if (videoRef.current && heroRef.current) {
        const heroHeight = heroRef.current.offsetHeight;
        videoRef.current.style.height = `${heroHeight}px`;
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const newsItems = [
    {
      id: 1,
      title: "New AI Research Lab Opening",
      date: "June 15, 2023",
      excerpt: "Our state-of-the-art facility begins operations next month",
      image: photo1
    },
    {
      id: 2,
      title: "Industry Partnership",
      date: "May 28, 2023",
      excerpt: "Collaborating with TechGlobal on quantum computing",
      image: photo2
    }
  ];

  const techStats = [
    { number: "12+", label: "Tech Labs" },
    { number: "350+", label: "Projects" },
    { number: "96%", label: "Employment" }
  ];

  return (
    <section className="hero" id="home" ref={heroRef}>
      <div className="video-background">
        <video ref={videoRef} autoPlay loop muted playsInline>
          <source src={backgroundVideo} type="video/mp4" />
        </video>
        <div className="video-overlay"></div>
      </div>

      <div className="hero-container split-layout">
        {/* Hero Content on Left */}
        <div className="hero-content left-align">
          <h1>Shaping the Future of <span>Integrated Technology</span></h1>
          <p>At SiiTec, we blend cutting-edge disciplines to create innovative solutions for tomorrow's challenges.</p>
          
          
          <div className="hero-buttons">
            <button className="primary-button">Explore Programs</button>
            <button className="secondary-button">Virtual Tour</button>
          </div>

           {/* Tech Stats */}
          <div className="tech-stats-container">
            {techStats.map((stat, index) => (
              <div key={index} className="tech-stat">
                <div className="tech-stat-number">{stat.number}</div>
                <div className="tech-stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Horizontal Cards on Right */}
        <div className="news-cards-container horizontal-right">
          {newsItems.map(item => (
            <div key={item.id} className="horizontal-card">
              <div className="card-image">
                <img src={item.image} alt={item.title} />
              </div>
              <div className="card-body">
                <h5 className="card-title">{item.title}</h5>
                <p className="card-text">{item.excerpt}</p>
                <p className="card-date">{item.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;