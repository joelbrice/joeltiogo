import React from "react";
import aboutPic from "../assets/images/0.jpg";
import styled from "styled-components";
import CodeIcon from "@mui/icons-material/Code";
import StorageIcon from "@mui/icons-material/Storage";
import WebIcon from "@mui/icons-material/Web";
import JavascriptIcon from "@mui/icons-material/Javascript";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import GitHubIcon from "@mui/icons-material/GitHub";
import TerminalIcon from "@mui/icons-material/Terminal";
import BuildIcon from "@mui/icons-material/Build";
import TimelineIcon from "@mui/icons-material/Timeline";
import SpeedIcon from "@mui/icons-material/Speed";
import ListAltIcon from "@mui/icons-material/ListAlt";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import LightbulbIcon from "@mui/icons-material/Lightbulb";
import GroupIcon from "@mui/icons-material/Group";
import MemoryIcon from "@mui/icons-material/Memory";
import ModelTrainingIcon from "@mui/icons-material/ModelTraining";

const HeroSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 4rem 2rem;
  background: linear-gradient(135deg, #1f1f1f, #4ca2cd);
  color: white;

  h1 {
    font-size: 3.5rem;
    font-weight: 700;
    margin-bottom: 1rem;
  }

  p {
    font-size: 1.2rem;
    max-width: 600px;
    margin: 0 auto;
    line-height: 1.8;
  }

  img {
    border-radius: 50%;
    margin-top: 2rem;
    width: 150px;
    height: 150px;
    object-fit: cover;
    border: 5px solid white;
  }
`;

const ExperienceSection = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1.5rem;
  padding: 2rem;
`;

const ExperienceCard = styled.div`
  flex: 1;
  min-width: 280px;
  max-width: 340px;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin: 1rem;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-10px);
  }

  .icon-container {
    margin-bottom: 1rem;
  }

  .icon {
    font-size: 3rem;
    color: #4ca2cd;
  }

  .title {
    font-size: 1.25rem;
    font-weight: 600;
    margin-bottom: 0.5rem;
  }

  .description {
    font-size: 1rem;
    color: #666;
  }
`;

const SkillsSection = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1rem;
  padding: 2rem;
  background: #f9f9f9;
`;

const SkillCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: white;
  border-radius: 8px;
  padding: 1rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: translateY(-5px);
  }

  .skill-icon {
    width: 50px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 1rem;
    font-size: 2rem;
    color: #4ca2cd;
  }

  .skill-label {
    font-size: 1rem;
    font-weight: bold;
    color: #333;
    text-align: center;
  }
`;

const experienceItems = [
  {
    icon: <BusinessCenterIcon className="icon" />,
    title: "Business Development & ESG",
    description: "Championing growth through strategic planning and sustainable innovation.",
  },
  {
    icon: <LightbulbIcon className="icon" />,
    title: "Innovation & Technology",
    description: "Invented products and led teams in creating cutting-edge engineering solutions.",
  },
  {
    icon: <GroupIcon className="icon" />,
    title: "Leadership & Networking",
    description: "Guided dynamic teams and built impactful professional relationships.",
  },
];

const skills = [
  { name: "Product Management", icon: <BuildIcon fontSize="large" /> },
  { name: "Machine Learning", icon: <ModelTrainingIcon fontSize="large" /> },
  { name: "Python", icon: <CodeIcon fontSize="large" /> },
  { name: "JavaScript", icon: <JavascriptIcon fontSize="large" /> },
  { name: "Google Cloud", icon: <StorageIcon fontSize="large" /> },
  { name: "AWS Cloud", icon: <StorageIcon fontSize="large" /> },
  { name: "Embedded Systems", icon: <MemoryIcon fontSize="large" /> },
];

function About() {
  return (
    <div>
      <HeroSection>
        <h1>An Engineer’s Journey to Data Science</h1>
        <p>
          From mastering circuits to unraveling data, I bring a unique fusion of innovation, strategy, and technology.
          With an MBA and Electrical Engineering background, I am now leveraging the power of Data Science to solve
          tomorrow’s challenges.
        </p>
        <img src={aboutPic} alt="Profile" />
      </HeroSection>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 text-center mb-6">
          Professional Highlights
        </h2>
        <ExperienceSection>
          {experienceItems.map((item, index) => (
            <ExperienceCard key={index}>
              <div className="icon-container">{item.icon}</div>
              <div className="title">{item.title}</div>
              <div className="description">{item.description}</div>
            </ExperienceCard>
          ))}
        </ExperienceSection>

        <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 text-center mb-6">
          Technical Expertise
        </h2>
        <SkillsSection>
          {skills.map((skill) => (
            <SkillCard key={skill.name}>
              <div className="skill-icon">{skill.icon}</div>
              <div className="skill-label">{skill.name}</div>
            </SkillCard>
          ))}
        </SkillsSection>
      </div>
    </div>
  );
}

export default About;
