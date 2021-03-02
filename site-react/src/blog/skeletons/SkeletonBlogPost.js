import Skeleton from '@material-ui/lab/Skeleton';
import { makeStyles } from '@material-ui/core/styles'; 
import Grid from '@material-ui/core/Grid';    
import { Button, Typography } from '@material-ui/core';
import SentimentVeryDissatisfiedIcon from '@material-ui/icons/SentimentVeryDissatisfied';
import RefreshIcon from '@material-ui/icons/Refresh'; 

const useStyles= makeStyles( (theme)=> ({
    post: {
      marginTop: 30
    },
    postBody : {
        height: 118,
        marginTop: -8,
        width: '100%'
    },
    postTitle: {
        height: 50,
        background: '#ffa602'
    },
    retry: {
        fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
        fontWeight: 'lighter',
        textAlign: 'center'
    },
    sadIcon: {
        fontSize: '40px'
    },
    button: {
        margin: theme.spacing(1),
    },
  })); 

const SkeletonBlogPost = (props) =>{
    const { responseData, retry } = props; 
    const posts = [1,2,3];
    const classes = useStyles();    

    const retryBlog = () => retry();

    const retryElement = (item) => {
        if (item ===1 && responseData && responseData.error) {
            return(
                <div className={classes.retry} onClick={retryBlog}>
                    <Typography variant="label">Something went wrong </Typography>
                    <br/>
                    <SentimentVeryDissatisfiedIcon className={classes.sadIcon}/>
                    <br/>
                    <Button
                        variant="contained"
                        color="primary"
                        className={classes.button}
                        endIcon={<RefreshIcon/>}
                    >
                        Retry
                    </Button>
                </div>
            );
        }

        return ( 
            <Skeleton variant="rect" className={classes.postBody}/> 
        );
    }

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
                        {retryElement(item)}
                </Grid> 
                );
            })}       
        </Grid>
    );
};

export default SkeletonBlogPost;