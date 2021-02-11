import React, { useEffect, useState } from 'react'; 

const UserContext = React.createContext({
  name: 'Guest',
});

export const UserContextProvider = ({children}) => {
};