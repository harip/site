import React, { useEffect, useState } from 'react'; 

const defaultProviderValue = {
  user: 'Guest',
  token: '',
  modifyNameAndToken: ()=> {},
  isLoggedIn: ()=> {},
  logout: ()=> {}
};

const UserContext = React.createContext(defaultProviderValue);

export const UserContextProvider = ({children}) => {
  const [name, setName] = useState(defaultProviderValue);

  useEffect(() => {
    let token = localStorage.getItem('token');
    token = token ? token : "";
    
    if (token !== ""){
      modifyNameAndToken('admin',token);
    }
  },[]); 

  const modifyNameAndToken = (user,token) => { 
    setName({ ...name, 
      user: user,
      token:  token
    }); 
  };

  const isLoggedIn = () => {
    const isAdminAndLoggedIn =  name.user.toUpperCase() === 'ADMIN' &&  name.token  && name.token !== "null"
    return isAdminAndLoggedIn;
  }

  const logout = () => {
    setName({ ...name, 
      user: 'Guest',
      token:  ''
    }); 
    localStorage.setItem('token',"");
  }

  return(
    <UserContext.Provider value={{
      ...name,
      modifyNameAndToken,
      isLoggedIn,
      logout
    }}>
      {children}
    </UserContext.Provider> 
  );
};

export default UserContext;