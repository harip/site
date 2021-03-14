import React, { lazy, useContext } from 'react';
import { HashRouter, Route  } from 'react-router-dom';   
import { CssBaseline, MuiThemeProvider } from '@material-ui/core';  
import NavBar from './common/components/navbar/NavBar'; 
import Projects from './projects/Projects';
import PythonDs from './pthonds/PythonDs';
import Resume from './resume/Resume';
import SkillCloud from './skills/SkillCloud';
import FloatingActions from './common/components/floatingactions/FloatingActions';   
import dark from './common/styling/themes/dark';
import light from './common/styling/themes/light';
import UserContext from './context/UserContext';

const LazyPosts = lazy(()=>import('./blog/Blog'));

const BasicApp = () => {
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

const App = () => {
  const userContext = useContext(UserContext);  
  // Select theme, refactor if more than 2 themes
  const customTheme = userContext.theme === 'dark' ? dark : light;  
  return (
    <MuiThemeProvider theme={customTheme}>
      <CssBaseline/>
      <BasicApp/>
    </MuiThemeProvider>
  );
}

export default App;