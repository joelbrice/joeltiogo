import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import {
  t,
  Section,
  Inner,
  Eyebrow,
  H1,
  H2,
  H3,
  Lead,
  Body,
  SectionHead,
  ExternalButton,
  ButtonRow,
  Card,
  Grid,
  Rule,
} from '../theme';
import TerminalCard from './TerminalCard';
import usePageTitle from '../usePageTitle';
import {
  identity,
  contact,
  focusAreas,
  experience,
  markets,
  industries,
  credentials,
} from '../data/profile';
import { articles } from '../data/articles';

/* ---------- Hero ---------- */

const Hero = styled.section`
  padding: 3rem 1rem 3.5rem;
  background: ${t.bg};

  @media ${t.tablet} {
    padding: 5rem 2rem 5rem;
  }
`;

const HeroGrid = styled.div`
  max-width: ${t.maxWidth};
  margin: 0 auto;
  display: grid;
  gap: 3rem;
  align-items: center;

  @media ${t.laptop} {
    grid-template-columns: 1.25fr 0.75fr;
    gap: 5rem;
  }
`;

const Avatar = styled.img`
  width: 88px;
  height: 88px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 1.6rem;

  @media ${t.laptop} {
    display: none;
  }
`;

const Portrait = styled.img`
  display: none;
  width: 100%;
  height: auto;
  aspect-ratio: 4 / 5;
  object-fit: cover;
  object-position: 50% 25%;
  border-radius: ${t.radius};
  background: ${t.bgAlt};

  @media ${t.laptop} {
    display: block;
  }
`;

const Statement = styled.p`
  font-family: ${t.serif};
  font-size: clamp(1.35rem, 3vw, 1.75rem);
  line-height: 1.35;
  color: ${t.ink};
  margin: 0 0 1.2rem;
  max-width: 560px;
`;

/* ---------- Credentials bar ---------- */

const CredBar = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  gap: 0;
  border-top: 1px solid ${t.line};

  @media ${t.tablet} {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media ${t.laptop} {
    grid-template-columns: repeat(4, minmax(0, 1fr));
    border-bottom: 1px solid ${t.line};
  }
`;

const Cred = styled.li`
  padding: 1.2rem 0;
  border-bottom: 1px solid ${t.line};

  @media ${t.laptop} {
    border-bottom: 0;
    padding: 1.5rem 1.5rem 1.5rem 0;

    & + & {
      padding-left: 1.5rem;
      border-left: 1px solid ${t.line};
    }
  }

  strong {
    display: block;
    font-family: ${t.serif};
    font-weight: 600;
    font-size: 1.12rem;
    color: ${t.ink};
    margin-bottom: 0.2rem;
  }

  span {
    font-size: 0.88rem;
    color: ${t.muted};
    line-height: 1.45;
  }
`;

const BadgeLink = styled.a`
  display: flex;
  align-items: center;
  gap: 0.85rem;
  text-decoration: none;

  img {
    width: 44px;
    height: 44px;
    border-radius: 8px;
    flex-shrink: 0;
  }

  &:hover span {
    color: ${t.accent};
  }
`;

const mckinsey = credentials.find((c) => c.badge);

/* ---------- Experience ---------- */

const Anchor = styled.div`
  scroll-margin-top: 5rem;
`;

const ExpList = styled.ol`
  list-style: none;
  margin: 0;
  padding: 0;
  border-top: 1px solid ${t.line};
`;

const ExpItem = styled.li`
  display: grid;
  gap: 0.35rem;
  padding: 1.35rem 0;
  border-bottom: 1px solid ${t.line};

  @media ${t.tablet} {
    grid-template-columns: 0.9fr 1.1fr;
    gap: 2.5rem;
  }

  h3 {
    margin: 0;
  }

  .org {
    display: block;
    color: ${t.muted};
    font-size: 0.95rem;
    margin-top: 0.15rem;
  }

  p {
    margin: 0;
    color: ${t.text};
    line-height: 1.6;
  }

  .links {
    display: flex;
    flex-wrap: wrap;
    gap: 0 1.2rem;
  }

  a {
    display: inline-block;
    margin-top: 0.4rem;
    font-size: 0.88rem;
    color: ${t.accent};
    text-decoration: none;
    font-weight: 500;
  }

  a:hover {
    text-decoration: underline;
  }
`;

const Markets = styled.p`
  margin: 1.6rem 0 0;
  font-size: 0.92rem;
  color: ${t.muted};

  strong {
    color: ${t.ink};
    font-weight: 500;
    margin-right: 0.4rem;
  }
`;

/* ---------- Engineer band ---------- */

const Split = styled.div`
  display: grid;
  gap: 2rem;
  align-items: center;

  @media ${t.laptop} {
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
  }
`;

/* ---------- Insights ---------- */

const Reads = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  border-top: 1px solid ${t.line};
`;

const Read = styled.li`
  border-bottom: 1px solid ${t.line};

  a {
    display: flex;
    justify-content: space-between;
    gap: 1.5rem;
    padding: 1.15rem 0;
    color: ${t.ink};
    text-decoration: none;
    font-family: ${t.serif};
    font-size: clamp(1.05rem, 2.2vw, 1.22rem);
    line-height: 1.4;
  }

  a::after {
    content: '→';
    color: ${t.accent};
    font-family: ${t.sans};
  }

  a:hover {
    color: ${t.accent};
  }
`;

const More = styled(Link)`
  display: inline-block;
  margin-top: 1.4rem;
  color: ${t.accent};
  font-weight: 500;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

/* ---------- Contact ---------- */

const ContactBand = styled.section`
  background: ${t.ink};
  padding: 4rem 1rem;

  @media ${t.tablet} {
    padding: 5rem 2rem;
  }

  h2 {
    color: #fff;
  }

  p {
    color: #c3cad5;
  }
`;

const LightButton = styled(ExternalButton)`
  background: #fff;
  color: ${t.ink};
  border-color: #fff;
`;

const CvLink = styled.a`
  display: inline-block;
  margin-top: 1.4rem;
  font-size: 0.95rem;
  color: #c3cad5;
  text-decoration: none;
  border-bottom: 1px solid rgba(195, 202, 213, 0.4);

  &:hover {
    color: #fff;
    border-color: #fff;
  }
`;

const GhostLight = styled(ExternalButton)`
  color: #fff;
  border-color: rgba(255, 255, 255, 0.35);

  &:hover {
    border-color: #fff;
  }
`;

const HomePage = () => {
  usePageTitle(null);
  return (
  <>
    <Hero>
      <HeroGrid>
        <div>
          <Avatar src="/images/web/headshot.jpg" alt="" width="88" height="88" />
          <Eyebrow>
            Strategy · Business Development · Innovation
          </Eyebrow>
          <H1>{identity.name}</H1>
          <Statement>
            Built it. Taught it.
            <br />
            Took it to market.
          </Statement>
          <Lead>
            MBA, engineer and former founder — today {identity.role} at {identity.employer},
            turning innovation into commercial growth.
          </Lead>
          <ButtonRow>
            <ExternalButton $dark href={`mailto:${contact.email}`}>
              Get in touch
            </ExternalButton>
            <ExternalButton href="#experience">View experience</ExternalButton>
          </ButtonRow>
        </div>
        <Portrait
          src="/images/web/boardroom.jpg"
          alt="Portrait of Joël Tiogo in a navy suit"
          width="1400"
          height="934"
        />
      </HeroGrid>
    </Hero>

    <section style={{ padding: '0 1rem' }}>
      <Inner>
        <CredBar aria-label="Credentials">
          <Cred>
            <strong>MBA</strong>
            <span>Frankfurt School of Finance &amp; Management</span>
          </Cred>
          <Cred>
            <BadgeLink
              href={mckinsey.badge.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="McKinsey.org Forward Program, completed 2025 — verify on Credly"
            >
              <img src={mckinsey.badge.src} alt="" width="44" height="44" />
              <div>
                <strong>McKinsey.org Forward</strong>
                <span>Completed 2025 · Verify ↗</span>
              </div>
            </BadgeLink>
          </Cred>
          <Cred>
            <strong>Design Thinking &amp; Innovation</strong>
            <span>Harvard Business School Online · in progress</span>
          </Cred>
          <Cred>
            <strong>Founder &amp; CEO</strong>
            <span>Expotech Industries · former</span>
          </Cred>
        </CredBar>
      </Inner>
    </section>

    <Section>
      <Inner>
        <SectionHead>
          <Eyebrow>Focus</Eyebrow>
          <H2>Where I add value</H2>
        </SectionHead>
        <Grid $cols={3}>
          {focusAreas.map((f) => (
            <Card key={f.title}>
              <Rule />
              <H3>{f.title}</H3>
              <Body style={{ marginBottom: 0, fontSize: '0.95rem' }}>{f.body}</Body>
            </Card>
          ))}
        </Grid>
        <Markets>
          <strong>Sectors so far</strong>
          {industries.map((i) => i.title).join(' · ')}
        </Markets>
        <Markets style={{ marginTop: '0.5rem' }}>
          <strong>Markets</strong>
          {markets.join(' · ')}
        </Markets>
      </Inner>
    </Section>

    <Section $alt>
      <Inner>
        <Anchor id="experience" />
        <SectionHead>
          <Eyebrow>Experience</Eyebrow>
          <H2>From engineering to the commercial front line</H2>
        </SectionHead>
        <ExpList>
          {experience.map((e) => (
            <ExpItem key={e.role}>
              <div>
                <H3>{e.role}</H3>
                <span className="org">{e.org}</span>
              </div>
              <div>
                <p>{e.note}</p>
                {e.links && (
                  <span className="links">
                    {e.links.map((l) => (
                      <a key={l.href} href={l.href} target="_blank" rel="noopener noreferrer">
                        {l.label} ↗
                      </a>
                    ))}
                  </span>
                )}
              </div>
            </ExpItem>
          ))}
        </ExpList>
      </Inner>
    </Section>

    <Section>
      <Inner>
        <Split>
          <div>
            <Eyebrow>The engineer behind the strategy</Eyebrow>
            <H2>Fluent in technology</H2>
            <Lead style={{ marginBottom: 0 }}>
              Before business development, I worked as an electrical engineer and a full-stack
              developer. I can go deep with technical teams — and translate what matters for the
              business.
            </Lead>
          </div>
          <TerminalCard />
        </Split>
      </Inner>
    </Section>

    <Section $alt>
      <Inner>
        <SectionHead style={{ marginBottom: '1.6rem' }}>
          <Eyebrow>Insights</Eyebrow>
          <H2>Selected thinking</H2>
        </SectionHead>
        <Reads>
          {articles.map((a) => (
            <Read key={a.slug}>
              <Link to={`/insights/${a.slug}`}>{a.title}</Link>
            </Read>
          ))}
        </Reads>
        <More to="/insights">All insights →</More>
      </Inner>
    </Section>

    <ContactBand>
      <Inner>
        <SectionHead style={{ marginBottom: '1.8rem' }}>
          <H2>Let’s talk</H2>
          <p style={{ fontSize: '1.1rem', margin: 0 }}>
            About strategy, partnerships or new opportunities.
          </p>
        </SectionHead>
        <ButtonRow>
          <LightButton href={`mailto:${contact.email}`}>Email me</LightButton>
          <GhostLight href={contact.linkedin} target="_blank" rel="noopener noreferrer">
            LinkedIn
          </GhostLight>
        </ButtonRow>
        <CvLink href={`mailto:${contact.email}?subject=${encodeURIComponent('CV request')}`}>
          CV available on request →
        </CvLink>
      </Inner>
    </ContactBand>
  </>
);
};

export default HomePage;
