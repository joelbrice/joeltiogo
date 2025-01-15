import React from 'react';
import styled, { keyframes } from 'styled-components';
import { FaTerminal, FaCode, FaBrain, FaRobot, FaGlobe } from 'react-icons/fa';

const glitch = keyframes`
  0% { text-shadow: 2px 0 0 red, -2px 0 0 #0ff; }
  50% { text-shadow: -2px 0 0 red, 2px 0 0 #0ff; }
  100% { text-shadow: 2px 0 0 red, -2px 0 0 #0ff; }
`;

const Container = styled.div`
  min-height: 100vh;
  padding: 2rem 1rem 6rem; 
  background-color: #181818; /* Darker background for better contrast */
  color: #00ff00;
  font-family: 'Courier New', monospace;
  position: relative;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 2rem;
  animation: ${glitch} 2s infinite;
  &:before {
    content: '> ';
    color: #00ff00;
  }
`;

const Section = styled.section`
  background: rgba(0, 255, 0, 0.05);
  border: 1px solid #00ff00;
  border-radius: 8px;
  padding: 2rem;
  margin: 2rem auto;
  max-width: 800px;
  position: relative;
  overflow: hidden;
`;

const SkillGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin: 2rem 0;
`;

const SkillCard = styled.div`
  background: rgba(0, 0, 0, 0.7);
  border: 1px solid #00ff00;
  border-radius: 4px;
  padding: 1.5rem;
  text-align: center; /* Center text within cards */
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 0 20px rgba(0, 255, 0, 0.2);
  }
`;

const About = () => {
  return (
    <Container>
      <Title>User Profile</Title> 

      <Section>
        <p>Initializing system profile...</p> 
        <h2>Joël Tiogo</h2>
        <p>Data Scientist & AI Consultant</p>
        <p>Location: Frankfurt am Main, Germany</p> 
        <p>Available for freelance projects and collaborations.</p>
      </Section>

      <Section>
        <h2>Core Competencies</h2>
        <SkillGrid>
          <SkillCard>
            <FaTerminal size={30} />
            <h3>Data Science & Analytics</h3>
            <p>Machine Learning, Deep Learning, Data Mining</p>
          </SkillCard>
          <SkillCard>
            <FaRobot size={30} />
            <h3>AI Development</h3>
            <p>Natural Language Processing, Computer Vision</p>
          </SkillCard>
          <SkillCard>
            <FaBrain size={30} />
            <h3>Project Management</h3>
            <p>Agile methodologies, Team Leadership</p>
          </SkillCard>
          <SkillCard>
            <FaGlobe size={30} />
            <h3>Sustainability</h3>
            <p>ESG, Impact Investing, Green Technologies</p>
          </SkillCard>
        </SkillGrid>
      </Section>

      <Section>
        <h2>Mission</h2>
        <p>To contribute to a sustainable future through innovative AI and data-driven solutions.</p>
      </Section>
    </Container>
  );
};

export default About;