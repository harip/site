import makeStyles from '@mui/styles/makeStyles';

const useExperienceStyles= makeStyles( (theme)=> ({
  root: { 
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
    flexWrap: 'wrap',
    listStyle: 'none',
    padding: theme.spacing(2),
    fontFamily: "monospace" 
  },
  paperStyle: {
      borderRadius: 0, 
  },
  header : {
    background: '#ffa602',
    textAlign: 'left',
    padding: 6,
    fontSize: 16
  },
  contentSpacing: {
    padding: 10
  },

  // Individual Project Header
  prjHeader: {
    textDecoration: "underline",
    fontWeight: "bold",
    fontSize: "large"
  }
}));

export  default useExperienceStyles;