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
  ButtonRow,
} from '../theme';
import { journey, offDuty, prologue, epilogue, languageStory } from '../data/profile';

const HeroGrid = styled.div`
  display: grid;
  gap: 2.5rem;
  align-items: center;

  @media ${t.laptop} {
    grid-template-columns: 1.15fr 0.85fr;
    gap: 4rem;
  }
`;

const HeroPhoto = styled.img`
  width: 100%;
  height: auto;
  aspect-ratio: 4 / 3;
  object-fit: cover;
  object-position: 50% 30%;
  border-radius: ${t.radius};
  box-shadow: 0 24px 50px rgba(11, 18, 32, 0.16);
  background: ${t.bgAlt};
`;

const Hook = styled.p`
  font-size: clamp(1.15rem, 2.6vw, 1.4rem);
  line-height: 1.6;
  color: ${t.ink};
  margin: 0 0 1.2rem;
  max-width: 680px;
`;

/* ---------- Timeline ---------- */

const Timeline = styled.ol`
  list-style: none;
  margin: 0;
  padding: 0;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0.4rem;
    bottom: 0.4rem;
    left: 1.05rem;
    width: 2px;
    background: linear-gradient(${t.accent}, ${t.line});
  }

  @media ${t.tablet} {
    &::before {
      left: 1.35rem;
    }
  }
`;

const Step = styled.li`
  position: relative;
  padding-left: 3.2rem;
  padding-bottom: 2.8rem;

  &:last-child {
    padding-bottom: 0;
  }

  @media ${t.tablet} {
    padding-left: 4.4rem;
    padding-bottom: 3.4rem;
  }
`;

const Num = styled.span`
  position: absolute;
  left: 0;
  top: 0;
  width: 2.2rem;
  height: 2.2rem;
  border-radius: 50%;
  display: grid;
  place-items: center;
  font-family: ${t.mono};
  font-size: 0.78rem;
  font-weight: 700;
  color: #fff;
  background: ${t.ink};
  box-shadow: 0 0 0 5px ${t.bgAlt};

  @media ${t.tablet} {
    width: 2.8rem;
    height: 2.8rem;
    font-size: 0.85rem;
  }
`;

const Place = styled.p`
  font-family: ${t.mono};
  font-size: 0.8rem;
  color: ${t.muted};
  margin: 0.35rem 0 0.4rem;
`;

const StepBody = styled.div`
  display: grid;
  gap: 1.4rem;

  @media ${t.tablet} {
    grid-template-columns: ${({ $photo }) => ($photo ? '1.4fr 1fr' : '1fr')};
    align-items: start;
    gap: 2rem;
  }

  p {
    max-width: 680px;
  }
`;

const StepPhoto = styled.figure`
  margin: 0;

  img {
    width: 100%;
    max-height: 340px;
    object-fit: cover;
    border-radius: 12px;
    background: ${t.bgAlt};
  }

  figcaption {
    margin-top: 0.55rem;
    font-family: ${t.mono};
    font-size: 0.78rem;
    color: ${t.muted};
  }
`;

/* ---------- Languages ---------- */

const LangGrid = styled.ol`
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  gap: 1rem;

  @media ${t.tablet} {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 1.2rem;
  }

  @media ${t.laptop} {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
`;

const Lang = styled.li`
  background: #fff;
  border: 1px solid ${t.line};
  border-radius: ${t.radius};
  padding: 1.5rem 1.4rem;
  color: ${t.text};

  &:first-child {
    background: ${t.ink};
    border-color: ${t.ink};
    color: #cbd5e1;
  }

  code {
    display: inline-block;
    font-family: ${t.mono};
    font-size: 0.75rem;
    padding: 0.25rem 0.45rem;
    border-radius: 5px;
    background: ${t.accentSoft};
    color: ${t.accent};
    margin-bottom: 1rem;
  }

  &:first-child code {
    background: rgba(255, 255, 255, 0.1);
    color: ${t.term.green};
  }

  h3 {
    font-size: 1.35rem;
    margin: 0 0 0.15rem;
    color: ${t.ink};
  }

  &:first-child h3 {
    color: #fff;
  }

  em {
    display: block;
    font-style: normal;
    font-family: ${t.mono};
    font-size: 0.75rem;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    opacity: 0.75;
    margin-bottom: 0.8rem;
  }

  p {
    margin: 0;
    font-size: 0.97rem;
    line-height: 1.65;
  }
`;

/* ---------- Epilogue & off duty ---------- */

const Epilogue = styled.p`
  font-size: clamp(1.2rem, 2.8vw, 1.55rem);
  line-height: 1.55;
  color: ${t.ink};
  max-width: 860px;
  margin: 0 0 2.5rem;
`;

const Hobbies = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
`;

const Hobby = styled.li`
  background: #fff;
  border: 1px solid ${t.line};
  border-radius: 12px;
  padding: 1.3rem 1.2rem;

  span {
    font-size: 1.6rem;
    display: block;
    margin-bottom: 0.6rem;
  }

  strong {
    display: block;
    color: ${t.ink};
    margin-bottom: 0.2rem;
  }

  small {
    color: ${t.muted};
    font-size: 0.9rem;
    line-height: 1.5;
  }
`;

const Quote = styled.blockquote`
  margin: 0;
  padding: 1.6rem 1.6rem 1.6rem 1.4rem;
  border-left: 4px solid ${t.accent};
  background: #fff;
  border-radius: 0 12px 12px 0;
  color: ${t.ink};
  font-size: clamp(1.05rem, 2.2vw, 1.25rem);
  line-height: 1.6;
`;

const TwoCol = styled.div`
  display: grid;
  gap: 2rem;

  @media ${t.laptop} {
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
    align-items: start;
  }
`;

const About = () => (
  <>
    <Section>
      <Inner>
        <HeroGrid>
          <div>
            <Eyebrow>about · prologue</Eyebrow>
            <H1>From circuits to strategy</H1>
            <Hook>{prologue[0]}</Hook>
            <Lead>{prologue[1]}</Lead>
          </div>
          <HeroPhoto
            src="/images/web/boardroom.jpg"
            alt="Joël Tiogo in a navy suit, professional portrait"
            width="1400"
            height="934"
          />
        </HeroGrid>
      </Inner>
    </Section>

    <Section $alt>
      <Inner>
        <SectionHead>
          <Eyebrow>git log --reverse</Eyebrow>
          <H2>The journey so far</H2>
          <Lead>Seven chapters across three countries — and the engineering never left.</Lead>
        </SectionHead>

        <Timeline>
          {journey.map((step, i) => (
            <Step key={step.id}>
              <Num aria-hidden="true">{String(i + 1).padStart(2, '0')}</Num>
              <Place>{step.place}</Place>
              <H3>{step.title}</H3>
              <StepBody $photo={!!step.photo}>
                <Body>{step.body}</Body>
                {step.photo && (
                  <StepPhoto>
                    <img src={step.photo.src} alt={step.photo.alt} loading="lazy" />
                    <figcaption>{step.photo.caption}</figcaption>
                  </StepPhoto>
                )}
              </StepBody>
            </Step>
          ))}
        </Timeline>
      </Inner>
    </Section>

    <Section>
      <Inner>
        <SectionHead>
          <Eyebrow>i18n</Eyebrow>
          <H2>Four languages, one story</H2>
          <Lead>
            Every language I speak marks a chapter of my life. Together they let me connect
            naturally with people from very different cultures and backgrounds — something I truly
            value.
          </Lead>
        </SectionHead>
        <LangGrid>
          {languageStory.map((l) => (
            <Lang key={l.code}>
              <code>{l.code}</code>
              <h3 lang={l.code}>{l.name}</h3>
              <em>{l.role}</em>
              <p>{l.body}</p>
            </Lang>
          ))}
        </LangGrid>
      </Inner>
    </Section>

    <Section $alt>
      <Inner>
        <Eyebrow>epilogue</Eyebrow>
        <H2>What connects it all</H2>
        <Epilogue>{epilogue}</Epilogue>
        <TwoCol>
          <div>
            <H3>Leadership beyond business</H3>
            <Body>
              I’m a people-oriented leader who values empathy, trust and meaningful connections. I
              believe true leadership extends beyond business, and I’m actively involved in
              initiatives that empower others through ideas, mentorship and community development.
            </Body>
          </div>
          <Quote>
            “Combining good ESG practices with advanced technology will shape a brighter future.”
          </Quote>
        </TwoCol>
      </Inner>
    </Section>

    <Section>
      <Inner>
        <SectionHead>
          <Eyebrow>off duty</Eyebrow>
          <H2>When I’m not at work</H2>
        </SectionHead>
        <Hobbies>
          {offDuty.map((h) => (
            <Hobby key={h.label}>
              <span aria-hidden="true">{h.icon}</span>
              <strong>{h.label}</strong>
              <small>{h.note}</small>
            </Hobby>
          ))}
        </Hobbies>
        <ButtonRow style={{ marginTop: '2.8rem' }}>
          <PrimaryButton to="/expertise">See what I bring to the table</PrimaryButton>
        </ButtonRow>
      </Inner>
    </Section>
  </>
);

export default About;
