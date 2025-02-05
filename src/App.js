import React, { Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './components/Navbar';
import Footer from './components/Footer';

const About = React.lazy(() => import('./components/About'));
const Blog = React.lazy(() => import('./components/Blog'));
const Home = React.lazy(() => import('./components/Home'));
const NotFound = React.lazy(() => import('./components/NotFound'));

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Nav />
        <div className="container">
          {/* Suspense is used to handle loading state */}
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
