
import React, { useContext, useEffect } from 'react';
import Paper from '@material-ui/core/Paper';  
import Grid from '@material-ui/core/Grid';  
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader'; 
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions'; 
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography'; 
import LaunchIcon from '@material-ui/icons/Launch';
import ProfileContext from '../context/ProfileContext';
import { Badge, withStyles } from '@material-ui/core'; 
import useProjectStyles from './useProjectStyles';

const StyledBadge = withStyles((theme) => ({
  badge: {
    right: -40, 
    top: -5,
    borderRadius: 5
  },
}))(Badge);

const Projects = (props) =>{
  const data = useContext(ProfileContext);
  const classes = useProjectStyles();   

  useEffect(() => {
    document.title="Personal Projects";
  }, []);  

  const cardTitle = (item) => {
    return (
      <div> 
        <StyledBadge badgeContent={item.language} color="primary"> 
          <Typography>{item.title}</Typography>
        </StyledBadge>
      </div>
    );
  }
 
  const getSkillChip = (item) => {  
    return ( 
      <li>  
        <div onClick={()=>window.open(item.url)} className={classes.card}>
          <Card  > 
            <CardHeader
              className={classes.contactHeader}
              title={cardTitle(item)} 
              action={
                <IconButton aria-label="launch-app">
                  <LaunchIcon />
                </IconButton>
              }
          /> 
          <CardContent>
              <Typography variant="body2" color="textSecondary" component="p">
              {item.description}
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
            {data.projects.map((data) => { 
              return (
                <React.Fragment key={data.id}>
                  {getSkillChip(data)} 
                </React.Fragment>
              );
            })}
        </Paper> 

      </Grid> 
    </Grid> 
  )
};

export default Projects;