import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { t, Section, Inner, Eyebrow, H1, H3, Lead, Body, SectionHead, Card, Grid } from '../theme';
import { articles, readingMinutes } from '../data/articles';

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
  position: relative;

  &:focus-within {
    border-color: ${t.accent};
  }
`;

const ReadLink = styled(Link)`
  margin-top: auto;
  padding-top: 0.6rem;
  font-weight: 600;
  color: ${t.ink};
  text-decoration: none;
  align-self: flex-start;

  /* Make the whole card clickable */
  &::after {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: ${t.radius};
  }

  &:focus-visible {
    outline: none;
  }

  small {
    font-family: ${t.mono};
    font-weight: 400;
    color: ${t.muted};
    margin-left: 0.6rem;
  }
`;

const Note = styled.p`
  margin: 2.5rem 0 0;
  font-size: 0.88rem;
  color: ${t.muted};
  font-style: italic;
`;

const Insights = () => (
  <Section>
    <Inner>
      <SectionHead>
        <Eyebrow>insights</Eyebrow>
        <H1>Insights</H1>
        <Lead>
          Short essays where strategic growth, technology and sustainability meet — from battery
          passports to what the chessboard teaches about negotiation.
        </Lead>
      </SectionHead>

      <Grid $cols={2}>
        {articles.map((a) => (
          <TopicCard key={a.slug}>
            <Tag>{a.tag}</Tag>
            <H3>{a.title}</H3>
            <Body>{a.summary}</Body>
            <ReadLink to={`/insights/${a.slug}`}>
              Read →<small>{readingMinutes(a)} min</small>
            </ReadLink>
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
