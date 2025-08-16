import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import '../styles/AnimatedFeatures.css';

const AnimatedFeatures = () => {
  // Animation variants for container
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  // Animation variants for items
  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 10,
      },
    },
  };

  // Tech-inspired features
  const features = [
    {
      id: 1,
      title: 'Innovative Research',
      description: 'Pushing boundaries with cutting-edge technology research and development.',
      icon: '🔬',
      color: '#D4AF37', // Gold
    },
    {
      id: 2,
      title: 'Interdisciplinary Approach',
      description: 'Combining technology with various disciplines for comprehensive solutions.',
      icon: '🔄',
      color: '#B87333', // Copper
    },
    {
      id: 3,
      title: 'Industry Partnerships',
      description: 'Collaborating with leading tech companies for real-world applications.',
      icon: '🤝',
      color: '#758384', // Slate gray
    },
    {
      id: 4,
      title: 'Future-Ready Education',
      description: 'Preparing students for the evolving technological landscape.',
      icon: '🎓',
      color: '#D4AF37', // Gold
    },
  ];

  // Ref for intersection observer
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: false,
  });

  return (
    <section className="animated-features-section">
      <div className="tech-background">
        <div className="tech-grid"></div>
        <div className="tech-particles"></div>
      </div>
      
      <motion.div
        className="section-title-container"
        initial={{ opacity: 0, y: -20 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
        transition={{ duration: 0.6 }}
        ref={ref}
      >
        <h2 className="section-title">Innovative Technology</h2>
        <div className="title-underline">
          <motion.div 
            className="underline-animation"
            initial={{ width: 0 }}
            animate={inView ? { width: '100%' } : { width: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          />
        </div>
        <p className="section-subtitle">Exploring the intersection of technology and innovation</p>
      </motion.div>

      <motion.div
        className="features-container"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        {features.map((feature) => (
          <motion.div
            key={feature.id}
            className="feature-card"
            variants={itemVariants}
            style={{
              '--card-color': feature.color,
            }}
          >
            <div className="feature-icon">{feature.icon}</div>
            <h3 className="feature-title">{feature.title}</h3>
            <p className="feature-description">{feature.description}</p>
            <div className="tech-circuit"></div>
          </motion.div>
        ))}
      </motion.div>

      <div className="parallax-tech-elements">
        <div className="floating-element elem-1"></div>
        <div className="floating-element elem-2"></div>
        <div className="floating-element elem-3"></div>
      </div>
    </section>
  );
};

export default AnimatedFeatures;