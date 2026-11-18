import React from 'react';
import styled from 'styled-components';
import { t, Section, Inner, Eyebrow, H1, H2, H3, Lead, Body, SectionHead, Card, Grid, Rule } from '../theme';
import TerminalCard from './TerminalCard';
import usePageTitle from '../usePageTitle';
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

const Beyond = styled.div`
  border-radius: ${t.radius};
  padding: 1.5rem;
  background: ${t.ink};

  h3 {
    color: #fff;
  }

  p {
    color: #c3cad5;
  }

  @media ${t.tablet} {
    padding: 1.8rem;
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

const Expertise = () => {
  usePageTitle('Expertise');
  return (
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
        <Grid $cols={3}>
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
          <H2>Industry-agnostic, technology-fluent</H2>
          <Lead style={{ marginBottom: 0 }}>
            Strategy, business development and go-to-market skills travel across industries. The
            sectors I have worked in so far:
          </Lead>
        </SectionHead>
        <Grid $cols={3}>
          {industries.map((d) => (
            <Card key={d.title}>
              <H3>{d.title}</H3>
              <Body style={{ marginBottom: 0, fontSize: '0.95rem' }}>{d.body}</Body>
            </Card>
          ))}
          <Beyond>
            <H3>And beyond</H3>
            <Body style={{ marginBottom: 0, fontSize: '0.95rem' }}>
              The same playbook works wherever a business needs a clear strategy, the right
              partners and a route to market.
            </Body>
          </Beyond>
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
};

export default Expertise;
