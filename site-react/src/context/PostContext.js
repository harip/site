import React, { useEffect, useState } from 'react'; 
import axiosCfg from '../apis/axiosConfig';

const defaultValue = {
  // Default empty function
  posts: null,
  error: false,
  retry: ()=>{}
};

const PostContext = React.createContext(defaultValue);

export const PostProvider = ({children}) => {
  const [postData, setPostData] = useState(defaultValue);

  useEffect(() => { 
    fetchData(); 
  }, [])

  async function fetchData() { 
    let posts = null;
    let error = false; 
    try {
      let response = await axiosCfg.get('/post'); 
      posts=response.data; 
    } catch(err) {
      error = true;
    } 
    setPostData({
      ...postData,
      posts,
      error,
      retry
    });
  }

  const retry = () =>  fetchData(); 

  return (
    <PostContext.Provider value={postData} >
      {children}
    </PostContext.Provider>
  )
};
 
export default PostContext;