import React from 'react';
import styled, { keyframes } from 'styled-components';
import { FaTerminal, FaCode, FaBrain, FaDatabase, FaRobot, FaNetworkWired, FaBriefcase, FaMicrochip, FaCloud } from 'react-icons/fa';

const matrixBg = keyframes`
  0% { background-position: 0% 0%; }
  100% { background-position: 100% 100%; }
`;

const glitch = keyframes`
  0% { text-shadow: 2px 0 0 red, -2px 0 0 #0ff; }
  50% { text-shadow: -2px 0 0 red, 2px 0 0 #0ff; }
  100% { text-shadow: 2px 0 0 red, -2px 0 0 #0ff; }
`;

const scanline = keyframes`
  0% { transform: translateY(-100%); }
  100% { transform: translateY(100%); }
`;

const Container = styled.div`
  min-height: 100vh;
  background: #0a0a0a;
  color: #00ff00;
  font-family: 'Courier New', monospace;
  position: relative;
  overflow: hidden;

  &:after {
    content: '';
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      rgba(0,255,0,0.03) 50%,
      rgba(0,0,0,0.1) 50%
    );
    background-size: 100% 4px;
    pointer-events: none;
    animation: ${scanline} 10s linear infinite;
  }
`;

const Section = styled.section`
  background: rgba(0, 20, 0, 0.7);
  border: 1px solid #00ff00;
  border-radius: 8px;
  padding: 2rem;
  margin: 2rem;
  position: relative;

  &:before {
    content: '[root@system ~]$';
    position: absolute;
    top: 10px;
    left: 10px;
    color: #00ff00;
    opacity: 0.7;
  }
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  padding: 2rem;

  /* Adjust grid layout for smaller screens */
  @media (max-width: 768px) {
    grid-template-columns: 1fr; 
  }
`;

const SkillCard = styled.div`
  background: rgba(0, 0, 0, 0.9);
  border: 1px solid #00ff00;
  border-radius: 4px;
  padding: 1.5rem;
  position: relative;
  overflow: hidden;

  .details {
    margin-top: 1rem;
    font-size: 0.8rem;
    color: #00cc00;
    opacity: 0.8;
    
    &:before {
      content: '$ tech stack: ';
      color: #00ff00;
      opacity: 0.7;
    }
  }

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 2px;
    height: 100%;
    background: #00ff00;
    opacity: 0.5;
  }

  &:after {
    content: '>';
    position: absolute;
    top: 8px;
    left: 8px;
    color: #00ff00;
    opacity: 0.7;
  }

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 0 20px rgba(0, 255, 0, 0.2);
    
    .skill-icon {
      animation: ${glitch} 1s infinite;
    }
  }
`;

const SkillIcon = styled.div`
  font-size: 2rem;
  color: #00ff00;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &:before {
    content: '</>';
    font-size: 0.8rem;
    opacity: 0.7;
  }
`;

const Title = styled.h2`
  color: #00ff00;
  font-size: 1.8rem;
  margin-bottom: 1rem;
  animation: ${glitch} 2s infinite;
  
  &:before {
    content: '# ';
    opacity: 0.7;
  }
`;

const CodeBlock = styled.pre`
  background: rgba(0, 20, 0, 0.3);
  border-left: 3px solid #00ff00;
  padding: 1rem;
  margin: 1rem 0;
  font-family: 'Courier New', monospace;
`;

const skills = [
  // Core Competencies
  {
    icon: <FaBriefcase />,
    title: 'Business Development',
    description: 'Strategic growth & sustainability integration',
    details: 'Product & Project Management, ESG, AI'
  },
  {
    icon: <FaCode />,
    title: 'Software Engineering',
    description: 'Worked as a full-stack developer',
    details: ' Python, FastAPI,SQL, React, Node.js, MongoDB, Express.js'
  },
  {
    icon: <FaMicrochip />,
    title: 'Electrical Engineering',
    description: 'I worked as an Electrical Engineer.',
    details: 'PVSyst, Digsilent PowerFactory, leadership'
  },
  // Technical Skills
  {
    icon: <FaBrain />,
    title: 'AI & Machine Learning',
    description: 'Deep learning & data science applications',
    details: 'Python, TensorFlow, Keras, PyTorch, OpenCV'
  },
  {
    icon: <FaCloud />,
    title: 'Cloud & DevOps',
    description: 'Infrastructure & deployment',
    details: 'GCP, AWS, Azure, Docker, Kubernetes'
  },
  {
    icon: <FaTerminal />,
    title: 'System Architecture',
    description: 'Full-stack system design',
    details: 'Linux, Git, CI/CD, Agile/Scrum'
  }
];

const About = () => (
  <Container>
    <Section>
      <Title>A little about Me</Title>
      <CodeBlock>
        {`
> Identity: Joel Tiogo
> Status: Active
> Location: Frankfurt Am Main, Germany
        `}
      </CodeBlock>
    </Section>
    
    <Section>
      <Title>Skills Matrix</Title>
      <SkillsGrid>
        {skills.map((skill, index) => (
          <SkillCard key={index}>
            <SkillIcon>{skill.icon}</SkillIcon>
            <h3>{skill.title}</h3>
            <p>{skill.description}</p>
            {skill.details && <p className="details">{skill.details}</p>}
          </SkillCard>
        ))}
      </SkillsGrid>
    </Section>
  </Container>
);

export default About;