import React, { useState } from "react";
import styled from "styled-components";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import aiImage from "../assets/images/qr-code.png"; // Replace with a relevant AI-themed image

const BlogContainer = styled.div`
  padding: 2rem;
`;

const HeroSection = styled.div`
  background: linear-gradient(to right, #6a11cb, #2575fc);
  color: white;
  text-align: center;
  padding: 2rem;
  border-radius: 12px;
  margin-bottom: 2rem;
`;

const BlogGrid = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.5rem;
`;

const BlogCard = styled.article`
  background: #fff;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease;

  &:hover {
    transform: translateY(-8px);
  }
`;

const CardImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const CardContent = styled.div`
  padding: 1rem;
`;

const CardTitle = styled.h3`
  font-weight: bold;
  margin-top: 0;
`;

const ReadMoreButton = styled.button`
  color: #2575fc;
  font-weight: bold;
  background: none;
  border: none;
  cursor: pointer;
  margin-top: 1rem;
  padding: 0;
  text-decoration: underline;
`;

const modalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "80%",
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  borderRadius: "8px",
  maxHeight: "90vh",
  overflowY: "auto",
};

const blogPosts = [
  {
    image: aiImage,
    title: "The Future of AI: Trends to Watch in 2024",
    summary:
      "Explore the key AI trends reshaping industries, including generative AI, ethical considerations, and advancements in natural language processing.",
    content:
      "Artificial intelligence (AI) continues to evolve at an unprecedented pace, revolutionizing industries and transforming daily life. In 2024, key trends include advances in generative AI, which powers creative tools like DALL-E and ChatGPT, and ethical AI frameworks to address biases and ensure fairness. Natural language processing breakthroughs are also reshaping how machines interact with humans, enabling seamless communication in multiple languages.",
  },
  {
    image: aiImage,
    title: "Ethics in AI: Challenges and Opportunities",
    summary:
      "Dive into the ethical challenges AI poses and the opportunities for creating a fair and transparent future with responsible AI practices.",
    content:
      "Ethical considerations in AI encompass a wide range of issues, from bias and transparency to accountability. Developing ethical AI requires collaboration between technologists, policymakers, and ethicists to create robust guidelines. Initiatives like Explainable AI (XAI) aim to ensure users understand AI decisions, building trust and mitigating risks.",
  },
];

function Blog() {
  const [open, setOpen] = useState(false);
  const [selectedPost, setSelectedPost] = useState(null);

  const handleOpen = (post) => {
    setSelectedPost(post);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <BlogContainer>
      <HeroSection>
        <h1>Explore the World of AI</h1>
        <p>Stay updated on the latest trends, innovations, and insights in artificial intelligence.</p>
      </HeroSection>

      <BlogGrid>
        {blogPosts.map((post, index) => (
          <BlogCard key={index}>
            <CardImage src={post.image} alt={post.title} />
            <CardContent>
              <CardTitle>{post.title}</CardTitle>
              <p>{post.summary}</p>
              <ReadMoreButton onClick={() => handleOpen(post)}>Read More</ReadMoreButton>
            </CardContent>
          </BlogCard>
        ))}
      </BlogGrid>

      <Modal open={open} onClose={handleClose}>
        <Box sx={modalStyle}>
          <IconButton
            onClick={handleClose}
            sx={{ position: "absolute", right: 8, top: 8 }}
            aria-label="close"
          >
            <CloseIcon />
          </IconButton>
          {selectedPost && (
            <>
              <h2>{selectedPost.title}</h2>
              <p>{selectedPost.content}</p>
            </>
          )}
        </Box>
      </Modal>
    </BlogContainer>
  );
}

export default Blog;
