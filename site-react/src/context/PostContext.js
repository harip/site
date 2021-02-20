import React, { useEffect, useState } from 'react'; 
import axiosCfg from '../apis/axiosConfig';

const PostContext = React.createContext({
  // Default empty function
  posts: null
});

export const PostProvider = ({children}) => {
  const [postData, setPostData] = useState(null);

  useEffect(() => {
    let contextValue = {
      posts: null,
      error: false
    };

    // Make api call to get posts and set data
    async function fetchData() { 
      try {
        let response = await axiosCfg.get('/post1'); 
              
        // Payload
        contextValue = {
          posts: response.data,
          error: false
        };
      } catch(err) {
        contextValue = {
          posts: null,
          error: true
        };
      } 
      setPostData(contextValue);
    }
    fetchData(); 
  }, [])

  return (
    <PostContext.Provider value={postData} >
      {children}
    </PostContext.Provider>
  )
};
 
export default PostContext;