
import React, { useContext, useEffect } from 'react';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import LaunchIcon from '@mui/icons-material/Launch';
import ProfileContext from '../context/ProfileContext';
import { Badge } from '@mui/material';
import withStyles from '@mui/styles/withStyles';
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
                <IconButton aria-label="launch-app" size="large">
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

  return (
    <Grid container direction="row" 
    justifyContent="center"
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
  );
};

export default Projects;