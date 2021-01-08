import React, { useContext, useEffect } from 'react';  
import Experience from '../common/components/experience/Experience';
import ProfileContext from '../context/ProfileContext';

const Resume = () =>{ 
  const { profile :  {  experience = []  } = {} } = useContext(ProfileContext) || {}  ;

  useEffect(() => {
    document.title="Profile";
  }, []);

  return( 
      experience.map( (item,index)=>{
        return (
          <Experience key={index} experienceItem={item} /> 
        );
      })     
  )
};

export default Resume;