import React from 'react';
import styled from 'styled-components';
import usePageTitle from '../usePageTitle';
import { t, Section, Inner, Eyebrow, H1 } from '../theme';
import { legal } from '../data/legal';

const Column = styled(Inner)`
  max-width: 720px;
`;

const Prose = styled.div`
  color: ${t.text};
  font-size: 1rem;
  line-height: 1.75;

  h2 {
    font-family: ${t.serif};
    font-size: 1.45rem;
    color: ${t.ink};
    margin: 2.6rem 0 0.8rem;
  }

  h3 {
    font-size: 1.05rem;
    color: ${t.ink};
    margin: 1.8rem 0 0.4rem;
  }

  p {
    margin: 0 0 1rem;
  }

  address {
    font-style: normal;
    margin: 0 0 1rem;
  }

  a {
    color: ${t.accent};
  }
`;

const Updated = styled.p`
  margin-top: 2.5rem;
  font-size: 0.9rem;
  color: ${t.muted};
`;

const Email = () => <a href={`mailto:${legal.email}`}>{legal.email}</a>;

const Address = () => (
  <address>
    {legal.name}
    {legal.address.map((line) => (
      <React.Fragment key={line}>
        <br />
        {line}
      </React.Fragment>
    ))}
  </address>
);

const Privacy = () => {
  const hasAddress = legal.address.length > 0;
  usePageTitle(hasAddress ? 'Legal notice & privacy' : 'Privacy');

  return (
    <Section>
      <Column>
        <Eyebrow>Legal</Eyebrow>
        <H1 style={{ fontSize: 'clamp(2rem, 5vw, 2.8rem)' }}>
          {hasAddress ? 'Legal notice & privacy' : 'Privacy'}
        </H1>

        <Prose>
          {hasAddress && (
            <>
              <h2>Legal notice</h2>
              <p>Information pursuant to § 5 DDG and § 18 MStV:</p>
              <Address />
              <p>
                Email: <Email />
              </p>
              <p>Responsible for content pursuant to § 18 (2) MStV: {legal.name}, address as above.</p>
            </>
          )}

          <h2>Privacy notice</h2>

          <h3>Who is responsible</h3>
          <p>
            The controller for this website under the EU General Data Protection Regulation (GDPR)
            is {legal.name}. You can reach me at <Email />.
          </p>

          <h3>In short</h3>
          <p>
            This website uses no cookies, analytics, tracking or advertising. Fonts and images are
            served from this website itself, so visiting it sends no data to third parties such as
            Google.
          </p>

          <h3>Hosting</h3>
          <p>
            This website is hosted by Netlify, Inc. (USA). When you visit, Netlify’s servers
            automatically process the technical data needed to deliver the pages and keep them
            secure — such as your IP address, the date and time of the request, the page requested,
            the referring page and your browser type (server log files).
          </p>
          <p>
            Legal basis: Art. 6(1)(f) GDPR, my legitimate interest in providing a secure and
            reliable website. Netlify processes this data on my behalf under its data processing
            addendum, which includes the EU standard contractual clauses for transfers to the USA
            (Art. 46(2)(c) GDPR).
          </p>

          <h3>Contact by email</h3>
          <p>
            If you email me — for example to request my CV — I use your email address and message
            only to reply and to follow up on your request. Messages are stored in my email account
            with Google (Gmail).
          </p>
          <p>
            Legal basis: Art. 6(1)(b) GDPR where your message concerns a possible collaboration or
            employment, otherwise Art. 6(1)(f) GDPR. I delete the data once it is no longer needed,
            unless legal retention obligations apply.
          </p>

          <h3>Links to other websites</h3>
          <p>
            This site links to LinkedIn, GitHub, Credly and other websites. No data is shared with
            them until you click a link; from then on, their own privacy policies apply.
          </p>

          <h3>Your rights</h3>
          <p>
            You have the right of access (Art. 15 GDPR), rectification (Art. 16), erasure (Art. 17),
            restriction of processing (Art. 18) and data portability (Art. 20), and the right to
            object to processing based on legitimate interests (Art. 21). To exercise them, email
            me.
          </p>
          <p>
            You also have the right to lodge a complaint with a data protection supervisory
            authority (Art. 77 GDPR), in particular in the EU member state of your habitual
            residence, place of work or place of the alleged infringement.
          </p>
          <p>There is no automated decision-making or profiling on this website.</p>
        </Prose>

        <Updated>Last updated: {legal.updated}</Updated>
      </Column>
    </Section>
  );
};

export default Privacy;
