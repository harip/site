import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles'; 
import Grid from '@material-ui/core/Grid';    
import Post from './Post';

const useStyles= makeStyles( (theme)=> ({
  root: {
    margin: 10,
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
    flexWrap: 'wrap',
    listStyle: 'none',
    padding: theme.spacing(0.5)  
  },  
  card: {
    marginRight: 5,
    marginBottom: 5
  },
  post: {
    marginTop: 30
  }
})); 

const Posts = () => { 
  const classes = useStyles();   
  const data = [{
    "title":"title",
    "subTitle":"subTitle",
    "datePublished": "datePublished",
    "content": "content",
    "timeStamp": "123456"
  },{
    "title":"title",
    "subTitle":"subTitle",
    "datePublished": "datePublished",
    "content": "content",
    "timeStamp": "123456"
  }];

  useEffect(() => {
    document.title="Add Posts";
  }, []);  
  
  if (!data){
    return <div>Loading...</div>
  }

  return(  
    <Grid container direction="row"
    justify="center"
    alignItems="center">       
      {data.map((item) => { 
        return(
          <Grid item xs={12} sm={9} className={classes.post}>   
            <Post item={item}/>
          </Grid> 
        );
      })}       
    </Grid> 
  );  
}

export default Posts;