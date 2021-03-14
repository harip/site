import React, { useEffect, useContext } from 'react';
import Grid from '@material-ui/core/Grid';    
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';   
import BlogPost from './BlogPost';
import SkeletonBlogPost from './skeletons/SkeletonBlogPost'; 
import UserContext from '../context/UserContext';
import BlogContext from '../context/BlogContext';
import useBlogStyles from './useBlogStyles'; 
 
const BlogPosts = () => { 
  const blogContext = useContext(BlogContext); 
  const userContextValue = useContext(UserContext);
  const classes = useBlogStyles();   

  useEffect(() => {
    document.title="Blog";
  },[]);  

  const retryFetchPosts = () => blogContext.retry();

  if ( !blogContext || (blogContext && blogContext.error) || (blogContext && !blogContext.posts)){
    // Return a ghost element
    return (
      <SkeletonBlogPost responseData={blogContext} retry={retryFetchPosts}/>
    );
  }  
 
  const { posts } = blogContext;  

  return(  
    <React.Fragment> 
      {
        userContextValue.isLoggedIn() 
        ? 
          <div className={classes.fabAddBlog}> 
            <Fab color="primary" aria-label="add" onClick={blogContext.addNewBlog} >
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
              <BlogPost 
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

export default BlogPosts;