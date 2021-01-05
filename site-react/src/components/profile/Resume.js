import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles= makeStyles( (theme)=> ({
  root: {
    margin: 10,
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
    flexWrap: 'wrap',
    listStyle: 'none',
    padding: theme.spacing(0.5)  
  }
}));

const Resume = () =>{
  const classes = useStyles();

  return(  

    <Grid container direction="row"
    justify="center"
    alignItems="center">

      <Grid item xs={12} sm={6}>

      <Paper component="ul" className={classes.root} elevation={0}>
            75% complete
        </Paper>

      </Grid>

    </Grid>



  )


};

export default Resume;