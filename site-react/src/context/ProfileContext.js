import React, { useEffect, useState } from 'react';

const ProfileContext = React.createContext();

export const ProfileProvider = ({children}) => {
  const [profileData, setProfileData] = useState(null);

  useEffect(() => {
    const fecthProfileData = async () => {
      const data = await fetch('data/profile.json');
      const response = await data.json();
      setProfileData(response);
    };
    fecthProfileData();
  }, [])

  return (
    <ProfileContext.Provider value={profileData}>
      {children}
    </ProfileContext.Provider>
  )
};
 
export default ProfileContext;