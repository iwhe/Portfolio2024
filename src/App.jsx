import './App.css'
import React from 'react'
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Landing_page from './components/landing_page'
import ProjectPage from './components/projectPage';
import AllProjects from './components/allProjects';

function App() {

  return (
   <div className="App">
   <Router>
    <Routes>
      <Route path="/" element={<Landing_page />}/>
      <Route path="/project" element={<ProjectPage />}/>
      <Route path="/projectslist" element={< AllProjects/>}/>
      </Routes>
  </Router>
   </div>
  );
}

export default App;
