import React, { useState,useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader'; 
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';  
import Typography from '@material-ui/core/Typography'; 
import TextEditor from '../editor/TextEditor';
import { ButtonGroup, IconButton } from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import SaveIcon from '@material-ui/icons/Save';
import TextField from '@material-ui/core/TextField';  
import UserContext from '../../../context/UserContext';
import InsertCommentIcon from '@material-ui/icons/InsertComment';
import SpinnerButton from '../controls/SpinnerButton';

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

const Post = (props) => {   
    const userContextValue = useContext(UserContext);
    const classes = useStyles();
    const [postTitle, setPostTitle] = useState(props.item.title);
    const [titleEdit, setTitleEdit] = useState(true);
    const [loading, setLoading] = React.useState(true);
    const [showCommentBox, setShowCommentBox] = React.useState(false);

    const [postComment, setPostComment] = useState('');
    const [postCommentLoading, setPostCommentLoading] = useState(false);
  
    // Parent events
    const {savePost,saveComment} = props;
 
    /**
     * Function that renders the title markup edit mode or readonly mode
     * @param {*} item current item that is being edited
     */
    const cardTitle = (item) => { 
      return (
        <div>  
          {
            !titleEdit
            ?  
              <TextField
                autoFocus
                margin="dense"
                id="postTitle"
                label="title"
                type="text"
                fullWidth
                value={postTitle}
                onChange={handleChange}
              />                 
            :  <Typography>{item.title}</Typography>     
          }  
        </div>
      );
    } 

    /**
     * Function to change title (controlled)
     * @param {*} e title event
     */
    const handleChange = (e) => {
      setPostTitle(e.target.value);
    }

    /**
     * Function that will enable editing content
     */
    const renderContent = () => {
      return (
        <React.Fragment>
          {
            !titleEdit 
            ?  <TextEditor post={props.item} /> 
            :  
              <div
              dangerouslySetInnerHTML={{
                __html: props.item.content
              }}></div>
          }
        </React.Fragment>
      );
    } 

    const onTitleEdit = () => {
      setTitleEdit(false)
    }

    /**
     * Invoke save method that will call the parent save
     * parent save will invoke the api
     */
    const postSave = () => { 
      // Get post data
      const postData = {
        title: postTitle,
        content: props.item.newContent ? props.item.newContent: props.item.content,
        token: userContextValue.token
      };

      if (props.item["_id"]){
        postData["_id"] = props.item["_id"];
      } 
      
      setTitleEdit(true);  
      savePost(props.item, postData, (status)=>{
        if (status) {
          setTitleEdit(true);  
        }
      });
    }

    const postSaveComment = () => {
      setPostCommentLoading(true);
      // Get post data
      const commentData = { 
        text: postComment
      };

      if (props.item["_id"]){
        commentData["_id"] = props.item["_id"];
      } 

      saveComment(commentData, ()=> {
        setPostCommentLoading(false);
      })
    }

    /**
     * Function to change post comment (controlled)
     * @param {*} e comment event
     */
    const handleCommentChange = (e) => {
      setPostComment(e.target.value);
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
          color="primary" 
          aria-label="outlined primary button group" 
          className={classes.crudButtons}>
            {
              titleEdit 
              ?  <IconButton aria-label="edit" onClick={onTitleEdit}><EditIcon /></IconButton>       
              :  <IconButton aria-label="save" onClick={ ()=> postSave()} color="primary"><SaveIcon /></IconButton>      
            } 
        </ButtonGroup>
      );
    };

    const getPostCard = (item) => {  
        return (  
          <div className={classes.wrapper} disabled={loading}>
            <div className={classes.card}>
                <Card  > 
                    <CardHeader
                        className={classes.contactHeader}
                        title={
                          cardTitle(item)
                        }  
                        action={titleCrudButtonMarkup()}
                    /> 
                    <CardContent> 
                        <div id="container">
                            {renderContent()}
                        </div>
                    </CardContent>
                    <CardActions disableSpacing className={classes.cardActions}>
                        <IconButton aria-label="add comment" onClick={()=> setShowCommentBox(!showCommentBox)} >
                          <InsertCommentIcon />
                        </IconButton>  
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

export default Post;