import React, { useEffect, useState } from 'react';
import ProfileData from './profile.json';

const ProfileContext = React.createContext();

export const ProfileProvider = ({children}) => {
  const [profileData, setProfileData] = useState(null);

  useEffect(() => {
    setProfileData(ProfileData);
  }, [])

  return (
    <ProfileContext.Provider value={profileData}>
      {children}
    </ProfileContext.Provider>
  )
};
 
export default ProfileContext;