import React, { useState, useEffect } from 'react';
import styled, { keyframes, css } from 'styled-components';
import { FaTerminal, FaCode, FaBrain, FaRobot, FaUniversity, Fa500Px } from 'react-icons/fa';
import { Fa0, Fa1, Fa3 } from 'react-icons/fa6';

const glitch = keyframes`
  0% { text-shadow: 2px 0 0 red, -2px 0 0 #0ff; }
  50% { text-shadow: -2px 0 0 red, 2px 0 0 #0ff; }
  100% { text-shadow: 2px 0 0 red, -2px 0 0 #0ff; }
`;

const typing = keyframes`
  from { width: 0 }
  to { width: 100% }
`;

const blink = keyframes`
  50% { border-color: transparent }
`;

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #181818; /* Darker background for better contrast */
  color: #00ff00;
  font-family: 'Courier New', monospace;
  overflow: hidden; /* Prevent scrollbars */
`;

const Terminal = styled.div`
  width: 80vw; /* Adjust width to 80% of viewport */
  max-width: 800px; /* Set a maximum width */
  background: rgba(0, 0, 0, 0.9);
  border: 1px solid #00ff00;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 0 30px rgba(0, 255, 0, 0.2);
  padding: 2rem; /* Add padding to the Terminal */
`;

const TerminalHeader = styled.div`
  background: #2d2d2d;
  padding: 10px;
  display: flex;
  align-items: center;
  gap: 8px;
`;

const PathPrefix = styled.span`
  color: #00ff00;
  opacity: 0.8;
  margin-right: 8px;
`;

const TerminalContent = styled.pre`
  color: #00ff00;
  font-family: 'Courier New', monospace;
  font-size: 1.1rem;
  line-height: 1.6;
  position: relative;
  white-space: pre-wrap;
  word-wrap: break-word;

  .command-line {
    display: flex;
    align-items: flex-start;
  }

  &:after {
    content: '█';
    position: absolute;
    animation: ${blink} 1s step-end infinite;
  }
`;

const EducationItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;

  &::before {
    content: '•';
    margin-right: 8px;
    color: #00ff00;
  }
`;

const SkillCard = styled.div`
  background: rgba(0, 0, 0, 0.7);
  border: 1px solid #00ff00;
  border-radius: 4px;
  padding: 1.5rem;
  text-align: center;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 0 20px rgba(0, 255, 0, 0.2);
  }
`;

const Home = () => {
  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(true);

  const messages = [
    { text: 'System initializing...', icon: <FaTerminal /> },
    { text: 'Greetings! I am Joël Tiogo', icon: <FaCode /> },
    { 
      text: 'Passionate about leveraging AI and data science to drive innovation and create sustainable solutions for complex global challenges.', 
      icon: Fa500Px 
    },
    { text: '\nEducation:', icon: FaBrain },
    { text: '\n> MBA. Finance & Technology', icon: <FaUniversity /> },
    { text: '\n       Frankfurt School of Finance & Management(FS)', icon: FaBrain },
    { text: '\n> BTech. Electrical Engineering', icon: <FaUniversity /> },
    { text: '\n       University of Johannesburg', icon: FaRobot },
    { text: '\n> Data Science & AI Bootcamp', icon: <Fa0 /> },
    { text: '\n       Le Wagon GmbH', icon: <FaRobot /> },
    { text: '\n\n*Status*: Active & Seeking new opportunities', icon: Fa1 } 
  ];

  useEffect(() => {
    let currentIndex = 0;
    let currentChar = 0;
    let currentText = '';

    const typeNextChar = () => {
      if (currentIndex >= messages.length) {
        setIsTyping(false);
        return;
      }

      const message = messages[currentIndex];
      const shouldAddPath = currentIndex < 4; 

      if (currentChar === 0 && shouldAddPath) { 
        currentText += '\n~/joeltiogo/home$ '; 
      }

      currentText += message.text[currentChar];

      setDisplayText(currentText);
      currentChar++;

      if (currentChar >= message.text.length) {
        currentIndex++;
        currentChar = 0;
        setTimeout(typeNextChar, 800); // Delay between messages
      } else {
        setTimeout(typeNextChar, 50); // Typing speed
      }
    };

    typeNextChar();
  }, []);

  return (
    <Container>
      <Terminal>
        <TerminalHeader>
          <div style={{ width: 12, height: 12, borderRadius: '50%', backgroundColor: '#ff5f56' }} />
          <div style={{ width: 12, height: 12, borderRadius: '50%', backgroundColor: '#ffbd2e' }} />
          <div style={{ width: 12, height: 12, borderRadius: '50%', backgroundColor: '#27c93f' }} />
          <span style={{ marginLeft: 20, color: '#00ff00', opacity: 0.8 }}>system-profile.exe</span>
        </TerminalHeader>
        <TerminalContent>
          {displayText}
        </TerminalContent>
      </Terminal>
    </Container>
  );
};

export default Home;