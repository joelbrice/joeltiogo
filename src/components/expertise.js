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
  Card,
  Grid,
  Chip,
  ChipList,
} from '../theme';
import { toolkit, education, identity } from '../data/profile';

const areas = [
  {
    title: 'Business Development & Go-to-Market',
    body: 'Crafting and executing go-to-market strategies, identifying new opportunities and building high-value partnerships that accelerate commercial success in technology-driven sectors.',
  },
  {
    title: 'Strategic Partnerships & Stakeholders',
    body: 'Developing strong relationships with clients, industry partners and cross-functional teams to align objectives and deliver impactful, long-term collaborations.',
  },
  {
    title: 'Digital Transformation & Cloud',
    body: 'Guiding organizations in adopting emerging technologies to modernize operations, improve efficiency and create new business models.',
  },
  {
    title: 'ESG & Circularity',
    body: 'Supporting companies in implementing ESG strategies and circular economy practices, with a current focus on transparency and compliance solutions in the battery ecosystem.',
  },
  {
    title: 'Entrepreneurial Leadership',
    body: 'Hands-on experience as former founder, CEO and lead engineer of Expotech Industries — combining strategic vision with practical execution.',
  },
  {
    title: 'International Business',
    body: 'Speaking Yemba, French, English and German, with experience navigating markets across Europe, Africa, Asia and North America.',
  },
];

const Num = styled.span`
  display: block;
  font-family: ${t.mono};
  font-size: 0.8rem;
  color: ${t.accent};
  margin-bottom: 1rem;
`;

/* ---------- Differentiator ---------- */

const Feature = styled.div`
  background: ${t.term.bg};
  border: 1px solid ${t.term.border};
  border-radius: ${t.radius};
  color: ${t.term.text};
  padding: 1.8rem 1.5rem;
  margin-bottom: 1.5rem;
  display: grid;
  gap: 1.5rem;

  @media ${t.laptop} {
    grid-template-columns: 1.2fr 1fr;
    gap: 3rem;
    padding: 2.6rem 2.4rem;
    align-items: center;
  }

  h3 {
    color: #fff;
    font-size: clamp(1.3rem, 3vw, 1.7rem);
    margin: 0 0 0.9rem;
    line-height: 1.25;
  }

  p {
    color: ${t.term.text};
    margin: 0;
    line-height: 1.7;
  }
`;

const FeatureTag = styled.span`
  display: inline-block;
  font-family: ${t.mono};
  font-size: 0.78rem;
  color: ${t.term.green};
  margin-bottom: 0.9rem;
`;

const Stack = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  font-family: ${t.mono};
  font-size: 0.88rem;
  display: grid;
  gap: 0.55rem;

  li {
    display: flex;
    gap: 0.6rem;
  }

  b {
    color: ${t.term.purple};
    font-weight: 400;
    min-width: 6.5rem;
  }
`;

/* ---------- Toolkit ---------- */

const ToolGroups = styled.div`
  display: grid;
  gap: 1.2rem;

  @media ${t.tablet} {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media ${t.laptop} {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
`;

const GroupTitle = styled.h3`
  font-family: ${t.mono};
  font-size: 0.85rem;
  font-weight: 600;
  color: ${t.ink};
  margin: 0 0 0.9rem;

  &::before {
    content: './';
    color: ${t.accent};
  }
`;

/* ---------- Education ---------- */

const EduList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  border-top: 1px solid ${t.line};
`;

const EduItem = styled.li`
  display: grid;
  gap: 0.2rem;
  padding: 1.15rem 0;
  border-bottom: 1px solid ${t.line};

  @media ${t.tablet} {
    grid-template-columns: 1.2fr 1fr auto;
    gap: 1.5rem;
    align-items: baseline;
  }

  strong {
    color: ${t.ink};
    font-weight: 600;
  }

  span {
    color: ${t.text};
  }

  small {
    font-family: ${t.mono};
    font-size: 0.78rem;
    color: ${t.muted};
  }
`;

const Expertise = () => (
  <>
    <Section>
      <Inner>
        <SectionHead>
          <Eyebrow>expertise</Eyebrow>
          <H1>Strategy, with an engineer’s toolkit</H1>
          <Lead>
            Driving sustainable growth by combining strategic business development, digital
            innovation and a deep commitment to ESG and circular economy principles — backed by
            hands-on engineering, software and data experience.
          </Lead>
        </SectionHead>

        <Feature>
          <div>
            <FeatureTag>$ diff business-leader joel</FeatureTag>
            <h3>The difference: I’ve been on the engineering side of the table</h3>
            <p>
              Electrical engineer, former full-stack developer, start-up founder, trained in data
              science and AI. I can engage engineering teams on their own terms and translate
              technical detail into business value — for customers, partners and leadership.
            </p>
          </div>
          <Stack aria-label="Background summary">
            <li><b>engineering</b> Electrical — energy &amp; solar</li>
            <li><b>software</b> Full-stack — C#, React, Node.js, Python</li>
            <li><b>data &amp; AI</b> Le Wagon — Data Science &amp; AI</li>
            <li><b>business</b> MBA — Frankfurt School</li>
            <li><b>now</b> {identity.role}</li>
          </Stack>
        </Feature>

        <Grid $cols={3}>
          {areas.map((a, i) => (
            <Card key={a.title}>
              <Num>{String(i + 1).padStart(2, '0')}</Num>
              <H3>{a.title}</H3>
              <Body style={{ marginBottom: 0 }}>{a.body}</Body>
            </Card>
          ))}
        </Grid>
      </Inner>
    </Section>

    <Section $alt>
      <Inner>
        <SectionHead>
          <Eyebrow>ls ~/toolkit</Eyebrow>
          <H2>Tools I’ve built with</H2>
          <Lead>
            Technologies and tools from my work across electrical engineering, software development
            and data science.
          </Lead>
        </SectionHead>
        <ToolGroups>
          {toolkit.map((g) => (
            <Card key={g.group}>
              <GroupTitle>{g.group.toLowerCase().replace(/ & | /g, '-')}</GroupTitle>
              <ChipList>
                {g.items.map((item) => (
                  <Chip key={item}>{item}</Chip>
                ))}
              </ChipList>
            </Card>
          ))}
        </ToolGroups>
      </Inner>
    </Section>

    <Section>
      <Inner>
        <SectionHead>
          <Eyebrow>education</Eyebrow>
          <H2>Education &amp; training</H2>
        </SectionHead>
        <EduList>
          {education.map((e) => (
            <EduItem key={e.title}>
              <strong>{e.title}</strong>
              <span>{e.school}</span>
              <small>{e.place}</small>
            </EduItem>
          ))}
        </EduList>
        <Body style={{ marginTop: '1.6rem' }}>
          <strong style={{ color: t.ink }}>Languages:</strong> Yemba (mother tongue) · French · English · German
        </Body>
      </Inner>
    </Section>
  </>
);

export default Expertise;
