import { makeStyles } from '@material-ui/core/styles'; 

const useStyles= makeStyles( (theme)=> ({  
  card: {
    marginRight: 5,
    marginBottom: 5
  },
  post: {
    marginTop: 30
  },
  fabAddBlog: {
    marginTop: 10,
    position: 'fixed', 
    marginLeft: 'auto',  
    zIndex: 999
  },
})); 

export default useStyles;