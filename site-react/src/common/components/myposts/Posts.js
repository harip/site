import React, { useEffect, useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles'; 
import Grid from '@material-ui/core/Grid';    
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Post from './Post';
import PostContext from '../../../context/PostContext'; 
import SkeletonPost from '../skeletons/SkeletonPost';
import UserContext from '../../../context/UserContext';

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

const Posts = (props) => { 
  const postContext = useContext(PostContext); 
  const userContextValue = useContext(UserContext);
  const classes = useStyles();   

  useEffect(() => {
    document.title="Blog";
  }, []);  

  const retryFetchPosts = () => postContext.retry();

  if ( !postContext || (postContext && postContext.error) || (postContext && !postContext.posts)){
    // Return a ghost element
    return (
      <SkeletonPost responseData={postContext} retry={retryFetchPosts}/>
    );
  }  

  const { posts } = postContext;  

  return(  
    <React.Fragment> 
      {
        userContextValue.isLoggedIn() 
        ? 
          <div className={classes.fabAddBlog}> 
            <Fab color="primary" aria-label="add" onClick={postContext.addNewBlog} >
              <AddIcon />
            </Fab>    
          </div>        
        : ''
      } 

      <Grid container direction="row"
      justify="center"
      alignItems="center">   
        {posts.map((item) => { 
          return(
            <Grid key={item._id} item xs={12} sm={9} className={classes.post}>   
              <Post 
                item={item}  
                key={item._id}
              />
            </Grid> 
          );
        })}       
      </Grid>  
    </React.Fragment>
  );  
}

export default Posts;