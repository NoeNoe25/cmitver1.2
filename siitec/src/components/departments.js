import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import '../styles/departments.css'; // We'll create this CSS file
import manufacturingImg from '../assets/department (1).jpg';
import materialsImg from '../assets/department (2).jpg';
const Departments = () => {
  const [headerRef, headerInView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  
  const [cardsRef, cardsInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  const headerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };
  
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.6,
      },
    }),
  };
  
  const departments = [
    {
      id: 1,
      title: 'College of Advanced Manufacturing Innovation',
      description: 'Pioneering the future of manufacturing through automation, robotics, and smart factory technologies.',
      features: [
        'Advanced Robotics and Automation',
        'Smart Manufacturing Systems',
        'Industrial IoT Applications',
        'Digital Twin Technology',
      ],
      image: manufacturingImg,
      altText: 'Advanced manufacturing lab with robotic arms'
    },
    {
      id: 2,
      title: 'College of Material Innovation and Technology',
      description: 'Developing next-generation materials and technologies for sustainable and high-performance applications.',
      features: [
        'Advanced Materials Design',
        'Sustainable Materials Development',
        'Nanomaterials and Nanotechnology',
        'Biomaterials and Medical Applications',
      ],
      image: materialsImg,
    altText: 'Materials science laboratory with microscope'
    },
  ];
  
  return (
    <section className="departments-section" id="departments">
      <div className="background-accent"></div>
      <div className="background-accent-2"></div>
      
      <div className="departments-container">
        <div className="section-header" ref={headerRef}>
          <motion.h2
            className="section-title"
            variants={headerVariants}
            initial="hidden"
            animate={headerInView ? "visible" : "hidden"}
          >
            Our Departments
          </motion.h2>
          
          <motion.p
            className="section-description"
            variants={headerVariants}
            initial="hidden"
            animate={headerInView ? "visible" : "hidden"}
            transition={{ delay: 0.2 }}
          >
            SIITec comprises two specialized departments, each focused on advancing knowledge and innovation in their respective fields.
          </motion.p>
        </div>
        
        <div className="departments-grid" ref={cardsRef}>
          {departments.map((department, index) => (
            <motion.div
              key={department.id}
              className="department-card"
              custom={index}
              variants={cardVariants}
              initial="hidden"
              animate={cardsInView ? "visible" : "hidden"}
            >
              <img 
  src={department.image} 
  alt={department.altText}
  className="department-img"
  loading="lazy"
/>
              
              <div className="department-content">
                <h3 className="department-title">{department.title}</h3>
                <p className="department-description">{department.description}</p>
                
                <ul className="features-list">
                  {department.features.map((feature, i) => (
                    <li key={i} className="feature-item">{feature}</li>
                  ))}
                </ul>
                
                <motion.button
                  className="learn-more-button"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Learn More
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Departments;