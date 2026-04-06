import React, { Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import Nav from './components/Navbar';
import Footer from './components/Footer';
import './index.css';
import Expertise from './components/expertise';
import Insights from './components/Insights';

// Lazy load components for better performance
const About = React.lazy(() => import('./components/About'));
const Home = React.lazy(() => import('./components/Home'));
const NotFound = React.lazy(() => import('./components/NotFound'));

const AppContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const MainContent = styled.main`
  flex: 1;
`;

const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 60vh;
`;

const LoadingSpinner = styled.div`
  width: 50px;
  height: 50px;
  border: 4px solid rgba(102, 126, 234, 0.1);
  border-top-color: #667eea;
  border-radius: 50%;
  animation: spin 1s linear infinite;

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`;

const LoadingText = styled.p`
  margin-top: 1rem;
  font-size: 1.1rem;
  color: #667eea;
`;

const LoadingFallback = () => (
  <LoadingContainer>
    <div style={{ textAlign: 'center' }}>
      <LoadingSpinner />
      <LoadingText>Loading...</LoadingText>
    </div>
  </LoadingContainer>
);

function App() {
  return (
    <BrowserRouter>
      <AppContainer>
        <Nav />
        <MainContent>
          <Suspense fallback={<LoadingFallback />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/expertise" element ={<Expertise />} />
              <Route path="/insights" element ={<Insights />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </MainContent>
        <Footer />
      </AppContainer>
    </BrowserRouter>
  );
}

export default App;
