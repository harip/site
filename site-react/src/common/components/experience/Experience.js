import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Project from './Project'; 

const useStyles= makeStyles( (theme)=> ({
    root: {
      margin: 10,
      display: 'flex',
      justifyContent: 'center',
      alignContent: 'center',
      flexWrap: 'wrap',
      listStyle: 'none',
      padding: theme.spacing(0.5),
      fontFamily: "monospace"  
    },
    paperStyle: {
        borderRadius: 0,
        marginRight: 10,
    },
    header : {
      background: 'chartreuse',
      textAlign: 'left',
      padding: 6,
      fontSize: 16
    },
    contentSpacing: {
      padding: 10
    }
  }));

const Experience = (props) => {
    const { experienceItem } = props;

    const classes=useStyles();

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
            justify="center"
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