import React, { useEffect, useState, useContext } from 'react'; 
import axiosConfig from '../apis/axiosConfig';
import UserContext from './UserContext';

const initialState = {
  // Default empty function
  posts: null,
  error: false,

  retry: ()=>{},
  save: ()=>{},
  saveComment: ()=>{} 
};

const PostContext = React.createContext(initialState);

export const PostProvider = ({children}) => {
  const userContextValue = useContext(UserContext);
  const [blogs, setBlogs] = useState(null);

  useEffect(() => { 
    fetchBlogData(); 
  }, [])

  async function fetchBlogData() { 
    let posts = null;
    let error = false; 
    try {
      let response = await axiosConfig.get('/post'); 
      posts=response.data; 
    } catch(err) {
      error = true;
    } 

    setBlogs({
      posts,
      error
    });
  }  

  const save = async (id,blogData) => {
    console.log(id);
    console.log(blogData); 

    if (id){
      blogData["_id"] = id;
    } 

    try {
      await axiosConfig.put('/post',{
        ...blogData,
        token: userContextValue.token
      });
      
      // Reset state
      let { posts } = { ...blogs };  
      let currentPostIndex = posts.findIndex(f=>f._id === `${id}`);
      if (currentPostIndex>=0) {   
        // Set content and titles
        posts.splice(currentPostIndex,1,blogData);
        setBlogs({
          posts,
          error: false
        });
      } 

      // Reset value 
      return true;
    } catch (err) {
      // Don't do anything
      console.error(err);
      return false;
    }
  }

  const  addNewBlog = async (id,comment) => { 
    try {
      const response = await axiosConfig.patch('/post',comment);
      return true;
    } catch (err) {
      // Don't do anything
      console.error(err);
      return false;
    } 
  }

  const saveComment = async (id,comment) => {
    try {
      const response = await axiosConfig.patch('/post',  comment );
      return true;
    } catch (err) {
      // Don't do anything
      console.error(err);
      return false;
    } 
  }

  const retryFetchBlog = () =>  fetchBlogData(); 

  return (
    <PostContext.Provider value={{
      ...blogs,
      retry: retryFetchBlog,
      save,
      saveComment      
    }} >
      {children}
    </PostContext.Provider>
  )
};
 
export default PostContext;