import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid'; 
import Experience from '../experience/Experience';

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
  header : {
    background: 'aqua',
    textAlign: 'center'
  }
}));

const Resume = () =>{
  const classes = useStyles();

  return(   
      <Experience/> 
  )


};

export default Resume;