/**
 * Blog articles page
 */ 
import {useContext} from 'react'; 
import PostContext, { PostProvider } from '../context/PostContext';
import BlogPosts from './BlogPosts';

const Blog = () => {   
  const data = useContext(PostContext); 
  if (!data){
    return <div>Loading...</div>
  }  
 
  return (
    <PostProvider>
      <BlogPosts/> 
    </PostProvider>
  );
}

export default Blog;