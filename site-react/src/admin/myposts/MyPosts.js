/**
 * Display admin view of posts
 * Use a posts context
 */
import { useContext } from 'react'; 
import Posts from '../../common/components/myposts/Posts'; 
import PostContext, { PostProvider } from '../../context/PostContext';

const MyPosts = () => {
  const data = useContext(PostContext); 
  return (
    <PostProvider>
      <Posts/> 
    </PostProvider>
  );
}

export default MyPosts;