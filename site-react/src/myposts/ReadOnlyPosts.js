/**
 * Display admin view of posts
 * Use a posts context
 */ 
import {useContext} from 'react';
import Posts from '../common/components/myposts/Posts';
import PostContext, { PostProvider } from '../context/PostContext';

const ReadOnlyPosts = () => {   
  const data = useContext(PostContext); 
  if (!data){
    return <div>Loading...</div>
  }  
 
  return (
    <PostProvider>
      <Posts view="readOnly"/> 
    </PostProvider>
  );
}

export default ReadOnlyPosts;