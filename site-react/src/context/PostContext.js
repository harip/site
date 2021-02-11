import React, { useEffect, useState } from 'react'; 
import axiosCfg from '../apis/axiosConfig';

const PostContext = React.createContext();

export const PostProvider = ({children}) => {
  const [postData, setPostData] = useState(null);

  useEffect(() => {
    // Make api call to get posts and set data
    async function fetchData() { 
      const posts = await axiosCfg.get('/post'); 
      setPostData(posts.data);
    }
    fetchData(); 
  }, [])
  
  return (
    <PostContext.Provider value={postData}>
      {children}
    </PostContext.Provider>
  )
};
 
export default PostContext;