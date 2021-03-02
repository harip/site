import React, { useState,useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader'; 
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';  
import Typography from '@material-ui/core/Typography'; 
import TextEditor from '../common/components/editor/TextEditor';
import { ButtonGroup, IconButton } from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import SaveIcon from '@material-ui/icons/Save';
import TextField from '@material-ui/core/TextField';  
import UserContext from '../context/UserContext';
import InsertCommentIcon from '@material-ui/icons/InsertComment';
import SpinnerButton from '../common/components/controls/SpinnerButton'; 
import { useFormik } from 'formik';  
import BlogContext from '../context/BlogContext';

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
    contactHeader: {
      fontSize: 20,
      borderBottom: 2,
      background: '#ffa602'
    },
    card: {
        marginRight: 5,
        marginBottom: 5
    },
    cardActions: {
      borderTop: 'solid 1px #f9f5ee'
    },
    crudButtons : {
      marginLeft: 'auto'
    },
    wrapper: {
      margin: theme.spacing(1),
      position: 'relative',
    },
    commentBox: {
      width: '100%'
    },
  }));
 
const BlogPost = (props) => {   
    const userContextValue = useContext(UserContext);
    const blogContext = useContext(BlogContext); 
    const classes = useStyles();  
    const [editClicked, setEditClicked] = useState(false);    
    const [postComment, setPostComment] = useState('');
    const [postCommentLoading, setPostCommentLoading] = useState(false);
  
    // Parent events
    const {item } = props; 

    const formik = useFormik({
      initialValues: {
        title: item.title,
        subTitle: item.subTitle,
        content: item.content
      },
      onSubmit: (values) => {
        console.log(values);
      }
    });

    const getForm = () => {
      return (
        <form onSubmit={formik.handleSubmit}>
          <Card  > 
            <CardHeader
                className={classes.contactHeader}
                title={
                  <React.Fragment>
                    <TextField
                      autoFocus
                      margin="dense"
                      id="postTitle"
                      label="title"
                      name = "title"
                      type="text"
                      fullWidth
                      value={formik.values.title}
                      onChange={formik.handleChange}
                    />   
                    <TextField 
                      margin="dense"
                      name= "subTitle"
                      id="postSubTitle"
                      label="subTitle"
                      type="text"
                      fullWidth
                      value={formik.values.subTitle}
                      onChange={formik.handleChange}
                    />                      
                  </React.Fragment>    
                }  
                action={titleCrudButtonMarkup()}
            /> 
            <CardContent>  
              <div id="container">
                <TextEditor post={item} /> 
              </div> 
            </CardContent>
            <CardActions className={classes.cardActions}>
                <InsertCommentIcon />
                <TextField
                  id="standard-multiline-flexible"
                  label="add comment"
                  className={classes.commentBox}
                  multiline
                  rowsMax={4} 
                  value={postComment}
                  onChange={handleCommentChange}
                />
                <SpinnerButton buttonProps = {{
                  'text': 'Save',
                  'onClick':  postSaveComment,
                  'loading' : postCommentLoading
                  }}
                />
            </CardActions> 
          </Card>  
        </form>
      );  
    }

    /**
     * Get save and edit button markup for title
     */
    const titleCrudButtonMarkup = () => {  
      if (!userContextValue.isLoggedIn()) {
        return null;
      }

      // show edit functionality
      return (
        <ButtonGroup 
          type="submit"
          color="primary" 
          aria-label="outlined primary button group" 
          className={classes.crudButtons}>
            {
              !editClicked 
              ?  <IconButton aria-label="edit" onClick={()=>setEditClicked(!editClicked)}><EditIcon /></IconButton>       
              :  <IconButton aria-label="save" onClick={()=> postSave()} color="primary"><SaveIcon /></IconButton>      
            } 
        </ButtonGroup>
      );
    };

    const getReadOnlyForm = () => {
      return (
        <Card  > 
          <CardHeader
              className={classes.contactHeader}
              title={
                <React.Fragment>
                  <Typography variant="h3">{item.title}</Typography>     
                  <Typography variant="h6">{item.subTitle}</Typography>    
                </React.Fragment> 
              }  
              action={titleCrudButtonMarkup()}
          /> 
          <CardContent>  
            <div id="container"
              dangerouslySetInnerHTML={{
                __html: props.item.content
              }}>
            </div> 
          </CardContent>
          <CardActions className={classes.cardActions}>
              <InsertCommentIcon />
              <TextField
                id="standard-multiline-flexible"
                label="add comment"
                className={classes.commentBox}
                multiline
                rowsMax={4} 
                value={postComment}
                onChange={handleCommentChange}
              />
              <SpinnerButton buttonProps = {{
                'text': 'Save',
                'onClick':  postSaveComment,
                'loading' : postCommentLoading
                }}
              />
          </CardActions> 
        </Card>  
      );     
    } 

    /**
     * Invoke save method that will call the parent save
     * parent save will invoke the api
     */
    const postSave = () => {    
      // Get post data 
      let postData = { 
        ...props.item, 
        title:formik.values.title,
        subTitle: formik.values.subTitle,
        content: props.item.newContent ? props.item.newContent: props.item.content 
      }; 
      const isSuccess = blogContext.save(props.item["_id"],postData);
      if (isSuccess) {
        setEditClicked(!editClicked);
      } 
    }

    const postSaveComment = () => {
      setPostCommentLoading(true);
      const isSuccess = blogContext.saveComment(props.item["_id"],{ 
        _id: props.item["_id"],
        text: postComment
      });
      setPostCommentLoading(false);
    }

    /**
     * Function to change post comment (controlled)
     * @param {*} e comment event
     */
    const handleCommentChange = (e) => {
      setPostComment(e.target.value);
    }  
 
    const getPostCard = () => {  
      return (  
        <div className={classes.wrapper}>
          <div className={classes.card}> 
            {
              editClicked
              ? getForm()
              : getReadOnlyForm()
            }            
          </div>   
        </div> 
      );
    }  

    return(  
      <React.Fragment key={props.item.timeStamp}> 
        {getPostCard(props.item)} 
      </React.Fragment>
    );   
}

export default BlogPost;