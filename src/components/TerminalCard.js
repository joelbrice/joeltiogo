import React from 'react';
import styled, { keyframes } from 'styled-components';
import { t } from '../theme';
import { identity, toolkit } from '../data/profile';

const blink = keyframes`
  50% { opacity: 0; }
`;

const Window = styled.figure`
  margin: 0;
  width: 100%;
  background: ${t.term.bg};
  border: 1px solid ${t.term.border};
  border-radius: 10px;
  overflow: hidden;
  font-family: ${t.mono};
  font-size: 0.8rem;
  line-height: 1.7;
  color: ${t.term.text};

  @media ${t.tablet} {
    font-size: 0.86rem;
  }
`;

const Bar = styled.div`
  display: flex;
  gap: 0.4rem;
  padding: 0.6rem 0.8rem;
  background: ${t.term.bar};
  border-bottom: 1px solid ${t.term.border};

  span {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: #3a3f47;
  }
`;

const Screen = styled.div`
  padding: 1rem 1rem 1.15rem;

  @media ${t.tablet} {
    padding: 1.2rem 1.3rem 1.3rem;
  }

  p {
    margin: 0;
  }
`;

const Prompt = styled.span`
  color: ${t.term.green};
`;

const Row = styled.p`
  display: grid;
  grid-template-columns: 7.5rem 1fr;
  gap: 0.6rem;

  b {
    color: ${t.term.purple};
    font-weight: 400;
  }
`;

const Cursor = styled.span`
  display: inline-block;
  width: 0.55em;
  height: 1.05em;
  vertical-align: text-bottom;
  background: ${t.term.text};
  animation: ${blink} 1.1s step-end infinite;
`;

// The engineer behind the strategist, as a tiny terminal session.
const TerminalCard = () => (
  <Window aria-label="Technical background">
    <Bar aria-hidden="true">
      <span />
      <span />
      <span />
    </Bar>
    <Screen>
      <p>
        <Prompt>$</Prompt> whoami
      </p>
      <p style={{ marginBottom: '0.8rem' }}>{identity.tagline}</p>
      <p>
        <Prompt>$</Prompt> ls ~/toolkit
      </p>
      {toolkit.map(([k, v]) => (
        <Row key={k}>
          <b>{k}</b>
          <span>{v}</span>
        </Row>
      ))}
      <p style={{ marginTop: '0.8rem' }}>
        <Prompt>$</Prompt> <Cursor aria-hidden="true" />
      </p>
    </Screen>
  </Window>
);

export default TerminalCard;
