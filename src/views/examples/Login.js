import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
// import { Link } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import DemoNavbar from 'components/Navbars/DemoNavbar.js';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavbarBrand from 'reactstrap/lib/NavbarBrand';
import Col from 'reactstrap/lib/Col';
import { Link } from 'react-router-dom';

const defaultTheme = createTheme();
function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://www.greenenergypark.ma">
      https://www.greenenergypark.ma
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export default function Login() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (
    <ThemeProvider theme={defaultTheme} >
      <CssBaseline  />
     
      <div className="position-relative">
     
            {/* shape Hero */}
            <section className="section section-lg section-shaped pb-250">
              <div className="shape  shape-login" >
              <Col className="collapse-brand" xs="6"  >
                
              <a href="/">
          <img
            alt="..."
            src={require("assets/img/theme/Logo.png")}
            height="90px"
          />
        </a>
                

              </Col>
            
                
              </div>
              <Container
  component="main"
  maxWidth="xs"
  sx={{
    backgroundColor: 'white',
    borderRadius: "16px",
    height: "16cm",
    boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)" // Adding shadow
  }}
>        <Box
          sx={{
            marginTop: '31px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            className : "MuiBox-root css-ciyr5h"
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'green' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
           <Button
      type="submit"
      fullWidth
      variant="contained"
      sx={{
        mt: 3,
        mb: 2,
        bgcolor: '#55a630',
        color: 'white', // Text color black
        '&:hover': {
          bgcolor: 'rgba(255, 255, 255, 0.9)', // White with shadow on hover
          boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.2)',
          color: 'black' // Shadow effect on hover
        },
      }}
    >
      Sign In
    </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link to="/register-page" tag={Link} variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
      </section>
      </div>
    </ThemeProvider>
  );
}
