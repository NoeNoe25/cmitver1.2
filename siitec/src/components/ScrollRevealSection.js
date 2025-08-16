import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import '../styles/ScrollRevealSection.css';

const ScrollRevealSection = () => {
  // Timeline items with tech-inspired content
  const timelineItems = [
    {
      id: 1,
      year: '2010',
      title: 'Faculty Established',
      description: 'The School of Integrated Innovative Technology was founded with a vision to bridge technology and innovation.',
      icon: '🏛️',
    },
    {
      id: 2,
      year: '2013',
      title: 'Research Center Launch',
      description: 'Opened state-of-the-art research facilities focusing on AI, robotics, and sustainable technologies.',
      icon: '🔬',
    },
    {
      id: 3,
      year: '2016',
      title: 'Industry Partnership Program',
      description: 'Established collaborative programs with leading tech companies to bridge academia and industry.',
      icon: '🤝',
    },
    {
      id: 4,
      year: '2019',
      title: 'International Recognition',
      description: 'Received international accreditation and recognition for innovative teaching methodologies.',
      icon: '🌍',
    },
    {
      id: 5,
      year: '2022',
      title: 'Future Tech Initiative',
      description: 'Launched a comprehensive initiative focusing on emerging technologies and their societal impact.',
      icon: '🚀',
    },
  ];

  return (
    <section className="scroll-reveal-section">
      <div className="tech-background-reveal">
        <div className="tech-lines"></div>
      </div>
      
      <div className="section-header">
        <RevealElement>
          <h2 className="reveal-title">Our Journey</h2>
        </RevealElement>
        <RevealElement delay={0.2}>
          <p className="reveal-subtitle">Milestones in innovation and technological advancement</p>
        </RevealElement>
      </div>

      <div className="timeline-container">
        {timelineItems.map((item, index) => (
          <TimelineItem 
            key={item.id}
            item={item}
            index={index}
            isEven={index % 2 === 0}
          />
        ))}
        <div className="timeline-line"></div>
      </div>

      <div className="tech-quote-container">
        <RevealElement>
          <blockquote className="tech-quote">
            "Innovation distinguishes between a leader and a follower. At our school, we create the leaders of tomorrow."
          </blockquote>
        </RevealElement>
        <RevealElement delay={0.3}>
          <p className="quote-author">— Dr. Jane Chen, Dean</p>
        </RevealElement>
      </div>
    </section>
  );
};

// Component for individual timeline items
const TimelineItem = ({ item, index, isEven }) => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: false,
  });

  const variants = {
    hidden: { 
      opacity: 0,
      x: isEven ? -50 : 50,
    },
    visible: { 
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        delay: index * 0.2,
        ease: 'easeOut',
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      className={`timeline-item ${isEven ? 'left' : 'right'}`}
      variants={variants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
    >
      <div className="timeline-content">
        <div className="timeline-icon">{item.icon}</div>
        <div className="timeline-year">{item.year}</div>
        <h3 className="timeline-title">{item.title}</h3>
        <p className="timeline-description">{item.description}</p>
        <div className="timeline-dot"></div>
        <div className="timeline-connector"></div>
      </div>
    </motion.div>
  );
};

// Reusable component for revealing elements on scroll
const RevealElement = ({ children, delay = 0 }) => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });

  const variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: delay,
        ease: 'easeOut',
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
    >
      {children}
    </motion.div>
  );
};

export default ScrollRevealSection;