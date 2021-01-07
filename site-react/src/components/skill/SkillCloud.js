import React, { useContext, useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper'; 
import Chip from '@material-ui/core/Chip';
import Grid from '@material-ui/core/Grid'; 
import ProfileContext from '../../context/ProfileContext';
import SkillSearch from '../search/SkillSearch';

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

const SkillCloud = (props) =>{
  const data = useContext(ProfileContext);
  const classes = useStyles(); 
  const [selectedSkill, setSelectedSkill] = useState('');  
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.title="Skills";
  }, []);

  const handleSkillClick = (item)=>{
    // Open Dialog
    setSelectedSkill(item.skill);
    setOpen(true);
  };

  const handleClose = () => { 
    setOpen(false);
  }

  const getSkillChip = (item) => { 
    const chipClass= `${classes.chip} ${classes[item.experience]}`;
    return (
      <li> 
        <Chip   
            onClick = {() => handleSkillClick(item)}
            label={item.skill} 
            className={chipClass}
          />
      </li>
    );
  } 
  
  if (!data){
    return <div>Loading...</div>
  }

  return(  
    <Grid container direction="row"
    justify="center"
    alignItems="center"> 
      <Grid item xs={12} sm={8}> 
        <SkillSearch open={open} onClose={handleClose} searchTerm={selectedSkill}/> 
        <Paper component="ul" className={classes.root} elevation={0}>
            {data.skills.map((data) => { 
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