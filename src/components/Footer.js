import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { t } from '../theme';
import { contact, identity } from '../data/profile';

const Wrap = styled.footer`
  background: #070b14;
  color: #94a3b8;
  padding: 3.5rem 1rem 2rem;

  @media ${t.tablet} {
    padding: 4.5rem 2rem 2.5rem;
  }
`;

const Grid = styled.div`
  max-width: ${t.maxWidth};
  margin: 0 auto;
  display: grid;
  gap: 2.5rem;

  @media ${t.tablet} {
    grid-template-columns: 2fr 1fr 1fr;
    gap: 3.5rem;
  }
`;

const Title = styled.h2`
  font-size: 1.05rem;
  font-weight: 600;
  color: #fff;
  margin: 0 0 1rem;
`;

const Text = styled.p`
  font-size: 0.95rem;
  line-height: 1.7;
  margin: 0 0 1.3rem;
  max-width: 420px;
`;

const Mono = styled.p`
  font-family: ${t.mono};
  font-size: 0.8rem;
  color: #64748b;
  margin: 0;
`;

const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  gap: 0.7rem;
  font-size: 0.95rem;

  a {
    color: #94a3b8;
    text-decoration: none;
    transition: color 0.2s ease;
  }

  a:hover {
    color: #fff;
  }
`;

const Social = styled.div`
  display: flex;
  gap: 0.8rem;
  margin-bottom: 1.4rem;
`;

const Icon = styled.a`
  width: 42px;
  height: 42px;
  border-radius: 10px;
  display: grid;
  place-items: center;
  color: #cbd5e1;
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.08);
  transition: background 0.2s ease, color 0.2s ease, transform 0.2s ease;

  &:hover {
    background: ${t.accent};
    color: #fff;
    transform: translateY(-2px);
  }

  svg {
    width: 20px;
    height: 20px;
  }
`;

const Bottom = styled.div`
  max-width: ${t.maxWidth};
  margin: 3rem auto 0;
  padding-top: 1.6rem;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem 2rem;
  justify-content: space-between;
  font-size: 0.85rem;
  color: #64748b;
`;

const LinkedInIcon = () => (
  <svg fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
  </svg>
);

const GitHubIcon = () => (
  <svg fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
  </svg>
);

const EmailIcon = () => (
  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);

const Footer = () => (
  <Wrap>
    <Grid>
      <div>
        <Title>{identity.name}</Title>
        <Text>
          Business development leader with an engineer’s toolkit — bridging technology, market
          opportunities and circular economy principles.
        </Text>
        <Social>
          <Icon href={contact.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <LinkedInIcon />
          </Icon>
          <Icon href={contact.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <GitHubIcon />
          </Icon>
          <Icon href={`mailto:${contact.email}`} aria-label="Email">
            <EmailIcon />
          </Icon>
        </Social>
        <Mono>$ echo "{identity.tagline}"</Mono>
      </div>

      <div>
        <Title>Explore</Title>
        <List>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/expertise">Expertise</Link></li>
          <li><Link to="/insights">Insights</Link></li>
        </List>
      </div>

      <div>
        <Title>Focus areas</Title>
        <List>
          <li>Business development</li>
          <li>Cloud &amp; digital transformation</li>
          <li>ESG &amp; circularity</li>
          <li>Engineering, data &amp; AI</li>
        </List>
      </div>
    </Grid>

    <Bottom>
      <span>&copy; {new Date().getFullYear()} {identity.fullName}. All rights reserved.</span>
      <span>Built with React.</span>
    </Bottom>
  </Wrap>
);

export default Footer;
