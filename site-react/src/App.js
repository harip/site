import React, { lazy, Suspense } from 'react';
import { HashRouter, Route  } from 'react-router-dom';  
import NavBar from './common/components/navbar/NavBar';
import { ProfileProvider } from './context/ProfileContext'; 
import Projects from './projects/Projects';
import PythonDs from './pthonds/PythonDs';
import Resume from './resume/Resume';
import SkillCloud from './skills/SkillCloud';
import FloatingActions from './common/components/floatingactions/FloatingActions'; 
import { UserContextProvider } from './context/UserContext';
 
const LazyPosts = lazy(()=>import('./myposts/ReadOnlyPosts'));

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

export const profileApp = () => {
  return (
    <UserContextProvider>
      <ProfileProvider>
        <Suspense fallback={<div>Loading...</div>}>
          <App/>
        </Suspense>
      </ProfileProvider>
    </UserContextProvider>
  );
};

export default profileApp;