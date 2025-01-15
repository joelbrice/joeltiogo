import React from 'react';
import styled from 'styled-components';
import { FaFacebook, FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa';

const FooterContainer = styled.footer`
  background-color: #1e0010;
  color: #00ff00;
  font-family: "Courier New", Courier, monospace;
  padding: 20px;
  width: 100%;
  margin-top: auto; // Push footer to bottom
  border-top: 1px solid #00ff0033;
`;

const FooterContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
`;

const FooterSocials = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-bottom: 20px;

  a {
    color: #00ff00;
    font-size: 1.5rem;
    transition: color 0.3s ease;

    &:hover {
      color: #00cc00;
    }
  }
`;

const FooterNote = styled.div`
  font-size: 0.9rem;
  text-align: center;

  span {
    font-weight: bold;
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterSocials>
          <a href="https://www.facebook.com/joeltiogo0" target="_blank" rel="noopener noreferrer">
            <FaFacebook />
          </a>
          <a href="https://twitter.com/joeltiogo" target="_blank" rel="noopener noreferrer">
            <FaTwitter />
          </a>
          <a href="https://linkedin.com/in/joeltiogo" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
          <a href="https://github.com/joelbrice" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
        </FooterSocials>
        <FooterNote>
          © {new Date().getFullYear()} <span> Joel Tiogo</span>. All rights reserved.
        </FooterNote>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;