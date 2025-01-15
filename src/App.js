import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './components/Navbar';
import About from './components/About';
import Blog from './components/Blog';
import NofFound from './components/NofFound';
import Home from './components/Home';
import Footer from './components/Footer';

function App() {
  return (
    <BrowserRouter>
      <div className="App"> 
        <Nav/>
        <div className="container"> 
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="*" element={<NofFound />} />
          </Routes>
        </div>
        <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;