import React, { lazy } from 'react';
import { HashRouter, Route  } from 'react-router-dom';    
import NavBar from './common/components/navbar/NavBar'; 
import Projects from './projects/Projects';
import PythonDs from './pthonds/PythonDs';
import Resume from './resume/Resume';
import SkillCloud from './skills/SkillCloud';
import FloatingActions from './common/components/floatingactions/FloatingActions';  


const LazyPosts = lazy(()=>import('./blog/Blog'));

const App = () => {
  return (
    <React.Fragment>
      <HashRouter  > 
          <NavBar />  
          <FloatingActions/> 
          <Route path="/" exact component={SkillCloud} />
          <Route path="/resume" exact component={Resume} /> 
          <Route path="/projects" exact component={Projects} />
          <Route path="/pythonds" exact component={PythonDs} />   
          <Route path="/posts" exact component={LazyPosts} />   
      </HashRouter> 
    </React.Fragment>
  )
};

export default App;