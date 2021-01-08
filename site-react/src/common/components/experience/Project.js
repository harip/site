import { makeStyles } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles({ 
  header: {
    textDecoration: "underline",
    fontWeight: "bold",
    fontSize: "large"
  }
});

const Project = ({project}) => {
    const classes= useStyles();

    const getResponsibilities = () =>{
        const data= project.responsibilities.map ( (item,index)=> {
            return <li key={index}>{item}</li>;
        });
        return data;
    };

    return (
        <div>
            <span className={classes.header}>{project.title}</span> - {project.description}
            <ul>
                {getResponsibilities()}
            </ul>
        </div>
    );
}

export default Project;