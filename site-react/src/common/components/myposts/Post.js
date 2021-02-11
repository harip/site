import React, { useContext, useEffect, useState } from 'react';
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
    crudButtons : {
      marginLeft: 'auto'
    }
  }));

const Post = (props) => {  
    const classes = useStyles();
    const [postTitle, setPostTitle] = useState(props.item.title);
    const [titleEdit, setTitleEdit] = useState(true);

    // Parent events
    const {savePost} = props;

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
      setTitleEdit(true);  
      // Get post data
      const postData = {
        title: postTitle,
        content: props.item.newContent
      }
      savePost(props.item, postData);
    }
    
    /**
     * Get save and edit button markup for title
     */
    const titleCrudButtonMarkup = () => {
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
                    <CardActions disableSpacing>
                        {/* <IconButton aria-label="add to favorites">
                        <FavoriteIcon />
                        </IconButton>   */}
                    </CardActions> 
                </Card>
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