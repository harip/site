import { makeStyles } from '@material-ui/core/styles';

const useStyles= makeStyles( ()=> ({
  input:{
    height: '50px',
    padding: '10px'
  },
  inputParent : {
    marginLeft: '50px',
    marginTop: '150px'
  }
}));

const Dummy = () => {
  const classes = useStyles();

  return (
    <div className={classes.inputParent} data-clarity-mask="True">
      <label>Enter date of birth: </label>
      <input 
        data-clarity-mask="True"
        className={classes.input}  
        autoComplete="off"    
        name="qDateCoverage" 
        placeholder="MM/DD/YYYY" 
        type="search"  
        id="input_qdatecoverage_a" ></input>
    </div>
  );
};

export default Dummy;