import React from 'react';
import styled from 'styled-components';
import { t, Section, Inner, Eyebrow, H1, H3, Lead, Body, SectionHead, Card, Grid } from '../theme';
import { contact } from '../data/profile';

// Themes Joël writes and speaks about. The full articles are not published
// on this site yet; add a `href` to a topic once its article is live.
const topics = [
  {
    tag: 'battery-passports',
    title: 'The Strategic Value of Digital Battery Passports: Beyond Compliance',
    body: 'How battery passports can become a tool for competitive advantage, new business models and genuine circularity in the automotive sector.',
  },
  {
    tag: 'chess',
    title: 'What Chess Taught Me About Business Development and Negotiation',
    body: 'How strategic thinking, anticipation and adaptability from the chessboard translate into successful partnerships and high-stakes negotiations.',
  },
  {
    tag: 'digital-transformation',
    title: 'Why Most Digital Transformation Initiatives Fail — And How to Succeed',
    body: 'Lessons from my entrepreneurial journey on aligning technology adoption with real business value and ESG goals.',
  },
  {
    tag: 'global-perspective',
    title: 'Bridging Technology and Sustainability: Lessons from a Global Trotter',
    body: 'What living and working across Africa and Europe has taught me about cross-cultural collaboration and sustainable innovation.',
  },
];

const Tag = styled.span`
  display: inline-block;
  align-self: flex-start;
  font-family: ${t.mono};
  font-size: 0.78rem;
  color: ${t.accent};
  background: ${t.accentSoft};
  padding: 0.35rem 0.6rem;
  border-radius: 6px;
  margin-bottom: 1.1rem;

  &::before {
    content: '#';
    opacity: 0.6;
  }
`;

const TopicCard = styled(Card)`
  display: flex;
  flex-direction: column;
`;

const Discuss = styled.a`
  margin-top: auto;
  padding-top: 0.6rem;
  font-weight: 600;
  color: ${t.ink};
  text-decoration: none;
  align-self: flex-start;
  border-bottom: 2px solid ${t.accentSoft};
  transition: border-color 0.2s ease;

  &:hover {
    border-color: ${t.accent};
  }

  &:focus-visible {
    outline: 3px solid ${t.accent};
    outline-offset: 3px;
  }
`;

const Note = styled.p`
  margin: 2.5rem 0 0;
  font-size: 0.88rem;
  color: ${t.muted};
  font-style: italic;
`;

const mailto = (title) =>
  `mailto:${contact.email}?subject=${encodeURIComponent(`Re: ${title}`)}`;

const Insights = () => (
  <Section>
    <Inner>
      <SectionHead>
        <Eyebrow>insights</Eyebrow>
        <H1>Ideas I’m working through</H1>
        <Lead>
          Themes I think, write and speak about — where strategic growth, technology and
          sustainability meet. If one of them is on your mind too, let’s compare notes.
        </Lead>
      </SectionHead>

      <Grid $cols={2}>
        {topics.map((topic) => (
          <TopicCard key={topic.tag}>
            <Tag>{topic.tag}</Tag>
            <H3>{topic.title}</H3>
            <Body>{topic.body}</Body>
            {topic.href ? (
              <Discuss href={topic.href}>Read the article →</Discuss>
            ) : (
              <Discuss href={mailto(topic.title)}>Let’s discuss →</Discuss>
            )}
          </TopicCard>
        ))}
      </Grid>

      <Note>
        Views expressed on this site are my own and do not necessarily reflect those of my
        employer.
      </Note>
    </Inner>
  </Section>
);

export default Insights;
