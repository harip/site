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
import { createMuiTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import dark from './common/styling/themes/dark';
 
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

export const profileApp = () => {
  return (
    <UserContextProvider>
      <ProfileProvider>
        <Suspense fallback={<div>Loading...</div>}>
          <ThemeProvider theme={dark}>
            <App/>
          </ThemeProvider>
        </Suspense>
      </ProfileProvider>
    </UserContextProvider>
  );
};

export default profileApp;