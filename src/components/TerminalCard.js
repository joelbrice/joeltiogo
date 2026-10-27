import React from 'react';
import styled, { keyframes } from 'styled-components';
import { t } from '../theme';
import { identity } from '../data/profile';

const reveal = keyframes`
  from { opacity: 0; transform: translateY(4px); }
  to { opacity: 1; transform: none; }
`;

const blink = keyframes`
  50% { opacity: 0; }
`;

const Window = styled.figure`
  margin: 0;
  width: 100%;
  background: ${t.term.bg};
  border: 1px solid ${t.term.border};
  border-radius: 12px;
  box-shadow: 0 30px 60px rgba(11, 18, 32, 0.28);
  overflow: hidden;
  font-family: ${t.mono};
  font-size: 0.82rem;
  line-height: 1.65;
  color: ${t.term.text};

  @media ${t.tablet} {
    font-size: 0.9rem;
  }
`;

const Bar = styled.div`
  display: flex;
  align-items: center;
  gap: 0.45rem;
  padding: 0.7rem 0.9rem;
  background: ${t.term.bar};
  border-bottom: 1px solid ${t.term.border};

  span {
    width: 11px;
    height: 11px;
    border-radius: 50%;
  }
  span:nth-child(1) { background: #ff5f57; }
  span:nth-child(2) { background: #febc2e; }
  span:nth-child(3) { background: #28c840; }

  em {
    margin-left: auto;
    margin-right: auto;
    padding-right: 2.2rem;
    font-style: normal;
    font-size: 0.75rem;
    color: ${t.term.dim};
  }
`;

const Screen = styled.pre`
  margin: 0;
  padding: 1.1rem 1rem 1.3rem;
  white-space: pre-wrap;
  word-break: break-word;
  font: inherit;

  @media ${t.tablet} {
    padding: 1.3rem 1.4rem 1.5rem;
  }
`;

const Line = styled.span`
  display: block;
  opacity: 0;
  animation: ${reveal} 0.35s ease forwards;
  animation-delay: ${({ $i }) => 0.25 + $i * 0.12}s;
`;

const Prompt = styled.span`
  color: ${t.term.green};
`;
const Path = styled.span`
  color: ${t.term.blue};
`;
const Key = styled.span`
  color: ${t.term.purple};
`;
const Str = styled.span`
  color: ${t.term.amber};
`;
const Dim = styled.span`
  color: ${t.term.dim};
`;

const Cursor = styled.span`
  display: inline-block;
  width: 0.55em;
  height: 1.1em;
  vertical-align: text-bottom;
  background: ${t.term.text};
  animation: ${blink} 1.1s step-end infinite;
`;

const PS1 = () => (
  <>
    <Prompt>joel@portfolio</Prompt>
    <Dim>:</Dim>
    <Path>~</Path>
    <Dim>$ </Dim>
  </>
);

const list = (items) => (
  <>
    [
    {items.map((it, i) => (
      <React.Fragment key={it}>
        <Str>"{it}"</Str>
        {i < items.length - 1 ? ', ' : ''}
      </React.Fragment>
    ))}
    ]
  </>
);

const rows = [
  ['role', <Str key="r">"{identity.role}"</Str>],
  ['focus', list(['cloud', 'electrification', 'battery transparency'])],
  ['studied', list(['Electrical Engineering', 'MBA', 'Data Science & AI'])],
  ['writes', list(['Python', 'JavaScript', 'C#'])],
  ['speaks', list(['ybb', 'fr', 'en', 'de'])],
  ['off_duty', list(['chess', 'football', 'embedded systems'])],
];

// A small "terminal" that introduces Joël the way an engineer would.
const TerminalCard = () => {
  let i = 0;
  return (
    <Window aria-label="Profile summary written as a terminal session">
      <Bar aria-hidden="true">
        <span />
        <span />
        <span />
        <em>~/profile — zsh</em>
      </Bar>
      <Screen>
        <Line $i={i++}>
          <PS1 />
          whoami
        </Line>
        <Line $i={i++}>{identity.tagline}</Line>
        <Line $i={i++}>&nbsp;</Line>
        <Line $i={i++}>
          <PS1 />
          cat joel.json
        </Line>
        <Line $i={i++}>{'{'}</Line>
        {rows.map(([k, v], idx) => (
          <Line $i={i++} key={k}>
            {'  '}
            <Key>"{k}"</Key>: {v}
            {idx < rows.length - 1 ? ',' : ''}
          </Line>
        ))}
        <Line $i={i++}>{'}'}</Line>
        <Line $i={i++}>
          <PS1 />
          <Cursor aria-hidden="true" />
        </Line>
      </Screen>
    </Window>
  );
};

export default TerminalCard;
