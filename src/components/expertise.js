import React from 'react';
import styled from 'styled-components';
import { t, Section, Inner, Eyebrow, H1, H2, H3, Lead, Body, SectionHead, Card, Grid, Rule } from '../theme';
import TerminalCard from './TerminalCard';
import { focusAreas, markets, industries } from '../data/profile';

const Split = styled.div`
  display: grid;
  gap: 2rem;
  align-items: center;

  @media ${t.laptop} {
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
  }
`;

const MarketRow = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem;

  li {
    padding: 0.55rem 1rem;
    border: 1px solid ${t.line};
    border-radius: 999px;
    background: #fff;
    color: ${t.ink};
    font-size: 0.95rem;
  }
`;

const Expertise = () => (
  <>
    <Section>
      <Inner>
        <SectionHead>
          <Eyebrow>Expertise</Eyebrow>
          <H1>Strategy, growth and solutions</H1>
          <Lead>
            Where I focus — backed by an MBA, hands-on business development and an engineer’s
            understanding of the product.
          </Lead>
        </SectionHead>
        <Grid $cols={2}>
          {focusAreas.map((f) => (
            <Card key={f.title}>
              <Rule />
              <H3>{f.title}</H3>
              <Body style={{ marginBottom: 0 }}>{f.body}</Body>
            </Card>
          ))}
        </Grid>
      </Inner>
    </Section>

    <Section $alt>
      <Inner>
        <SectionHead>
          <Eyebrow>Industries &amp; markets</Eyebrow>
          <H2>Across technology-driven industries</H2>
          <Lead style={{ marginBottom: 0 }}>
            The common thread: complex technology that needs a clear business case, the right
            partners and a route to market.
          </Lead>
        </SectionHead>
        <Grid $cols={3}>
          {industries.map((d) => (
            <Card key={d.title}>
              <H3>{d.title}</H3>
              <Body style={{ marginBottom: 0, fontSize: '0.95rem' }}>{d.body}</Body>
            </Card>
          ))}
        </Grid>
        <div style={{ marginTop: '2rem' }}>
          <Body style={{ color: t.muted, fontSize: '0.92rem' }}>Markets navigated</Body>
          <MarketRow>
            {markets.map((m) => (
              <li key={m}>{m}</li>
            ))}
          </MarketRow>
        </div>
      </Inner>
    </Section>

    <Section>
      <Inner>
        <Split>
          <div>
            <Eyebrow>The engineer behind the strategy</Eyebrow>
            <H2>Technical depth</H2>
            <Lead style={{ marginBottom: 0 }}>
              Electrical engineer and former full-stack developer, trained in data science and AI.
              It makes me a credible partner for technical teams and customers alike.
            </Lead>
          </div>
          <TerminalCard />
        </Split>
      </Inner>
    </Section>
  </>
);

export default Expertise;
