import React, { useEffect, useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles'; 
import Grid from '@material-ui/core/Grid';    
import Post from './Post';
import PostContext from '../../../context/PostContext';
import PostData, {PatchComment} from '../myposts/PostService';
import SkeletonPost from '../skeletons/SkeletonPost';

const useStyles= makeStyles( (theme)=> ({  
  card: {
    marginRight: 5,
    marginBottom: 5
  },
  post: {
    marginTop: 30
  }
})); 

const Posts = (props) => { 
  const data = useContext(PostContext); 
  const classes = useStyles();   

  useEffect(() => {
    document.title="Blog";
  }, []);  

  const retryFetchPosts = () => data.retry();

  if ( !data || (data && data.error) || (data && !data.posts)){
    // Return a ghost element
    return (
      <SkeletonPost responseData={data} retry={retryFetchPosts}/>
    );
  }  

  const { posts } = data; 
  /**
   * Function that will be triggered when a post is changed
   * @param {*} item post that was changed
   */
  const onSavePost = async (currentPost, postData, callback) => {
    // Save to database and if successful show that in frontend as well
    // If not show an error dialog to the user
    const postDataResponse = await PostData(postData); 
    const status = postDataResponse['success'];
    callback(status);
    if (status && status === true) {
      currentPost.title = postData.title;
      currentPost.content = postData.content;
    } 
  }

  const onSaveComment = async (commentData,callback) => {
    const commentSaveResponse = await PatchComment(commentData);  
    callback();
  }

  return(  
    <Grid container direction="row"
    justify="center"
    alignItems="center">       
      {posts.map((item) => { 
        return(
          <Grid key={item._id} item xs={12} sm={9} className={classes.post}>   
            <Post 
              item={item} 
              savePost={onSavePost} 
              saveComment={onSaveComment}  
              key={item._id}
            />
          </Grid> 
        );
      })}       
    </Grid> 
  );  
}

export default Posts;