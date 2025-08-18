import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { theme } from '../styles/theme2.ts';
import professor1 from '../assets/professor1.jpg';
import professor2 from '../assets/professor2.jpg';


const FacultySection = styled.section`
  padding: ${theme.spacing.xxl} 0;
  background-color: ${theme.colors.grayDark};
  position: relative;
  overflow: hidden;
  color: ${theme.colors.white};
`;

const CircuitBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0.05;
  background-image: linear-gradient(${theme.colors.copper} 1px, transparent 1px),
    linear-gradient(90deg, ${theme.colors.copper} 1px, transparent 1px);
  background-size: 50px 50px;
  z-index: 1;
`;

const GlowingOrb = styled.div`
  position: absolute;
  border-radius: 50%;
  filter: blur(60px);
  z-index: 1;
  
  &.orb1 {
    top: -100px;
    right: 10%;
    width: 200px;
    height: 200px;
    background-color: rgba(184, 115, 51, 0.3); /* Copper with opacity */
  }
  
  &.orb2 {
    bottom: -150px;
    left: 5%;
    width: 300px;
    height: 300px;
    background-color: rgba(117, 131, 132, 0.15); /* Gray with opacity */
  }
`;

const FacultyContainer = styled.div`
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
  margin-bottom: ${theme.spacing.md};
  display: inline-block;
  position: relative;
  color: ${theme.colors.copper};
  text-shadow: 0 0 10px rgba(184, 115, 51, 0.3);
  
  &:after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 3px;
    background: linear-gradient(90deg, ${theme.colors.copper}, ${theme.colors.copperLight});
    box-shadow: 0 0 8px ${theme.colors.copper};
  }
`;

const SectionDescription = styled(motion.p)`
  font-size: 1.1rem;
  max-width: 700px;
  margin: 0 auto;
  opacity: 0.8;
`;

const FacultyGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: ${theme.spacing.xl};
  
  @media (max-width: ${theme.breakpoints.md}) {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  }
  
  @media (max-width: ${theme.breakpoints.sm}) {
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  }
`;

const FacultyCard = styled(motion.div)`
  background: rgba(10, 25, 47, 0.7);
  border-radius: ${theme.borderRadius.medium};
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(184, 115, 51, 0.2);
  transition: all ${theme.transitions.default};
  position: relative;
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.5), 0 0 10px ${theme.colors.tech.neon};
    border-color: ${theme.colors.tech.neon};
    
    &:before {
      opacity: 1;
    }
  }
  
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      135deg,
      rgba(184, 115, 51, 0.1) 0%,
      rgba(0, 255, 255, 0.1) 100%
    );
    opacity: 0;
    transition: opacity ${theme.transitions.default};
    z-index: 1;
  }
`;

const FacultyImage = styled.div`
  height: 250px;
  position: relative;
  overflow: hidden;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform ${theme.transitions.slow};
  }
  
  ${FacultyCard}:hover & img {
    transform: scale(1.05);
  }
`;

const FacultyContent = styled.div`
  padding: ${theme.spacing.lg};
  position: relative;
  z-index: 2;
`;

const FacultyName = styled.h3`
  font-size: 1.3rem;
  margin-bottom: ${theme.spacing.xs};
  color: ${theme.colors.white};
  position: relative;
  padding-bottom: ${theme.spacing.xs};
  
  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 40px;
    height: 2px;
    background-color: ${theme.colors.copper};
  }
`;

const FacultyTitle = styled.p`
  font-size: 0.9rem;
  color: ${theme.colors.tech.neon};
  margin-bottom: ${theme.spacing.sm};
  font-weight: 500;
`;

const FacultyBio = styled.p`
  margin-bottom: ${theme.spacing.md};
  font-size: 0.9rem;
  line-height: 1.6;
  opacity: 0.8;
`;

const FacultyContact = styled.div`
  display: flex;
  gap: ${theme.spacing.sm};
  margin-top: ${theme.spacing.md};
`;

const ContactIcon = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(184, 115, 51, 0.2);
  color: ${theme.colors.copper};
  transition: all ${theme.transitions.default};
  cursor: pointer;
  
  &:hover {
    background-color: ${theme.colors.copper};
    color: ${theme.colors.white};
    box-shadow: 0 0 10px rgba(184, 115, 51, 0.5);
  }
`;

const FacultyMembers: React.FC = () => {
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
        delay: i * 0.1,
        duration: 0.5,
      },
    }),
  };
  
  const facultyMembers = [
    {
      id: 1,
      name: 'Dr. Sarah Chen',
      title: 'Professor of Advanced Manufacturing',
      bio: 'Specializes in robotics and automation systems with over 15 years of industry experience.',
      image: professor1, // Replace with actual image path
    },
    {
      id: 2,
      name: 'Dr. James Wilson',
      title: 'Associate Professor of Materials Science',
      bio: 'Leading researcher in nanomaterials with applications in sustainable energy technologies.',
      image: 'placeholder', // Replace with actual image path
    },
    {
      id: 3,
      name: 'Dr. Aisha Patel',
      title: 'Assistant Professor of Digital Manufacturing',
      bio: 'Expert in digital twin technology and industrial IoT implementation.',
      image: 'placeholder', // Replace with actual image path
    },
    {
      id: 4,
      name: 'Dr. Michael Rodriguez',
      title: 'Professor of Biomaterials',
      bio: 'Pioneering research in medical applications of advanced materials and bioprinting.',
      image: 'placeholder', // Replace with actual image path
    },
    {
      id: 5,
      name: 'Dr. Emily Tanaka',
      title: 'Associate Professor of Smart Systems',
      bio: 'Focuses on AI integration in manufacturing processes and predictive maintenance.',
      image: 'placeholder', // Replace with actual image path
    },
    {
      id: 6,
      name: 'Dr. David Kim',
      title: 'Professor of Sustainable Materials',
      bio: 'Researches eco-friendly materials and circular economy manufacturing approaches.',
      image: 'placeholder', // Replace with actual image path
    },
  ];
  
  return (
    <FacultySection id="faculty">
      <CircuitBackground />
      <GlowingOrb className="orb1" />
      <GlowingOrb className="orb2" />
      
      <FacultyContainer>
        <SectionHeader ref={headerRef}>
          <SectionTitle
            variants={headerVariants}
            initial="hidden"
            animate={headerInView ? "visible" : "hidden"}
          >
            Our Faculty
          </SectionTitle>
          
          <SectionDescription
            variants={headerVariants}
            initial="hidden"
            animate={headerInView ? "visible" : "hidden"}
            transition={{ delay: 0.2 }}
          >
            Meet our distinguished faculty members who are leading innovation and research in their respective fields.
          </SectionDescription>
        </SectionHeader>
        
        <FacultyGrid ref={cardsRef}>
          {facultyMembers.map((faculty, index) => (
            <FacultyCard
              key={faculty.id}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              animate={cardsInView ? "visible" : "hidden"}
            >
              <FacultyImage>
                {/* Replace with actual faculty image */}
                <div style={{ 
                  width: '100%', 
                  height: '100%', 
                  backgroundColor: '#1E2A45', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  color: 'rgba(255,255,255,0.5)',
                  fontSize: '0.8rem'
                }}>
                  Faculty Photo
                </div>
              </FacultyImage>
              
              <FacultyContent>
                <FacultyName>{faculty.name}</FacultyName>
                <FacultyTitle>{faculty.title}</FacultyTitle>
                <FacultyBio>{faculty.bio}</FacultyBio>
                
                <FacultyContact>
                  <ContactIcon>
                    <span>@</span>
                  </ContactIcon>
                  <ContactIcon>
                    <span>in</span>
                  </ContactIcon>
                  <ContactIcon>
                    <span>G</span>
                  </ContactIcon>
                </FacultyContact>
              </FacultyContent>
            </FacultyCard>
          ))}
        </FacultyGrid>
      </FacultyContainer>
    </FacultySection>
  );
};

export default FacultyMembers;