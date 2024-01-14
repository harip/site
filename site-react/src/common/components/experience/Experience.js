/**
 * Component that renders a work experience at a company
 * Child Component: Project that renders individual projects worked at the company
 */
import React from 'react'; 
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Project from './Project'; 
import useExperienceStyles from './useExperienceStyles';
import { Button } from '@mui/material';
 
const Experience = (props) => {
    const { experienceItem } = props;

    const classes=useExperienceStyles();

    const getProjects = () =>{
      const projects = experienceItem.projects.map(p=>{
        return <Project key={p.id} project= {p}/>
      });   
      return projects;
    }

    const expHeaderClass = `${classes.paperStyle} `
    return (
        <Grid container 
            direction="row" 
            wrap="nowrap"
            className={classes.root}
            justifyContent="center"
            alignItems="center"
        >  
            <Grid item xs={12}  sm={7} > 
                <Paper className={expHeaderClass} elevation={10}>
                    <div className={classes.header}>{experienceItem.companyHeader}</div>  
                </Paper>
            </Grid>

            <Grid item xs={12}  sm={7}> 
                <Paper className={classes.paperStyle}   >
                    <div className={classes.contentSpacing}>{experienceItem.jobDescription}</div>    
                    <br/>
                </Paper>
            </Grid>

            <Grid item xs={12}  sm={7}> 
                <Paper className={classes.paperStyle}   >
                  <div className={classes.contentSpacing}>
                    {getProjects()}
                  </div>
                </Paper>
            </Grid>
        </Grid>
    );
}

export default Experience;