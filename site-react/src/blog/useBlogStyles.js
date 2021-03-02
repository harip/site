import { makeStyles } from '@material-ui/core/styles'; 

const blogStyles= makeStyles( (theme)=> ({  
  card: {
    marginRight: 5,
    marginBottom: 5
  },
  post: {
    marginTop: 30
  },
  root: {
    margin: 10,
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
    flexWrap: 'wrap',
    listStyle: 'none',
    padding: theme.spacing(0.5)  
  },

  // Add New Blog Post button styling
  fabAddBlog: {
    marginTop: 10,
    position: 'fixed', 
    marginLeft: 'auto',  
    zIndex: 999
  },

  // Blog post header
  contactHeader: {
    fontSize: 20,
    borderBottom: 2,
    background: '#ffa602'
  }, 

  cardActions: {
    borderTop: 'solid 1px #f9f5ee'
  },

  // Pencil and Save Icon container
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

export default blogStyles;