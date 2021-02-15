import Skeleton from '@material-ui/lab/Skeleton';
import { makeStyles } from '@material-ui/core/styles'; 
import Grid from '@material-ui/core/Grid';    

const useStyles= makeStyles( (theme)=> ({
    post: {
      marginTop: 30
    },
    postBody : {
        height: 118,
        marginTop: -8
    },
    postTitle: {
        height: 50,
        background: '#ffa602'
    }
  })); 

const SkeletonPost = () =>{
    const posts = [1,2,3];
    const classes = useStyles();   

    return(
        <Grid container direction="row"
            justify="center"
            alignItems="center">       
            {posts.map((item) => { 
                return(
                <Grid 
                    key={item} 
                    item xs={12} 
                    sm={9} 
                    className={classes.post}>   
                        <Skeleton variant="text" className={classes.postTitle}/>
                        <Skeleton variant="rect" className={classes.postBody} />
                </Grid> 
                );
            })}       
        </Grid>
    );
};

export default SkeletonPost;