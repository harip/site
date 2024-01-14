// import React from 'react';
// import { Box, Typography, Paper, Link, makeStyles } from '@mui/material';

// const useStyles = makeStyles({
//   root: {
//     display: 'flex',
//     justifyContent: 'center',
//     alignItems: 'center',
//     height: '100vh',
//     padding: '20px',
//   },
//   sidebar: {
//     position: 'absolute',
//     left: '20px',
//   },
//   panel: {
//     width: '60%',
//     marginBottom: '20px',
//   },
//   header: {
//     borderBottom: '1px solid black',
//     padding: '10px',
//   },
//   content: {
//     borderBottom: '1px solid black',
//     padding: '10px',
//   },
// });

// const Experience: React.FC = () => {
//   const classes = useStyles();

//   const experiences = [
//     {
//       company: 'Company 1',
//       description: 'Description 1',
//     },
//     {
//       company: 'Company 2',
//       description: 'Description 2',
//     },
//     // add more experiences here
//   ];

//   return (
//     <Box className={classes.root}>
//       <Box className={classes.sidebar}>
//         <Link href="https://github.com/" target="_blank" rel="noopener">
//           GitHub
//         </Link>
//         <Link href="https://linkedin.com/" target="_blank" rel="noopener">
//           LinkedIn
//         </Link>
//       </Box>
//       {experiences.map((experience, index) => (
//         <Paper key={index} className={classes.panel}>
//           <Typography variant="h6" className={classes.header}>
//             {experience.company}
//           </Typography>
//           <Typography variant="body1" className={classes.content}>
//             {experience.description}
//           </Typography>
//         </Paper>
//       ))}
//     </Box>
//   );
// };

// export default Experience;

import React from 'react';
import { Box, Typography, Paper, Link } from '@mui/material';

const Experience: React.FC = () => {
  const experiences = [
    {
      company: 'Company 1',
      description: 'Description 1',
    },
    {
      company: 'Company 2',
      description: 'Description 2',
    },
    // add more experiences here
  ];

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        padding: '20px',
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          left: '20px',
        }}
      >
        <Link href="https://github.com/" target="_blank" rel="noopener">
          GitHub
        </Link>
        <Link href="https://linkedin.com/" target="_blank" rel="noopener">
          LinkedIn
        </Link>
      </Box>
      {experiences.map((experience, index) => (
        <Paper
          key={index}
          sx={{
            width: '60%',
            marginBottom: '20px',
          }}
        >
          <Typography
            variant="h6"
            sx={{
              borderBottom: '1px solid black',
              padding: '10px',
            }}
          >
            {experience.company}
          </Typography>
          <Typography
            variant="body1"
            sx={{
              borderBottom: '1px solid black',
              padding: '10px',
            }}
          >
            {experience.description}
          </Typography>
        </Paper>
      ))}
    </Box>
  );
};

export default Experience;