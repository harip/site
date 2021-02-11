import React, { useEffect, useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles'; 
import Grid from '@material-ui/core/Grid';    
import Post from './Post';
import PostContext from '../../../context/PostContext';

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
  card: {
    marginRight: 5,
    marginBottom: 5
  },
  post: {
    marginTop: 30
  }
})); 

const Posts = () => { 
  const myPosts = useContext(PostContext);
  const classes = useStyles();    

  useEffect(() => {
    document.title="Add Posts";
  }, []);  
   
  if (!myPosts){
    return <div>Loading...</div>
  }
 
  /**
   * Function that will be triggered when a post is changed
   * @param {*} item post that was changed
   */
  const onSavePost = (currentPost, postData, callback) => {
    console.log(currentPost);
    console.log(postData);
    // Save to database and if successful show that in frontend as well
    // If not show an error dialog to the user
    const status = false;
    callback(status);
    if (status) {
      currentPost.title = postData.title;
      currentPost.content = postData.content;
    } 
  }

  return(  
    <Grid container direction="row"
    justify="center"
    alignItems="center">       
      {myPosts.map((item) => { 
        return(
          <Grid key={item._id} item xs={12} sm={9} className={classes.post}>   
            <Post item={item} savePost = {onSavePost}  key={item._id}/>
          </Grid> 
        );
      })}       
    </Grid> 
  );  
}

export default Posts;