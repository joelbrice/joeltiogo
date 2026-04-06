import React, { useState } from "react";
import styled from "styled-components";
import { device } from "../utils/breakpoints";

const navigation = [
  { href: "/", name: "Home" },
  { href: "/about", name: "About" },
  { href: "/expertise", name: "Expertise" },        // Recommended new page
  { href: "https://linkedin.com/in/joeltiogo", name: "LinkedIn", external: true },
];

const NavbarContainer = styled.nav`
  background-color: #ffffff;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.08);
  position: sticky;
  top: 0;
  z-index: 1000;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
`;

const NavWrapper = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 4.75rem;
`;

const Logo = styled.a`
  font-size: 1.55rem;
  font-weight: 700;
  color: #1a1a1a;
  text-decoration: none;
  letter-spacing: -0.02em;
  transition: color 0.3s ease;

  &:hover {
    color: #667eea;
  }
`;

const BurgerButton = styled.button`
  display: none;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 2rem;
    height: 2rem;
    background: transparent;
    border: none;
    cursor: pointer;
    padding: 0;
    z-index: 10;

    &:focus {
      outline: none;
    }

    div {
      width: 2rem;
      height: 0.25rem;
      background: #1a1a1a;
      border-radius: 10px;
      transition: all 0.3s linear;
      transform-origin: 1px;

      &:first-child {
        transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
      }

      &:nth-child(2) {
        opacity: ${({ open }) => (open ? "0" : "1")};
        transform: ${({ open }) => (open ? "translateX(20px)" : "translateX(0)")};
      }

      &:nth-child(3) {
        transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
      }
    }
  }
`;

const DesktopNav = styled.div`
  display: none;
  align-items: center;
  gap: 2.8rem;

  @media ${device.tablet} {
    display: flex;
  }
`;

const MobileNav = styled.div`
  position: fixed;
  top: 4.75rem;
  right: 0;
  height: calc(100vh - 4.75rem);
  width: 75%;
  max-width: 320px;
  background: #ffffff;
  padding: 2.5rem 2rem;
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
  transition: transform 0.35s cubic-bezier(0.32, 0.72, 0, 1);
  box-shadow: -4px 0 20px rgba(0, 0, 0, 0.12);
  display: flex;
  flex-direction: column;
  gap: 2rem;

  @media ${device.tablet} {
    display: none;
  }
`;

const NavLink = styled.a`
  text-decoration: none;
  font-size: 1.05rem;
  font-weight: 500;
  color: ${(props) => (props.active ? "#667eea" : "#37474f")};
  transition: color 0.3s ease;
  position: relative;

  &:hover {
    color: #667eea;
  }

  &::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: ${(props) => (props.active ? "100%" : "0")};
    height: 2.5px;
    background: #667eea;
    transition: width 0.3s ease;
  }

  &:hover::after {
    width: 100%;
  }
`;

const ContactButton = styled.a`
  padding: 0.65rem 1.8rem;
  background: linear-gradient(135deg, #667eea 0%, #5a67d8 100%);
  color: #ffffff;
  text-decoration: none;
  font-weight: 600;
  border-radius: 8px;
  font-size: 0.98rem;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(102, 126, 234, 0.35);
  }
`;

const Nav = () => {
  const [open, setOpen] = useState(false);
  const currentPath = typeof window !== "undefined" ? window.location.pathname : "/";

  const toggleMenu = () => setOpen(!open);

  return (
    <NavbarContainer>
      <NavWrapper>
        <Logo href="/">Joël Tiogo</Logo>

        <BurgerButton open={open} onClick={toggleMenu}>
          <div />
          <div />
          <div />
        </BurgerButton>

        <DesktopNav>
          {navigation.map((item) => (
            <NavLink
              key={item.name}
              href={item.href}
              active={!item.external && currentPath === item.href}
              target={item.external ? "_blank" : undefined}
              rel={item.external ? "noopener noreferrer" : undefined}
            >
              {item.name}
            </NavLink>
          ))}
          <ContactButton href="mailto:tiogojoel@gmail.com">
            Get in Touch
          </ContactButton>
        </DesktopNav>

        <MobileNav open={open}>
          {navigation.map((item) => (
            <NavLink
              key={item.name}
              href={item.href}
              active={!item.external && currentPath === item.href}
              onClick={() => setOpen(false)}
              target={item.external ? "_blank" : undefined}
              rel={item.external ? "noopener noreferrer" : undefined}
            >
              {item.name}
            </NavLink>
          ))}
          <ContactButton
            href="mailto:tiogojoel@gmail.com"
            onClick={() => setOpen(false)}
          >
            Get in Touch
          </ContactButton>
        </MobileNav>
      </NavWrapper>
    </NavbarContainer>
  );
};

export default Nav;
