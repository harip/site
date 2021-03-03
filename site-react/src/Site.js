import React, { lazy, Suspense, useContext } from 'react'; 
import { createMuiTheme, CssBaseline, MuiThemeProvider } from '@material-ui/core';  
import { ProfileProvider } from './context/ProfileContext';  
import UserContext, { UserContextProvider } from './context/UserContext'; 
import dark from './common/styling/themes/dark';
import App from './App';

const theme = createMuiTheme({ 
});

export const Site = () => { 
  return (
    <UserContextProvider>
      <ProfileProvider>
        <Suspense fallback={<div>Loading...</div>}> 
          <MuiThemeProvider theme={theme}>
            <CssBaseline/>
            <App/>
          </MuiThemeProvider>
        </Suspense>
      </ProfileProvider>
    </UserContextProvider>
  );
};

export default Site;