import React from "react";
import aboutPic from "../assets/images/0.jpg";
import styled from 'styled-components';
import CodeIcon from '@mui/icons-material/Code';
import StorageIcon from '@mui/icons-material/Storage';
import WebIcon from '@mui/icons-material/Web'; // Representing HTML
import JavascriptIcon from '@mui/icons-material/Javascript'; // Example custom icon
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import GitHubIcon from '@mui/icons-material/GitHub';
import TerminalIcon from '@mui/icons-material/Terminal';
import BuildIcon from '@mui/icons-material/Build';
import TimelineIcon from '@mui/icons-material/Timeline';
import SpeedIcon from '@mui/icons-material/Speed';
import ListAltIcon from '@mui/icons-material/ListAlt';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import GroupIcon from '@mui/icons-material/Group';
import MemoryIcon from '@mui/icons-material/Memory';
import ModelTrainingIcon from '@mui/icons-material/ModelTraining';

const ExperienceSection = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
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
  padding:2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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

const experienceItems = [
  {
    icon: <BusinessCenterIcon className="icon" />,
    title: 'Business Development & ESG',
    description: 'Championing sustainable growth through strategic business development and ESG integration.'
  },
  {
    icon: <LightbulbIcon className="icon" />,
    title: 'Innovation & Technology',
    description: 'Built innovative software and Electrical engineering solutions  and founded a startup.'
  },
  {
    icon: <GroupIcon className="icon" />,
    title: 'Leadership & Networking',
    description: 'I have had the opportunity to lead exceptional teams and enjoy building networks with like-minded individuals.'
  }
];
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

  .skill-icon{
    /* Additional styles for the skill icon and label, which can be customized as needed.
       A simple colored circle or square could represent the icon, or you could import actual icons. */
  }
  .skill-icon {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 1rem;

    /* Placeholder styles - replace with actual icons if available */
    background: #e0e0e0;
    color: #333;
    font-size: 24px;
    font-weight: bold;
  }

  .skill-label {
    text-align: center;
    font-size: 1rem;
    color: #333;
    font-weight: 500;
  }
`;

const skills = [
  { name: "Product Management", icon: <BuildIcon fontSize="large" /> },
  { name: "Project Management", icon: <TimelineIcon fontSize="large" /> },
  { name: "Business Development", icon: <RocketLaunchIcon fontSize="large" /> },
  { name: "Agile Scrum", icon: <SpeedIcon fontSize="large" /> },
  { name: "Responsive Web design", icon: <WebIcon fontSize="large" /> },
  { name: "C# .Net", icon: <CodeIcon fontSize="large" /> },
  { name: "Python", icon: <CodeIcon fontSize="large" /> },
  { name: "C++", icon: <CodeIcon fontSize="large" /> },
  { name: "JavaScript", icon: <JavascriptIcon fontSize="large" /> },
  { name: "React.js", icon: <WebIcon fontSize="large" /> },
  { name: "Angular", icon: <WebIcon fontSize="large" /> },
  { name: "Confluence/Jira", icon: <ListAltIcon fontSize="large" /> },
  { name: "Git", icon: <GitHubIcon fontSize="large" /> },
  { name: "Azure", icon: <StorageIcon fontSize="large" /> },
  { name: "AWS", icon: <StorageIcon fontSize="large" /> },
  { name: "Docker", icon: <StorageIcon fontSize="large" /> },
  { name: "Kubernetes", icon: <StorageIcon fontSize="large" /> },
  { name: "Linux", icon: <TerminalIcon fontSize="large" /> },
  { name: "Embedded Systems", icon: <MemoryIcon fontSize="large" /> },
  {name: "Machine Learning",   icon: <ModelTrainingIcon fontSize="large" />,}
];

function About() 
{
  return (
    <div className="bg-gray-100">
       
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="lg:text-center">
        <h2 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl text-center">
        Professional Expertise Snapshot
          </h2>
          <div className="mt-10 sm:flex sm:justify-center lg:justify-center">
            <div className="mr-8 flex-shrink-0">
              <img
                className="h-64 w-64 rounded-full object-cover"
                src={aboutPic}
                alt="About Me"
              />
            </div>
          </div>
            <ExperienceSection aria-label="Professional Experience Highlights">
            {experienceItems.map((item, index) => (
              <ExperienceCard key={index}>
                <div className="icon-container">{item.icon}</div>
                <div className="title">{item.title}</div>
                <div className="description">{item.description}</div>
              </ExperienceCard>
            ))}
          </ExperienceSection>
        </div>
        <h2 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl text-center">
          Techncical Expertise
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