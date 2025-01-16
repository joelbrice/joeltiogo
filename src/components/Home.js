import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';




const cursorBlink = keyframes`
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
`;

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #181818;
  color: #00ff00;
  font-family: 'Courier New', monospace;
  overflow: hidden;
  padding: 1rem; /* Reduced from 2rem */
`;

const Terminal = styled.div`
  width: 80vw;
  max-width: 800px;
  background: rgba(0, 0, 0, 0.9);
  border: 1px solid #00ff00;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 0 30px rgba(0, 255, 0, 0.2);
  padding: 1rem; /* Reduced from 2rem */
`;

const TerminalHeader = styled.div`
  background: #2d2d2d;
  padding: 10px;
  display: flex;
  align-items: center;
  gap: 8px;
`;


const TerminalContent = styled.pre`
  color: #00ff00;
  font-family: 'Courier New', monospace;
  font-size: 1.1rem;
  line-height: 1.4; /* Reduced from 1.6 */
  position: relative;
  white-space: pre-wrap;
  word-wrap: break-word;
  margin: 0.5rem 0; /* Added smaller margins */
  padding: 0.5rem; /* Added smaller padding */

  .command-line {
    display: flex;
    align-items: flex-start;
  }

  &:after {
    content: '█';
    position: absolute;
    animation: ${cursorBlink} 1s step-end infinite;
  }
`;



const Home = () => {
  const [displayText, setDisplayText] = useState('');
  const path = '~/joeltiogo/home$ ';

  const messages = [
    'System initializing...\n',
    'Greetings! I am Joël Tiogo\n',
    'I am passionate about leveraging AI and data science to drive innovation and create sustainable solutions for complex global challenges.\n',
    'Education:\n',
    '>MBA. Finance & Technology',
    '       \n\tFrankfurt School of Finance & Management(FS)\n \n> BTech. Electrical Engineering',
    '       \n\tUniversity of Johannesburg \n\n> Data Science & AI Bootcamp',
    '       \n\tLe Wagon GmbH\n\n',
    '*Status*: Active & Open to opportunities'
  ];

  useEffect(() => {
    let currentIndex = 0;
    let currentChar = 0;
    let timeoutId;

    const typeText = () => {
      if (currentIndex >= messages.length) {
        return;
      }

      // Add path at the start of each main section
      if (currentChar === 0 && !messages[currentIndex].startsWith('>') && !messages[currentIndex].startsWith(' ')) {
        setDisplayText(prev => prev + (currentIndex === 0 ? path : `\n${path}`));
      }

      const char = messages[currentIndex][currentChar];
      setDisplayText(prev => prev + char);
      currentChar++;

      if (currentChar === messages[currentIndex].length) {
        currentIndex++;
        currentChar = 0;
        timeoutId = setTimeout(typeText, 800); // Delay between messages
      } else {
        timeoutId = setTimeout(typeText, 50); // Typing speed
      }
    };

    timeoutId = setTimeout(typeText, 500); // Initial delay
    return () => clearTimeout(timeoutId);
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