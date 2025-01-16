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
  padding: 2rem; /* Added padding for content spacing */
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
  text-align: justify; /* Justify text */
  margin-top: 10rem; /* Add top margin to push content below potential navbar */ 

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
    'Driving innovation through agile methodologies and data-driven solutions, transforming complex challenges into actionable strategies.\n',
    '> Loading credentials...',
    '=====================================\n',
    'EDUCATION:\n',
    '> MBA.exe --Specialization="Finance & Technology"\n',
    '  └─ Frankfurt School of Finance & Management(FS), Germany\n',
    '> BTech.exe --field="Electrical Engineering"\n',
    '  └─ University of Johannesburg(UJ), South Africa\n',
    '> cat technical_skills.txt\n',
    '┌────────────────────────────────┐\n',
    '│ • Full Stack Development       │\n',
    '│ • Python | C# | JavaScript     │\n',
    '│ • React.js | Angular           │\n',
    '│ • GCP | AWS | Azure | Docker   │\n',
    '│ • Tensorflow, Pytorch, Pandas  │\n',
    '│ • Git, MLFlow, Prefect|FastAPI │\n',
    '└────────────────────────────────┘\n',
    '> Check system status...',
    '[STATUS]: Active & Innovation-Driven\n',
    '[MISSION]: Contribute to a sustainable future through technology\n',
    '\n> ./execute innovation_pipeline.sh\n'
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
      <TerminalContent>
        {displayText}
      </TerminalContent>
    </Container>
  );
};

export default Home;