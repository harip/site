import React, { useEffect, useState } from 'react'; 
import axiosCfg from '../apis/axiosConfig';

const PostContext = React.createContext({
  // Default empty function
  posts: null,
  view: 'admin',
  modifyView: () => {}
});

export const PostProvider = ({children}) => {
  const [postData, setPostData] = useState(null);

  const modifyView = (view,data) =>{ 
  }

  useEffect(() => {
    // Make api call to get posts and set data
    async function fetchData() { 
      let response = await axiosCfg.get('/post'); 
      
      // Payload
      const contextValue = {
        posts: response.data,
        view: children.props.view ? children.props.view : 'admin',
        modifyView
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