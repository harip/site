import React, { lazy, Suspense, useContext } from 'react'; 
import { CssBaseline, MuiThemeProvider } from '@material-ui/core';  
import { ProfileProvider } from './context/ProfileContext';  
import UserContext, { UserContextProvider } from './context/UserContext'; 
import dark from './common/styling/themes/dark';
import App from './App';

export const Site = () => {
  const data = useContext(UserContext); 
  console.log(data)

  return (
    <UserContextProvider>
      <ProfileProvider>
        <Suspense fallback={<div>Loading...</div>}> 
          <MuiThemeProvider theme={dark}>
            <CssBaseline/>
            <App/>
          </MuiThemeProvider>
        </Suspense>
      </ProfileProvider>
    </UserContextProvider>
  );
};

export default Site;