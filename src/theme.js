import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

// Design tokens shared by every page.
export const t = {
  ink: '#0e1a2b',
  text: '#3b4656',
  muted: '#6b7685',
  line: '#e3e6eb',
  bg: '#ffffff',
  bgAlt: '#f6f5f2',
  accent: '#8a6a2f',
  accentSoft: '#f3ede2',
  // Terminal palette (GitHub dark) — used only for the "engineer" touches
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
  serif: "'Source Serif 4', Georgia, 'Times New Roman', serif",
  sans: "'Roboto', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Helvetica Neue', Arial, sans-serif",
  mono: "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace",
  maxWidth: '1120px',
  radius: '10px',
  tablet: '(min-width: 768px)',
  laptop: '(min-width: 1024px)',
};

export const Section = styled.section`
  padding: 4rem 1rem;
  background: ${({ $alt }) => ($alt ? t.bgAlt : t.bg)};

  @media ${t.tablet} {
    padding: 5.5rem 2rem;
  }
`;

export const Inner = styled.div`
  max-width: ${t.maxWidth};
  margin: 0 auto;
`;

// Small uppercase label above a heading.
export const Eyebrow = styled.p`
  font-size: 0.75rem;
  font-weight: 500;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: ${t.accent};
  margin: 0 0 0.9rem;
`;

export const H1 = styled.h1`
  font-family: ${t.serif};
  font-size: clamp(2.4rem, 6vw, 3.8rem);
  line-height: 1.05;
  letter-spacing: -0.015em;
  color: ${t.ink};
  font-weight: 600;
  margin: 0 0 1.1rem;
`;

export const H2 = styled.h2`
  font-family: ${t.serif};
  font-size: clamp(1.7rem, 3.6vw, 2.3rem);
  line-height: 1.15;
  letter-spacing: -0.01em;
  color: ${t.ink};
  font-weight: 600;
  margin: 0 0 0.9rem;
`;

export const H3 = styled.h3`
  font-size: 1.08rem;
  line-height: 1.35;
  color: ${t.ink};
  font-weight: 600;
  margin: 0 0 0.45rem;
`;

export const Lead = styled.p`
  font-size: clamp(1.05rem, 2.1vw, 1.2rem);
  line-height: 1.65;
  color: ${t.text};
  max-width: 640px;
  margin: 0 0 1.4rem;
`;

export const Body = styled.p`
  font-size: 1rem;
  line-height: 1.7;
  color: ${t.text};
  margin: 0 0 1rem;
`;

export const SectionHead = styled.div`
  max-width: 680px;
  margin-bottom: 2.4rem;
`;

const buttonBase = css`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.85rem 1.5rem;
  border-radius: 6px;
  font-weight: 500;
  font-size: 0.98rem;
  letter-spacing: 0.01em;
  text-decoration: none;
  transition: background 0.2s ease, border-color 0.2s ease, color 0.2s ease;

  &:focus-visible {
    outline: 3px solid ${t.accent};
    outline-offset: 3px;
  }
`;

export const PrimaryButton = styled(Link)`
  ${buttonBase}
  background: ${t.ink};
  color: #fff;
  border: 1.5px solid ${t.ink};

  &:hover {
    background: #1d2d45;
  }
`;

export const SecondaryButton = styled(Link)`
  ${buttonBase}
  background: transparent;
  color: ${t.ink};
  border: 1.5px solid #c9ced6;

  &:hover {
    border-color: ${t.ink};
  }
`;

export const ExternalButton = styled.a`
  ${buttonBase}
  background: ${({ $dark }) => ($dark ? t.ink : 'transparent')};
  color: ${({ $dark }) => ($dark ? '#fff' : t.ink)};
  border: 1.5px solid ${({ $dark }) => ($dark ? t.ink : '#c9ced6')};

  &:hover {
    border-color: ${t.ink};
  }
`;

export const ButtonRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.8rem;
`;

export const Card = styled.div`
  background: #fff;
  border: 1px solid ${t.line};
  border-radius: ${t.radius};
  padding: 1.5rem;
  transition: border-color 0.25s ease, box-shadow 0.25s ease;

  &:hover {
    border-color: #cfd4db;
    box-shadow: 0 12px 30px rgba(14, 26, 43, 0.06);
  }

  @media ${t.tablet} {
    padding: 1.8rem;
  }
`;

export const Grid = styled.div`
  display: grid;
  gap: 1.1rem;
  grid-template-columns: 1fr;

  @media ${t.tablet} {
    grid-template-columns: repeat(${({ $cols }) => Math.min($cols || 2, 2)}, minmax(0, 1fr));
    gap: 1.3rem;
  }

  @media ${t.laptop} {
    grid-template-columns: repeat(${({ $cols }) => $cols || 2}, minmax(0, 1fr));
  }
`;

// Thin gold rule used to open a card or section.
export const Rule = styled.span`
  display: block;
  width: 32px;
  height: 2px;
  background: ${t.accent};
  margin-bottom: 1.1rem;
`;
