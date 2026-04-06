import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  padding: 4rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
  background-color: #f9fafb;
  min-height: 100vh;
`;

const Hero = styled.div`
  text-align: center;
  margin-bottom: 4.5rem;
`;

const HeroTitle = styled.h1`
  font-size: 3rem;
  color: #1a202c;
  font-weight: 700;
  margin-bottom: 1rem;
`;

const HeroSubtitle = styled.h2`
  font-size: 1.35rem;
  color: #475569;
  font-weight: 500;
  max-width: 720px;
  margin: 0 auto;
`;

const Section = styled.section`
  margin-bottom: 4.5rem;
`;

const SectionTitle = styled.h3`
  font-size: 2.1rem;
  color: #1e2937;
  margin-bottom: 1.8rem;
  font-weight: 700;
  position: relative;
  display: inline-block;

  &:after {
    content: '';
    position: absolute;
    bottom: -6px;
    left: 0;
    width: 60px;
    height: 3px;
    background: #667eea;
    border-radius: 2px;
  }
`;

const BioText = styled.p`
  font-size: 1.1rem;
  color: #475569;
  line-height: 1.85;
  margin-bottom: 1.6rem;
  max-width: 780px;
`;

const About = () => (
  <Container>
    <Hero>
      <HeroTitle>About Joël Tiogo</HeroTitle>
      <HeroSubtitle>
        Business Development Manager • Strategic Leader • Global Citizen
      </HeroSubtitle>
    </Hero>

    <Section>
      <SectionTitle>Who I Am</SectionTitle>
      <BioText>
        I’m a passionate and empathetic leader who believes in building meaningful connections
        and creating sustainable impact through technology and innovation. With an entrepreneurial spirit
        and an MBA in Technology and Sustainability from Frankfurt School of Finance &amp; Management,
        I bring both strategic vision and a human-centered approach to everything I do.
      </BioText>
      <BioText>
        As a global trotter, I’ve lived and worked across Europe and Africa.
        Being trilingual in French, English, and German has allowed me to connect naturally with people
        from diverse cultures and backgrounds — something I truly value.
      </BioText>
      <BioText>
        Outside of work, you’ll often find me immersed in a good book — whether it’s business strategy,
        science, philosophy, or economics. I’m also a chess enthusiast who loves the strategic depth of the game,
        a football fan who enjoys the energy of the weekend matches, and someone who believes in maintaining
        balance between professional ambition and personal growth.
      </BioText>
    </Section>

    <Section>
      <SectionTitle>My Journey</SectionTitle>
      <BioText>
        From founding my own venture as CEO to my current role as Business Development Manager
        for innovative automotive cloud solutions, I’ve always been driven by the desire to bridge technology
        with real-world sustainable growth.
      </BioText>
      <BioText>
        I’m energized by opportunities to collaborate with forward-thinking teams and partners who share
        a vision for a more transparent, circular, and responsible future.
      </BioText>
    </Section>
  </Container>
);

export default About;
