import React, { lazy, useContext } from 'react';
import { HashRouter, Route  } from 'react-router-dom';   
import { CssBaseline, ThemeProvider, StyledEngineProvider } from '@mui/material';  
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
      </HashRouter> 
    </React.Fragment>
  )
};  

const App = () => {
  const userContext = useContext(UserContext);  
  // Select theme, refactor if more than 2 themes
  const customTheme = userContext.theme === 'dark' ? dark : light;  
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={customTheme}>
        <CssBaseline/>
        <BasicApp/>
      </ThemeProvider>
    </StyledEngineProvider>
  );
}

export default App;