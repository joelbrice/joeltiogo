import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  padding: 4rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
  background-color: #f9fafb;
  min-height: 100vh;
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 4.5rem;
`;

const PageTitle = styled.h1`
  font-size: 3rem;
  color: #1a202c;
  font-weight: 700;
  margin-bottom: 1rem;
`;

const PageSubtitle = styled.p`
  font-size: 1.35rem;
  color: #475569;
  max-width: 720px;
  margin: 0 auto;
  line-height: 1.6;
`;

const Section = styled.section`
  margin-bottom: 5rem;
`;

const SectionTitle = styled.h2`
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

const ExpertiseGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
  gap: 2.2rem;
`;

const ExpertiseCard = styled.div`
  background: #ffffff;
  padding: 2.4rem;
  border-radius: 16px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.06);
  border: 1px solid #f1f5f9;
  transition: all 0.4s ease;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
    border-color: #667eea;
  }
`;

const IconWrapper = styled.div`
  font-size: 3.2rem;
  margin-bottom: 1.4rem;
`;

const CardTitle = styled.h3`
  font-size: 1.45rem;
  color: #1e2937;
  margin-bottom: 1rem;
  font-weight: 700;
`;

const CardDescription = styled.p`
  font-size: 1.05rem;
  color: #475569;
  line-height: 1.75;
`;

const Expertise = () => (
  <Container>
    <Header>
      <PageTitle>My Expertise</PageTitle>
      <PageSubtitle>
        Driving sustainable growth by combining strategic business development,
        digital innovation, and a deep commitment to ESG and circular economy principles.
      </PageSubtitle>
    </Header>

    <Section>
      <SectionTitle>Core Areas of Expertise</SectionTitle>
      <ExpertiseGrid>

        <ExpertiseCard>
          <IconWrapper>📈</IconWrapper>
          <CardTitle>Business Development &amp; Market Growth</CardTitle>
          <CardDescription>
            Crafting and executing go-to-market strategies, identifying new opportunities,
            and building high-value partnerships that accelerate commercial success in technology-driven sectors.
          </CardDescription>
        </ExpertiseCard>

        <ExpertiseCard>
          <IconWrapper>🤝</IconWrapper>
          <CardTitle>Strategic Partnerships &amp; Stakeholder Management</CardTitle>
          <CardDescription>
            Developing strong relationships with clients, industry partners, and cross-functional teams
            to align objectives and deliver impactful, long-term collaborations.
          </CardDescription>
        </ExpertiseCard>

        <ExpertiseCard>
          <IconWrapper>🔄</IconWrapper>
          <CardTitle>Digital Transformation &amp; Innovation</CardTitle>
          <CardDescription>
            Guiding organizations in adopting emerging technologies to modernize operations,
            improve efficiency, and create new business models.
          </CardDescription>
        </ExpertiseCard>

        <ExpertiseCard>
          <IconWrapper>🌱</IconWrapper>
          <CardTitle>ESG &amp; Circularity</CardTitle>
          <CardDescription>
            Supporting companies in implementing ESG strategies and circular economy practices,
            with a current focus on transparency and compliance solutions in the battery ecosystem.
          </CardDescription>
        </ExpertiseCard>

        <ExpertiseCard>
          <IconWrapper>🚀</IconWrapper>
          <CardTitle>Entrepreneurial Leadership</CardTitle>
          <CardDescription>
            Hands-on experience as a former founder and CEO, combining strategic vision with
            practical execution to scale innovative ventures.
          </CardDescription>
        </ExpertiseCard>

        <ExpertiseCard>
          <IconWrapper>🌍</IconWrapper>
          <CardTitle>International Business</CardTitle>
          <CardDescription>
            Trilingual (French, English, German) professional with proven experience navigating
            markets across Europe, Africa, Asia, and North America.
          </CardDescription>
        </ExpertiseCard>

      </ExpertiseGrid>
    </Section>
  </Container>
);

export default Expertise;
