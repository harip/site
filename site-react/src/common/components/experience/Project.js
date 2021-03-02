/**
 * Renders an individual project 
 */ 
import React from 'react';
import useExperienceStyles from './useExperienceStyles';
 
const Project = ({project}) => {
    const classes= useExperienceStyles();

    const getResponsibilities = () =>{
        const data= project.responsibilities.map ( (item,index)=> {
            return <li key={index}>{item}</li>;
        });
        return data;
    };

    return (
        <div>
            <span className={classes.prjHeader}>{project.title}</span> - {project.description}
            <ul>
                {getResponsibilities()}
            </ul>
        </div>
    );
}

export default Project;