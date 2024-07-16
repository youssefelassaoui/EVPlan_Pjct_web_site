import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { Link } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Col from "reactstrap/lib/Col";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://www.greenenergypark.ma/">
        https://www.greenenergypark.ma
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

export default function SignUp() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />

      <div className="position-relative">
        {/* shape Hero */}
        <section className="section section-lg section-shaped pb-250">
          <div className="shape  shape-login">
            <Col className="collapse-brand" xs="6">
              <Link to="/">
                <img
                  alt="..."
                  src={require("assets/img/theme/Logo.png")}
                  height="90px"
                  // className='naviconlogin'
                  // style={{backgroundColor: "aliceb"}}
                  // style={{ position: "absolute",
                  //   top: "-5px", /* Adjust the top position as needed */
                  //   left: "-255px" }}
                />
              </Link>
            </Col>
          </div>
          <Container
            component="main"
            maxWidth="xs"
            sx={{
              backgroundColor: "white",
              borderRadius: "16px",
              height: "17cm",
              boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)", // Adding shadow
            }}
          >
            {" "}
            <CssBaseline />
            <Box
              sx={{
                marginTop: "31px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Avatar sx={{ m: 1, bgcolor: "green" }}>
                <LockOutlinedIcon />
              </Avatar>
              <Typography component="h1" variant="h5">
                Sign up
              </Typography>
              <Box
                component="form"
                noValidate
                onSubmit={handleSubmit}
                sx={{ mt: 3 }}
              >
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      autoComplete="given-name"
                      name="firstName"
                      required
                      fullWidth
                      id="firstName"
                      label="First Name"
                      autoFocus
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      fullWidth
                      id="lastName"
                      label="Last Name"
                      name="lastName"
                      autoComplete="family-name"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      id="email"
                      label="Email Address"
                      name="email"
                      autoComplete="email"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      name="password"
                      label="Password"
                      type="password"
                      id="password"
                      autoComplete="new-password"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <FormControlLabel
                      control={
                        <Checkbox value="allowExtraEmails" color="primary" />
                      }
                      label="I want to receive inspiration, marketing promotions and updates via email."
                    />
                  </Grid>
                </Grid>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{
                    mt: 3,
                    mb: 2,
                    bgcolor: "#55a630",
                    color: "white", // Text color black
                    "&:hover": {
                      bgcolor: "rgba(255, 255, 255, 0.9)", // White with shadow on hover
                      boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.2)",
                      color: "black", // Shadow effect on hover
                    },
                  }}
                >
                  Sign Up
                </Button>

                <Grid container justifyContent="flex-end">
                  <Grid item>
                    <Link to="/Login-page" tag={Link} variant="body2">
                      Already have an account? Sign in
                    </Link>
                  </Grid>
                </Grid>
              </Box>
            </Box>
            <Copyright sx={{ mt: 5 }} />
          </Container>
        </section>
      </div>
    </ThemeProvider>
  );
}
