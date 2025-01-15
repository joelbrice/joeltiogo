import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { FaRobot, FaBalanceScale } from 'react-icons/fa';

const glowAnimation = keyframes`
  0% { text-shadow: 0 0 10px #00ff00; }
  50% { text-shadow: 0 0 20px #00ff00, 0 0 30px #00ff00; }
  100% { text-shadow: 0 0 10px #00ff00; }
`;

// Add these new animations
const matrixRain = keyframes`
  0% { transform: translateY(-100%); opacity: 0; }
  50% { opacity: 0.5; }
  100% { transform: translateY(100%); opacity: 0; }
`;

const cursorBlink = keyframes`
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
`;

const BlogContainer = styled.div`
  min-height: 100vh;
  display: grid;
  grid-template-rows: auto 1fr auto;
  font-family: "Courier New", Courier, monospace;
  background: #0a0a0a;
  color: #00ff00;
  padding: 2rem;
  gap: 2rem;
`;

const Header = styled.header`
  text-align: center;
  padding: 2rem 0;
  border-bottom: 1px solid #00ff0033;
`;

const Title = styled.h1`
  font-size: 3rem;
  margin: 0;
  animation: ${glowAnimation} 2s infinite;
  letter-spacing: 2px;
`;

const Subtitle = styled.p`
  font-size: 1.5rem;
  color: #00cc00;
  margin-top: 1rem;
  opacity: 0.8;
`;

// Update BlogGrid for tighter layout
const BlogGrid = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
  padding: 1rem;
  max-width: 1200px;
  margin: 0 auto;
`;

// Update BlogCard with more hacker aesthetics
const BlogCard = styled.div`
  background: linear-gradient(145deg, #0a0a0a, #151515);
  border: 1px solid #00ff0033;
  border-radius: 8px;
  padding: 1.5rem;
  text-align: left;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  max-width: 400px;

  &:before {
    content: '>';
    position: absolute;
    top: 10px;
    left: 10px;
    color: #00ff00;
    opacity: 0.3;
    font-size: 1rem;
  }

  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 2px;
    height: 100%;
    background: #00ff00;
    opacity: 0.5;
  }

  &:hover {
    transform: translateY(-3px);
    border-color: #00ff00;
    box-shadow: 0 0 15px rgba(0, 255, 0, 0.2);
    
    &:after {
      opacity: 1;
    }
  }
`;

const CardIcon = styled.div`
  font-size: 3rem;
  color: #00ff00;
  margin-bottom: 1.5rem;
  opacity: 0.9;
`;

// Update CardTitle for more compact look
const CardTitle = styled.h3`
  font-size: 1.4rem;
  color: #00ff00;
  margin: 0 0 0.8rem 0;
  line-height: 1.2;
  font-family: 'Courier New', monospace;
  position: relative;
  padding-left: 1rem;

  &:before {
    content: '/>';
    position: absolute;
    left: -10px;
    color: #00ff00;
    opacity: 0.5;
  }
`;

// Update CardSummary for terminal feel
const CardSummary = styled.p`
  font-size: 0.9rem;
  color: #00cc00;
  margin: 0.8rem 0;
  line-height: 1.5;
  opacity: 0.8;
  font-family: 'Courier New', monospace;
  position: relative;
  padding-left: 1rem;
`;

// Update ReadMoreButton for hacker style
const ReadMoreButton = styled.button`
  font-size: 0.9rem;
  color: #00ff00;
  background-color: transparent;
  border: 1px solid #00ff00;
  border-radius: 4px;
  padding: 0.5rem 1rem;
  cursor: pointer;
  font-family: 'Courier New', monospace;
  transition: all 0.2s ease;
  margin-top: 1rem;
  position: relative;
  overflow: hidden;

  &:after {
    content: '_';
    animation: ${cursorBlink} 1s infinite;
  }

  &:hover {
    background-color: rgba(0, 255, 0, 0.1);
    transform: translateX(5px);
  }
`;

const Footer = styled.footer`
  text-align: center;
  color: #00cc00;
  font-size: 1rem;
  padding: 2rem;
  border-top: 1px solid #00ff0033;
`;

// Update modalStyle for hacker theme
const modalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "90%",
  maxWidth: "600px",
  bgcolor: "#0a0a0a",
  color: "#00ff00",
  borderRadius: "8px",
  border: "1px solid #00ff0033",
  boxShadow: "0 0 30px rgba(0, 255, 0, 0.1)",
  p: 3,
  maxHeight: "80vh",
  overflowY: "auto",
  fontFamily: "'Courier New', monospace"
};

const blogPosts = [
  {
    icon: <FaRobot />,
    title: "The Future of AI: Trends to Watch in 2024",
    summary: "Explore groundbreaking developments in AI technology, from advanced neural networks to revolutionary applications in healthcare and climate science. Discover how generative AI is reshaping creative industries and what's next in the evolution of machine learning.",
    content: "Artificial Intelligence continues to evolve at an unprecedented pace, revolutionizing industries across the globe. Key trends include significant advances in generative AI, enabling more creative and nuanced content creation. Natural language processing breakthroughs are enabling more natural human-machine interactions, while ethical AI frameworks are being developed to ensure responsible deployment...",
  },
  {
    icon: <FaBalanceScale />,
    title: "Ethics in AI: Navigating the Digital Frontier",
    summary: "Delve into the critical ethical considerations shaping AI development. From bias mitigation to transparency initiatives, learn how researchers and developers are working to create more equitable AI systems.",
    content: "As AI systems become more prevalent in decision-making processes, the importance of ethical considerations has moved to the forefront. Current initiatives focus on developing explainable AI systems, ensuring algorithmic fairness, and implementing robust privacy protections...",
  },
];

function Blog() {
  const [open, setOpen] = useState(false);
  const [selectedPost, setSelectedPost] = useState(null);

  const handleOpen = (post) => {
    setSelectedPost(post);
    setOpen(true);
  };

  const handleClose = () => setOpen(false);

  return (
    <BlogContainer>
      <Header>
        <Title>{`> Hacker's Guide to AI`}</Title>
        <Subtitle>Exploring the Digital Frontier of Artificial Intelligence</Subtitle>
      </Header>

      <BlogGrid>
        {blogPosts.map((post, index) => (
          <BlogCard key={index}>
            <CardIcon>{post.icon}</CardIcon>
            <CardTitle>{post.title}</CardTitle>
            <CardSummary>{post.summary}</CardSummary>
            <ReadMoreButton onClick={() => handleOpen(post)}>
              {'> Read More'}
            </ReadMoreButton>
          </BlogCard>
        ))}
      </BlogGrid>
      <Modal open={open} onClose={handleClose}>
        <Box sx={modalStyle}>
          <IconButton
            onClick={handleClose}
            sx={{
              position: "absolute",
              right: 16,
              top: 16,
              color: "#00ff00",
              '&:hover': {
                color: "#00cc00",
              }
            }}
          >
            <CloseIcon />
          </IconButton>
          {selectedPost && (
            <>
              <CardIcon>{selectedPost.icon}</CardIcon>
              <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>{selectedPost.title}</h2>
              <p style={{ fontSize: '1.2rem', lineHeight: '1.8' }}>{selectedPost.content}</p>
            </>
          )}
        </Box>
      </Modal>
    </BlogContainer>
  );
}

export default Blog;
