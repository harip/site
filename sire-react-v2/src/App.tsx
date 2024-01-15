import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import StarIcon from '@mui/icons-material/StarBorder';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import GlobalStyles from '@mui/material/GlobalStyles';
import Container from '@mui/material/Container';
import Distractions from './components/Distractions/Distractions';
import Experience from './components/Experience/Experience';

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function Pricing() {

  // Create state varaible to store which link is active
  const [activeLink, setActiveLink] = React.useState('Experience');

  // Create a function to return appropriate component based on activeLink
  const renderActiveLink = () => {
    if (activeLink === 'Experience') {
      return <Experience />;
    } else if (activeLink === 'Distractions') {
      return <Distractions />;
    } else {
      return <div>Invalid Link</div>;
    }
  };

  const renderContact = () => {
    // If active link is experience, render contact, else render nothing
    if (activeLink !== 'Experience') {
      return null;
    }
      
    return (
      <Box
        sx={{ 
          height: '100vh',
          padding: '20px',
          textAlign: 'left',
        }}
      >
        <Typography variant="h6" style={{ fontFamily: 'Indie Flower, cursive'  }}>
          Email: charanp@gmail.com
        </Typography>
        <Typography variant="h6" style={{ fontFamily: 'Indie Flower, cursive' }}>
          Code: 
          <Link 
            href="https://github.com/harip?tab=repositories" 
            target="_blank" 
            rel="noopener"
          >
            https://github.com/harip?tab=repositories
          </Link>
        </Typography>
      </Box>
    )
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles styles={{ ul: { margin: 0, padding: 0, listStyle: 'none' } }} />
      <CssBaseline />

      <AppBar
        position="static"
        color="default"
        elevation={0}
        sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}
      >
        <Toolbar sx={{ flexWrap: 'wrap' }}>
          <Typography variant="h6" color="inherit" noWrap sx={{ flexGrow: 1 }}>
            Hari
          </Typography>
          <nav>
            <Link
              variant="button"
              color="text.primary"
              href="#"
              sx={{ 
                my: 1, 
                mx: 1.5,
                color: activeLink === 'Experience' ? 'primary.main' : 'text.primary',
                textDecoration: activeLink === 'Experience' ? 'underline' : 'underline',
                backgroundColor: activeLink === 'Experience' ? 'rgba(0, 0, 0, 0.04)' : 'transparent',
                padding: activeLink === 'Experience' ? '0.5rem' : '0',
                borderRadius: activeLink === 'Experience' ? '4px' : '0',
              }}
              onClick={ ()=> setActiveLink('Experience') }
            >
              Work
            </Link>
            <Link
              variant="button"
              color="text.primary"
              href="#"
              sx={{ 
                my: 1, 
                mx: 1.5,
                color: activeLink === 'Distractions' ? 'primary.main' : 'text.primary',
                textDecoration: activeLink === 'Distractions' ? 'underline' : 'underline',
                backgroundColor: activeLink === 'Distractions' ? 'rgba(0, 0, 0, 0.04)' : 'transparent',
                padding: activeLink === 'Distractions' ? '0.5rem' : '0',
                borderRadius: activeLink === 'Distractions' ? '4px' : '0',
              }}
              onClick={ ()=> setActiveLink('Distractions') }
            >
              Distractions
            </Link>
          </nav>
        </Toolbar>
      </AppBar>


      {renderContact()} 

      <Container disableGutters maxWidth="sm" component="main" sx={{ pt: 8, pb: 6 }}>
        <Typography
          component="h1"
          variant="h2"
          align="center"
          color="text.primary"
          gutterBottom
        > 
          {renderActiveLink()}
        </Typography>
      </Container>

 
    </ThemeProvider>
  );
}