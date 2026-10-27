import React from 'react';
import styled from 'styled-components';
import { Link, useParams } from 'react-router-dom';
import { t, Section, Eyebrow, H1, Lead, ExternalButton, ButtonRow } from '../theme';
import { articles, articleBySlug, readingMinutes } from '../data/articles';
import { contact, identity } from '../data/profile';
import NotFound from './NotFound';

const Column = styled.article`
  max-width: 720px;
  margin: 0 auto;
`;

const Back = styled(Link)`
  display: inline-block;
  font-family: ${t.mono};
  font-size: 0.85rem;
  color: ${t.muted};
  text-decoration: none;
  margin-bottom: 2rem;

  &:hover {
    color: ${t.ink};
  }
`;

const Meta = styled.p`
  font-family: ${t.mono};
  font-size: 0.82rem;
  color: ${t.muted};
  margin: 0 0 1.6rem;
`;

const Prose = styled.div`
  border-top: 1px solid ${t.line};
  padding-top: 2rem;
  color: ${t.text};
  font-size: 1.08rem;
  line-height: 1.8;

  h2 {
    font-size: clamp(1.35rem, 3vw, 1.6rem);
    line-height: 1.25;
    color: ${t.ink};
    margin: 2.6rem 0 0.9rem;
  }

  h3 {
    font-size: 1.15rem;
    color: ${t.ink};
    margin: 1.8rem 0 0.5rem;
  }

  p {
    margin: 0 0 1.2rem;
  }

  ul {
    margin: 0 0 1.4rem;
    padding-left: 1.2rem;
  }

  li {
    margin-bottom: 0.45rem;
  }

  li::marker {
    color: ${t.accent};
  }
`;

const Note = styled.p`
  font-size: 0.9rem;
  color: ${t.muted};
  font-style: italic;
  margin: 2.5rem 0 0;
  line-height: 1.6;
`;

const End = styled.div`
  margin-top: 3rem;
  padding: 1.8rem 1.6rem;
  border-radius: ${t.radius};
  background: ${t.bgAlt};
  border: 1px solid ${t.line};

  p {
    margin: 0 0 1.2rem;
    color: ${t.ink};
    font-weight: 500;
  }
`;

const Next = styled(Link)`
  display: block;
  margin-top: 2rem;
  padding: 1.4rem 1.6rem;
  border-radius: ${t.radius};
  border: 1px solid ${t.line};
  text-decoration: none;
  color: ${t.ink};
  transition: border-color 0.2s ease;

  span {
    display: block;
    font-family: ${t.mono};
    font-size: 0.8rem;
    color: ${t.accent};
    margin-bottom: 0.4rem;
  }

  strong {
    font-size: 1.08rem;
    line-height: 1.4;
  }

  &:hover {
    border-color: ${t.accent};
  }
`;

const renderBlock = (b, i) => {
  if (b.h2) return <h2 key={i}>{b.h2}</h2>;
  if (b.h3) return <h3 key={i}>{b.h3}</h3>;
  if (b.ul)
    return (
      <ul key={i}>
        {b.ul.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    );
  return <p key={i}>{b.p}</p>;
};

const Article = () => {
  const { slug } = useParams();
  const article = articleBySlug(slug);
  if (!article) return <NotFound />;

  const index = articles.indexOf(article);
  const next = articles[(index + 1) % articles.length];
  const subject = encodeURIComponent(`Re: ${article.title}`);

  return (
    <Section>
      <Column>
        <Back to="/insights">← cd ../insights</Back>
        <Eyebrow>{article.tag}</Eyebrow>
        <H1 style={{ fontSize: 'clamp(1.9rem, 5vw, 2.8rem)' }}>{article.title}</H1>
        <Meta>
          {identity.name} · {readingMinutes(article)} min read
        </Meta>
        <Lead>{article.summary}</Lead>

        <Prose>{article.blocks.map(renderBlock)}</Prose>

        {article.disclaimer && <Note>{article.disclaimer}</Note>}
        <Note style={{ marginTop: article.disclaimer ? '0.6rem' : undefined }}>
          Views expressed here are my own and do not necessarily reflect those of my employer.
        </Note>

        <End>
          <p>Have a different take, or working on the same problem? I’d like to hear from you.</p>
          <ButtonRow>
            <ExternalButton $dark href={`mailto:${contact.email}?subject=${subject}`}>
              Let’s discuss
            </ExternalButton>
            <ExternalButton href={contact.linkedin} target="_blank" rel="noopener noreferrer">
              Connect on LinkedIn
            </ExternalButton>
          </ButtonRow>
        </End>

        <Next to={`/insights/${next.slug}`}>
          <span>next →</span>
          <strong>{next.title}</strong>
        </Next>
      </Column>
    </Section>
  );
};

export default Article;
