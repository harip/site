import { makeStyles } from '@material-ui/core/styles';

const useExperienceStyles= makeStyles( (theme)=> ({
  root: {
    margin: 10,
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
    flexWrap: 'wrap',
    listStyle: 'none',
    padding: theme.spacing(0.5),
    fontFamily: "monospace",
    background: '#fafafa'
  },
  paperStyle: {
      borderRadius: 0,
      marginRight: 10,
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