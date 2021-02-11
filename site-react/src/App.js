import React, { lazy, Suspense } from 'react';
import { HashRouter, Route  } from 'react-router-dom';  
import NavBar from './common/components/navbar/NavBar';
import { ProfileProvider } from './context/ProfileContext'; 
import Projects from './projects/Projects';
import PythonDs from './pthonds/PythonDs';
import Resume from './resume/Resume';
import SkillCloud from './skills/SkillCloud';
import FloatingActions from './common/components/floatingactions/FloatingActions'; 

const AddPostLazy = lazy(()=>import('./admin/myposts/MyPosts'));

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
          <Route path="/myposts" exact component={AddPostLazy} />  
      </HashRouter> 
    </React.Fragment>
  )
};

export const profileApp = () => {
  return (
    <ProfileProvider>
      <Suspense fallback={<div>Loading...</div>}>
      <App/>
      </Suspense>
    </ProfileProvider>
  );
};

export default profileApp;