import React, { useEffect, useState } from 'react'; 

const defaultProviderValue = {
  user: 'Guest',
  token: localStorage.getItem('token'),
  theme: 'light',
  modifyNameAndToken: ()=> {},
  isLoggedIn: ()=> {},
  logout: ()=> {},
  changeTheme: ()=>{}
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

    // Check theme  
    let theme = localStorage.getItem('theme');
    theme = theme && theme !== ''? theme : 'light';
    changeTheme(theme);
  },[]); 

  const modifyNameAndToken = (user,token) => { 
    let newState = { ...name, 
      user: user,
      token:  token
    };
    setName(newState); 
  };

  const isLoggedIn = () => {
    const isAdminAndLoggedIn =  
      name.token  && 
      name.token !== "null"
    return isAdminAndLoggedIn;
  }

  const logout = () => {
    setName({ ...name, 
      user: 'Guest',
      token:  ''
    }); 
    localStorage.setItem('token',"");
  }

  const changeTheme = (themeName) => {  
    setName({ ...name, 
      theme: `${themeName}`
    }); 
    localStorage.setItem('theme',themeName);
  } 

  return(
    <UserContext.Provider value={{
      ...name,
      modifyNameAndToken,
      isLoggedIn,
      logout,
      changeTheme
    }}>
      {children}
    </UserContext.Provider> 
  );
};

export default UserContext;