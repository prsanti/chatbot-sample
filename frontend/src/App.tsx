import React from 'react';
import './App.css';
// libraries
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
// components
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
// import ChatInterface from './components/ChatInterface';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        {/* Routes */}
        <Routes>
          {/* <Route path="/" element={<ChatInterface />} /> */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
