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
  skillItem: {
    alignSelf: 'center'
  },
  skillContainer: {
    display: 'flex',
    margin: '0.8px', 
    paddingRight: 24, 
    paddingLeft: 24,
    backgroundColor: '#e0e0e0',
    overflow: 'hidden',
    whiteSpace: 'nowrap', 
    textOverflow: 'ellipsis',
    cursor: 'pointer',
    fontFamily: 'Roboto, Helvetica, Arial, sans-serif',
    height: 64, 
    maxWidth:345
  },
  low : {
    fontSize: 15, 
  },
  med : {
    fontSize: 25, 
  },
  high : {
    fontSize: 45, 
  },
    contactHeader: {
    fontSize: 20,
    borderBottom: 2,
    backgroundColor: 'antiquewhite'
  },
    card: {
      marginRight: 5,
      marginBottom: 5
  },
  badge: {
    borderRadius: 5
  },
}));
 

const AddPost = () => {
  const classes = useStyles();   
  const data = [{
    "title":"title",
    "subTitle":"subTitle",
    "datePublished": "datePublished",
    "content": "content",
    "timeStamp": "123456"
  }]

  useEffect(() => {
    document.title="Add Posts";
  }, []);  

  const cardTitle = (item) => {
    return (
      <div>  
          <Typography>{item.title}</Typography> 
      </div>
    );
  }

  const getSkillChip = (item) => {  
    return ( 
      <li>  
        <div   className={classes.card}>
          <Card  > 
            <CardHeader
              className={classes.contactHeader}
              title={cardTitle(item)}  
          /> 
          <CardContent>
              <Typography variant="body2" color="textSecondary" component="p">
              {item.title}
              </Typography>
          </CardContent>
          <CardActions disableSpacing>
              {/* <IconButton aria-label="add to favorites">
              <FavoriteIcon />
              </IconButton>   */}
          </CardActions> 
          </Card>
        </div> 
      </li> 
    );
  }  
  
  if (!data){
    return <div>Loading...</div>
  }

  return(  
    <Grid container direction="row"
    justify="center"
    alignItems="center"> 
      <Grid item xs={12} sm={8}>  

        <Paper component="ul" className={classes.root} elevation={0}>
            {data.map((data) => { 
              return (
                <React.Fragment key={data.timeStamp}>
                  {getSkillChip(data)} 
                </React.Fragment>
              );
            })}
        </Paper> 

      </Grid> 
    </Grid> 
  )  
}

export default AddPost;