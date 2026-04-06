import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  padding: 4rem 1.5rem;
  max-width: 1200px;
  margin: 0 auto;
  background-color: #f9fafb;
  min-height: 100vh;
`;

const Hero = styled.div`
  text-align: center;
  margin-bottom: 5.5rem;
`;

const HeroTitle = styled.h1`
  font-size: clamp(2.6rem, 5vw, 3.4rem);
  color: #1a202c;
  font-weight: 700;
  margin-bottom: 1rem;
  line-height: 1.1;
`;

const HeroSubtitle = styled.h2`
  font-size: 1.4rem;
  color: #475569;
  font-weight: 500;
  max-width: 720px;
  margin: 0 auto;
  line-height: 1.5;
`;

const Section = styled.section`
  margin-bottom: 6rem;
`;

const SectionTitle = styled.h3`
  font-size: clamp(1.95rem, 4vw, 2.4rem);
  color: #1e2937;
  margin-bottom: 2.2rem;
  font-weight: 700;
  position: relative;
  display: inline-block;

  &:after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 0;
    width: 72px;
    height: 4px;
    background: linear-gradient(90deg, #667eea, #5a67d8);
    border-radius: 4px;
  }
`;

const BioText = styled.p`
  font-size: 1.13rem;
  color: #475569;
  line-height: 1.85;
  margin-bottom: 2rem;
  max-width: 780px;
`;

// Per-section Photo Styling
const SectionImage = styled.img`
  width: 100%;
  max-height: 420px;
  object-fit: cover;
  border-radius: 20px;
  box-shadow: 0 12px 35px rgba(0, 0, 0, 0.12);
  margin: 2.5rem 0 3.5rem;
  transition: transform 0.4s ease;

  &:hover {
    transform: scale(1.02);
  }

  @media (min-width: 768px) {
    margin: 3rem 0 4rem;
  }
`;

const About = () => (
  <Container>
    <Hero>
      <HeroTitle>About Joël Tiogo</HeroTitle>
      <HeroSubtitle>
        Strategic Growth Leader • Technology Enabler • Sustainability Advocate
      </HeroSubtitle>
    </Hero>

    {/* Section 1: Roots & Education */}
    <Section>
      <SectionTitle>Who I Am</SectionTitle>
      <BioText>
        Born in Douala, Cameroon, I developed a strong sense of community and ambition from an early age.
        After earning my Baccalauréat d’Enseignement Technique (Série F3) from Lycée Technique de Dschang,
        I moved to Johannesburg to pursue Electrical Engineering at the University of Johannesburg,
        later completing an MBA at Frankfurt School of Finance & Management in Germany.
      </BioText>

      <SectionImage
        src="/images/13.jpg"
        alt="Joël Tiogo - Professional Portrait"
      />

      <BioText>
        I am a people-oriented leader who values empathy, trust, and meaningful connections.
        My international journey across Cameroon, South Africa, and Europe has sharpened my ability
        to build strong networks and lead with both vision and compassion.
      </BioText>
    </Section>

    {/* Section 2: Professional Journey */}
    <Section>
      <SectionTitle>My Professional Journey</SectionTitle>
      <BioText>
        My career started in the energy sector and digital transformation in Johannesburg.
        In Germany, I worked at the intersection of advanced technology, ESG, and supply chain strategy,
        contributing innovative ideas that created real impact.
      </BioText>

      <SectionImage
        src="/images/0.jpg"
        alt="Joël Tiogo in a professional setting"
      />

      <BioText>
        Today, as Business Development Manager at AVL Analytical Technologies, I lead cloud solutions
        for automotive, electrification, and other industries. I am passionate about circularity,
        sustainable business innovation, and forging strategic partnerships that drive long-term value.
      </BioText>
    </Section>

    {/* Section 3: Leadership & Community */}
    <Section>
      <SectionTitle>Leadership & Community</SectionTitle>
      <BioText>
        I believe true leadership extends beyond business. In my spare time, I enjoy reading books
        on business, science, and philosophy, playing chess, and playing football with the local community.
        I’m also actively involved in initiatives that empower others through ideas, mentorship,
        and community development.
      </BioText>

      <SectionImage
        src="/images/15.jpg"
        alt="Joël Tiogo engaging with community and leadership activities"
      />
    </Section>
  </Container>
);

export default About;
