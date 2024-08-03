import React from 'react';
import './components/CSS/App.css';
import Header from './components/Header';
import Intro from './components/Intro';
import About from './components/About';
import AreaOfExpertise from './components/AreaOfExpertise';
import Work from './components/Work';
import Experience from './components/JobExp';
import Files from './components/Files';
import Contact from './components/Contact';

function App() {
  return (
    <>
      <Header />
      <Intro />
      <About />
      <AreaOfExpertise />
      <Work />
      <Experience />
      <Files />
      <Contact />
    </>
  );
}

export default App;
