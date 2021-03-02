import React, { useEffect, useState, useContext } from 'react'; 
import axiosConfig from '../apis/axiosConfig';
import UserContext from './UserContext';

const initialState = {
  // Default empty function
  posts: null,
  error: false, 
  retry: ()=>{},
  save: ()=>{},
  addNewBlog: ()=>{},
  saveComment: ()=>{} 
};

const BlogContext = React.createContext(initialState);

export const BlogProvider = ({children}) => {
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

  const addNewBlog = async (id,comment) => { 
    try {
      // Create a empty item
      const newItem = {  
        title:'',
        subTitle: '',
        content: 'Enter text' 
      }; 
      let { posts } = { ...blogs };   
      posts.unshift(newItem);
      setBlogs({
        posts,
        error: false
      });
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
    <BlogContext.Provider value={{
      ...blogs,
      retry: retryFetchBlog,
      addNewBlog,
      save,
      saveComment      
    }} >
      {children}
    </BlogContext.Provider>
  )
};
 
export default BlogContext;