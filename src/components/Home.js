import React from "react";
import profilePic from "../assets/images/1.jpg";
import styled from "styled-components";
import LinkedIn from "@mui/icons-material/LinkedIn";
import Email from "@mui/icons-material/Email";
import PlaceIcon from "@mui/icons-material/Place";

const Header = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 2rem;
  background: linear-gradient(120deg, #4ca2cd, #67b26f);
  color: white;

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;
    text-align: left;
    justify-content: space-around;
  }

  img {
    width: 200px;
    height: 200px;
    object-fit: cover;
    border-radius: 50%;
    margin-bottom: 1.5rem;
    border: 5px solid white;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  }

  h1 {
    font-size: 2.5rem;
    font-weight: 700;
    margin-bottom: 1rem;
  }

  p {
    font-size: 1.2rem;
    max-width: 600px;
    margin: 0 auto;
    line-height: 1.8;
  }
`;

const Container = styled.main`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Intro = styled.section`
  background: #fff;
  padding: 2rem;
  color: #333;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  text-align: center;
  max-width: 800px;

  p {
    font-size: 1.2rem;
    line-height: 1.6;
  }
`;

const CallToActionBtn = styled.a`
  display: inline-block;
  padding: 0.75rem 1.5rem;
  margin-top: 1rem;
  background-color: #4ca2cd;
  color: white;
  font-weight: bold;
  border-radius: 8px;
  text-decoration: none;
  transition: background-color 0.3s ease, transform 0.2s ease;

  &:hover {
    background-color: #67b26f;
    transform: translateY(-2px);
  }
`;

const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  margin-top: 2rem;

  a {
    color: #4ca2cd;
    transition: transform 0.2s ease;

    &:hover {
      transform: translateY(-3px);
    }
  }

  span {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 1rem;
    color: #333;
  }
`;

function Home() {
  return (
    <div className="home">
      <Header>
        <img src={profilePic} alt="Profile" />
        <div>
          <h1>Hi, I’m Joel Tiogo</h1>
          <p>
            Engineer by trade. MBA by choice. Data Scientist by passion. Innovating at the crossroads of
            <em> business, tech, and sustainability</em>.
          </p>
        </div>
      </Header>

      <Container>
        <Intro>
          <p>
            Welcome to my digital hub! I blend a background in Electrical Engineering with an MBA’s strategic acumen
            to drive impactful solutions in ESG and Digital Transformation.
          </p>
          <p>
            Whether it's automating workflows, interpreting data, or connecting the dots between technology and
            business, I’m here to create value and share insights. My secret weapon? A knack for turning ideas into
            measurable outcomes.
          </p>
          <CallToActionBtn href="/blog">Explore My Blog</CallToActionBtn>
        </Intro>

        <SocialLinks>
          <a
            href="https://www.linkedin.com/in/joeltiogo/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedIn fontSize="large" />
          </a>
          <a href="mailto:tiogojoel@gmail.com">
            <Email fontSize="large" />
          </a>
          <span>
            <PlaceIcon fontSize="large" />
            65428 Rüsselsheim am Main, Germany
          </span>
        </SocialLinks>
      </Container>
    </div>
  );
}

export default Home;
