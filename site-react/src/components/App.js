import React from 'react';
import { HashRouter, Route  } from 'react-router-dom';  
import NavBar from './navbar/NavBar';
import Resume from './profile/Resume';
import SkillCloud from './skill/SkillCloud';

const App = () => {
 

  return (
    <HashRouter  >
      <NavBar />
      <Route path="/" exact component={SkillCloud} />
      <Route path="/resume" exact component={Resume} />
    </HashRouter>
  )
};

export default App;