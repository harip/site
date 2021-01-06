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
      padding: theme.spacing(0.5)  
    },
    paperStyle: {
        borderRadius: 0
    },
    header : {
      background: 'aqua',
      textAlign: 'center'
    }
  }));

const Experience = () => {
    const classes=useStyles();

    const expHeaderClass = `${classes.paperStyle} ${classes.header}`
    return (
        <Grid container 
            direction="row" 
            className={classes.root}
            justify="center"
            alignItems="center"
        >
            
            <Grid item xs={12} sm={8} className={classes.header}> 
                <Paper className={expHeaderClass}>
                    <div>SWISS RE / June 2018-Present / Senior Full Stack Developer</div>  
                </Paper>
            </Grid>

            <Grid item xs={12} sm={8}> 
                <Paper className={classes.paperStyle}>
                    <div>Working as a senior full stack developer in creating B2B2C platforms with focus on Life
    insurance and Medicare supplement products.</div>  
                    <br/>
                </Paper>
            </Grid>

            <Grid item xs={12} sm={8}> 
                <Paper className={classes.paperStyle}>
                    <Project/>
                </Paper>
            </Grid>
        </Grid>
    );
}

export default Experience;