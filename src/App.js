import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <div className="main">
          <Routes>
            <Route path="/" element={ <Home /> } />
            <Route path="/contact" element={ <Contact /> } />
            <Route path="/about" element={ <About /> } />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
