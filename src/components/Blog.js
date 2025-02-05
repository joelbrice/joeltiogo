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

const BlogGrid = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
  padding: 1rem;
  max-width: 1200px;
  margin: 0 auto;
`;

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

const CardTitle = styled.h3`
  font-size: 1.4rem;
  color: #00ff00;
  margin: 0 0 0.8rem 0;
  line-height: 1.2;
  font-family: 'Courier New', monospace;
  position: relative;
  padding-left: 1rem;
`;

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

  &:hover {
    background-color: rgba(0, 255, 0, 0.1);
    transform: translateX(5px);
  }
`;

const modalStyle = {
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "90%",
  maxWidth: "800px",
  maxHeight: "80vh",
  bgcolor: "#0a0a0a",
  color: "#00ff00",
  borderRadius: "8px",
  border: "1px solid #00ff00",
  boxShadow: "0 0 30px rgba(0, 255, 0, 0.1)",
  padding: "2rem",
  overflowY: "auto",
  marginTop: "0", // Remove margin top
  zIndex: 1000
};

const ModalContent = styled.div`
  position: relative;
  padding: 20px;
  
  h2 {
    font-size: 1.8rem;
    margin: 1rem 0 1.5rem;
    color: #00ff00;
    border-bottom: 1px solid #00ff00;
    padding-bottom: 0.5rem;
  }

  p {
    font-size: 1.1rem;
    line-height: 1.6;
    margin: 1rem 0;
    color: #00cc00;
  }
`;

const blogPosts = [
  {
    icon: <FaRobot />,
    title: "AI for Executive Leaders: Harnessing the Power of Technology",
    summary: "Gain insights into how AI is transforming businesses and why C-suite leaders need to embrace AI-driven decision-making for a competitive edge.",
    content: "AI continues to reshape industries with its potential to boost efficiency, optimize operations, and drive business outcomes. For C-suite executives, the key to leveraging AI lies in understanding its strategic applications... The future of AI is about aligning cutting-edge technology with business goals to drive meaningful change across all levels of the organization...",
  },
  {
    icon: <FaBalanceScale />,
    title: "Ethics and AI: A C-Suite Perspective",
    summary: "A deep dive into the ethical challenges facing AI adoption and how business leaders can ensure their organizations uphold responsible AI practices.",
    content: "As AI becomes more integrated into decision-making processes, business leaders must consider the ethical implications of its deployment. From fairness and transparency to accountability, the C-suite must lead the charge in ensuring AI systems align with their company's values and ethical standards...",
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
        <Title>{`> Executive's Guide to AI`}</Title>
        <Subtitle>Strategic Insights on the Future of AI and Tech Leadership</Subtitle>
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
      
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-title"
        BackdropProps={{
          style: {
            backgroundColor: 'rgba(0, 0, 0, 0.8)'
          },
          onClick: handleClose
        }}
      >
        <Box sx={modalStyle}>
          <IconButton
            onClick={handleClose}
            sx={{
              position: "absolute",
              right: 8,
              top: 8,
              color: "#00ff00",
              zIndex: 1001,
              '&:hover': {
                color: "#00cc00",
                background: "rgba(0, 255, 0, 0.1)"
              }
            }}
          >
            <CloseIcon />
          </IconButton>
          <ModalContent>
            {selectedPost && (
              <>
                <h2 id="modal-title">{selectedPost.title}</h2>
                <p>{selectedPost.content}</p>
              </>
            )}
          </ModalContent>
        </Box>
      </Modal>
    </BlogContainer>
  );
}

export default Blog;
