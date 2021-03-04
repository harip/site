import React, { lazy, Suspense, useContext } from 'react';  
import App from './App';
import { ProfileProvider } from './context/ProfileContext';  
import UserContext, { UserContextProvider } from './context/UserContext';   

export const Site = () => {  
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

export default Site;