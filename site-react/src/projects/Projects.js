import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import LaunchIcon from '@material-ui/icons/Launch';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    margin: 10,
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
    flexWrap: 'wrap',
    listStyle: 'none',
    padding: theme.spacing(0.5),
    fontFamily: "monospace"  
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
  contactHeader: {
    fontSize: 20,
    borderBottom: 2,
    backgroundColor: 'antiquewhite'
  },
  card: {
      cursor: 'pointer',
      maxWidth: 345
  }
}));

export default function Projects() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const getProjectCard = () =>{
      return (
        <Grid item xs={12}  sm={6} > 
            <div onClick={()=>alert('test')} className={classes.card}>
                <Card  >
                <CardHeader
                    className={classes.contactHeader}
                    title="gMath" 
                    action={
                        <IconButton aria-label="launch-app">
                        <LaunchIcon />
                        </IconButton>
                    }
                /> 
                <CardContent>
                    <Typography variant="body2" color="textSecondary" component="p">
                    tiny math app created for my kid using React and Redux
                    </Typography>
                </CardContent>
                <CardActions disableSpacing>
                    {/* <IconButton aria-label="add to favorites">
                    <FavoriteIcon />
                    </IconButton>   */}
                </CardActions> 
                </Card>
            </div>
        </Grid>
      );
  }

  return (
    
    <Grid container 
        direction="row" 
        wrap="nowrap"
        className={classes.root}
        justify="center"
        alignItems="center"
    >
        {getProjectCard()}
        {getProjectCard()}
        {getProjectCard()}
    </Grid>       

  );
}
