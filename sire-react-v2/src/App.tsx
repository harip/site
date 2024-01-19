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
import Home from './components/Home/Home';

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

const App: React.FC = () => {

  // Create state varaible to store which link is active
  const [activeLink, setActiveLink] = React.useState('Home');

  React.useEffect(() => {
    const activeLink = sessionStorage.getItem('activeLink');
    if (activeLink) {
      setActiveLink(activeLink);
    }
  }, []);

  const setSelectedLink = (link: string) => {
    setActiveLink(link);
    sessionStorage.setItem('activeLink', link);
  }

  // Create a function to return appropriate component based on activeLink
  const renderActiveLink = () => {
    if (activeLink === 'Experience') {
      return <Experience />;
    } else if (activeLink === 'Distractions') {
      return <Distractions />;
    } else if (activeLink === 'Home') {
      return <Home />;
    } else {
      return <div>Invalid Link</div>;
    }
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
          <nav>
          <Link
              variant="button"
              color="text.primary"
              href="#"
              sx={{ 
                my: 1, 
                mx: 1.5,
                color: activeLink === 'Home' ? 'primary.main' : 'text.primary',
                textDecoration: activeLink === 'Home' ? 'underline' : 'underline',
                backgroundColor: activeLink === 'Home' ? 'rgba(0, 0, 0, 0.04)' : 'transparent',
                padding: activeLink === 'Home' ? '0.5rem' : '0',
                borderRadius: activeLink === 'Home' ? '4px' : '0',
              }}
              onClick={ ()=> setSelectedLink('Home') }
            >
              Home
            </Link>

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
              onClick={ ()=> {} }
            >
              
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
              onClick={ ()=> setSelectedLink('Distractions') }
            >
              Work
            </Link>
          </nav>
        </Toolbar>
      </AppBar>

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

export default App;