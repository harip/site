import React, { useContext, useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';  
import Grid from '@material-ui/core/Grid'; 
import ProfileContext from '../context/ProfileContext';
import SkillSearch from './SkillSearch';
// import PythonDs from '../pthonds/PythonDs';

const useStyles= makeStyles( (theme)=> ({
  root: {
    margin: 10,
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
    flexWrap: 'wrap',
    listStyle: 'none',
    padding: theme.spacing(0.5),
    background: '#ffa602'
  },
  skillItem: {
    alignSelf: 'center'
  },
  skillContainer: {
    display: 'flex',
    margin: '0.8px', 
    paddingRight: 24, 
    paddingLeft: 24, 
    overflow: 'hidden',
    whiteSpace: 'nowrap', 
    textOverflow: 'ellipsis',
    cursor: 'pointer',
    fontFamily: 'Roboto, Helvetica, Arial, sans-serif',
    height: 64, 
  },
  low : {
    fontSize: 15, 
  },
  med : {
    fontSize: 25, 
  },
  high : {
    fontSize: 45, 
  },
  skillPage: { 
      background: '#fafafa'
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
    const chipClass= `${classes.skillContainer} ${classes[item.experience]}`;
    return ( 
      <li> 
        <div
           onClick = {() => handleSkillClick(item)}
           className={chipClass}
        >
          <div className={classes.skillItem}>
          {item.skill}
          </div>
        </div>
      </li> 
    );
  } 
  
  if (!data){
    return <div>Loading...</div>
  }

  return(  
    <Grid container direction="row"
    className= {classes.skillPage}
    justify="center"
    alignItems="center"> 
      <Grid item xs={12} sm={8}>  
        <SkillSearch open={open} onClose={handleClose} searchTerm={selectedSkill}/> 

        <Paper component="ul" className={classes.root} elevation={0}>
            {data.skills.map((data,index) => {  
              return (
                <React.Fragment key={index}>
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