import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

// Design tokens shared by every page.
export const t = {
  ink: '#0b1220',
  text: '#334155',
  muted: '#64748b',
  line: '#e2e8f0',
  bg: '#ffffff',
  bgAlt: '#f5f7fb',
  accent: '#4c51bf',
  accentSoft: '#eef0ff',
  // Terminal palette (GitHub dark)
  term: {
    bg: '#0d1117',
    bar: '#161b22',
    border: '#30363d',
    text: '#c9d1d9',
    dim: '#8b949e',
    green: '#3fb950',
    blue: '#79c0ff',
    purple: '#d2a8ff',
    amber: '#e3b341',
  },
  sans: "'Roboto', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Helvetica Neue', Arial, sans-serif",
  mono: "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace",
  maxWidth: '1160px',
  radius: '14px',
  tablet: '(min-width: 768px)',
  laptop: '(min-width: 1024px)',
};

export const Section = styled.section`
  padding: 4.5rem 1rem;
  background: ${({ $alt }) => ($alt ? t.bgAlt : t.bg)};

  @media ${t.tablet} {
    padding: 6rem 2rem;
  }
`;

export const Inner = styled.div`
  max-width: ${t.maxWidth};
  margin: 0 auto;
`;

// Small monospace label, e.g. "// about"
export const Eyebrow = styled.p`
  font-family: ${t.mono};
  font-size: 0.85rem;
  letter-spacing: 0.02em;
  color: ${t.accent};
  margin: 0 0 0.9rem;

  &::before {
    content: '// ';
    opacity: 0.6;
  }
`;

export const H1 = styled.h1`
  font-size: clamp(2.2rem, 6vw, 3.6rem);
  line-height: 1.08;
  letter-spacing: -0.02em;
  color: ${t.ink};
  font-weight: 700;
  margin: 0 0 1.1rem;
`;

export const H2 = styled.h2`
  font-size: clamp(1.7rem, 4vw, 2.4rem);
  line-height: 1.15;
  letter-spacing: -0.015em;
  color: ${t.ink};
  font-weight: 700;
  margin: 0 0 1rem;
`;

export const H3 = styled.h3`
  font-size: 1.2rem;
  line-height: 1.3;
  color: ${t.ink};
  font-weight: 700;
  margin: 0 0 0.6rem;
`;

export const Lead = styled.p`
  font-size: clamp(1.05rem, 2.2vw, 1.22rem);
  line-height: 1.7;
  color: ${t.text};
  max-width: 720px;
  margin: 0 0 1.4rem;
`;

export const Body = styled.p`
  font-size: 1.02rem;
  line-height: 1.75;
  color: ${t.text};
  margin: 0 0 1rem;
`;

export const SectionHead = styled.div`
  max-width: 760px;
  margin-bottom: 2.8rem;
`;

const buttonBase = css`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.85rem 1.6rem;
  border-radius: 10px;
  font-weight: 600;
  font-size: 1rem;
  text-decoration: none;
  transition: transform 0.2s ease, box-shadow 0.2s ease, background 0.2s ease;

  &:hover {
    transform: translateY(-2px);
  }

  &:focus-visible {
    outline: 3px solid ${t.accent};
    outline-offset: 3px;
  }
`;

export const PrimaryButton = styled(Link)`
  ${buttonBase}
  background: ${t.ink};
  color: #fff;

  &:hover {
    box-shadow: 0 10px 24px rgba(11, 18, 32, 0.22);
  }
`;

export const SecondaryButton = styled(Link)`
  ${buttonBase}
  background: transparent;
  color: ${t.ink};
  border: 1.5px solid ${t.line};

  &:hover {
    border-color: ${t.ink};
  }
`;

export const ExternalButton = styled.a`
  ${buttonBase}
  background: ${({ $dark }) => ($dark ? t.ink : 'transparent')};
  color: ${({ $dark }) => ($dark ? '#fff' : t.ink)};
  border: 1.5px solid ${({ $dark }) => ($dark ? t.ink : t.line)};

  &:hover {
    border-color: ${t.ink};
  }
`;

export const ButtonRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.8rem;
`;

export const Chip = styled.span`
  display: inline-block;
  font-family: ${t.mono};
  font-size: 0.8rem;
  line-height: 1;
  padding: 0.45rem 0.65rem;
  border-radius: 6px;
  background: ${t.accentSoft};
  color: ${t.accent};
  white-space: nowrap;
`;

export const ChipList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.45rem;
`;

export const Card = styled.div`
  background: #fff;
  border: 1px solid ${t.line};
  border-radius: ${t.radius};
  padding: 1.6rem;
  transition: border-color 0.25s ease, box-shadow 0.25s ease, transform 0.25s ease;

  &:hover {
    border-color: #c7cbe8;
    box-shadow: 0 14px 34px rgba(15, 23, 42, 0.07);
  }

  @media ${t.tablet} {
    padding: 2rem;
  }
`;

export const Grid = styled.div`
  display: grid;
  gap: 1.2rem;
  grid-template-columns: 1fr;

  @media ${t.tablet} {
    grid-template-columns: repeat(${({ $cols }) => Math.min($cols || 2, 2)}, minmax(0, 1fr));
    gap: 1.5rem;
  }

  @media ${t.laptop} {
    grid-template-columns: repeat(${({ $cols }) => $cols || 2}, minmax(0, 1fr));
  }
`;
