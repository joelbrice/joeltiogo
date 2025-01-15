import React from "react";
import { Disclosure } from "@headlessui/react";
import styled from "styled-components";
import { MenuIcon, XIcon } from "@heroicons/react/outline";

const navigation = [
  { href: "/", name: "Home" },
  { href: "/about", name: "About" },
  { href: "/blog", name: "Blog" },
];

// Styled-components for the Navbar
const NavbarContainer = styled.nav`
  background-color: black;
  box-shadow: 0 2px 4px rgba(0, 255, 0, 0.5);
  position: sticky;
  top: 0;
  z-index: 1000;
  font-family: "Courier New", Courier, monospace;
  color: #00ff00;
`;

const NavWrapper = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 4rem;
`;

const Logo = styled.a`
  font-size: 1.5rem;
  font-weight: 700;
  color: #00ff00;
  text-decoration: none;
  &:hover {
    color: #00cc00;
  }
`;

const MenuButton = styled(Disclosure.Button)`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  border-radius: 0.375rem;
  background-color: transparent;
  color: #00ff00;
  &:hover {
    background-color: #00cc00;
  }
  &:focus {
    outline: 2px solid #00ff00;
    outline-offset: 2px;
  }
`;

const DesktopNav = styled.div`
  display: none;
  @media (min-width: 640px) {
    display: flex;
    gap: 2rem;
  }
`;

const MobileNav = styled.div`
  padding: 1rem;
  background-color: #1a1a1a;
  border-top: 1px solid #00ff00;
`;

const NavLink = styled.a`
  text-decoration: none;
  font-size: 1rem;
  font-weight: 500;
  color: ${(props) => (props.active ? "#00cc00" : "#00ff00")};
  border-bottom: ${(props) => (props.active ? "2px solid #00cc00" : "none")};
  padding: 0.5rem;
  transition: color 0.3s ease, border 0.3s ease;
  &:hover {
    color: #00cc00;
  }
`;

// Navbar Component
const Nav = () => {
  return (
    <Disclosure>
      {({ open }) => (
        <NavbarContainer>
          <NavWrapper>
            {/* Logo */}
            <Logo href="/">Joel Tiogo</Logo>

            {/* Mobile Menu Button */}
            <div className="sm:hidden">
              <MenuButton>
                {open ? (
                  <XIcon className="block h-6 w-6" />
                ) : (
                  <MenuIcon className="block h-6 w-6" />
                )}
              </MenuButton>
            </div>

            {/* Desktop Navigation */}
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
