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
  max-width: 680px;
  margin: 0 auto;
  line-height: 1.6;
`;

const InsightsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
  gap: 2.2rem;
`;

const InsightCard = styled.div`
  background: #ffffff;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.06);
  transition: all 0.4s ease;
  border: 1px solid #f1f5f9;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
    border-color: #667eea;
  }
`;

const CardImage = styled.div`
  height: 220px;
  background: linear-gradient(135deg, #667eea 0%, #5a67d8 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 3.5rem;
`;

const CardContent = styled.div`
  padding: 1.8rem;
`;

const CardDate = styled.p`
  font-size: 0.9rem;
  color: #94a3b8;
  margin-bottom: 0.8rem;
`;

const CardTitle = styled.h3`
  font-size: 1.35rem;
  color: #1e2937;
  margin-bottom: 0.9rem;
  line-height: 1.4;
  font-weight: 700;
`;

const CardExcerpt = styled.p`
  font-size: 1.02rem;
  color: #475569;
  line-height: 1.7;
  margin-bottom: 1.4rem;
`;

const ReadMore = styled.a`
  color: #667eea;
  font-weight: 600;
  text-decoration: none;
  font-size: 1rem;

  &:hover {
    text-decoration: underline;
  }
`;

const Insights = () => (
  <Container>
    <Header>
      <PageTitle>Insights</PageTitle>
      <PageSubtitle>
        Thoughts on strategic growth, digital innovation, sustainability,
        and the intersection of technology and business.
      </PageSubtitle>
    </Header>

    <InsightsGrid>

      {/* Post 1 */}
      <InsightCard>
        <CardImage>♟️</CardImage>
        <CardContent>
          <CardDate>March 2026</CardDate>
          <CardTitle>What Chess Taught Me About Business Development and Negotiation</CardTitle>
          <CardExcerpt>
            How strategic thinking, anticipation, and adaptability from the chessboard
            translate into successful partnerships and high-stakes negotiations.
          </CardExcerpt>
          <ReadMore href="/insights/chess-business">Read Article →</ReadMore>
        </CardContent>
      </InsightCard>

      {/* Post 2 */}
      <InsightCard>
        <CardImage>🔋</CardImage>
        <CardContent>
          <CardDate>February 2026</CardDate>
          <CardTitle>The Strategic Value of Digital Battery Passports: Beyond Compliance</CardTitle>
          <CardExcerpt>
            How Battery Passports are becoming a powerful tool for competitive advantage,
            new business models, and genuine circularity in the automotive sector.
          </CardExcerpt>
          <ReadMore href="/insights/battery-passports">Read Article →</ReadMore>
        </CardContent>
      </InsightCard>

      {/* Post 3 */}
      <InsightCard>
        <CardImage>🌍</CardImage>
        <CardContent>
          <CardDate>January 2026</CardDate>
          <CardTitle>Bridging Technology and Sustainability: Lessons from a Global Trotter</CardTitle>
          <CardExcerpt>
            What living and working across Europe and Africa has taught me about
            cross-cultural collaboration and sustainable innovation.
          </CardExcerpt>
          <ReadMore href="/insights/global-perspective">Read Article →</ReadMore>
        </CardContent>
      </InsightCard>

      {/* Post 4 */}
      <InsightCard>
        <CardImage>🚀</CardImage>
        <CardContent>
          <CardDate>December 2025</CardDate>
          <CardTitle>Why Most Digital Transformation Initiatives Fail — And How to Succeed</CardTitle>
          <CardExcerpt>
            Practical lessons from my entrepreneurial journey on aligning technology
            adoption with real business value and ESG goals.
          </CardExcerpt>
          <ReadMore href="/insights/digital-transformation">Read Article →</ReadMore>
        </CardContent>
      </InsightCard>

    </InsightsGrid>
  </Container>
);

export default Insights;
