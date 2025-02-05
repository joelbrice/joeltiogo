import React from 'react';
import styled from 'styled-components';

// Container to ensure the hero section fills the entire viewport height
const HeroSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #111;
  color: #00ff00;
  height: 100vh; /* Ensures it takes up the full viewport height */
  padding: 4rem;
  box-sizing: border-box;
  text-align: center;
  min-height: 100%; /* Ensures no overflow */
`;

const Heading = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  color: #00ff00;
  margin-bottom: 0.5rem;
  text-transform: uppercase;
  letter-spacing: 2px;
`;

const Subheading = styled.p`
  font-size: 1.25rem;
  color: #00cc00;
  margin-bottom: 1.5rem;
  opacity: 0.9;
`;

const Button = styled.a`
  background-color: #00ff00;
  color: #111;
  padding: 1rem 2rem;
  text-decoration: none;
  font-weight: bold;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.2s ease;
  &:hover {
    background-color: #00cc00;
  }
`;

const HomePage = () => (
  <HeroSection>
    <Heading>Joël Tiogo – Tech Leader & Innovator</Heading>
    <Subheading>Driving innovation through strategic leadership in technology</Subheading>
    <Button href="/about">Learn More About Me</Button>
  </HeroSection>
);

export default HomePage;
