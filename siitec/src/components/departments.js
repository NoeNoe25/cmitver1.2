import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { theme } from '../styles/theme2.ts';

const DepartmentsSection = styled.section`
  padding: ${theme.spacing.xxl} 0;
  background-color: ${theme.colors.background};
  position: relative;
  overflow: hidden;
`;

const BackgroundAccent = styled.div`
  position: absolute;
  top: -100px;
  right: -100px;
  width: 300px;
  height: 300px;
  border-radius: 50%;
  background-color: rgba(184, 115, 51, 0.1); /* Copper with opacity */
  z-index: 1;
`;

const BackgroundAccent2 = styled.div`
  position: absolute;
  bottom: -100px;
  left: -100px;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-color: rgba(117, 131, 132, 0.1); /* Gray with opacity */
  z-index: 1;
`;

const DepartmentsContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${theme.spacing.lg};
  position: relative;
  z-index: 2;
`;

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: ${theme.spacing.xxl};
`;

const SectionTitle = styled(motion.h2)`
  font-size: 2.5rem;
  color: ${theme.colors.text};
  margin-bottom: ${theme.spacing.md};
  display: inline-block;
  position: relative;
  
  &:after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 3px;
    background-color: ${theme.colors.copper};
  }
`;

const SectionDescription = styled(motion.p)`
  font-size: 1.1rem;
  max-width: 700px;
  margin: 0 auto;
  color: ${theme.colors.text};
`;

const DepartmentsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: ${theme.spacing.xl};
`;

const DepartmentCard = styled(motion.div)`
  background-color: ${theme.colors.white};
  border-radius: ${theme.borderRadius.medium};
  overflow: hidden;
  box-shadow: ${theme.shadows.medium};
  transition: transform ${theme.transitions.default};
  
  &:hover {
    transform: translateY(-10px);
  }
`;

const DepartmentImage = styled.div`
  height: 200px;
  background-color: #f0f0f0;
  position: relative;
  overflow: hidden;
`;

const DepartmentContent = styled.div`
  padding: ${theme.spacing.lg};
`;

const DepartmentTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: ${theme.spacing.md};
  color: ${theme.colors.text};
  position: relative;
  padding-bottom: ${theme.spacing.sm};
  
  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 50px;
    height: 2px;
    background-color: ${theme.colors.copper};
  }
`;

const DepartmentDescription = styled.p`
  margin-bottom: ${theme.spacing.md};
  color: ${theme.colors.text};
  line-height: 1.6;
`;

const FeaturesList = styled.ul`
  list-style: none;
  margin-bottom: ${theme.spacing.lg};
`;

const FeatureItem = styled.li`
  margin-bottom: ${theme.spacing.sm};
  display: flex;
  align-items: center;
  
  &:before {
    content: '✓';
    color: ${theme.colors.copper};
    margin-right: ${theme.spacing.sm};
    font-weight: bold;
  }
`;

const LearnMoreButton = styled(motion.button)`
  background-color: transparent;
  color: ${theme.colors.copper};
  border: 2px solid ${theme.colors.copper};
  padding: ${theme.spacing.sm} ${theme.spacing.lg};
  border-radius: ${theme.borderRadius.medium};
  font-weight: 600;
  cursor: pointer;
  transition: all ${theme.transitions.default};
  
  &:hover {
    background-color: ${theme.colors.copper};
    color: ${theme.colors.white};
  }
`;

const Departments: React.FC = () => {
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
    visible: (i: number) => ({
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
    },
  ];
  
  return (
    <DepartmentsSection id="departments">
      <BackgroundAccent />
      <BackgroundAccent2 />
      
      <DepartmentsContainer>
        <SectionHeader ref={headerRef}>
          <SectionTitle
            variants={headerVariants}
            initial="hidden"
            animate={headerInView ? "visible" : "hidden"}
          >
            Our Departments
          </SectionTitle>
          
          <SectionDescription
            variants={headerVariants}
            initial="hidden"
            animate={headerInView ? "visible" : "hidden"}
            transition={{ delay: 0.2 }}
          >
            SIITec comprises two specialized departments, each focused on advancing knowledge and innovation in their respective fields.
          </SectionDescription>
        </SectionHeader>
        
        <DepartmentsGrid ref={cardsRef}>
          {departments.map((department, index) => (
            <DepartmentCard
              key={department.id}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              animate={cardsInView ? "visible" : "hidden"}
            >
              <DepartmentImage>
                {/* Replace with actual department image */}
                <div style={{ width: '100%', height: '100%', backgroundColor: index === 0 ? '#f0f0f0' : '#e5e5e5', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <p>Department Image</p>
                </div>
              </DepartmentImage>
              
              <DepartmentContent>
                <DepartmentTitle>{department.title}</DepartmentTitle>
                <DepartmentDescription>{department.description}</DepartmentDescription>
                
                <FeaturesList>
                  {department.features.map((feature, i) => (
                    <FeatureItem key={i}>{feature}</FeatureItem>
                  ))}
                </FeaturesList>
                
                <LearnMoreButton
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Learn More
                </LearnMoreButton>
              </DepartmentContent>
            </DepartmentCard>
          ))}
        </DepartmentsGrid>
      </DepartmentsContainer>
    </DepartmentsSection>
  );
};

export default Departments;