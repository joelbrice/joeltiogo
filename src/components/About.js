// About Page Component (Detailed Background)
import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  min-height: 100vh;
  background: #111;
  color: #00ff00;
  padding: 3rem;
  font-family: 'Courier New', monospace;
`;

const SectionTitle = styled.h2`
  font-size: 2rem;
  color: #00ff00;
  margin-bottom: 1rem;
`;

const ContentSection = styled.section`
  margin-bottom: 2rem;
`;

const About = () => (
  <Container>
    <SectionTitle>About Me</SectionTitle>
    <ContentSection>
      <p>I am a strategic leader with a deep passion for technology...</p>
    </ContentSection>
    <SectionTitle>Core Competencies</SectionTitle>
    <ContentSection>
      <ul>
        <li>Business Development: Leading innovation strategies for long-term growth</li>
        <li>Software Engineering: Full-stack development, architecture design</li>
        <li>Cloud & DevOps: Scaling infrastructure for high availability and performance</li>
      </ul>
    </ContentSection>
  </Container>
);

export default About;
