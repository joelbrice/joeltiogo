import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { t } from '../theme';
import { contact, identity } from '../data/profile';
import { legal } from '../data/legal';

const Wrap = styled.footer`
  background: #0a1320;
  color: #9aa5b4;
  padding: 3rem 1rem 2rem;

  @media ${t.tablet} {
    padding: 3.5rem 2rem 2.2rem;
  }
`;

const Top = styled.div`
  max-width: ${t.maxWidth};
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: space-between;
  align-items: flex-start;
`;

const Name = styled.p`
  font-family: ${t.serif};
  font-size: 1.3rem;
  font-weight: 600;
  color: #fff;
  margin: 0 0 0.4rem;
`;

const Tag = styled.p`
  margin: 0;
  font-size: 0.92rem;
`;

const Links = styled.nav`
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem 1.6rem;
  font-size: 0.95rem;

  a {
    color: #c3cad5;
    text-decoration: none;
  }

  a:hover {
    color: #fff;
  }
`;

const Bottom = styled.div`
  max-width: ${t.maxWidth};
  margin: 2.5rem auto 0;
  padding-top: 1.4rem;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem 2rem;
  justify-content: space-between;
  font-size: 0.82rem;
  color: #7d8999;
`;

const LegalLink = styled(Link)`
  color: #7d8999;
  text-decoration: none;

  &:hover {
    color: #fff;
  }
`;

const Footer = () => (
  <Wrap>
    <Top>
      <div>
        <Name>{identity.name}</Name>
        <Tag>Strategy · Business Development · Go-to-Market</Tag>
      </div>
      <Links aria-label="Footer">
        <Link to="/about">About</Link>
        <Link to="/expertise">Expertise</Link>
        <Link to="/insights">Insights</Link>
        <a href={contact.linkedin} target="_blank" rel="noopener noreferrer">
          LinkedIn
        </a>
        <a href={contact.github} target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
        <a href={`mailto:${contact.email}`}>Email</a>
      </Links>
    </Top>
    <Bottom>
      <span>&copy; {new Date().getFullYear()} {identity.fullName}</span>
      <LegalLink to="/privacy">{legal.address.length ? 'Legal notice & privacy' : 'Privacy'}</LegalLink>
      <span>Built with React.</span>
    </Bottom>
  </Wrap>
);

export default Footer;
