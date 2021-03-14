/**
 * Blog articles page
 */ 
import {useContext} from 'react';  
import BlogContext, { BlogProvider } from '../context/BlogContext';
import BlogPosts from './BlogPosts';

const Blog = () => {   
  const data = useContext(BlogContext); 
  if (!data){
    return <div>Loading...</div>
  }  
 
  return (
    <BlogProvider>
      <BlogPosts/> 
    </BlogProvider>
  );
}

export default Blog;