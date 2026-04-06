import React from 'react';
import styled from 'styled-components';

const HeroSection = styled.section`
  padding: 5rem 2rem 4rem;
  text-align: center;
  background: linear-gradient(135deg, #f8f9fa 0%, #f1f3f9 100%);
`;

const ContentWrapper = styled.div`
  max-width: 820px;
  margin: 0 auto;
`;

const ProfilePhoto = styled.img`
  width: 160px;
  height: 160px;
  border-radius: 50%;
  margin: 0 auto 1.8rem;
  display: block;
  object-fit: cover;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.12);
  border: 4px solid #ffffff;
`;

const Eyebrow = styled.p`
  font-size: 1.05rem;
  color: #667eea;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  margin-bottom: 0.6rem;
`;

const MainHeading = styled.h1`
  font-size: 3rem;
  line-height: 1.1;
  color: #1a1a1a;
  margin-bottom: 1rem;
  font-weight: 700;
`;

const Subtitle = styled.p`
  font-size: 1.25rem;
  color: #475569;
  line-height: 1.65;
  max-width: 680px;
  margin: 0 auto 2.5rem;
`;

const CTAContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 1.2rem;
  flex-wrap: wrap;
`;

const PrimaryButton = styled.a`
  padding: 0.85rem 2rem;
  background: #667eea;
  color: #fff;
  text-decoration: none;
  border-radius: 50px;
  font-weight: 600;
  font-size: 1.05rem;
  transition: all 0.3s ease;

  &:hover {
    background: #5a67d8;
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(102, 126, 234, 0.3);
  }
`;

const SecondaryButton = styled.a`
  padding: 0.85rem 2rem;
  background: transparent;
  color: #1e2937;
  text-decoration: none;
  border: 2px solid #e2e8f0;
  border-radius: 50px;
  font-weight: 600;
  font-size: 1.05rem;
  transition: all 0.3s ease;

  &:hover {
    background: #f8fafc;
    border-color: #94a3b8;
  }
`;

const TeaserSection = styled.section`
  padding: 4rem 2rem;
  background: #ffffff;
`;

const TeaserWrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  text-align: center;
`;

const TeaserTitle = styled.h2`
  font-size: 2rem;
  color: #1a1a1a;
  margin-bottom: 1.2rem;
`;

const TeaserText = styled.p`
  font-size: 1.1rem;
  color: #475569;
  max-width: 680px;
  margin: 0 auto 2rem;
  line-height: 1.7;
`;

const HomePage = () => (
  <>
    <HeroSection>
      <ContentWrapper>
        <ProfilePhoto
          src="/images/1.jpg"   // ← Put your photo in public/images/joel-tiogo.jpg
          alt="Joël Tiogo"
        />
        <Eyebrow>Business Development Manager &amp; Strategic Leader</Eyebrow>
        <MainHeading>Joël Tiogo</MainHeading>
        <Subtitle>
          Driven by curiosity and empathy, I help organizations unlock sustainable growth
          by bridging technology, market opportunities, and circular economy principles.
        </Subtitle>

        <CTAContainer>
          <PrimaryButton href="/about">Discover My Story</PrimaryButton>
          <SecondaryButton href="/expertise">Explore My Expertise</SecondaryButton>
        </CTAContainer>
      </ContentWrapper>
    </HeroSection>

    <TeaserSection>
      <TeaserWrapper>
        <TeaserTitle>Let’s Build Something Impactful Together</TeaserTitle>
        <TeaserText>
          I’m always energized by meaningful conversations and new opportunities to collaborate.
          Whether you’re exploring fresh ideas, building strategic partnerships, or simply curious
          about how technology can create real value — I’d love to connect and see what we can achieve together.
        </TeaserText>
      </TeaserWrapper>
    </TeaserSection>
  </>
);

export default HomePage;
