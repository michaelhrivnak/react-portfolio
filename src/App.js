import React from 'react';

import './App.css';
import Menu from './Components/Menu/Menu';
import Bio from './Components/Bio/Bio';
import Intro from './Components/Intro/Intro';
import Skills from './Components/Skills/Skills';
import Portfolio from './Components/Portfolio/Portfolio';
import Resume from './Components/Resume/Resume';
import Contact from './Components/Contact/Contact';

function App() {
  return (<>
      <header>
        <Menu></Menu>
      </header>
      <main>        
        <Intro/>
        <Bio/>
        <Skills/>
        <Portfolio/>
        <Resume/>
        <Contact/>        
      </main>
      </>
  );
}

export default App;
