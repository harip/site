import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Experience from './components/Experience/Experience';
import Distractions from './components/Distractions/Distractions';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/experience">Experience</Link></li>
            <li><Link to="/distractions">Distractions</Link></li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/experience" Component={Experience} />
          <Route path="/distractions" Component={Distractions} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;