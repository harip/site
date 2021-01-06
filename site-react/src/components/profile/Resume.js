import React, { useContext } from 'react'; 
import Experience from '../experience/Experience';
import ProfileContext from '../../context/ProfileContext'; 

const Resume = () =>{ 
  const { profile :  {  experience = []  } = {} } = useContext(ProfileContext) || {}  ;

  return( 
      experience.map( (item,index)=>{
        return (
          <Experience key={index} experienceItem={item} /> 
        );
      })     
  )
};

export default Resume;