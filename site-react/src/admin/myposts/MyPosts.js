/**
 * Display admin view of posts
 * Use a posts context
 */ 
import Posts from '../../common/components/myposts/Posts'; 
import { PostProvider } from '../../context/PostContext';

const MyPosts = () => {
  return (
    <PostProvider>
      <Posts view="admin"/> 
    </PostProvider>
  );
}

export default MyPosts;