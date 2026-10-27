import React from 'react';
import styled from 'styled-components';
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
  PrimaryButton,
  SecondaryButton,
  ExternalButton,
  ButtonRow,
  Card,
  Grid,
} from '../theme';
import TerminalCard from './TerminalCard';
import { identity, highlights, contact } from '../data/profile';

/* ---------- Hero ---------- */

const Hero = styled.section`
  position: relative;
  padding: 3.5rem 1rem 4.5rem;
  background:
    linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #ffffff 100%),
    linear-gradient(${t.bgAlt} 1px, transparent 1px) 0 0 / 28px 28px,
    linear-gradient(90deg, ${t.bgAlt} 1px, transparent 1px) 0 0 / 28px 28px,
    #fbfcfe;
  overflow: hidden;

  @media ${t.tablet} {
    padding: 5.5rem 2rem 6rem;
  }
`;

const HeroGrid = styled.div`
  max-width: ${t.maxWidth};
  margin: 0 auto;
  display: grid;
  gap: 3rem;
  align-items: center;

  @media ${t.laptop} {
    grid-template-columns: 1.1fr 0.9fr;
    gap: 4rem;
  }
`;

const Identity = styled.div`
  display: flex;
  align-items: center;
  gap: 0.9rem;
  margin-bottom: 1.6rem;
`;

const Avatar = styled.img`
  width: 64px;
  height: 64px;
  border-radius: 50%;
  object-fit: cover;
  border: 3px solid #fff;
  box-shadow: 0 6px 18px rgba(11, 18, 32, 0.15);
`;

const Status = styled.div`
  font-size: 0.92rem;
  line-height: 1.4;
  color: ${t.text};

  strong {
    display: block;
    color: ${t.ink};
    font-weight: 600;
  }
`;

const Dot = styled.span`
  display: inline-block;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #22c55e;
  margin-right: 0.4rem;
  box-shadow: 0 0 0 3px rgba(34, 197, 94, 0.18);
`;

const Tagline = styled.p`
  font-size: clamp(1.15rem, 2.6vw, 1.45rem);
  font-weight: 500;
  line-height: 1.45;
  color: ${t.accent};
  margin: 0 0 1.2rem;
`;

const Meta = styled.ul`
  list-style: none;
  padding: 0;
  margin: 1.8rem 0 0;
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem 1.4rem;
  font-family: ${t.mono};
  font-size: 0.82rem;
  color: ${t.muted};

  li::before {
    content: '▸ ';
    color: ${t.accent};
  }
`;

/* ---------- Leader + builder ---------- */

const Split = styled.div`
  display: grid;
  gap: 1.2rem;

  @media ${t.tablet} {
    grid-template-columns: 1fr 1fr;
    gap: 1.5rem;
  }
`;

const Panel = styled.div`
  border-radius: ${t.radius};
  padding: 1.8rem 1.5rem;
  border: 1px solid ${({ $dark }) => ($dark ? t.term.border : t.line)};
  background: ${({ $dark }) => ($dark ? t.term.bg : '#fff')};
  color: ${({ $dark }) => ($dark ? t.term.text : t.text)};

  @media ${t.tablet} {
    padding: 2.2rem 2rem;
  }

  h3 {
    color: ${({ $dark }) => ($dark ? '#fff' : t.ink)};
    font-family: ${({ $dark }) => ($dark ? t.mono : 'inherit')};
    font-size: 1.15rem;
    margin: 0 0 1.2rem;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: grid;
    gap: 0.75rem;
  }

  li {
    display: grid;
    grid-template-columns: 1.4rem 1fr;
    line-height: 1.5;
    font-family: ${({ $dark }) => ($dark ? t.mono : 'inherit')};
    font-size: ${({ $dark }) => ($dark ? '0.9rem' : '1rem')};
  }

  li::before {
    content: '${({ $dark }) => ($dark ? '$' : '→')}';
    color: ${({ $dark }) => ($dark ? t.term.green : t.accent)};
    font-weight: 700;
  }
`;

/* ---------- Highlights ---------- */

const Label = styled.span`
  display: inline-block;
  font-family: ${t.mono};
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: ${t.accent};
  margin-bottom: 0.9rem;
`;

/* ---------- Field notes ---------- */

const Gallery = styled.div`
  display: grid;
  gap: 1rem;

  @media ${t.tablet} {
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 1.4rem;
  }
`;

const Shot = styled.figure`
  margin: 0;

  img {
    width: 100%;
    height: auto;
    aspect-ratio: 4 / 5;
    object-fit: cover;
    object-position: ${({ $pos }) => $pos || 'center'};
    border-radius: ${t.radius};
    background: ${t.bgAlt};
  }

  figcaption {
    margin-top: 0.7rem;
    font-family: ${t.mono};
    font-size: 0.8rem;
    color: ${t.muted};
  }
`;

/* ---------- Contact ---------- */

const ContactBand = styled.section`
  background: ${t.ink};
  color: #cbd5e1;
  padding: 4.5rem 1rem;

  @media ${t.tablet} {
    padding: 6rem 2rem;
  }

  h2 {
    color: #fff;
  }

  p {
    color: #cbd5e1;
  }
`;

const LightButton = styled(ExternalButton)`
  background: #fff;
  color: ${t.ink};
  border-color: #fff;
`;

const GhostLight = styled(ExternalButton)`
  color: #fff;
  border-color: rgba(255, 255, 255, 0.35);

  &:hover {
    border-color: #fff;
  }
`;

const boardroom = [
  'Business development & go-to-market strategy',
  'Strategic partnerships & stakeholder management',
  'ESG, circularity & battery-ecosystem transparency',
  'Former founder & CEO of a tech start-up',
  'Trilingual: French, English, German',
];

const commandLine = [
  'Electrical engineer — energy sector & solar',
  'Former full-stack developer (C#, React, Node.js, Python)',
  'Data science & AI — Le Wagon bootcamp',
  'IoT and embedded systems',
  'Hackathons since university',
];

const HomePage = () => (
  <>
    <Hero>
      <HeroGrid>
        <div>
          <Identity>
            <Avatar src="/images/web/headshot.jpg" alt="Portrait of Joël Tiogo" width="64" height="64" />
            <Status>
              <strong>
                <Dot aria-hidden="true" />
                {identity.role}
              </strong>
              {identity.employer}
            </Status>
          </Identity>

          <H1>{identity.fullName}</H1>
          <Tagline>{identity.tagline}</Tagline>
          <Lead>
            I lead cloud solutions for automotive, electrification and other industries — and I bring
            the depth of someone who has worked as an electrical engineer, built software as a
            full-stack developer and founded a tech start-up. Curiosity and empathy drive how I work.
          </Lead>

          <ButtonRow>
            <PrimaryButton to="/about">Read my story</PrimaryButton>
            <SecondaryButton to="/expertise">See my expertise</SecondaryButton>
          </ButtonRow>

          <Meta aria-label="Quick facts">
            <li>FR · EN · DE</li>
            <li>Cameroon → South Africa → Europe</li>
            <li>Engineer · Developer · Founder · MBA</li>
          </Meta>
        </div>

        <TerminalCard />
      </HeroGrid>
    </Hero>

    <Section $alt>
      <Inner>
        <SectionHead>
          <Eyebrow>leader + builder</Eyebrow>
          <H2>At home in the boardroom and at the command line</H2>
          <Lead>
            My path ran through substations, codebases and my own start-up before it reached business
            development. That lets me speak both languages — strategy with decision-makers,
            architecture with engineers — and translate between them.
          </Lead>
        </SectionHead>

        <Split>
          <Panel>
            <h3>In the boardroom</h3>
            <ul>
              {boardroom.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </Panel>
          <Panel $dark>
            <h3>~/at-the-command-line</h3>
            <ul>
              {commandLine.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </Panel>
        </Split>
      </Inner>
    </Section>

    <Section>
      <Inner>
        <SectionHead>
          <Eyebrow>proof of work</Eyebrow>
          <H2>Built, founded, pitched</H2>
          <Lead>A few things from the journey that shaped how I lead today.</Lead>
        </SectionHead>
        <Grid $cols={4}>
          {highlights.map((h) => (
            <Card key={h.title}>
              <Label>{h.label}</Label>
              <H3>{h.title}</H3>
              <Body style={{ marginBottom: 0 }}>{h.body}</Body>
            </Card>
          ))}
        </Grid>
      </Inner>
    </Section>

    <Section $alt>
      <Inner>
        <SectionHead>
          <Eyebrow>field notes</Eyebrow>
          <H2>Hard hats, labs and pitch stages</H2>
        </SectionHead>
        <Gallery>
          <Shot>
            <img
              src="/images/web/field-install.jpg"
              alt="Joël in a yellow hard hat and safety glasses doing electrical installation work"
              loading="lazy"
              width="750"
              height="1000"
            />
            <figcaption>Hands-on electrical work</figcaption>
          </Shot>
          <Shot $pos="50% 30%">
            <img
              src="/images/web/uj-lab.jpg"
              alt="Joël presenting at the front of a University of Johannesburg computer lab"
              loading="lazy"
              width="1400"
              height="1051"
            />
            <figcaption>Presenting in a University of Johannesburg computer lab</figcaption>
          </Shot>
          <Shot $pos="20% center">
            <img
              src="/images/web/wrc-pitch.jpg"
              alt="Joël pitching with a microphone at the 4th WRC Symposium"
              loading="lazy"
              width="1080"
              height="1200"
            />
            <figcaption>Pitching at the 4th WRC Symposium hackathon</figcaption>
          </Shot>
        </Gallery>
      </Inner>
    </Section>

    <ContactBand>
      <Inner>
        <SectionHead style={{ marginBottom: '2rem' }}>
          <Eyebrow>open channel</Eyebrow>
          <H2>Let’s build something impactful together</H2>
          <Lead>
            I’m always energized by meaningful conversations and new opportunities to collaborate —
            whether you’re exploring fresh ideas, building strategic partnerships, or curious how
            technology can create real value.
          </Lead>
        </SectionHead>
        <ButtonRow>
          <LightButton href={`mailto:${contact.email}`}>Email me</LightButton>
          <GhostLight href={contact.linkedin} target="_blank" rel="noopener noreferrer">
            Connect on LinkedIn
          </GhostLight>
        </ButtonRow>
      </Inner>
    </ContactBand>
  </>
);

export default HomePage;
