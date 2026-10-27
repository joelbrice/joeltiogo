import React, { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { Link, NavLink as RouterNavLink, useLocation } from 'react-router-dom';
import { t } from '../theme';
import { contact } from '../data/profile';

const navigation = [
  { to: '/', name: 'Home' },
  { to: '/about', name: 'About' },
  { to: '/expertise', name: 'Expertise' },
  { to: '/insights', name: 'Insights' },
];

const blink = keyframes`
  50% { opacity: 0; }
`;

const Bar = styled.header`
  position: sticky;
  top: 0;
  z-index: 1000;
  background: rgba(255, 255, 255, 0.92);
  backdrop-filter: saturate(180%) blur(10px);
  -webkit-backdrop-filter: saturate(180%) blur(10px);
  border-bottom: 1px solid ${t.line};
`;

const Wrap = styled.nav`
  max-width: ${t.maxWidth};
  margin: 0 auto;
  padding: 0 1rem;
  height: 4.25rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media ${t.tablet} {
    padding: 0 2rem;
  }
`;

const Logo = styled(Link)`
  font-size: 1.2rem;
  font-weight: 700;
  letter-spacing: -0.01em;
  color: ${t.ink};
  text-decoration: none;
  display: inline-flex;
  align-items: baseline;

  span {
    font-family: ${t.mono};
    color: ${t.accent};
    margin-left: 1px;
    animation: ${blink} 1.2s step-end infinite;
  }
`;

const Desktop = styled.div`
  display: none;
  align-items: center;
  gap: 2rem;

  @media ${t.tablet} {
    display: flex;
  }
`;

const Item = styled(RouterNavLink)`
  position: relative;
  color: ${t.text};
  text-decoration: none;
  font-weight: 500;
  font-size: 0.98rem;
  transition: color 0.2s ease;

  &:hover,
  &.active {
    color: ${t.ink};
  }

  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -6px;
    height: 2px;
    width: 0;
    background: ${t.accent};
    transition: width 0.25s ease;
  }

  &:hover::after,
  &.active::after {
    width: 100%;
  }
`;

const External = styled.a`
  color: ${t.text};
  text-decoration: none;
  font-weight: 500;
  font-size: 0.98rem;

  &:hover {
    color: ${t.ink};
  }
`;

const Cta = styled.a`
  padding: 0.6rem 1.15rem;
  border-radius: 9px;
  background: ${t.ink};
  color: #fff;
  font-weight: 600;
  font-size: 0.95rem;
  text-decoration: none;
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 8px 20px rgba(11, 18, 32, 0.2);
  }
`;

const Burger = styled.button`
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
  width: 44px;
  height: 44px;
  margin-right: -10px;
  padding: 10px;
  background: transparent;
  border: 0;
  cursor: pointer;

  span {
    display: block;
    height: 2px;
    width: 100%;
    border-radius: 2px;
    background: ${t.ink};
    transition: transform 0.25s ease, opacity 0.2s ease;
  }

  span:nth-child(1) {
    transform: ${({ $open }) => ($open ? 'translateY(7px) rotate(45deg)' : 'none')};
  }
  span:nth-child(2) {
    opacity: ${({ $open }) => ($open ? 0 : 1)};
  }
  span:nth-child(3) {
    transform: ${({ $open }) => ($open ? 'translateY(-7px) rotate(-45deg)' : 'none')};
  }

  &:focus-visible {
    outline: 3px solid ${t.accent};
    outline-offset: 2px;
    border-radius: 8px;
  }

  @media ${t.tablet} {
    display: none;
  }
`;

const Mobile = styled.div`
  position: fixed;
  top: 4.25rem;
  left: 0;
  right: 0;
  bottom: 0;
  background: #fff;
  padding: 1.5rem 1rem 2rem;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  opacity: ${({ $open }) => ($open ? 1 : 0)};
  visibility: ${({ $open }) => ($open ? 'visible' : 'hidden')};
  transform: ${({ $open }) => ($open ? 'none' : 'translateY(-8px)')};
  transition: opacity 0.2s ease, transform 0.2s ease, visibility 0.2s;

  a {
    font-size: 1.15rem;
    padding: 0.85rem 0;
    border-bottom: 1px solid ${t.line};
  }

  a::after {
    display: none;
  }

  ${Cta} {
    margin-top: 1.4rem;
    text-align: center;
    border-bottom: 0;
  }

  @media ${t.tablet} {
    display: none;
  }
`;

const Nav = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  // Close the mobile menu whenever the route changes.
  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  // Stop the page behind the open menu from scrolling.
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  const links = (
    <>
      {navigation.map((item) => (
        <Item key={item.to} to={item.to} end={item.to === '/'}>
          {item.name}
        </Item>
      ))}
      <External href={contact.linkedin} target="_blank" rel="noopener noreferrer">
        LinkedIn
      </External>
      <Cta href={`mailto:${contact.email}`}>Get in touch</Cta>
    </>
  );

  return (
    <Bar>
      <Wrap aria-label="Main">
        <Logo to="/" aria-label="Joël Tiogo — home">
          Joël Tiogo<span aria-hidden="true">_</span>
        </Logo>

        <Desktop>{links}</Desktop>

        <Burger
          type="button"
          $open={open}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((o) => !o)}
        >
          <span />
          <span />
          <span />
        </Burger>
      </Wrap>

      <Mobile id="mobile-menu" $open={open} aria-hidden={!open}>
        {links}
      </Mobile>
    </Bar>
  );
};

export default Nav;
