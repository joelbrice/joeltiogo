import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';

// Add matrix background animation
const matrixRain = keyframes`
  0% { transform: translateY(-100%); }
  100% { transform: translateY(100%); }
`;

const cursorBlink = keyframes`
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
`;

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #000000;
  background-image:
    linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.9)),
    repeating-linear-gradient(0deg,
      transparent 0%,
      rgba(0, 255, 0, 0.05) 50%,
      transparent 100%);
  background-size: cover;
  color: #0fbaff; /* Adjusted text color for better contrast */
  font-family: 'Courier New', monospace;
  overflow: hidden;
  padding: 1rem;
  position: relative;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      rgba(0, 255, 0, 0.03) 50%,
      rgba(0, 0, 0, 0.1) 50%
    );
    background-size: 100% 4px;
    pointer-events: none;
    animation: ${matrixRain} 20s linear infinite;
    opacity: 0.3;
  }
`;

const Terminal = styled.div`
  width: 80vw;
  max-width: 800px;
  background: rgba(0, 0, 0, 0.8); /* Adjusted background opacity */
  border: 1px solid #0fbaff; /* Adjusted border color */
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
  color: #0fbaff; /* Adjusted text color */
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
  const path = '[root@quantum-core] ~/joeltiogo$ ';

  const messages = [
    '> Initializing system...\n',
    '> Running security protocols...\n',
    '> Establishing secure connection...\n',
    '>> SYSTEM PROFILE: Joël Tiogo\n',
    '>> ROLE: Data Scientist | AI Consultant | Project Manager\n',
    '> Executing profile.sh...',
    'Driving innovation through agile methodologies and data-driven solutions',
    'transforming complex challenges into actionable strategies.\n',
    '> Loading credentials...',
    '=====================================',
    'EDUCATION:\n',
    '> MBA.exe --Specialization="Finance & Technology"',
    '  └─ Frankfurt School of Finance & Management(FS), Germany\n',
    '> BTech.exe --field="Electrical Engineering"',
    '  └─ University of Johannesburg(UJ), South Africa\n',
    '> cat technical_skills.txt',
    '┌────────────────────────────────┐',
    '│ • Full Stack Development       │',
    '│ • Python | C# | JavaScript     │',
    '│ • React.js | Angular           │',
    '│ • GCP | AWS | Azure | Docker   │',
    '│ • Tensorflow, Pytorch, Pandas  │',
    '│ • Git, MLFlow, Prefect|FastAPI │',
    '└────────────────────────────────┘\n',
    '> Check system status...',
    '[STATUS]: Active & Innovation-Driven',
    '[MISSION]: Contribute to a sustainable future through technology',
    '\n> ./execute innovation_pipeline.sh'
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