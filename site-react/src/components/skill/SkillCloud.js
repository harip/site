import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper'; 
import Chip from '@material-ui/core/Chip';
import Grid from '@material-ui/core/Grid';
import skillData from './skills.json';

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
  chip: {
    margin: theme.spacing(0.1),
    borderRadius: 0,
    padding: 32
  },
  low : {
    fontSize: 15, 
  },
  med : {
    fontSize: 25, 
  },
  high : {
    fontSize: 45, 
  }
}));

const SkillCloud = () =>{
  const classes = useStyles();
  const chipData =  skillData;

  const getSkillChip = (item) => { 
    const chipClass= `${classes.chip} ${classes[item.experience]}`;
    return (
      <li> 
        <Chip   
            label={item.skill} 
            className={chipClass}
          />
      </li>
    );
  }

  return(  

    <Grid container direction="row"
    justify="center"
    alignItems="center">

      <Grid item xs={12} sm={6}>

      <Paper component="ul" className={classes.root} elevation={0}>
            {chipData.map((data) => { 
              return (
                <React.Fragment key={data.id}>
                {getSkillChip(data)}
                </React.Fragment>
              );
            })}
        </Paper>

      </Grid>

    </Grid>



  )
};

export default SkillCloud;