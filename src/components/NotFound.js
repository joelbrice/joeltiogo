import React from 'react';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';
import { t, Section, Inner, H1, Lead, PrimaryButton, SecondaryButton, ButtonRow } from '../theme';

const Term = styled.pre`
  margin: 0 0 2rem;
  padding: 1.2rem 1.1rem;
  background: ${t.term.bg};
  border: 1px solid ${t.term.border};
  border-radius: 12px;
  color: ${t.term.text};
  font-family: ${t.mono};
  font-size: 0.88rem;
  line-height: 1.7;
  white-space: pre-wrap;
  word-break: break-all;

  b {
    color: ${t.term.green};
    font-weight: 400;
  }

  i {
    color: #ff7b72;
    font-style: normal;
  }
`;

const NotFound = () => {
  const { pathname } = useLocation();
  return (
    <Section>
      <Inner style={{ maxWidth: 720, minHeight: '55vh' }}>
        <Term aria-hidden="true">
          <b>joel@portfolio:~$</b> cd {pathname}
          {'\n'}
          <i>cd: no such file or directory: {pathname}</i>
        </Term>
        <H1>404 — page not found</H1>
        <Lead>The page you’re looking for doesn’t exist or has been moved.</Lead>
        <ButtonRow>
          <PrimaryButton to="/">Back to home</PrimaryButton>
          <SecondaryButton to="/about">Read my story</SecondaryButton>
        </ButtonRow>
      </Inner>
    </Section>
  );
};

export default NotFound;
