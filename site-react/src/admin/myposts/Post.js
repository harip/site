import React, { useContext, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';  
import Grid from '@material-ui/core/Grid';  
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader'; 
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';  
import Typography from '@material-ui/core/Typography'; 

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
      backgroundColor: 'antiquewhite'
    },
    card: {
        marginRight: 5,
        marginBottom: 5
    }
  }));

const Post = (props) => { 
    const classes = useStyles();

    const cardTitle = (item) => {
        return (
            <div>  
                <Typography>{item.title}</Typography> 
            </div>
        );
    } 

    const getSkillChip = (item) => {  
        return (  
            <div className={classes.card}>
                <Card  > 
                    <CardHeader
                        className={classes.contactHeader}
                        title={cardTitle(item)}  
                    /> 
                    <CardContent> 
                        <div id="container">
                        {item.content}
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
            {getSkillChip(props.item)} 
            </React.Fragment>
      );   
}

export default Post;