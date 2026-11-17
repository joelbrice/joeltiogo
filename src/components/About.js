import React from 'react';
import styled from 'styled-components';
import {
  t,
  Section,
  Inner,
  Eyebrow,
  H1,
  H2,
  Lead,
  Body,
  SectionHead,
  ExternalButton,
  ButtonRow,
} from '../theme';
import { contact, credentials, languages, motherTongue, interests, fieldPhotos } from '../data/profile';

const HeroGrid = styled.div`
  display: grid;
  gap: 2.5rem;
  align-items: center;

  @media ${t.laptop} {
    grid-template-columns: 1.2fr 0.8fr;
    gap: 4.5rem;
  }
`;

const HeroPhoto = styled.img`
  width: 100%;
  height: auto;
  aspect-ratio: 4 / 3;
  object-fit: cover;
  object-position: 50% 25%;
  border-radius: ${t.radius};
  background: ${t.bgAlt};
`;

const Facts = styled.dl`
  display: grid;
  gap: 2rem;
  margin: 0;

  @media ${t.tablet} {
    grid-template-columns: 1.4fr 1fr;
    gap: 3rem;
  }

  dt {
    font-size: 0.75rem;
    font-weight: 500;
    letter-spacing: 0.16em;
    text-transform: uppercase;
    color: ${t.accent};
    margin-bottom: 0.9rem;
  }

  dd {
    margin: 0;
  }
`;

const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  border-top: 1px solid ${t.line};

  li {
    padding: 0.85rem 0;
    border-bottom: 1px solid ${t.line};
  }

  strong {
    display: block;
    color: ${t.ink};
    font-weight: 500;
  }

  span {
    font-size: 0.9rem;
    color: ${t.muted};
  }
`;

const Small = styled.p`
  margin: 0.6rem 0 0;
  font-size: 0.9rem;
  color: ${t.muted};
`;

const Photos = styled.div`
  display: grid;
  gap: 1rem;

  @media ${t.tablet} {
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 1.3rem;
  }
`;

const Shot = styled.figure`
  margin: 0;

  img {
    width: 100%;
    height: auto;
    aspect-ratio: 4 / 3;
    object-fit: cover;
    object-position: ${({ $pos }) => $pos || 'center'};
    border-radius: ${t.radius};
    background: #e9e7e2;
  }

  figcaption {
    margin-top: 0.6rem;
    font-size: 0.88rem;
    color: ${t.muted};
  }

  a {
    color: ${t.accent};
    text-decoration: none;
    font-weight: 500;
    margin-left: 0.3rem;
  }

  a:hover {
    text-decoration: underline;
  }
`;

const About = () => (
  <>
    <Section>
      <Inner>
        <HeroGrid>
          <div>
            <Eyebrow>About</Eyebrow>
            <H1>Strategist with an engineer’s foundation</H1>
            <Lead>
              My path runs from electrical engineering and software in South Africa, through
              founding my own tech company, to an MBA in Frankfurt and business development in
              automotive and electrification.
            </Lead>
            <Body>
              Curiosity and empathy shape how I lead. The rest of the story is best told in
              conversation.
            </Body>
            <ButtonRow style={{ marginTop: '1.6rem' }}>
              <ExternalButton $dark href={`mailto:${contact.email}`}>
                Get in touch
              </ExternalButton>
              <ExternalButton href={contact.linkedin} target="_blank" rel="noopener noreferrer">
                LinkedIn
              </ExternalButton>
            </ButtonRow>
          </div>
          <HeroPhoto
            src="/images/web/boardroom.jpg"
            alt="Joël Tiogo in a navy suit"
            width="1400"
            height="934"
          />
        </HeroGrid>
      </Inner>
    </Section>

    <Section $alt>
      <Inner>
        <Facts>
          <div>
            <dt>Education &amp; development</dt>
            <dd>
              <List>
                {credentials.map((c) => (
                  <li key={c.title}>
                    <strong>{c.title}</strong>
                    <span>{c.school}</span>
                  </li>
                ))}
              </List>
            </dd>
          </div>
          <div>
            <dt>Languages</dt>
            <dd>
              <List>
                {languages.map((l) => (
                  <li key={l}>
                    <strong>{l}</strong>
                  </li>
                ))}
              </List>
              <Small>Mother tongue: {motherTongue}</Small>
            </dd>
            <dt style={{ marginTop: '2rem' }}>Outside work</dt>
            <dd>
              <Body style={{ margin: 0 }}>{interests.join(' · ')}</Body>
            </dd>
          </div>
        </Facts>
      </Inner>
    </Section>

    <Section>
      <Inner>
        <SectionHead>
          <Eyebrow>From the field</Eyebrow>
          <H2>Hands-on before the boardroom</H2>
        </SectionHead>
        <Photos>
          {fieldPhotos.map((p) => (
            <Shot key={p.src} $pos={p.pos}>
              <img src={p.src} alt={p.alt} loading="lazy" />
              <figcaption>
                {p.caption}
                {p.link && (
                  <a href={p.link} target="_blank" rel="noopener noreferrer">
                    Read more ↗
                  </a>
                )}
              </figcaption>
            </Shot>
          ))}
        </Photos>
      </Inner>
    </Section>
  </>
);

export default About;
