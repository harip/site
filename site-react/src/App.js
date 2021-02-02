import React from 'react';
import { HashRouter, Route  } from 'react-router-dom';  
import NavBar from './common/components/navbar/NavBar';
import { ProfileProvider } from './context/ProfileContext'; 
import Projects from './projects/Projects';
import PythonDs from './pthonds/PythonDs';
import Resume from './resume/Resume';
import SkillCloud from './skills/SkillCloud';
import FloatingActions from './common/components/floatingactions/FloatingActions'; 

const App = () => {
  return (
    <HashRouter  >
      <NavBar />  
      <FloatingActions/> 
      <Route path="/" exact component={SkillCloud} />
          <Route path="/resume" exact component={Resume} /> 
          <Route path="/projects" exact component={Projects} />
          <Route path="/pythonds" exact component={PythonDs} />       
 
    </HashRouter>
  )
};

export const profileApp = () => {
  return (
    <ProfileProvider>
      <App/>
    </ProfileProvider>
  );
};

export default profileApp;