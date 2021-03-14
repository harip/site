
import { makeStyles } from '@material-ui/core/styles';

const useProjectStyles= makeStyles( (theme)=> ({
  root: {
    margin: 10,
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
    flexWrap: 'wrap',
    listStyle: 'none',
    padding: theme.spacing(0.5),
    background:  theme.palette.customBackground ? theme.palette.customBackground : theme.background
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
    backgroundColor: '#ffa602'
  },
    card: {
      marginRight: 5,
      marginBottom: 5
  },
  badge: {
    borderRadius: 5
  },
  projectsPage: { 
      background: '#fafafa'
  }
}));

export default useProjectStyles;