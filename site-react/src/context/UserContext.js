import React, { useState } from 'react'; 

const defaultProviderValue = {
  user: 'Guest',
  token: '',
  modifyNameAndToken: ()=> {},
  isLoggedIn: ()=> {}
};

const UserContext = React.createContext(defaultProviderValue);

export const UserContextProvider = ({children}) => {
  const [name, setName] = useState(defaultProviderValue);

  const modifyNameAndToken = (user,token) => { 
    setName({ ...name, 
      user: user,
      token:  token
    }); 
  };

  const isLoggedIn = () => {
    return  name.token  && name.token !== "null"
  }

  return(
    <UserContext.Provider value={{
      ...name,
      modifyNameAndToken,
      isLoggedIn
    }}>
      {children}
    </UserContext.Provider> 
  );
};

export default UserContext;