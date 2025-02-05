import React from "react";
import { Disclosure } from "@headlessui/react";
import styled from "styled-components";

// Temporary SVG icons until heroicons is installed
const MenuIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="24" height="24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
  </svg>
);

const CloseIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="24" height="24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
  </svg>
);

const navigation = [
  { href: "/", name: "Home" },
  { href: "/about", name: "About" }
];

// Styled-components for the Navbar
const NavbarContainer = styled.nav`
  background-color: #0a0a0a;
  box-shadow: 0 2px 8px rgba(0, 255, 0, 0.2);
  position: sticky;
  top: 0;
  z-index: 1000;
  font-family: "Courier New", Courier, monospace;
  color: #00ff00;
`;

const NavWrapper = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 5rem;
`;

const Logo = styled.a`
  font-size: 1.8rem;
  font-weight: 700;
  color: #00ff00;
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 0.1rem;
  transition: color 0.3s ease;

  &:hover {
    color: #00cc00;
  }
`;

// Add styled component for burger button
const BurgerButton = styled(Disclosure.Button)`
  display: none; /* Initially hide on large screens */
  @media (max-width: 768px) {
    display: inline-flex; /* Show only on mobile */
    align-items: center;
    justify-content: center;
    padding: 0.8rem;
    background-color: transparent;
    border: none;
    border-radius: 4px;
    color: #00ff00;
    cursor: pointer;
    width: 48px;
    height: 48px;

    &:hover {
      background-color: rgba(0, 255, 0, 0.1);
    }

    svg {
      width: 28px;
      height: 28px;
    }
  }
`;

const VisuallyHidden = styled.span`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
`;

const DesktopNav = styled.div`
  display: flex;
  gap: 2rem;

  @media (max-width: 768px) {
    display: none;
  }
`;

const MobileNav = styled.div`
  padding: 1.5rem;
  background-color: #1a1a1a;
  border-top: 1px solid #00ff00;
`;

const NavLink = styled.a`
  text-decoration: none;
  font-size: 1.1rem;
  font-weight: 500;
  color: ${(props) => (props.active ? "#00cc00" : "#00ff00")};
  border-bottom: ${(props) => (props.active ? "2px solid #00cc00" : "none")};
  padding: 0.5rem 1rem;
  transition: color 0.3s ease, border 0.3s ease;
  text-transform: uppercase;
  letter-spacing: 0.1rem;

  &:hover {
    color: #00cc00;
    border-bottom: 2px solid #00cc00;
  }
`;

// Navbar Component
const Nav = () => {
  return (
    <Disclosure>
      {({ open }) => (
        <NavbarContainer>
          <NavWrapper>
            <Logo href="/">Joël Tiogo</Logo>
            <BurgerButton>
              <VisuallyHidden>Open menu</VisuallyHidden>
              {open ? (
                <CloseIcon aria-hidden="true" />
              ) : (
                <MenuIcon aria-hidden="true" />
              )}
            </BurgerButton>
            <DesktopNav>
              {navigation.map((item) => (
                <NavLink
                  key={item.name}
                  href={item.href}
                  active={window.location.pathname === item.href}
                >
                  {item.name}
                </NavLink>
              ))}
            </DesktopNav>
          </NavWrapper>

          {/* Mobile Navigation */}
          <Disclosure.Panel>
            <MobileNav>
              {navigation.map((item) => (
                <NavLink
                  key={item.name}
                  href={item.href}
                  active={window.location.pathname === item.href}
                  style={{ display: "block", marginBottom: "1rem" }}
                >
                  {item.name}
                </NavLink>
              ))}
            </MobileNav>
          </Disclosure.Panel>
        </NavbarContainer>
      )}
    </Disclosure>
  );
};

export default Nav;
