import Skeleton from '@mui/material/Skeleton';
import makeStyles from '@mui/styles/makeStyles'; 
import Grid from '@mui/material/Grid';    
import { Button, Typography } from '@mui/material';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import RefreshIcon from '@mui/icons-material/Refresh'; 

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

        return <Skeleton variant="rectangular" className={classes.postBody}/>;
    }

    return (
        <Grid container direction="row"
            justifyContent="center"
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