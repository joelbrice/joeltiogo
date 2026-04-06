import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  min-height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #f8f9fa;
  padding: 2rem;
  text-align: center;
`;

const ErrorCode = styled.h1`
  font-size: 8rem;
  font-weight: 700;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin: 0;
  line-height: 1;
`;

const ErrorTitle = styled.h2`
  font-size: 2rem;
  font-weight: 600;
  color: #1a1a1a;
  margin: 1.5rem 0 1rem;
`;

const ErrorText = styled.p`
  font-size: 1.1rem;
  color: #546e7a;
  margin-bottom: 2rem;
  max-width: 500px;
`;

const HomeButton = styled.a`
  display: inline-block;
  padding: 1rem 2.5rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: #ffffff;
  text-decoration: none;
  font-weight: 600;
  border-radius: 8px;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(102, 126, 234, 0.3);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(102, 126, 234, 0.4);
  }
`;

const NotFound = () => (
  <Container>
    <ErrorCode>404</ErrorCode>
    <ErrorTitle>Page Not Found</ErrorTitle>
    <ErrorText>
      The page you're looking for doesn't exist or has been moved.
    </ErrorText>
    <HomeButton href="/">Return Home</HomeButton>
  </Container>
);

export default NotFound;
